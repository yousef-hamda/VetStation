# Homepage delivery plan

This records the earlier homepage revision. The current mobile-service, multilingual and deployment preparation scope is in [deployment-readiness-plan.md](deployment-readiness-plan.md); its decisions supersede the film audio, contact form, services, and language assumptions below.

## Scope and visual direction

Build a local English homepage using the supplied VetStation logo. The opening is light stone and warm ivory with a restrained logo pink accent, charcoal type, and a full-height, borderless clinic video on the right showing dogs and cats. Use the three supplied photos of Dr. Hakam in a smoother film in his introduction and in visit guidance. Keep the page focused on introduction, approach, practical visit preparation, questions, and a usable next action.

## Functional contract

- Header and footer logos return to the home page top.
- Hero uses licensed dog and cat clinic footage in an MP4 with a poster and play/pause control. Playback is muted, loops, pauses off screen, and stays paused by default for reduced-motion users.
- The doctor section uses a smoother film made from the supplied photos, with calm music in the file. Music is muted on load and enabled only by the visitor's sound control.
- Every navigation and CTA link reaches a real section. Mobile navigation opens, closes, and supports Escape.
- The visit request tool validates all fields, formats a message, copies it to the clipboard, and states clearly that it does not submit or book an appointment. Clinic contact details are still required for a direct delivery path.
- FAQ questions expand and collapse. Motion respects reduced-motion settings.
- The top progress line and gentle hero movement respond to scrolling; the supplied photos reveal once as their sections enter view.
- No phone, address, hours, booking promise, staff biography, or specific services are invented while clinic details remain open.

## Acceptance and verification

Run typecheck, unit tests, production build, and real browser interaction checks. Inspect 375, 768, 1024, and 1440 pixel widths for overflow and overlap; test keyboard navigation, menu, copy tool, FAQ, logo-to-top, image loading, and reduced motion. Record any unmet connected work.
