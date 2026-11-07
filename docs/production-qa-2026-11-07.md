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

## Owner workspace update

- The `/admin` page is reached by typing its path; the public homepage has no dashboard link. An unauthenticated API request returned 401. The signed-in browser displayed the request summary, search, status filter, follow-up view, and request cards.
- A synthetic request was created, shown in the dashboard, marked Contacted, given a private note and follow-up date, found through the due filter and search, then deleted through the dashboard. A separate API check verified server-side filtering, saved notes and dates, closing, CSV export, and spreadsheet-formula escaping. Synthetic records were removed after the checks.
- Hebrew and Arabic dashboard labels and RTL direction were checked. At a 390 px viewport the request card and controls had no horizontal overflow. The public site's new doctor film matched the hero film's rendered width and height at 1440 px and 390 px in local preview; both visible pause controls were absent and the doctor film played on scroll.
- After a visual report that the portrait slideshow was cropped, the doctor film was changed to show each complete 800×1000 frame inside the same outer footprint. The displayed image stays against the inner edge nearest the text and its narrow edge fade blends into the section background. Desktop and 390 px screenshots were inspected; no horizontal overflow appeared.
