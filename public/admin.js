const copy = {
  en: { subtitle:'Owner workspace', language:'Language', logout:'Log out', private:'PRIVATE ACCESS', signIn:'Owner sign in', signInHint:'Use the credentials stored in the VetStation Railway service.', username:'Username', password:'Password', open:'Open workspace', checking:'Checking access…', denied:'Sign-in failed. Check the owner username and password.', title:'Visit requests', eyebrow:'VETSTATION · PRIVATE', description:'Review requests, contact owners, and plan follow-up.', requests:'Requests', refresh:'Refresh', export:'Export CSV', search:'Search requests', searchHint:'Name, phone, pet, area or message', status:'Status', all:'All', new:'New', contacted:'Contacted', closed:'Closed', due:'Follow-up due', noRequests:'No requests match this view.', count:'requests', page:'Page', previous:'Previous', next:'Next', updated:'Updated', received:'Received', pet:'Pet', area:'Area', service:'Service', languageCode:'Language', call:'Call owner', whatsapp:'WhatsApp', copyPhone:'Copy number', copied:'Number copied.', copyFailed:'Could not copy number.', note:'Private note', noteHint:'Next steps, preferred time or details for your team', followUp:'Follow-up date', save:'Save changes', saved:'Changes saved.', saving:'Saving…', delete:'Delete', deleteConfirm:'Permanently delete this request?', deleted:'Request deleted.', loading:'Loading requests…', failed:'Could not load requests. Try Refresh.', exportFailed:'Could not export requests.', synced:'Last refreshed', help:'Working through requests', steps:['Call or message the owner to confirm details and availability.','Mark Contacted and add a private note or follow-up date.','Mark Closed when the request is complete.'], retention:'Requests are automatically removed after 90 days. Export a CSV first if you need a business record.', privacy:'Keep private notes here. Do not use this inbox for emergency care.', general:'General', grooming:'Grooming', vaccinations:'Vaccinations', medical:'Medical care', dog:'Dog', cat:'Cat', other:'Other' },
  he: { subtitle:'סביבת ניהול', language:'שפה', logout:'התנתקות', private:'גישה פרטית', signIn:'כניסה למנהל', signInHint:'השתמשו בפרטי הכניסה השמורים בשירות VetStation ב־Railway.', username:'שם משתמש', password:'סיסמה', open:'פתיחת סביבת הניהול', checking:'בודקים גישה…', denied:'הכניסה נכשלה. בדקו שם משתמש וסיסמה.', title:'פניות לביקורי בית', eyebrow:'VETSTATION · פרטי', description:'בדקו פניות, צרו קשר ותכננו מעקב.', requests:'פניות', refresh:'רענון', export:'ייצוא CSV', search:'חיפוש פניות', searchHint:'שם, טלפון, חיית מחמד, אזור או הודעה', status:'סטטוס', all:'הכול', new:'חדשה', contacted:'נוצר קשר', closed:'סגורה', due:'מעקב להיום', noRequests:'אין פניות המתאימות לתצוגה.', count:'פניות', page:'עמוד', previous:'הקודם', next:'הבא', updated:'עודכן', received:'התקבל', pet:'חיית מחמד', area:'אזור', service:'שירות', languageCode:'שפה', call:'התקשרו', whatsapp:'וואטסאפ', copyPhone:'העתקת מספר', copied:'המספר הועתק.', copyFailed:'לא ניתן להעתיק את המספר.', note:'הערה פנימית', noteHint:'צעדים הבאים, זמן מועדף או מידע לצוות', followUp:'תאריך מעקב', save:'שמירת שינויים', saved:'השינויים נשמרו.', saving:'שומרים…', delete:'מחיקה', deleteConfirm:'למחוק את הפנייה לצמיתות?', deleted:'הפנייה נמחקה.', loading:'טוענים פניות…', failed:'לא ניתן לטעון פניות. נסו לרענן.', exportFailed:'לא ניתן לייצא פניות.', synced:'רענון אחרון', help:'איך לטפל בפניות', steps:['התקשרו או שלחו הודעה לבעלים כדי לאשר פרטים וזמינות.','סמנו שנוצר קשר, והוסיפו הערה פנימית או תאריך מעקב.','סמנו סגור כשהטיפול בפנייה הושלם.'], retention:'הפניות נמחקות אוטומטית לאחר 90 יום. ייצאו קובץ CSV לפני כן אם דרוש תיעוד עסקי.', privacy:'שמרו כאן הערות פנימיות. אין להשתמש בתיבה למקרי חירום.', general:'כללי', grooming:'טיפוח', vaccinations:'חיסונים', medical:'טיפול רפואי', dog:'כלב', cat:'חתול', other:'אחר' },
  ar: { subtitle:'لوحة الإدارة', language:'اللغة', logout:'تسجيل الخروج', private:'دخول خاص', signIn:'دخول المسؤول', signInHint:'استخدم بيانات الدخول المحفوظة في خدمة VetStation على Railway.', username:'اسم المستخدم', password:'كلمة المرور', open:'فتح لوحة الإدارة', checking:'جارٍ التحقق…', denied:'فشل الدخول. تحقق من اسم المستخدم وكلمة المرور.', title:'طلبات الزيارات المنزلية', eyebrow:'VETSTATION · خاص', description:'راجع الطلبات وتواصل مع أصحاب الحيوانات وخطط للمتابعة.', requests:'الطلبات', refresh:'تحديث', export:'تصدير CSV', search:'بحث في الطلبات', searchHint:'الاسم أو الهاتف أو الحيوان أو المنطقة أو الرسالة', status:'الحالة', all:'الكل', new:'جديد', contacted:'تم التواصل', closed:'مغلق', due:'متابعة مستحقة', noRequests:'لا توجد طلبات تطابق هذا العرض.', count:'طلبات', page:'صفحة', previous:'السابق', next:'التالي', updated:'تم التحديث', received:'وصل في', pet:'الحيوان', area:'المنطقة', service:'الخدمة', languageCode:'اللغة', call:'اتصل بالمالك', whatsapp:'واتساب', copyPhone:'نسخ الرقم', copied:'تم نسخ الرقم.', copyFailed:'تعذر نسخ الرقم.', note:'ملاحظة خاصة', noteHint:'الخطوات القادمة أو الوقت المفضل أو تفاصيل للفريق', followUp:'تاريخ المتابعة', save:'حفظ التغييرات', saved:'تم حفظ التغييرات.', saving:'جارٍ الحفظ…', delete:'حذف', deleteConfirm:'هل تريد حذف هذا الطلب نهائياً؟', deleted:'تم حذف الطلب.', loading:'جارٍ تحميل الطلبات…', failed:'تعذر تحميل الطلبات. حاول التحديث.', exportFailed:'تعذر تصدير الطلبات.', synced:'آخر تحديث', help:'طريقة معالجة الطلبات', steps:['اتصل بالمالك أو راسله لتأكيد التفاصيل والتوفر.','ضع علامة تم التواصل وأضف ملاحظة خاصة أو تاريخ متابعة.','أغلق الطلب عند اكتمال معالجته.'], retention:'تُحذف الطلبات تلقائياً بعد 90 يوماً. صدّر ملف CSV قبل ذلك إذا احتجت إلى سجل عمل.', privacy:'احتفظ بالملاحظات الخاصة هنا. لا تستخدم هذه اللوحة لحالات الطوارئ.', general:'عام', grooming:'عناية بالشعر', vaccinations:'تطعيمات', medical:'رعاية طبية', dog:'كلب', cat:'قط', other:'آخر' }
};
const $ = (selector) => document.querySelector(selector);
const language = $('#admin-language');
let locale = localStorage.getItem('vetstation-language');
if (!copy[locale]) locale = 'he';
let auth = sessionStorage.getItem('vetstation-inbox-auth');
let page = 0;
let latest = null;
let requestVersion = 0;
let searchTimer;
function t(key) { return copy[locale][key]; }
function make(tag, className, value) { const node = document.createElement(tag); if (className) node.className = className; if (value !== undefined) node.textContent = value; return node; }
function setMessage(text, target = '#inbox-message') { $(target).textContent = text; }
function dateTime(value) { return new Intl.DateTimeFormat(locale === 'he' ? 'he-IL' : locale === 'ar' ? 'ar' : 'en', { dateStyle:'medium', timeStyle:'short' }).format(new Date(value)); }
function basic(value) { const bytes = new TextEncoder().encode(value); let raw = ''; for (const byte of bytes) raw += String.fromCharCode(byte); return `Basic ${btoa(raw)}`; }
function clearAuth() { auth = null; sessionStorage.removeItem('vetstation-inbox-auth'); $('#inbox-panel').hidden = true; $('#login-panel').hidden = false; $('#logout').hidden = true; $('#login-form').reset(); }
async function api(path, options = {}) {
  const response = await fetch(path, { ...options, cache:'no-store', headers:{ Authorization:auth ?? '', ...options.headers } });
  if (response.status === 401) { clearAuth(); throw new Error(t('denied')); }
  const contentType = response.headers.get('content-type') ?? '';
  const data = contentType.includes('application/json') ? await response.json() : response;
  if (!response.ok) throw new Error(data.error ?? t('failed'));
  return data;
}
function translate() {
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === 'en' ? 'ltr' : 'rtl';
  language.value = locale;
  const ids = { 'brand-subtitle':'subtitle','language-label':'language','logout':'logout','login-eyebrow':'private','login-title':'signIn','login-description':'signInHint','username-label':'username','password-label':'password','login-button':'open','workspace-eyebrow':'eyebrow','workspace-title':'title','workspace-description':'description','requests-title':'requests','refresh':'refresh','export':'export','search-label':'search','filter-label':'status','previous':'previous','next':'next','help-title':'help','retention-note':'retention','privacy-note':'privacy' };
  for (const [id,key] of Object.entries(ids)) document.getElementById(id).textContent = t(key);
  $('#search').placeholder = t('searchHint');
  for (const option of $('#status-filter').options) option.textContent = t(option.value);
  $('#help-steps').replaceChildren(...t('steps').map((step) => make('li','',step)));
  if (latest) renderData(latest);
}
function statusName(value) { return t(value) ?? value; }
function phoneNumber(value) { const digits = value.replace(/\D/g,''); return digits.startsWith('0') ? `972${digits.slice(1)}` : digits; }
function renderStats(summary) {
  const items = [['total','all'],['new','new'],['contacted','contacted'],['closed','closed'],['due','due']];
  $('#stats').replaceChildren(...items.map(([countKey,labelKey]) => {
    const button = make('button','stat'); button.type='button'; button.setAttribute('aria-pressed',String($('#status-filter').value === labelKey));
    button.append(make('span','',t(labelKey)),make('strong','',String(summary[countKey] ?? 0)));
    button.addEventListener('click',() => { $('#status-filter').value = labelKey; page = 0; void load(); });
    return button;
  }));
}
function renderCard(item) {
  const card = make('article','request-card'); card.dataset.id = item.id;
  const head = make('div','request-head'); const identity = make('div'); identity.append(make('h3','',item.customer_name)); const time = make('time','',`${t('received')}: ${dateTime(item.created_at)}`); time.dateTime = item.created_at; identity.append(time);
  const badges = make('div','badges');
  const badge = make('span',`badge ${item.status}`,statusName(item.status)); badges.append(badge);
  if (item.follow_up_at && item.follow_up_at.slice(0,10) <= new Date().toISOString().slice(0,10) && item.status !== 'closed') badges.append(make('span','badge due',t('due')));
  head.append(identity,badges); card.append(head);
  const meta = make('div','request-meta'); meta.append(make('span','',`${t('pet')}: ${item.pet_name} · ${statusName(item.pet_type)}`),make('span','',`${t('area')}: ${item.area}`),make('span','',`${t('service')}: ${statusName(item.service)}`),make('span','',`${t('languageCode')}: ${item.language.toUpperCase()}`)); if(item.follow_up_at) meta.append(make('span','',`${t('followUp')}: ${item.follow_up_at.slice(0,10)}`)); card.append(meta);
  card.append(make('p','request-message',item.message));
  const contacts = make('div','contact-actions');
  const call = make('a','',`${t('call')} · ${item.phone}`); call.href = `tel:${item.phone.replace(/[^+0-9]/g,'')}`;
  const whatsapp = make('a','',t('whatsapp')); whatsapp.href = `https://wa.me/${phoneNumber(item.phone)}`; whatsapp.target='_blank'; whatsapp.rel='noopener noreferrer'; whatsapp.setAttribute('aria-label',`${t('whatsapp')} · ${item.phone}`);
  const phoneCopy = make('button','',t('copyPhone')); phoneCopy.type='button'; phoneCopy.addEventListener('click',async()=>{ try { await navigator.clipboard.writeText(item.phone); setMessage(t('copied')); } catch { setMessage(t('copyFailed')); } });
  contacts.append(call,whatsapp,phoneCopy); card.append(contacts);
  const editor = make('div','editor');
  const statusLabel = make('label','',t('status')); const status = make('select'); status.setAttribute('aria-label',`${t('status')}: ${item.customer_name}`); for (const value of ['new','contacted','closed']) { const option = make('option','',statusName(value)); option.value=value; status.append(option); } status.value=item.status; statusLabel.append(status);
  const dateLabel=make('label','',t('followUp')); const followUp=make('input'); followUp.type='date'; followUp.value=item.follow_up_at ? item.follow_up_at.slice(0,10) : ''; dateLabel.append(followUp);
  const noteLabel=make('label','',t('note')); const note=make('textarea'); note.maxLength=1000; note.rows=3; note.placeholder=t('noteHint'); note.value=item.internal_note ?? ''; noteLabel.append(note);
  const actions=make('div','edit-actions'); const save=make('button','primary',t('save')); save.type='button'; const feedback=make('span','save-feedback'); const remove=make('button','danger',t('delete')); remove.type='button';
  save.addEventListener('click',async()=>{ save.disabled=true; feedback.textContent=t('saving'); try { await api(`/api/admin/inquiries/${item.id}`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({status:status.value,internalNote:note.value,followUpAt:followUp.value})}); feedback.textContent=t('saved'); badge.textContent=statusName(status.value); badge.className=`badge ${status.value}`; void load(); } catch(error){ feedback.textContent=error.message; } finally { save.disabled=false; } });
  remove.addEventListener('click',async()=>{ if (!confirm(`${t('deleteConfirm')} ${item.customer_name}`)) return; remove.disabled=true; try { await api(`/api/admin/inquiries/${item.id}`,{method:'DELETE'}); setMessage(t('deleted')); void load(); } catch(error){ feedback.textContent=error.message; remove.disabled=false; } });
  actions.append(save,feedback,remove); editor.append(statusLabel,dateLabel,noteLabel,actions); card.append(editor); return card;
}
function renderData(data) {
  renderStats(data.summary);
  $('#result-count').textContent = `${data.total} ${t('count')}`;
  $('#inquiries').replaceChildren(...(data.inquiries.length ? data.inquiries.map(renderCard) : [make('div','empty',t('noRequests'))]));
  $('#page-label').textContent = `${t('page')} ${data.page + 1} / ${Math.max(1,Math.ceil(data.total/data.pageSize))}`;
  $('#previous').disabled=data.page===0; $('#next').disabled=!data.hasMore;
  $('#sync-time').textContent = `${t('synced')}: ${dateTime(new Date().toISOString())}`;
}
async function load() {
  const version=++requestVersion;
  const params=new URLSearchParams({ status:$('#status-filter').value, q:$('#search').value.trim(), page:String(page) });
  setMessage(t('loading'));
  try { const data=await api(`/api/admin/inquiries?${params}`); if (version!==requestVersion) return; latest=data; renderData(data); $('#login-panel').hidden=true; $('#inbox-panel').hidden=false; $('#logout').hidden=false; setMessage(''); }
  catch(error){ if (version!==requestVersion) return; if (auth) setMessage(error.message); else setMessage(error.message,'#login-message'); }
}
$('#login-form').addEventListener('submit',(event)=>{ event.preventDefault(); const data=new FormData(event.currentTarget); auth=basic(`${data.get('username')}:${data.get('password')}`); sessionStorage.setItem('vetstation-inbox-auth',auth); setMessage(t('checking'),'#login-message'); void load(); });
$('#logout').addEventListener('click',()=>{ clearAuth(); latest=null; $('#inquiries').replaceChildren(); });
language.addEventListener('change',()=>{ locale=language.value; localStorage.setItem('vetstation-language',locale); translate(); });
$('#refresh').addEventListener('click',()=>{ void load(); });
$('#status-filter').addEventListener('change',()=>{ page=0; void load(); });
$('#search').addEventListener('input',()=>{ clearTimeout(searchTimer); searchTimer=setTimeout(()=>{page=0;void load();},250); });
$('#previous').addEventListener('click',()=>{ if(page>0){page--;void load();} });
$('#next').addEventListener('click',()=>{ if(latest?.hasMore){page++;void load();} });
$('#export').addEventListener('click',async()=>{ const button=$('#export'); button.disabled=true; try { const response=await api('/api/admin/export.csv'); const blob=await response.blob(); const url=URL.createObjectURL(blob); const link=make('a'); link.href=url; link.download='vetstation-inquiries.csv'; document.body.append(link); link.click(); link.remove(); setTimeout(()=>URL.revokeObjectURL(url),1000); } catch(error){ setMessage(error.message || t('exportFailed')); } finally { button.disabled=false; } });
translate(); if(auth) void load();
