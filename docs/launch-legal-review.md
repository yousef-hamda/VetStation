# Launch legal and rights review — 2026-11-06

This is an implementation checklist, not a legal opinion. Verify the final public content with qualified Israeli counsel or the relevant authority before publication.

## Implemented in the website

- Direct phone, email, and Instagram links replace the previous copy-only request form. The site takes no payment, confirms no appointment, and has no patient or owner intake form.
- Hebrew is the initial language. Hebrew and Arabic layouts use RTL. All three languages cover page text, navigation, media descriptions, contacts, FAQs, and privacy/accessibility/usage notices.
- The privacy notice describes the browser-stored language choice, the absence of analytics and advertising cookies, and the use of external contact channels. Fonts and media are served locally, so reading the homepage does not call Google Fonts, Pexels, Mixkit, or Instagram.
- The accessibility statement provides the phone and email contact route and describes implemented keyboard, media control, image text, language, and reduced-motion support without claiming formal certification.
- Medical and service copy avoids guaranteed outcomes, fixed availability, or claims that every condition can be treated at home. Emergency needs are directed to a nearby emergency veterinary service.
- The car image is labeled as an illustration of the home-visit concept, not a verified documentary photo or approval to use the design on an actual vehicle.
- The public doctor film is silent. The previous music-bearing MP4 was removed from `public/assets`, so it is not copied into production builds.

## Why the public film is silent

The currently published [Israeli veterinary advertising regulations](https://www.gov.il/BlobFolder/legalinfo/resolution-no-42013-in-complaint-against-veterinarian/he/legal_info_%D7%AA%D7%A7%D7%A0%D7%95%D7%AA%D7%94%D7%A8%D7%95%D7%A4%D7%90%D7%99%D7%9D%D7%94%D7%95%D7%95%D7%98%D7%A8%D7%99%D7%A0%D7%A8%D7%99%D7%9D%D7%A4%D7%A8%D7%A1%D7%95%D7%9E%D7%AA%D7%90%D7%A1%D7%95%D7%A8%D7%94%D7%AA%D7%A9%D7%A1%D7%912002%20%286%29.pdf) include a prohibition on an advertisement containing a tune or melody (תקנה 1(2)(ב)). Because this homepage promotes a veterinary service, music cannot be treated as launch-ready without a qualified legal determination that the specific use is permitted. The user requested music on by default, but the shipped site does not expose an audio control or music stream. Browser autoplay rules would also prevent reliable automatic unmuted playback even if music were cleared.

## Owner facts needed before public release

1. Confirm the registered operator/business identity to display in the privacy notice and the business disclosure. Confirm Dr. Hakam’s licence status and the factual “more than five years” experience statement.
2. Confirm permission for commercial website use, editing, and publication of the supplied logo, Hakam/pet photos, and generated car illustration, including any people or pets shown. Stock photos and hero footage are separately documented under the [Pexels License](https://www.pexels.com/legal-pages/license/); do not imply stock subjects endorse VetStation.
3. Confirm how direct phone/email/Instagram inquiries are handled and retained, who can access them, and the legal operator’s privacy contact. The [Privacy Protection Authority’s collection guidance](https://www.gov.il/BlobFolder/legalinfo/duty_to_notify/he/notify13.pdf) is relevant if personal information is collected through those channels.
4. Choose the production host and domain so the privacy notice can name the actual host/processors and the site can receive a canonical URL, social sharing URL, and final hosting/security configuration.
5. Confirm any physical service accessibility arrangements for inclusion in the public [accessibility statement](https://www.gov.il/he/pages/declaration_website_accessibility?chapterIndex=2). No exemption or formal compliance certification is assumed.
6. Obtain local legal review of the website’s veterinary advertising, including the illustrated branded car and any future soundtrack, before public launch.

The contact-only site currently has no checkout, price list, booking confirmation, tracking scripts, or marketing cookies. If those features are added, the notices and consumer disclosures must be revisited. The [Consumer Protection Authority’s guidance](https://www.gov.il/BlobFolder/generalpage/information-olim-consumerism/he/smart-consumerism-he.pdf) describes remote-sale disclosures if a sale is eventually concluded online.
