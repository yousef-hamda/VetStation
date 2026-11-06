# Project memory

This file preserves durable facts and the user's working preferences across tasks. Update it when new requirements are confirmed; do not turn suggestions into decisions.

## Confirmed project state

- Project: VetStation, currently a veterinary clinic website and operations platform in planning.
- Repository has a local Vite/TypeScript homepage as of 2026-11-06. Direct phone, email, and Instagram links are the contact route; the site does not book, take payment, or collect patient details through a form.
- The product inventory in `product-scope.md` is exploratory. The first release has not been selected.
- The technical direction in `architecture.md` and `decisions.md` is a proposal. Framework and service providers are open.

## User's working preferences (2026-11-06)

- Treat each requested task as a complete, serious piece of work, including all connected parts.
- For any page or feature, make every relevant button, link, effect, flow, and state work; place and size elements correctly with no overlap.
- Run the meaningful tests and visual or browser checks needed for the task.
- Continue autonomously through the task, fixing issues found during implementation and verification. Surface a genuine dependency when the user's clinic facts or choices are essential.
- At the end of each task, report completion directly: what was done, what was tested, and any connected work still outstanding. Explicitly say when none remains.
- Use project memory and suitable specialist agents to preserve context and improve quality.

## Confirmed website brief

The logo establishes VetStation and Dr. Hakam Abu Hwaij. He provides veterinary home visits, with more than five years of experience, travelling daily in Jerusalem, Haifa, and other areas by arrangement. There is no fixed clinic advertised. Service topics include grooming/haircuts, vaccinations, and assessment and care planning for injuries, skin problems, and infections, subject to what is appropriate at home. Contact channels are +972 58-445-8008, vets.station@gmail.com, and https://www.instagram.com/vets.station?xtok=YnRrZmVvdnN6Y2Jn. Hebrew is the initial language, with complete Arabic and English versions; Hebrew and Arabic are RTL.

The hero uses unchanged cat and dog clinic stock footage. The “Meet Dr. Hakam” section contains only a borderless, softly blended 60 fps film interleaving two supplied Hakam photos with three new animal-care photos. It starts automatically when in view, except for reduced-motion users, and preserves a visitor's manual pause. The separate visit photo stays out of that film. Service cards use three distinct action photos that are absent from both films. Switching language returns the visitor to the top hero and clears any section hash. The supplied car image is a generated illustration of the home-visit concept. The user requested calm music on by default, but the publicly prepared film is silent because current Israeli veterinary advertising rules prohibit ads containing a melody; local legal clearance is required before adding music. Do not publish the previous audio-bearing film.

Open release facts: registered operator identity, veterinary licence and experience verification, permission for commercial use of supplied imagery, inquiry retention practice, accessibility arrangements, production host and domain. Do not invent them. Capture future briefs in `decisions.md` and the relevant scope documents.

## Memory maintenance

- Keep this file concise and factual; date durable user preferences and changed decisions.
- `decisions.md` owns confirmed product and technical decisions. `implementation-plan.md` owns sequence. `quality-gates.md` owns completion checks.
- Do not store credentials, personal data, or clinical records here.
