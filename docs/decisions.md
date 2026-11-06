# Decisions needed before implementation

| Decision | Why it matters | Status |
| --- | --- | --- |
| Clinic name, branding, locations, hours, services, and contact details | Defines public content and booking options. | Open |
| Primary audience and first-release modules | Sets scope and delivery order. | Open |
| Languages and text direction | Affects layout, content, forms, and notifications. | Open |
| Appointment requests vs instant confirmation | Changes scheduling and staff workflows. | Open |
| Staff roles and who may see or edit clinical records | Defines authorization and audit rules. | Open |
| Existing practice-management system and required integrations | Avoids duplicate records and conflicting schedules. | Open |
| Online payments and invoicing requirements | Determines provider and accounting workflow. | Open |
| Hosting, database, email/SMS, and file storage providers | Determines infrastructure and environment variables. | Open |
| Applicable privacy, retention, and consent requirements | Determines handling of personal and clinical data. | Open |

Suggested technical direction after scope is confirmed: TypeScript, a server-rendered React framework, PostgreSQL, a migration-based ORM, and provider-backed authentication. Record the selected versions and providers here before adding application code.
