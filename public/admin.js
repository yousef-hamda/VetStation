const loginForm = document.querySelector('#login-form');
const loginMessage = document.querySelector('#login-message');
const inboxMessage = document.querySelector('#inbox-message');
const inboxPanel = document.querySelector('#inbox-panel');
const loginPanel = document.querySelector('#login-panel');
const tbody = document.querySelector('#inquiries');
const logout = document.querySelector('#logout');
let auth = sessionStorage.getItem('vetstation-inbox-auth');

function encodeBasic(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return `Basic ${btoa(binary)}`;
}

async function api(path, options = {}) {
  const response = await fetch(path, { ...options, headers: { Authorization: auth ?? '', 'Content-Type': 'application/json', ...options.headers } });
  if (response.status === 401) throw new Error('Sign-in failed. Check the owner username and password.');
  const data = await response.json();
  if (!response.ok) throw new Error(data.error ?? 'The request failed.');
  return data;
}

function cell(row, label, value, className = '') {
  const td = document.createElement('td');
  td.dataset.label = label;
  if (className) td.className = className;
  td.textContent = value;
  row.append(td);
  return td;
}

function addInquiry(item) {
  const row = document.createElement('tr');
  row.dataset.id = item.id;
  cell(row, 'Received', new Date(item.created_at).toLocaleString());
  const customer = document.createElement('td');
  customer.dataset.label = 'Customer';
  const name = document.createElement('strong');
  name.textContent = item.customer_name;
  const phone = document.createElement('a');
  phone.href = `tel:${item.phone.replace(/[^+0-9]/g, '')}`;
  phone.textContent = item.phone;
  const lang = document.createElement('span');
  lang.className = 'muted';
  lang.textContent = ` · ${item.language.toUpperCase()}`;
  customer.append(name, document.createElement('br'), phone, lang);
  row.append(customer);
  cell(row, 'Pet', `${item.pet_name} · ${item.pet_type}`);
  cell(row, 'Area & service', `${item.area} · ${item.service}`);
  cell(row, 'Request', item.message, 'message-cell');
  const statusCell = document.createElement('td');
  statusCell.dataset.label = 'Status';
  const status = document.createElement('select');
  status.setAttribute('aria-label', `Status for ${item.customer_name}`);
  for (const [value, label] of [['new', 'New'], ['contacted', 'Contacted'], ['closed', 'Closed']]) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    option.selected = item.status === value;
    status.append(option);
  }
  statusCell.append(status);
  row.append(statusCell);
  const actions = document.createElement('td');
  actions.dataset.label = 'Actions';
  const save = document.createElement('button');
  save.type = 'button';
  save.textContent = 'Save';
  save.addEventListener('click', async () => {
    try { await api(`/api/admin/inquiries/${item.id}`, { method: 'PATCH', body: JSON.stringify({ status: status.value }) }); inboxMessage.textContent = 'Status saved.'; }
    catch (error) { inboxMessage.textContent = error.message; }
  });
  const remove = document.createElement('button');
  remove.type = 'button';
  remove.className = 'secondary';
  remove.textContent = 'Delete';
  remove.addEventListener('click', async () => {
    if (!window.confirm(`Delete the request from ${item.customer_name}? This cannot be undone.`)) return;
    try { await api(`/api/admin/inquiries/${item.id}`, { method: 'DELETE' }); row.remove(); inboxMessage.textContent = 'Request deleted.'; }
    catch (error) { inboxMessage.textContent = error.message; }
  });
  actions.append(save, document.createTextNode(' '), remove);
  row.append(actions);
  return row;
}

async function loadInquiries() {
  const filter = document.querySelector('#status-filter').value;
  const suffix = filter === 'all' ? '' : `?status=${encodeURIComponent(filter)}`;
  try {
    const data = await api(`/api/admin/inquiries${suffix}`);
    tbody.replaceChildren(...data.inquiries.map(addInquiry));
    inboxMessage.textContent = data.inquiries.length ? `${data.inquiries.length} request(s).` : 'No requests in this view.';
    loginPanel.hidden = true;
    inboxPanel.hidden = false;
    logout.hidden = false;
  } catch (error) {
    inboxPanel.hidden = true;
    loginPanel.hidden = false;
    logout.hidden = true;
    loginMessage.textContent = error.message;
    sessionStorage.removeItem('vetstation-inbox-auth');
    auth = null;
  }
}

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(loginForm);
  auth = encodeBasic(`${data.get('username')}:${data.get('password')}`);
  sessionStorage.setItem('vetstation-inbox-auth', auth);
  loginMessage.textContent = 'Checking access…';
  await loadInquiries();
});
document.querySelector('#filter-form').addEventListener('submit', (event) => { event.preventDefault(); void loadInquiries(); });
logout.addEventListener('click', () => { sessionStorage.removeItem('vetstation-inbox-auth'); auth = null; tbody.replaceChildren(); inboxPanel.hidden = true; loginPanel.hidden = false; logout.hidden = true; loginForm.reset(); });
if (auth) void loadInquiries();
