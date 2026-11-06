# Architecture baseline

No framework or service has been installed yet. A practical starting point is a TypeScript web application with a server-rendered public site, authenticated owner and staff areas, a relational database, and managed file storage. Choose specific providers after the decisions in `decisions.md` are resolved.

## Boundaries

- **Public content:** services, team, hours, location, and contact information.
- **Identity and permissions:** owner and staff accounts, sessions, roles, and per-record authorization.
- **Scheduling:** availability, appointments, status transitions, and reminders.
- **Clinical:** pets, encounters, observations, treatment, and attachments.
- **Operations:** billing, inventory, reporting, and settings where needed.

Keep authorization and validation on the server. Record changes to clinical data and access to sensitive records in an audit log. Prefer reversible database migrations and separate development, staging, and production environments.

## Candidate data entities

`Clinic`, `Location`, `User`, `StaffMembership`, `OwnerProfile`, `Pet`, `Service`, `AvailabilityRule`, `Appointment`, `Encounter`, `ClinicalNote`, `Attachment`, `Invoice`, `Payment`, `Notification`, and `AuditEvent`.

These are candidate entities, not a final schema. In particular, determine whether pet ownership can be shared, whether appointments are requests or instant bookings, and whether billing or medical records live in another system.

## Delivery gates

Before launch, verify role permissions, booking conflicts, timezone handling, backups and restore, accessibility, privacy text, and the real contact and emergency details.
