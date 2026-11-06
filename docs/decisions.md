# Decisions needed before implementation

| Decision | Why it matters | Status |
| --- | --- | --- |
| Brand, mobile service areas, services, and direct contacts | Defines public content and contact options. | Confirmed by user; current availability and any rates remain open. |
| Primary audience and first-release modules | Sets scope and delivery order. | Open |
| Languages and text direction | Affects layout, content, forms, and notifications. | Confirmed: Hebrew default; Arabic and English; Hebrew and Arabic RTL. |
| Appointment requests vs instant confirmation | Changes scheduling and staff workflows. | Open |
| Staff roles and who may see or edit clinical records | Defines authorization and audit rules. | Open |
| Existing practice-management system and required integrations | Avoids duplicate records and conflicting schedules. | Open |
| Online payments and invoicing requirements | Determines provider and accounting workflow. | Open |
| Hosting, database, email/SMS, and file storage providers | Determines infrastructure and environment variables. | Open |
| Applicable privacy, retention, and consent requirements | Determines handling of personal and clinical data. | Open |

Suggested technical direction after scope is confirmed: TypeScript, a server-rendered React framework, PostgreSQL, a migration-based ORM, and provider-backed authentication. Record the selected versions and providers here before adding application code.

## Homepage decisions recorded 2026-11-06

- **Confirmed by user:** Use the VetStation logo from the WhatsApp image in Downloads. Use an elegant, lighter version of its pink theme; include dog and cat veterinary imagery, tasteful motion, complete homepage interactions, and local run instructions.
- **Implementation choice for the homepage:** Vite, TypeScript, and CSS provide a local static site without committing to the future operations platform stack. The request tool copies a message locally and clearly does not send or book an appointment.
- **Superseded:** Contact channels, service area, services, and languages were supplied in the later deployment brief below. Direct contact actions now replace the copy-only form.

## Homepage visual revision recorded 2026-11-06

- **Confirmed by user:** The first design felt too feminine. Use the three newly supplied photos of the male vet, replace the opening photo with a video, strengthen the lines and styling, and add creative but usable scroll animation.
- **Initial implementation, superseded by the revision below:** The first redesign used a silent photo montage in a dark hero, plus a scroll progress line and image reveals.
- **Confirmed by user (revision):** The animated photo film felt laggy. Keep smooth motion in each vet photo, add calm music, and move this film into “Meet Dr. Hakam.” The opening needs a different video showing dogs and cats at veterinary stations, placed on the right without a visible frame. Make the opening light and elegant.
- **Implementation direction at that stage, superseded below:** Use genuine clinic footage in the light hero and a smooth photo film in the doctor section, with controllable playback and reduced-motion support.

## Deployment-content revision recorded 2026-11-06

- **Confirmed by user:** Direct phone +972 58-445-8008, email vets.station@gmail.com, and the supplied Instagram link; home visits in Jerusalem, Haifa, and elsewhere by arrangement; more than five years of experience; grooming, vaccinations, and medical care topics. No fixed clinic. Hebrew default plus Arabic and English, with correct RTL. Use the supplied branded Hyundai car illustration and three new animal-care photos. Keep the hero video unchanged. The doctor film must use two Hakam photos and the three animal-care photos in an interleaved order; exclude the photo used near visit preparation and remove the adjacent doctor photo.
- **Implementation:** Direct contact links and icons, translated site and legal notices, compact services, home-visit process, car illustration, and silent five-photo doctor film.
- **Legal constraint:** The user requested music on by default. The current veterinary advertising regulations prohibit an advertisement with a tune or melody. The public build therefore omits music and audio controls pending local legal clearance. See `launch-legal-review.md`.
- **Release facts still needed:** Registered operator identity, licence/experience verification, media-use permission, inquiry retention, physical service accessibility arrangements, production host/domain and advertising review.
