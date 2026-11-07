# VetStation

A responsive, three-language website for Dr. Hakam Abu Hwaij’s veterinary home visits. Hebrew is the default; Arabic and English are available in the header. The site is built with Vite, TypeScript, and CSS.

The homepage explains home visits and services, introduces Dr. Hakam, shows the supplied car illustration, answers common questions, and links directly to the phone, email, and Instagram. The contact form saves inquiries in PostgreSQL; Redis limits repeated submissions. The private owner inbox is at `/admin`. An inquiry does not confirm an appointment or provide emergency care. The doctor film starts when it comes into view and uses the five selected photos in a smooth 60 fps sequence. The hero clinic footage is unchanged.

## Run locally

```bash
npm install --legacy-peer-deps
npm run dev
```

Open the URL printed by Vite, normally `http://127.0.0.1:5173/`.
The development server previews the design. To run the form locally, provide PostgreSQL and Redis URLs and a 32+ character owner password (see `.env.example`), run `npm run build`, then `node server/index.mjs`.

## Verify

```bash
npm test
npm run lint
npm run build
npm run preview
```

The browser checks and screenshots are recorded in [homepage QA](docs/homepage-qa.md) and `output/playwright/`.

## Production

The Dockerfile builds the site and runs the Node server. Set `DATABASE_URL`, `REDIS_URL`, `INQUIRY_ADMIN_USER`, and `INQUIRY_ADMIN_PASSWORD` as Railway service variables. The server creates the inquiries table at startup and removes inquiries after `INQUIRY_RETENTION_DAYS` (default 90). Check `/api/health` for database and Redis connectivity. The owner inbox can read, update, and delete inquiries. Keep its password private.

## Release review

Confirm the operator/business identity, Dr. Hakam’s licence and experience statement, permission to publish the supplied photos/logo/car artwork, and local veterinary advertising and privacy requirements. See [launch legal review](docs/launch-legal-review.md) and [asset provenance](docs/asset-provenance.md).

Project working instructions are in [AGENTS.md](AGENTS.md); durable requirements are in [project memory](docs/project-memory.md).
