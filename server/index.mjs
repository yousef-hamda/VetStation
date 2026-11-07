import { createHash, randomUUID, timingSafeEqual } from 'node:crypto';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, resolve, sep } from 'node:path';
import pg from 'pg';
import { createClient } from 'redis';

const { Pool } = pg;
const port = Number(process.env.PORT ?? 3000);
const retentionDays = Number(process.env.INQUIRY_RETENTION_DAYS ?? 90);
const adminUser = process.env.INQUIRY_ADMIN_USER;
const adminPassword = process.env.INQUIRY_ADMIN_PASSWORD;

if (!process.env.DATABASE_URL || !process.env.REDIS_URL) throw new Error('DATABASE_URL and REDIS_URL are required.');
if (!adminUser || !adminPassword || adminPassword.length < 32) throw new Error('Set an owner inbox username and a random password of at least 32 characters.');
if (!Number.isInteger(retentionDays) || retentionDays < 1 || retentionDays > 365) throw new Error('INQUIRY_RETENTION_DAYS must be between 1 and 365.');

const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 5, idleTimeoutMillis: 30_000, connectionTimeoutMillis: 8_000 });
const redis = createClient({ url: process.env.REDIS_URL, socket: { connectTimeout: 8_000, reconnectStrategy: (retries) => Math.min(retries * 250, 3_000) } });
redis.on('error', (error) => console.error('Redis connection error:', error.message));

await redis.connect();
await pool.query(`
  CREATE TABLE IF NOT EXISTS inquiries (
    id UUID PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    phone VARCHAR(32) NOT NULL,
    pet_name VARCHAR(100) NOT NULL,
    pet_type VARCHAR(12) NOT NULL CHECK (pet_type IN ('dog', 'cat', 'other')),
    area VARCHAR(120) NOT NULL,
    service VARCHAR(20) NOT NULL CHECK (service IN ('grooming', 'vaccinations', 'medical', 'other')),
    message VARCHAR(1000) NOT NULL,
    language VARCHAR(2) NOT NULL CHECK (language IN ('he', 'ar', 'en')),
    status VARCHAR(12) NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
    consent_at TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )
`);

async function purgeOldInquiries() {
  await pool.query('DELETE FROM inquiries WHERE created_at < NOW() - ($1 * INTERVAL \'1 day\')', [retentionDays]);
}
await purgeOldInquiries();
setInterval(() => { void purgeOldInquiries().catch((error) => console.error('Inquiry retention cleanup failed:', error.message)); }, 24 * 60 * 60 * 1000).unref();

const distRoot = resolve('dist');
const mimeTypes = { '.css': 'text/css; charset=utf-8', '.html': 'text/html; charset=utf-8', '.ico': 'image/x-icon', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.mp4': 'video/mp4', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.woff': 'font/woff', '.woff2': 'font/woff2' };

function json(res, status, value) {
  const body = JSON.stringify(value);
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(body), 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
  res.end(body);
}

function cleanString(value, max) {
  return typeof value === 'string' ? value.normalize('NFKC').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max) : '';
}

async function readJson(req, maxBytes = 8_192) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > maxBytes) throw Object.assign(new Error('Request is too large.'), { status: 413 });
    chunks.push(chunk);
  }
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8')); }
  catch { throw Object.assign(new Error('Invalid request body.'), { status: 400 }); }
}

function authorized(req) {
  const match = /^Basic\s+([A-Za-z0-9+/=]+)$/i.exec(req.headers.authorization ?? '');
  if (!match) return false;
  let credentials;
  try { credentials = Buffer.from(match[1], 'base64').toString('utf8'); } catch { return false; }
  const splitAt = credentials.indexOf(':');
  if (splitAt < 0) return false;
  const userHash = createHash('sha256').update(credentials.slice(0, splitAt)).digest();
  const passHash = createHash('sha256').update(credentials.slice(splitAt + 1)).digest();
  const expectedUserHash = createHash('sha256').update(adminUser).digest();
  const expectedPassHash = createHash('sha256').update(adminPassword).digest();
  return timingSafeEqual(userHash, expectedUserHash) && timingSafeEqual(passHash, expectedPassHash);
}

function challenge(res) {
  res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="VetStation owner inbox", charset="UTF-8"', 'Cache-Control': 'no-store' });
  res.end('Authentication required.');
}

async function rateLimit(req) {
  const forwarded = req.headers['cf-connecting-ip'] ?? req.headers['x-forwarded-for'] ?? req.socket.remoteAddress ?? 'unknown';
  const ip = String(forwarded).split(',')[0].trim();
  const digest = createHash('sha256').update(ip).digest('hex');
  const key = `vetstation:inquiry-rate:${digest}`;
  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, 900);
  return count <= 5;
}

