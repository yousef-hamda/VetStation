# Product scope

This is a planning inventory, not a claim that every module belongs in the first release. Confirm the clinic's actual services, location, language, and workflows before building.

## Users and access

| Role | Likely needs |
| --- | --- |
| Visitor | View services, team, hours, location, contact details, and emergency instructions. |
| Pet owner | Manage profile and pets, request or manage appointments, receive instructions and notifications, view permitted records and invoices. |
| Reception | Manage requests, schedule, clients, check-in, and communication. |
| Veterinarian / clinical staff | View assigned schedule and clinical history, record visits, diagnoses, treatments, and follow-ups. |
| Manager / admin | Manage staff access, services, availability, content, reporting, and operational settings. |

Access to clinical information must be explicitly authorized per role and audited.

## Website and operations areas

| Area | Initial capabilities to evaluate |
| --- | --- |
| Public website | Home, about, services, team, hours, location, FAQ, contact, accessibility and privacy information. |
| Booking | Service and clinician selection, availability, request or confirmation flow, cancellation, reminders, and conflict prevention. |
| Accounts | Sign-in, account recovery, owner contact details, staff invitations, role management. |
| Pets | Identity, species, breed, birth date, owner links, allergies, and care notes. |
| Clinical records | Encounters, history, observations, diagnoses, treatment plans, attachments, and access audit. |
| Communication | Appointment updates, care instructions, contact requests, notification preferences. |
| Billing | Estimates, invoices, payment status, refunds, and receipts if the clinic needs online billing. |
| Inventory | Medication and supply tracking if required by clinic workflows. |
| Administration | Services, opening hours, staff schedules, content, settings, and reports. |

## Cross-cutting requirements

- Mobile-friendly and keyboard-accessible interfaces; support the confirmed languages and text directions.
- Clear emergency guidance that does not imply the site provides emergency care.
- Validate input, rate-limit public forms, enforce server-side authorization, and keep secrets out of the repository.
- Protect personal and clinical data with least-privilege access, encryption in transit, backups, retention rules, and an audit trail.
- Define consent, privacy notice, and applicable legal requirements with the clinic before collecting patient information.
- Provide error monitoring, uptime checks, and a recovery procedure before launch.

## Explicitly unresolved

The clinic's country, number of locations, services, booking policy, supported languages, payments, record-sharing rules, and existing systems are unknown. These determine the first release and should be confirmed before feature work.
