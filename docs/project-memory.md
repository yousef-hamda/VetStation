# Project memory

This file preserves durable facts and the user's working preferences across tasks. Update it when new requirements are confirmed; do not turn suggestions into decisions.

## Confirmed project state

- Project: VetStation, a veterinary home-visit website live at https://vetstation.net and https://www.vetstation.net as of 2026-11-07.
- Source: Vite/TypeScript frontend and Node server in this repository. The correct Railway project is `ca48a078-ae34-4786-9201-f794d2fc966f` in the `vet station's Projects` workspace. Its production services are VetStation, Postgres, and Redis. Cloudflare manages DNS. Do not deploy to the unrelated `yousef_hamda's Projects` workspace.
- The homepage has direct phone, WhatsApp, email, and Instagram links plus an inquiry form. The form saves contact and pet request details in PostgreSQL; Redis limits repeated submissions. The owner inbox at `/admin` requires Railway-stored credentials. Inquiries are deleted after 90 days by the application. A submitted request does not confirm an appointment or take payment.
- The product inventory in `product-scope.md` remains exploratory beyond this website. Do not treat older architecture proposals as the current deployment.

## User's working preferences (2026-11-06)

- Treat each requested task as a complete, serious piece of work, including all connected parts.
- For any page or feature, make every relevant button, link, effect, flow, and state work; place and size elements correctly with no overlap.
- Run the meaningful tests and visual or browser checks needed for the task.
- Continue autonomously through the task, fixing issues found during implementation and verification. Surface a genuine dependency when the user's clinic facts or choices are essential.
- At the end of each task, report completion directly: what was done, what was tested, and any connected work still outstanding. Explicitly say when none remains.
- Use project memory and suitable specialist agents to preserve context and improve quality.

## Confirmed website brief

The logo establishes VetStation and Dr. Hakam Abu Hwaij. He provides veterinary home visits, with more than five years of experience, travelling daily in Jerusalem, Haifa, and other areas by arrangement. There is no fixed clinic advertised. Service topics include grooming/haircuts, vaccinations, and assessment and care planning for injuries, skin problems, and infections, subject to what is appropriate at home. Contact channels are +972 58-445-8008, WhatsApp at that same number, vets.station@gmail.com, and https://www.instagram.com/vets.station?xtok=YnRrZmVvdnN6Y2Jn. WhatsApp opens with a short booking question in the selected website language. Hebrew is the initial language, with complete Arabic and English versions; Hebrew and Arabic are RTL.

The hero uses unchanged cat and dog clinic stock footage. The “Meet Dr. Hakam” section contains only a borderless, softly blended 60 fps film interleaving two supplied Hakam photos with three new animal-care photos. Its full portrait frames fill a wider, taller film that starts at the physical left page edge in every language; the text retains its original position and a hero-like gap beside the film. The “Dr. Hakam with pets” caption sits directly beneath the image. Both videos start automatically when in view, except for reduced-motion users, and have no pause controls. The separate visit photo stays out of that film. Service cards use three distinct action photos that are absent from both films. Switching language returns the visitor to the top hero and clears any section hash. The contact request form spans both columns and is centered beneath the contact methods. The supplied car image is a generated illustration of the home-visit concept. The user requested calm music on by default, but the publicly prepared film is silent because current Israeli veterinary advertising rules prohibit ads containing a melody; local legal clearance is required before adding music. Do not publish the previous audio-bearing film.

Open business facts to verify with the owner: registered operator identity, veterinary licence and experience statement, WhatsApp availability at the published number, commercial rights to supplied imagery, and any additional accessibility arrangements. The production host, domain, and inquiry retention are now configured. Never store Railway or Cloudflare tokens in the repository or project memory; rotate previously shared tokens after use.

## Memory maintenance

- Keep this file concise and factual; date durable user preferences and changed decisions.
- `decisions.md` owns confirmed product and technical decisions. `implementation-plan.md` owns sequence. `quality-gates.md` owns completion checks.
- Do not store credentials, personal data, or clinical records here.
