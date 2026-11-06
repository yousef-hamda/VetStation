# VetStation

A responsive, three-language website for Dr. Hakam Abu Hwaij’s veterinary home visits. Hebrew is the default; Arabic and English are available in the header. The site is built with Vite, TypeScript, and CSS.

The homepage explains home visits and services, introduces Dr. Hakam, shows the supplied car illustration, answers common questions, and links directly to the confirmed phone, email, and Instagram. There is no online booking, payment, intake form, or emergency response service. The doctor film starts when it comes into view and uses the five selected photos in a smooth 60 fps sequence. It is silent for the launch review; the existing hero clinic footage is unchanged. The three service photos show separate grooming, vaccination, and examination actions.

## Run locally

```bash
npm install --legacy-peer-deps
npm run dev
```

Open the URL printed by Vite, normally `http://127.0.0.1:5173/`.

## Verify

```bash
npm test
npm run lint
npm run build
npm run preview
```

The browser checks and screenshots are recorded in [homepage QA](docs/homepage-qa.md) and `output/playwright/`.

## Before public release

The site code and assets are prepared for static hosting. Confirm the operator/business identity, Dr. Hakam’s licence and experience statement, permission to publish the supplied photos/logo/car artwork, inquiry retention practice, and the hosting provider/domain. The public legal notices contain these outstanding disclosure points. A local legal review is required for veterinary advertising, especially any music or real vehicle branding. See [launch legal review](docs/launch-legal-review.md) and [asset provenance](docs/asset-provenance.md).

Project working instructions are in [AGENTS.md](AGENTS.md); durable requirements are in [project memory](docs/project-memory.md).
