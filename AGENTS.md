# VetStation working instructions

Read `docs/project-memory.md` at the start of each task. Use `docs/product-scope.md`, `docs/decisions.md`, `docs/architecture.md`, and `docs/implementation-plan.md` as the current product baseline. Treat proposals and open decisions as unconfirmed.

## Delivery agreement

- Carry each requested task through its connected parts. A page includes its navigation, buttons, links, forms, states, responsive layout, and related content or data behavior within the agreed scope.
- Before implementation, identify dependencies and acceptance criteria. Resolve routine technical choices independently; ask for clinic facts or policy choices only when they cannot be inferred safely.
- Keep changes coherent across UI, server behavior, data, permissions, documentation, and tests wherever the feature touches them.
- Verify behavior with the checks relevant to the implemented stack. For UI, inspect narrow and wide viewports, keyboard use, interaction states, and overlap or overflow. For sensitive workflows, verify authorization and data boundaries.
- Record observed results and unresolved issues honestly. Do not call a task complete with known broken controls or missing connected work.
- Give progress updates during longer tasks. At completion, state what was done, what was tested, and whether any connected work remains.
- Never use real patient data or commit secrets. Follow the existing privacy and access boundaries in `docs/architecture.md` and `docs/product-scope.md`.

## Project memory and agents

- Update `docs/project-memory.md` when the user supplies durable requirements or preferences. Record decisions in `docs/decisions.md` with source and rationale, then update affected plans.
- Use the specialist roles in `docs/agent-roles.md` for parallel, independent tasks when useful. Give each agent a bounded assignment and disjoint edit scope. The main agent integrates and verifies the result.
- Apply the available UI/UX design skill for design or interface work and the Playwright skill for real browser checks. Select external MCP services only when the product scope calls for them.
