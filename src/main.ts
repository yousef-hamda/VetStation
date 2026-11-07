import '@fontsource/manrope/latin-400.css';
import '@fontsource/manrope/latin-600.css';
import '@fontsource/manrope/latin-700.css';
import '@fontsource/manrope/latin-800.css';
import '@fontsource/noto-sans-hebrew/hebrew-400.css';
import '@fontsource/noto-sans-hebrew/hebrew-600.css';
import '@fontsource/noto-sans-hebrew/hebrew-700.css';
import '@fontsource/noto-sans-arabic/arabic-400.css';
import '@fontsource/noto-sans-arabic/arabic-600.css';
import '@fontsource/noto-sans-arabic/arabic-700.css';
import './style-v2.css';
import './style-v3.css';
import { translations, type Locale } from './i18n';
import { legalContent } from './legal';

const phone = '+972 58-445-8008';
const phoneHref = 'tel:+972584458008';
const email = 'vets.station@gmail.com';
const emailHref = `mailto:${email}`;
const instagramHref = 'https://www.instagram.com/vets.station?xtok=YnRrZmVvdnN6Y2Jn';
const whatsappNumber = '972584458008';
const whatsappCopy: Record<Locale, { button: string; channel: string; label: string; message: string }> = {
  he: { button: 'שלחו הודעה', channel: 'וואטסאפ', label: 'שלחו הודעה ל־VetStation בוואטסאפ', message: 'שלום, איך אפשר לקבוע ביקור בית לחיית המחמד שלי?' },
  ar: { button: 'أرسل رسالة', channel: 'واتساب', label: 'راسل VetStation عبر واتساب', message: 'مرحباً، كيف يمكنني حجز زيارة منزلية لحيواني الأليف؟' },
  en: { button: 'Send a message', channel: 'WhatsApp', label: 'Message VetStation on WhatsApp', message: 'Hello, how can I book a home visit for my pet?' },
};