async function handleApi(req, res, url) {
  if (req.method === 'GET' && url.pathname === '/api/health') {
    try {
      await pool.query('SELECT 1');
      if (!redis.isReady || await redis.ping() !== 'PONG') throw new Error('Redis unavailable');
      return json(res, 200, { status: 'ok', database: 'connected', cache: 'connected' });
    } catch {
      return json(res, 503, { status: 'unavailable' });
    }
  }

  if (req.method === 'POST' && url.pathname === '/api/inquiries') {
    const contentType = req.headers['content-type'] ?? '';
    if (!contentType.toLowerCase().includes('application/json')) return json(res, 415, { error: 'Use the website form to send your request.' });
    const body = await readJson(req);
    if (cleanString(body.website, 200)) return json(res, 202, { ok: true });
    if (!await rateLimit(req)) return json(res, 429, { error: 'Too many requests. Please call VetStation directly.' });

    const inquiry = {
      id: randomUUID(),
      name: cleanString(body.name, 100),
      phone: cleanString(body.phone, 32),
      petName: cleanString(body.petName, 100),
      petType: cleanString(body.petType, 12),
      area: cleanString(body.area, 120),
      service: cleanString(body.service, 20),
      message: cleanString(body.message, 1000),
      language: cleanString(body.language, 2),
    };
    if (inquiry.name.length < 2 || !/^\+?[0-9 ()-]{7,24}$/.test(inquiry.phone) || inquiry.petName.length < 1 || !['dog', 'cat', 'other'].includes(inquiry.petType) || inquiry.area.length < 2 || !['grooming', 'vaccinations', 'medical', 'other'].includes(inquiry.service) || inquiry.message.length < 3 || !['he', 'ar', 'en'].includes(inquiry.language) || body.consent !== true) {
      return json(res, 422, { error: 'Please check the required fields and privacy consent.' });
    }
    const query = `INSERT INTO inquiries (id, customer_name, phone, pet_name, pet_type, area, service, message, language, consent_at)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,NOW()) RETURNING id, created_at`;
    const saved = await pool.query(query, [inquiry.id, inquiry.name, inquiry.phone, inquiry.petName, inquiry.petType, inquiry.area, inquiry.service, inquiry.message, inquiry.language]);
    return json(res, 201, { ok: true, id: saved.rows[0].id, createdAt: saved.rows[0].created_at });
  }

  if (url.pathname.startsWith('/api/admin/')) {
    if (!authorized(req)) return challenge(res);
    if (req.method === 'GET' && url.pathname === '/api/admin/inquiries') {
      const status = url.searchParams.get('status');
      const conditions = ['new', 'contacted', 'closed'].includes(status) ? 'WHERE status = $1' : '';
      const params = conditions ? [status] : [];
      const result = await pool.query(`SELECT id, customer_name, phone, pet_name, pet_type, area, service, message, language, status, created_at FROM inquiries ${conditions} ORDER BY created_at DESC LIMIT 200`, params);
      return json(res, 200, { inquiries: result.rows });
    }
    const route = /^\/api\/admin\/inquiries\/([0-9a-f-]{36})$/.exec(url.pathname);
    if (route && req.method === 'PATCH') {
      const body = await readJson(req, 1_024);
      if (!['new', 'contacted', 'closed'].includes(body.status)) return json(res, 422, { error: 'Invalid inquiry status.' });
      const result = await pool.query('UPDATE inquiries SET status=$2, updated_at=NOW() WHERE id=$1 RETURNING id, status', [route[1], body.status]);
      return result.rowCount ? json(res, 200, result.rows[0]) : json(res, 404, { error: 'Inquiry not found.' });
    }
    if (route && req.method === 'DELETE') {
      const result = await pool.query('DELETE FROM inquiries WHERE id=$1 RETURNING id', [route[1]]);
      return result.rowCount ? json(res, 200, { deleted: true }) : json(res, 404, { error: 'Inquiry not found.' });
    }
    return json(res, 404, { error: 'Not found.' });
  }
  return json(res, 404, { error: 'Not found.' });
}

function serveStatic(req, res, url) {
  if (req.method !== 'GET' && req.method !== 'HEAD') return json(res, 405, { error: 'Method not allowed.' });
  const rel = url.pathname === '/' ? 'index.html' : url.pathname === '/admin' || url.pathname === '/admin/' ? 'admin.html' : decodeURIComponent(url.pathname).replace(/^\/+/, '');
  if (rel.split('/').some((part) => part.startsWith('.'))) return json(res, 404, { error: 'Not found.' });
  const file = resolve(distRoot, rel);
  if (!file.startsWith(`${distRoot}${sep}`) || !existsSync(file) || !statSync(file).isFile()) return json(res, 404, { error: 'Not found.' });
  const stat = statSync(file);
  const type = mimeTypes[extname(file).toLowerCase()] ?? 'application/octet-stream';
  const cache = file.endsWith('index.html') || file.endsWith('admin.html') ? 'no-cache' : 'public, max-age=86400';
  res.writeHead(200, { 'Content-Type': type, 'Content-Length': stat.size, 'Cache-Control': cache, 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'strict-origin-when-cross-origin' });
  if (req.method === 'HEAD') return res.end();
  createReadStream(file).pipe(res);
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? '/', `http://${req.headers.host ?? 'localhost'}`);
    if (url.pathname.startsWith('/api/')) return await handleApi(req, res, url);
    return serveStatic(req, res, url);
  } catch (error) {
    const status = Number(error?.status) || 500;
    if (status >= 500) console.error('Request failed:', error?.message ?? 'unknown error');
    if (!res.headersSent) json(res, status, { error: status >= 500 ? 'The request could not be saved. Please call VetStation.' : error.message });
    else res.destroy();
  }
});

server.listen(port, '0.0.0.0', () => console.log(`VetStation listening on ${port}; Postgres and Redis connected.`));

async function shutdown() {
  server.close();
  await Promise.allSettled([pool.end(), redis.quit()]);
  process.exit(0);
}
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
