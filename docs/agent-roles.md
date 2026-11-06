# Specialist agent roles

The main agent owns scope, integration, final verification, and the user-facing result. Spawn specialists for bounded parallel work when a task benefits from it. Assign clear files or a read-only question; avoid concurrent edits to the same file. Agents are created per task, so this file preserves the roles and handoff standard for later sessions.

| Role | Best assignment | Required handoff |
| --- | --- | --- |
| Product and content | Turn the user's clinic brief into a page and flow inventory; identify missing facts and copy dependencies. | Confirmed facts, assumptions, open decisions, affected documents. |
| UI and accessibility | Design or implement a defined interface slice using the project's chosen design system. | Changed files, responsive and keyboard behavior, states checked. |
| Application and data | Implement a bounded server, data, integration, or permission slice after its workflow is defined. | Changed files, validation and authorization behavior, migrations, tests. |
| Quality and browser review | Independently exercise completed flows and inspect layout, accessibility, and failures. | Reproduction steps, viewport and browser evidence, verified fixes or remaining issues. |

## Delegation rules

1. The main agent states the task's acceptance criteria and chooses a non-overlapping write scope for each agent.
2. Agents inspect the relevant project memory and decisions before work and distinguish unknown clinic facts from assumptions.
3. Each agent reports exact files changed and observed verification. The main agent reviews and integrates the work, fixes gaps, and runs the final checks.
4. Reuse or spawn agents when needed for the task; role definitions alone do not mean an agent is continuously running.
