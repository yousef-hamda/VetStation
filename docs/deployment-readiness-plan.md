# Deployment readiness plan — 2026-11-06

## Confirmed public facts

- VetStation is a mobile veterinary service led by Dr. Hakam Abu Hwaij, with more than five years of experience.
- He visits pets at home daily in parts of Jerusalem, Haifa, and other areas of the country by arrangement. No fixed clinic location is advertised.
- Direct contacts: +972 58-445-8008, vets.station@gmail.com, and https://www.instagram.com/vets.station?xtok=YnRrZmVvdnN6Y2Jn.
- Services include grooming/haircuts, vaccinations, and medical assessment and care for concerns such as injuries, skin problems, and infections. Specific treatment and whether a home visit is appropriate depend on the animal's condition.
- Hebrew is the default; Arabic and English must cover all visible copy, controls, media descriptions, and legal notices. Hebrew and Arabic are RTL.
- The hero clinic video stays exactly as delivered. The doctor film is rebuilt from two Hakam photos and three newly supplied animal-care photos, excluding the separate visit photo. It is the only media in the doctor section. The user's requested default music cannot ship pending legal clearance under current Israeli veterinary advertising rules; the public film is silent.
- Use the supplied car illustration to explain travel to the visitor; do not suggest the illustrated scene is a documentary photo.

## Work and acceptance

1. Rebuild page copy and sections around mobile home visits, services, coverage, direct contact, and concise FAQ. Remove clinic and appointment-booking language.
2. Add phone, email, and Instagram icons with working `tel:`, `mailto:`, and HTTPS links in appropriate header/contact/footer locations. Provide accessible names and safe external-link behavior.
3. Add complete Hebrew, Arabic, and English translations with persistent language selection and correct document `lang`, `dir`, typography, alignment, and bidirectional phone/email handling.
4. Add practical privacy, accessibility, and service/medical information notices using verified current sources, without inventing registration details, hours, availability, outcomes, or emergency response.
5. Integrate new film, supplied car image, and three service images. Keep the hero media binary unchanged.
6. Test all languages at desktop and mobile widths, keyboard and menu flows, video/sound behavior, links, legal notices, image loading, reduced motion, build, lint, and production preview. Record remaining owner/domain dependencies separately.