function whatsappHref(language: Locale) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappCopy[language].message)}`;
}

const icons = {
  arrow: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7.2 3.5 4.6 5.2c-.9.6-1.2 1.8-.8 2.8 2.1 5.3 6.3 9.5 11.6 11.6 1 .4 2.2.1 2.8-.8l1.7-2.6-4.5-2.7-2 2c-2.4-1.1-4.2-2.9-5.3-5.3l2-2-2.9-4.7Z" stroke="currentColor" stroke-width="1.65" stroke-linejoin="round"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.7 13.7L3 21l4.4-1.2A9 9 0 1 0 12 3Z" stroke="currentColor" stroke-width="1.65" stroke-linejoin="round"/><path d="M8.3 7.9c-.3.4-.6 1-.6 1.7 0 1.9 2.7 4.8 4.8 5.8 1.4.6 2.8.7 3.7.2.4-.2.9-1.1.9-1.5 0-.2-.2-.3-.5-.5l-1.8-.8c-.2-.1-.4 0-.5.2l-.8.9c-1.5-.5-2.6-1.6-3.3-3l.8-.7c.2-.2.2-.4.1-.6l-.8-1.9c-.2-.4-.5-.5-.8-.4-.4 0-.8.2-1.2.6Z" fill="currentColor"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" stroke-width="1.65"/><path d="m4 6 8 7 8-7" stroke="currentColor" stroke-width="1.65" stroke-linejoin="round"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.65"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.65"/><circle cx="17.4" cy="6.7" r="1" fill="currentColor"/></svg>',
};

function mustGet<T extends Element>(selector: string, parent: ParentNode = document): T {
  const element = parent.querySelector<T>(selector);
  if (!element) throw new Error(`Missing required element: ${selector}`);
  return element;
}

const app = mustGet<HTMLDivElement>('#app');

function isLocale(value: string | null): value is Locale {
  return value === 'he' || value === 'ar' || value === 'en';
}

function initialLocale(): Locale {
  const query = new URLSearchParams(location.search).get('lang');
  if (isLocale(query)) return query;
  try {
    const saved = localStorage.getItem('vetstation-language');
    if (isLocale(saved)) return saved;
  } catch {
    // Storage may be disabled; Hebrew remains the default.
  }
  return 'he';
}

let locale: Locale = initialLocale();
let disposePage = () => {};

function contactIconLinks(t: (typeof translations)['en'], className: string, language: Locale) {
  return `<div class="${className}" aria-label="${t.nav.contact}">
    <a href="${phoneHref}" aria-label="${t.contact.phoneLabel}" title="${t.contact.phone}">${icons.phone}</a>
    <a href="${whatsappHref(language)}" aria-label="${whatsappCopy[language].label}" title="${whatsappCopy[language].channel}" target="_blank" rel="noopener noreferrer">${icons.whatsapp}</a>
    <a href="${emailHref}" aria-label="${t.contact.emailLabel}" title="${t.contact.email}">${icons.email}</a>
    <a href="${instagramHref}" aria-label="${t.contact.instagramLabel}" title="${t.contact.instagram}" target="_blank" rel="noopener noreferrer">${icons.instagram}</a>
  </div>`;
}

function render() {
  disposePage();
  const t = translations[locale];
  const rtl = locale !== 'en';
  document.documentElement.lang = locale;
  document.documentElement.dir = rtl ? 'rtl' : 'ltr';
  document.title = `${t.common.brand} | ${t.hero.eyebrow}`;
  document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', `${t.hero.title} ${t.hero.body}`);
  document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', document.title);
  document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', t.hero.body);
  const skip = document.querySelector<HTMLAnchorElement>('.skip-link');
  if (skip) skip.textContent = t.common.skip;

  app.innerHTML = `
    <div id="top" class="site-shell">
      <header class="site-header" id="site-header">
        <div class="container header-inner">
          <a class="brand" href="#top">
            <span class="brand-mark"><img src="/assets/vetstation-logo-square.jpeg" alt="" width="58" height="58" /></span>
            <span class="brand-name">VET<span>STATION</span><small>${t.nav.visits}</small></span><span class="sr-only">${t.common.backTop}</span>
          </a>
          <nav class="primary-nav" id="primary-nav" aria-label="${t.footer.explore}">
            <a href="#doctor">${t.nav.doctor}</a>
            <a href="#services">${t.nav.services}</a>
            <a href="#visit">${t.nav.visits}</a>
            <a href="#questions">${t.nav.questions}</a>
            <a href="#contact">${t.nav.contact}</a>
          </nav>
          <div class="header-actions">
            <div class="language-switch" role="group" aria-label="${t.common.language}">
              <button type="button" data-locale="he" lang="he" aria-pressed="${locale === 'he'}">עברית</button>
              <button type="button" data-locale="ar" lang="ar" aria-pressed="${locale === 'ar'}">العربية</button>
              <button type="button" data-locale="en" lang="en" aria-pressed="${locale === 'en'}">EN</button>
            </div>
            <a class="header-call" href="${phoneHref}" aria-label="${t.contact.phoneLabel}" title="${t.contact.phone}">${icons.phone}</a>
            <button class="menu-toggle" id="menu-toggle" type="button" aria-controls="primary-nav" aria-expanded="false" aria-label="${t.common.openMenu}"><span></span><span></span><span></span></button>
          </div>
        </div>
        <div class="scroll-progress" aria-hidden="true"></div>
      </header>

      <main id="main">
        <section class="hero section-pad" aria-labelledby="hero-title">
          <div class="container hero-grid">
            <div class="hero-copy">
              <p class="eyebrow"><span class="eyebrow-line"></span>${t.hero.eyebrow}</p>
              <h1 id="hero-title">${t.hero.title}</h1>
              <p class="hero-lede">${t.hero.body}</p>
              <div class="hero-actions">
                <a class="button button-primary hero-contact-button" href="${phoneHref}">${icons.phone}${t.hero.primary}</a>
                <a class="button button-primary hero-contact-button" href="${whatsappHref(locale)}" aria-label="${whatsappCopy[locale].label}" target="_blank" rel="noopener noreferrer">${icons.whatsapp}${whatsappCopy[locale].button}</a>
                <a class="text-link" href="#services">${t.hero.secondary}${icons.arrow}</a>
              </div>
              <p class="hero-meta"><span>${t.doctor.area}</span><span>${t.hero.caption}</span></p>
            </div>
            <div class="hero-visual">
              <div class="hero-video-wrap">
                <video id="hero-video" class="hero-video" poster="/assets/hero-clinic-poster.jpg" width="1280" height="720" muted loop playsinline preload="metadata" aria-label="${t.hero.videoAlt}">
                  <source src="/assets/hero-clinic.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        <section class="doctor-section section-pad" id="doctor" aria-labelledby="doctor-title">
          <div class="container doctor-grid">
            <div class="doctor-media reveal">
              <div class="doctor-film">
                <video id="doctor-video" poster="/assets/doctor-film-v4-poster.jpg" width="800" height="1000" muted loop playsinline preload="metadata" aria-label="${t.doctor.filmAlt}">
                  <source src="/assets/doctor-film-v4.mp4" type="video/mp4" />
                </video>
              </div>
              <p class="doctor-film-footnote">${t.doctor.filmCaption}</p>
            </div>
            <div class="doctor-copy reveal">
              <p class="section-label">${t.doctor.eyebrow}</p>
              <h2 id="doctor-title">${t.doctor.title}</h2>
              <p>${t.doctor.body}</p>
              <div class="doctor-rule"><span>${t.doctor.area}</span></div>
              <a class="text-link" href="${phoneHref}">${t.hero.primary}${icons.arrow}</a>
            </div>
          </div>
        </section>

        <section class="services-section section-pad" id="services" aria-labelledby="services-title">
          <div class="container">
            <div class="section-heading reveal">
              <div><p class="section-label">${t.services.eyebrow}</p><h2 id="services-title">${t.services.title}</h2></div>
              <p>${t.services.intro}</p>
            </div>
            <div class="services-grid">
              ${[
                { key: 'grooming' as const, image: 'service-grooming-v2.jpg' },
                { key: 'vaccinations' as const, image: 'service-vaccination-v2.jpg' },
                { key: 'medical' as const, image: 'service-medical-v2.jpg' },
              ].map(({ key, image }, i) => `<article class="service-card reveal"><div class="service-image"><img src="/assets/${image}" width="840" height="840" loading="lazy" alt="${t.services[key].alt}" /></div><div class="service-copy"><span class="service-number">0${i + 1}</span><h3>${t.services[key].title}</h3><p>${t.services[key].body}</p></div></article>`).join('')}
            </div>
          </div>
        </section>

        <section class="home-visit-section section-pad" id="visit" aria-labelledby="visit-title">
          <div class="container home-visit-grid">
            <div class="home-visit-copy reveal">
              <p class="section-label">${t.visits.eyebrow}</p>
              <h2 id="visit-title">${t.visits.title}</h2>
              <p class="home-visit-intro">${t.visits.intro}</p>
              <ol class="visit-list">
                <li><span>01</span><div><h3>${t.visits.step1Title}</h3><p>${t.visits.step1Body}</p></div></li>
                <li><span>02</span><div><h3>${t.visits.step2Title}</h3><p>${t.visits.step2Body}</p></div></li>
                <li><span>03</span><div><h3>${t.visits.step3Title}</h3><p>${t.visits.step3Body}</p></div></li>
              </ol>
            </div>
            <figure class="home-visit-image reveal image-reveal"><img src="/assets/mobile-vet-car.jpg" width="1376" height="768" loading="lazy" alt="${t.visits.carAlt}" /><figcaption>${t.visits.carCaption}</figcaption></figure>
          </div>
        </section>

        <section class="prep-section section-pad" aria-labelledby="prep-title">
          <div class="container prep-grid">
            <div class="prep-image reveal image-reveal"><img src="/assets/vet-dog-visit.jpg" width="1536" height="2048" loading="lazy" alt="${t.visits.visitPhotoAlt}" /></div>
            <div class="prep-copy reveal"><p class="section-label">${t.visits.prepEyebrow}</p><h2 id="prep-title">${t.visits.prepTitle}</h2><p>${t.visits.prepBody}</p><a class="text-link" href="${phoneHref}">${t.visits.prepLink}${icons.arrow}</a></div>
          </div>
        </section>

        <section class="questions-section section-pad" id="questions" aria-labelledby="questions-title">
          <div class="container questions-grid">
            <div class="questions-intro reveal"><p class="section-label">${t.faq.eyebrow}</p><h2 id="questions-title">${t.faq.title}</h2></div>
            <div class="faq-list reveal">
              ${[
                [t.faq.coverageQ, t.faq.coverageA],
                [t.faq.bookingQ, t.faq.bookingA],
                [t.faq.availabilityQ, t.faq.availabilityA],
                [t.faq.treatmentQ, t.faq.treatmentA],
                [t.faq.urgentQ, t.faq.urgentA],
              ].map(([question, answer]) => `<details><summary>${question}<span class="faq-icon" aria-hidden="true"></span></summary><p>${answer}</p></details>`).join('')}
            </div>
          </div>
        </section>

        <section class="contact-section section-pad" id="contact" aria-labelledby="contact-title">
          <div class="container contact-grid">
            <div class="contact-copy reveal"><p class="section-label">${t.contact.eyebrow}</p><h2 id="contact-title">${t.contact.title}</h2><p>${t.contact.body}</p><p class="contact-note">${t.contact.note}</p></div>
            <div class="contact-methods reveal">
              <a href="${phoneHref}" aria-label="${t.contact.phoneLabel}"><span class="contact-method-icon">${icons.phone}</span><span><strong>${t.contact.phone}</strong><bdi dir="ltr">${phone}</bdi></span>${icons.arrow}</a>
              <a href="${whatsappHref(locale)}" aria-label="${whatsappCopy[locale].label}" target="_blank" rel="noopener noreferrer"><span class="contact-method-icon">${icons.whatsapp}</span><span><strong>${whatsappCopy[locale].channel}</strong><bdi dir="ltr">${phone}</bdi></span>${icons.arrow}</a>
              <a href="${emailHref}" aria-label="${t.contact.emailLabel}"><span class="contact-method-icon">${icons.email}</span><span><strong>${t.contact.email}</strong><bdi dir="ltr">${email}</bdi></span>${icons.arrow}</a>
              <a href="${instagramHref}" aria-label="${t.contact.instagramLabel}" target="_blank" rel="noopener noreferrer"><span class="contact-method-icon">${icons.instagram}</span><span><strong>${t.contact.instagram}</strong><bdi dir="ltr">@vets.station</bdi></span>${icons.arrow}</a>
              <p>${t.contact.availability}</p>
            </div>
            <form class="inquiry-form reveal" id="inquiry-form">
              <h3>${t.form.title}</h3>
              <div class="inquiry-fields">
                <label>${t.form.name}<input name="name" autocomplete="name" maxlength="100" required placeholder="${t.form.namePlaceholder}" /></label>
                <label>${t.form.phone}<input name="phone" type="tel" autocomplete="tel" maxlength="32" required placeholder="${t.form.phonePlaceholder}" /></label>
                <label>${t.form.petName}<input name="petName" maxlength="100" required placeholder="${t.form.petNamePlaceholder}" /></label>
                <label>${t.form.petType}<select name="petType" required><option value="">${t.form.selectPetType}</option><option value="dog">${t.form.dog}</option><option value="cat">${t.form.cat}</option><option value="other">${t.form.other}</option></select></label>
                <label>${t.form.area}<input name="area" autocomplete="address-level2" maxlength="120" required placeholder="${t.form.areaPlaceholder}" /></label>
                <label>${t.form.service}<select name="service" required><option value="">${t.form.selectService}</option><option value="grooming">${t.form.grooming}</option><option value="vaccinations">${t.form.vaccinations}</option><option value="medical">${t.form.medical}</option><option value="other">${t.form.otherService}</option></select></label>
                <label class="inquiry-message">${t.form.notes}<textarea name="message" rows="3" maxlength="1000" required placeholder="${t.form.notesPlaceholder}"></textarea></label>
              </div>
              <label class="inquiry-consent"><input type="checkbox" name="consent" required /><span>${t.form.consent}</span></label>
              <label class="inquiry-trap" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off" /></label>
              <button class="button button-primary inquiry-submit" type="submit">${t.form.submit}</button>
              <p class="inquiry-status" id="inquiry-status" role="status" aria-live="polite">${t.form.privacy}</p>
            </form>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="container footer-main">
          <div class="footer-brand-block"><a class="brand footer-brand" href="#top"><span class="brand-mark"><img src="/assets/vetstation-logo-square.jpeg" alt="" width="58" height="58" loading="lazy" /></span><span class="brand-name">VET<span>STATION</span><small>${t.footer.tagline}</small></span><span class="sr-only">${t.common.backTop}</span></a><p>${t.doctor.area}</p></div>
          <div class="footer-links"><span>${t.footer.explore}</span><a href="#doctor">${t.nav.doctor}</a><a href="#services">${t.nav.services}</a><a href="#visit">${t.nav.visits}</a><a href="#questions">${t.nav.questions}</a></div>
          <div class="footer-note"><span>${t.footer.contact}</span>${contactIconLinks(t, 'footer-social', locale)}<a class="footer-phone" href="${phoneHref}"><bdi dir="ltr">${phone}</bdi></a><a href="${emailHref}"><bdi dir="ltr">${email}</bdi></a></div>
        </div>
        <div class="container footer-bottom"><span>${t.footer.copyright} <span id="year"></span> · ${t.footer.rights}</span><div class="footer-legal"><button type="button" data-legal="privacy">${legalContent[locale].privacy.title}</button><button type="button" data-legal="accessibility">${legalContent[locale].accessibility.title}</button><button type="button" data-legal="terms">${legalContent[locale].terms.title}</button></div><a href="#top">${t.footer.backTop} ↑</a></div>
      </footer>

      <dialog id="legal-dialog" class="legal-dialog" aria-labelledby="legal-title"><div class="legal-dialog-inner"><button type="button" id="legal-close" class="legal-close" aria-label="${{ he: 'סגירה', ar: 'إغلاق', en: 'Close' }[locale]}">×</button><h2 id="legal-title"></h2><div id="legal-body"></div><a href="${emailHref}"><bdi dir="ltr">${email}</bdi></a></div></dialog>
    </div>`;

  mustGet<HTMLElement>('#year').textContent = String(new Date().getFullYear());
  const controller = new AbortController();
  const { signal } = controller;
  const observers: IntersectionObserver[] = [];
  let frame = 0;
  disposePage = () => { controller.abort(); observers.forEach((observer) => { observer.disconnect(); }); cancelAnimationFrame(frame); };

  const inquiryForm = mustGet<HTMLFormElement>('#inquiry-form');
  const inquiryStatus = mustGet<HTMLElement>('#inquiry-status');
  inquiryForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!inquiryForm.reportValidity()) return;
    const button = mustGet<HTMLButtonElement>('button[type="submit"]', inquiryForm);
    const data = new FormData(inquiryForm);
    button.disabled = true;
    inquiryStatus.textContent = t.form.sending;
    try {
      const response = await fetch('/api/inquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: data.get('name'), phone: data.get('phone'), petName: data.get('petName'), petType: data.get('petType'), area: data.get('area'), service: data.get('service'), message: data.get('message'), consent: data.get('consent') === 'on', website: data.get('website'), language: locale }) });
      if (!response.ok) throw new Error(response.status === 429 ? t.form.tooMany : t.form.failure);
      inquiryForm.reset();
      inquiryStatus.textContent = t.form.success;
    } catch (error) {
      inquiryStatus.textContent = error instanceof Error ? error.message : t.form.failure;
    } finally { button.disabled = false; }
  }, { signal });

  document.querySelectorAll<HTMLButtonElement>('[data-locale]').forEach((button) => {
    button.addEventListener('click', () => {
      const next = button.dataset.locale ?? null;
      if (!isLocale(next) || next === locale) return;
      locale = next;
      try { localStorage.setItem('vetstation-language', locale); } catch { /* Language still works for this page. */ }
      const url = new URL(location.href);
      url.searchParams.set('lang', locale);
      url.hash = '';
      history.replaceState(null, '', `${url.pathname}${url.search}`);
      render();
      scrollTo({ top: 0, behavior: 'instant' });
    }, { signal });
  });

  const header = mustGet<HTMLElement>('#site-header');
  const menuButton = mustGet<HTMLButtonElement>('#menu-toggle');
  const nav = mustGet<HTMLElement>('#primary-nav');
  function setMenuOpen(open: boolean) {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? t.common.closeMenu : t.common.openMenu);
    nav.classList.toggle('is-open', open);
    header.classList.toggle('menu-open', open);
  }
  menuButton.addEventListener('click', () => setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true'), { signal });
  nav.querySelectorAll('a').forEach((link) => { link.addEventListener('click', () => setMenuOpen(false), { signal }); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuButton.focus();
    }
  }, { signal });
  document.addEventListener('click', (event) => {
    if (menuButton.getAttribute('aria-expanded') === 'true' && !header.contains(event.target as Node)) setMenuOpen(false);
  }, { signal });
  const wideScreen = matchMedia('(min-width: 901px)');
  wideScreen.addEventListener('change', (event) => { if (event.matches) setMenuOpen(false); }, { signal });

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const heroVideo = mustGet<HTMLVideoElement>('#hero-video');
  const doctorVideo = mustGet<HTMLVideoElement>('#doctor-video');
  async function playVideo(video: HTMLVideoElement) { try { await video.play(); } catch { /* The poster remains available if autoplay is blocked. */ } }
  function visible(video: HTMLVideoElement) { const box = video.getBoundingClientRect(); return box.top < innerHeight && box.bottom > 0; }
  function syncVideos() {
    for (const video of [heroVideo, doctorVideo]) {
      if (!document.hidden && !reducedMotion.matches && visible(video)) void playVideo(video);
      else video.pause();
    }
  }
  if ('IntersectionObserver' in window) {
    for (const video of [heroVideo, doctorVideo]) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry?.isIntersecting && !reducedMotion.matches && !document.hidden) void playVideo(video);
        else video.pause();
      }, { threshold: 0.15 });
      observer.observe(video);
      observers.push(observer);
    }
    if (!reducedMotion.matches) {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -25px 0px' });
      document.querySelectorAll<HTMLElement>('.reveal').forEach((element) => { element.classList.add('will-reveal'); revealObserver.observe(element); });
      observers.push(revealObserver);
    }
  } else syncVideos();
  reducedMotion.addEventListener('change', syncVideos, { signal });
  document.addEventListener('visibilitychange', syncVideos, { signal });

  const heroSection = mustGet<HTMLElement>('.hero');
  function updateScroll() {
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const progress = Math.max(0, Math.min(100, scrollY / max * 100));
    document.documentElement.style.setProperty('--page-progress', `${progress}%`);
    document.documentElement.style.setProperty('--hero-shift', reducedMotion.matches ? '0px' : `${Math.max(0, Math.min(30, scrollY / Math.max(1, heroSection.offsetHeight) * 30))}px`);
    frame = 0;
  }
  window.addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(updateScroll); }, { passive: true, signal });
  window.addEventListener('resize', updateScroll, { signal });
  updateScroll();

  const dialog = mustGet<HTMLDialogElement>('#legal-dialog');
  const legalTitle = mustGet<HTMLElement>('#legal-title', dialog);
  const legalBody = mustGet<HTMLElement>('#legal-body', dialog);
  document.querySelectorAll<HTMLButtonElement>('[data-legal]').forEach((button) => { button.addEventListener('click', () => {
    const key = button.dataset.legal as 'privacy' | 'accessibility' | 'terms';
    const content = legalContent[locale][key];
    legalTitle.textContent = content.title;
    legalBody.replaceChildren(...content.paragraphs.map((paragraph) => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      return p;
    }));
    dialog.showModal();
  }, { signal }); });
  mustGet<HTMLButtonElement>('#legal-close', dialog).addEventListener('click', () => dialog.close(), { signal });
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); }, { signal });

  if (location.hash) requestAnimationFrame(() => document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({ behavior: 'instant', block: 'start' }));
}

render();
