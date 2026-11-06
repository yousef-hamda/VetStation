# Homepage verification — 2026-11-06

The first two sections record earlier homepage versions. The current release-preparation checks are in **Multilingual mobile-service revision** below.

## Automated checks

- `npm run build` passed, including TypeScript type checking and Vite production bundling.
- `npm test` passed: message formatting and blank-field rejection.
- `npm run lint` passed with Biome.
- `npm audit --omit=dev --audit-level=moderate` found no production dependency advisories; the final full dependency audit also found none.

## Browser checks

Used Playwright CLI against the local Vite server.

- Inspected the homepage at 320, 375, 768, 1024, and 1440 pixel widths. Document width matched viewport width at each size; no horizontal overflow was found. Reviewed screenshots for hero, mobile menu, visit content, FAQ, and request form. Representative screenshots are in `output/playwright/`.
- Header and footer logo links returned to `/#top`; observed `scrollY: 0`. All internal anchor targets exist. Direct loads of `/#contact` and `/#approach` land at their sections.
- Mobile navigation opened by click and keyboard Enter, closed with Escape, and closed after selecting a link. Menu links reached their sections.
- FAQ expanded to reveal its answer. The copy form rejected empty input, accepted a complete sample request, displayed its message, and showed a copied status. Unit tests cover whitespace-only fields.
- With reduced motion enabled, a direct section load kept content visible (`opacity: 1`). The browser console reported zero errors or warnings during checks.
- Hero video, doctor video, doctor photos, and visit image loaded. The footer logo lazy-loads when scrolled into view.
- Opened the production preview at `http://127.0.0.1:4173/`; the page title, heading, and non-lazy images loaded, with no console errors.

## Remaining clinic content dependency

The supplied logo provides the brand. Phone or WhatsApp, email, address, hours, services, and booking policy have not been supplied. The homepage therefore does not display invented details or claim to submit an appointment. Its request tool prepares a message for the visitor to copy. A direct send or booking path can be added once the clinic's real channel and workflow are confirmed.

## Final video and light-hero revision

- Replaced the opening photo film with a silent 12.25-second MP4 showing a cat and dog during real veterinary care. Confirmed the hero loads and plays in the browser. Verified the separate 9.08-second doctor film has an AAC soundtrack with `ffprobe`; it starts muted, and clicking “Music off” enables audio and updates the accessible pressed state.
- Checked the doctor film play/pause control, its label, and the playback state. The film pauses when off screen. The hero control also works, and both videos stay paused by default under reduced motion.
- Inspected the final light hero at 1440 and 375 pixels, plus the doctor section at desktop and mobile sizes. The hero video has no visible border or frame and reaches the right edge. The doctor film and supplied photos fit without overlap.
- Rechecked widths 320, 375, 768, 1024, and 1440: document width equals viewport width at every size. Both videos reached `readyState: 4`.
- Rechecked mobile menu open/link/close, direct `/#doctor` landing below the sticky header, logo back to `/#top` with `scrollY: 0`, request form copy status, FAQ expansion, and all internal anchor targets.
- Final `npm test` (2 tests), `npm run lint`, `npm run build`, `npm audit --audit-level=moderate` (0 vulnerabilities), and `git diff --check` passed. The production preview at `http://127.0.0.1:4173/` loaded both videos, the heading, and every anchor with zero browser console errors or warnings.
- Updated representative screenshots in `output/playwright/`.

## Multilingual mobile-service revision

- Verified fresh visitors see Hebrew with RTL; Arabic is RTL and English is LTR. The language switcher updates the title, description, copy, accessible names, image text, legal notices, document `lang`/`dir`, URL query and stored preference. Explicit `?lang=` overrides the stored preference.
- Used Playwright CLI at 320, 375, 768, 1024 and 1440 pixels in all three languages. Document width matched viewport width in all 15 combinations. Inspected the light hero, single-film doctor section, service cards, car illustration, visit-preparation image and contact section at narrow and wide sizes. Fixed the car image's mobile crop and the vaccination image's focal point.
- Checked all three service photos, car illustration and separate visit photo decoded with nonzero natural dimensions. Both video files reached browser `readyState: 4`. The hero MP4 and poster SHA-256 values match the prior version exactly. The new doctor MP4 has five interleaved photo scenes and no audio stream; the old audio film is absent from public assets.
- Confirmed direct `tel:+972584458008`, `mailto:vets.station@gmail.com`, and the exact supplied Instagram URL in the contact section. The Instagram link opens separately with `noopener noreferrer`. Header/footer contact links and all internal anchors have real targets.
- Tested mobile navigation open, link selection and close, Escape close with focus return, FAQ expansion, header logo return to `#top` at `scrollY: 0`, doctor-film play/pause, hero-film play/pause, and all three legal dialogs in each language. Under reduced motion, both films start paused and section content remains visible.
- Ran axe-core WCAG 2.0/2.1 A and AA checks in Hebrew, Arabic and English, plus the open English privacy dialog and open Hebrew mobile menu. Initial contrast and label-name issues were fixed; the final scans reported zero automated violations. This is not a formal accessibility certification.
- Final automated checks: `npm test`, `npm run lint`, `npm run build`, `npm audit --audit-level=moderate`, and `git diff --check` passed. Production preview and final console checks are recorded after the last build.

## Current launch dependencies

See [launch legal review](launch-legal-review.md): operator identity, licence/experience verification, rights to the user-supplied media, inquiry retention practice, actual host/domain, and local advertising review need owner confirmation before public deployment. The requested default music is intentionally absent from the public film because the currently published veterinary advertising regulations prohibit an advertisement with a melody.

## Final doctor film, service photos, and language-switch checks

- Rebuilt the doctor film to 800 × 1000 at 60 fps with fractional-pixel motion and short eased dissolves; `ffprobe` confirms 828 frames, five distinct scenes, 13.8 seconds, and no audio. The film's edges fade into the section background with no border. Inspected desktop Hebrew and mobile Arabic screenshots.
- On the production preview, Playwright observed the doctor film playing automatically in view (`paused: false`, `currentTime > 0`, `readyState: 4`). Its pause control stops it, a manual pause persists after scrolling away and back, and its play control resumes it. Reduced-motion behavior was checked in the previous revision and remains wired to both films.
- Replaced the service-card media with three separate Pexels photos that visibly show grooming, an injection, and an examination. The film uses none of these images. Each image decoded successfully in all three languages at 320, 375, 768, 1024, and 1440 pixels. All 15 width/language combinations retained the correct text direction and had no horizontal overflow.
- Switching from `/?lang=en#doctor` to Arabic produced `/?lang=ar` with no hash and `scrollY: 0`. The same top-return behavior worked in the production preview when switching Hebrew to English.
- Final `npm test` passed 2 tests, `npm run lint` and `npm run build` passed, `npm audit --audit-level=moderate` reported 0 vulnerabilities, and `git diff --check` passed. The production preview loaded the new film and all service photos with no page or console errors. Axe-core WCAG 2.0/2.1 A/AA scans in Hebrew, Arabic, and English reported 0 automated violations.
- Final screenshots: `output/playwright/home-final-desktop.png`, `doctor-final-desktop.png`, `doctor-final-mobile.png`, `services-final-desktop.png`, and `services-final-mobile.png`.
