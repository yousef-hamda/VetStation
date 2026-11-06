# Tool readiness

Checked on 2026-11-06 in the local VetStation workspace.

| Capability | Current result | Use when |
| --- | --- | --- |
| Git and GitHub remote | Git works; `origin` points to `yousef-hamda/VetStation`. GitHub MCP read access to that repository was verified. | Repository review, issues, and pull requests as requested. |
| Node.js, npm, npx | Installed and callable (Node 22.21.0; npm 10.9.4). | Scaffold and run the chosen web stack. |
| Python and `rg` | Installed and callable (Python 3.9.6). | Design skill scripts and code search. |
| UI/UX design skill | Search script ran successfully. | Design system and UI decisions after the brief. |
| Playwright CLI skill | `npx` exists; bundled wrapper runs and prints help through `bash`. | Real browser interaction and viewport review once a site exists. |
| Subagents | Spawn tool works; specialist roles are in `agent-roles.md`. | Parallel implementation or independent review with bounded scopes. |
| Hosting and external services | Railway and Sites MCP tools are available; no provider has been selected. | Evaluate and configure after deployment requirements are known. |

The local homepage now has Vite and TypeScript dependencies. Database, CI, and hosting are still open for later platform work. Recheck versions and service access when they become relevant; tool availability alone does not verify deployed infrastructure.
