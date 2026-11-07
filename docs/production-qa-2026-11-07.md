# Production verification — 2026-11-07

Target: `vetstation.net` on the VetStation service in the `vet station's Projects` Railway workspace. PostgreSQL and Redis are attached in the same production environment. `www.vetstation.net` is also configured.

## Passed

- HTTPS homepage and `/api/health` return 200 at the root domain; the health response reports PostgreSQL and Redis connected. `www` homepage and health also returned 200 using Cloudflare's current DNS address while the local resolver still cached an earlier negative answer.
- A real browser opened the root domain. Hebrew, Arabic, and English show the correct direction. Language switching returned the view to the top. At widths 390, 768, and 1440 px there was no horizontal overflow, every in-page navigation target existed, and the two hero contact buttons had matching widths.
- The three WhatsApp links per language target `972584458008` with the appropriate translated prefilled booking question. Phone and email links have the expected targets.
- The homepage's eight referenced images and videos returned 200. The doctor film played after scrolling into view. Mobile menu opened and closed, a FAQ expanded, and the privacy dialog opened and closed.
- A synthetic inquiry submitted through the form on `vetstation.net` produced a success message, appeared in the owner inbox, and was deleted. An earlier synthetic inquiry was created, listed, updated, and deleted through the API. Unauthenticated owner-inbox API access returned 401, and `/.env` returned 404 on the Railway service domain.
- Local TypeScript build, lint, and unit tests passed before deployment. The latest VetStation, PostgreSQL, and Redis Railway deployments reported `SUCCESS`.

## Owner checks

- Confirm the published phone number has an active WhatsApp account. A visitor must press Send in WhatsApp; the website only prefills the message.
- Confirm the registered business/operator details, veterinary licence and experience statement, rights to supplied media, and local legal/accessibility obligations. These cannot be verified from the code or deployment.
- After launch, rotate the Railway and Cloudflare tokens shared in chat. Keep the owner-inbox password in Railway variables, separate from source control.
