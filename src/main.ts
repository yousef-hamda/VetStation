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

const icons = {
  arrow: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7.2 3.5 4.6 5.2c-.9.6-1.2 1.8-.8 2.8 2.1 5.3 6.3 9.5 11.6 11.6 1 .4 2.2.1 2.8-.8l1.7-2.6-4.5-2.7-2 2c-2.4-1.1-4.2-2.9-5.3-5.3l2-2-2.9-4.7Z" stroke="currentColor" stroke-width="1.65" stroke-linejoin="round"/></svg>',
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

function contactIconLinks(t: (typeof translations)['en'], className: string) {
  return `<div class="${className}" aria-label="${t.nav.contact}">
    <a href="${phoneHref}" aria-label="${t.contact.phoneLabel}" title="${t.contact.phone}">${icons.phone}</a>
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
                <a class="button button-primary" href="${phoneHref}">${icons.phone}${t.hero.primary}</a>
                <a class="text-link" href="#services">${t.hero.secondary}${icons.arrow}</a>
              </div>
              <p class="hero-meta"><span>${t.doctor.area}</span><span>${t.hero.caption}</span></p>
            </div>
            <div class="hero-visual">
              <div class="hero-video-wrap">
                <video id="hero-video" class="hero-video" poster="/assets/hero-clinic-poster.jpg" width="1280" height="720" muted loop playsinline preload="metadata" aria-label="${t.hero.videoAlt}">
                  <source src="/assets/hero-clinic.mp4" type="video/mp4" />
                </video>
                <button class="video-control" id="video-control" type="button" aria-label="${t.media.play} — ${t.hero.videoAlt}"><span class="video-control-icon" aria-hidden="true"></span><span class="video-control-text">${t.media.play}</span></button>
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
                <button class="film-button is-paused" id="doctor-video-control" type="button" aria-label="${t.media.play} — ${t.doctor.filmAlt}"><span class="video-control-icon" aria-hidden="true"></span><span class="doctor-video-control-text">${t.media.play}</span></button>
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
              <a href="${emailHref}" aria-label="${t.contact.emailLabel}"><span class="contact-method-icon">${icons.email}</span><span><strong>${t.contact.email}</strong><bdi dir="ltr">${email}</bdi></span>${icons.arrow}</a>
              <a href="${instagramHref}" aria-label="${t.contact.instagramLabel}" target="_blank" rel="noopener noreferrer"><span class="contact-method-icon">${icons.instagram}</span><span><strong>${t.contact.instagram}</strong><bdi dir="ltr">@vets.station</bdi></span>${icons.arrow}</a>
              <p>${t.contact.availability}</p>
            </div>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="container footer-main">
          <div class="footer-brand-block"><a class="brand footer-brand" href="#top"><span class="brand-mark"><img src="/assets/vetstation-logo-square.jpeg" alt="" width="58" height="58" loading="lazy" /></span><span class="brand-name">VET<span>STATION</span><small>${t.footer.tagline}</small></span><span class="sr-only">${t.common.backTop}</span></a><p>${t.doctor.area}</p></div>
          <div class="footer-links"><span>${t.footer.explore}</span><a href="#doctor">${t.nav.doctor}</a><a href="#services">${t.nav.services}</a><a href="#visit">${t.nav.visits}</a><a href="#questions">${t.nav.questions}</a></div>
          <div class="footer-note"><span>${t.footer.contact}</span>${contactIconLinks(t, 'footer-social')}<a class="footer-phone" href="${phoneHref}"><bdi dir="ltr">${phone}</bdi></a><a href="${emailHref}"><bdi dir="ltr">${email}</bdi></a></div>
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
  const heroControl = mustGet<HTMLButtonElement>('#video-control');
  const doctorVideo = mustGet<HTMLVideoElement>('#doctor-video');
  const doctorControl = mustGet<HTMLButtonElement>('#doctor-video-control');
  let heroManuallyPaused = false;
  let doctorManuallyPaused = false;

  function syncControl(video: HTMLVideoElement, button: HTMLButtonElement, textSelector: string, playLabel: string, pauseLabel: string) {
    const paused = video.paused;
    button.classList.toggle('is-paused', paused);
    button.setAttribute('aria-label', paused ? playLabel : pauseLabel);
    mustGet<HTMLElement>(textSelector, button).textContent = paused ? t.media.play : t.media.pause;
  }
  const syncHero = () => syncControl(heroVideo, heroControl, '.video-control-text', `${t.media.play} — ${t.hero.videoAlt}`, `${t.media.pause} — ${t.hero.videoAlt}`);
  const syncDoctor = () => syncControl(doctorVideo, doctorControl, '.doctor-video-control-text', `${t.media.play} — ${t.doctor.filmAlt}`, `${t.media.pause} — ${t.doctor.filmAlt}`);
  async function playHero() { try { await heroVideo.play(); } catch { /* The poster remains available. */ } syncHero(); }
  async function playDoctor() { try { await doctorVideo.play(); } catch { /* The poster remains available. */ } syncDoctor(); }
  heroControl.addEventListener('click', () => {
    if (heroVideo.paused) { heroManuallyPaused = false; void playHero(); }
    else { heroManuallyPaused = true; heroVideo.pause(); }
    syncHero();
  }, { signal });
  doctorControl.addEventListener('click', () => {
    if (doctorVideo.paused) { doctorManuallyPaused = false; void playDoctor(); }
    else { doctorManuallyPaused = true; doctorVideo.pause(); }
    syncDoctor();
  }, { signal });
  heroVideo.addEventListener('play', syncHero, { signal });
  heroVideo.addEventListener('pause', syncHero, { signal });
  doctorVideo.addEventListener('play', syncDoctor, { signal });
  doctorVideo.addEventListener('pause', syncDoctor, { signal });
  heroVideo.addEventListener('error', () => { heroControl.hidden = true; }, { signal });
  doctorVideo.addEventListener('error', () => { doctorControl.hidden = true; }, { signal });
  syncHero();
  syncDoctor();
  if ('IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting && !heroManuallyPaused && !reducedMotion.matches && !document.hidden) void playHero();
      else heroVideo.pause();
    }, { threshold: 0.15 });
    heroObserver.observe(heroVideo);
    observers.push(heroObserver);
    const doctorObserver = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting && !doctorManuallyPaused && !reducedMotion.matches && !document.hidden) void playDoctor();
      else doctorVideo.pause();
    }, { threshold: 0.15 });
    doctorObserver.observe(doctorVideo);
    observers.push(doctorObserver);
    if (!reducedMotion.matches) {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -25px 0px' });
      document.querySelectorAll<HTMLElement>('.reveal').forEach((element) => { element.classList.add('will-reveal'); revealObserver.observe(element); });
      observers.push(revealObserver);
    }
  } else if (!reducedMotion.matches) void playHero();
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) { heroVideo.pause(); doctorVideo.pause(); }
    else {
      if (!heroManuallyPaused && heroVideo.getBoundingClientRect().bottom > 0) void playHero();
      if (!doctorManuallyPaused && doctorVideo.getBoundingClientRect().top < innerHeight && doctorVideo.getBoundingClientRect().bottom > 0) void playDoctor();
    }
  }, { signal });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { heroVideo.pause(); doctorVideo.pause(); }
    else if (!reducedMotion.matches) {
      if (!heroManuallyPaused && heroVideo.getBoundingClientRect().bottom > 0) void playHero();
      if (!doctorManuallyPaused && doctorVideo.getBoundingClientRect().top < innerHeight && doctorVideo.getBoundingClientRect().bottom > 0) void playDoctor();
    }
  }, { signal });

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
