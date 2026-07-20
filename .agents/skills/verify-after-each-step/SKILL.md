---
name: verify-after-each-step
description: Per-file verification checklist — lint-staged and package.json scripts after each milestone.
disable-model-invocation: true
---

# Verify after each step (full checklist)

Always-on priming: [`.agents/rules/verify-after-each-step.md`](../../rules/verify-after-each-step.md).

Run matching checks on every file touched **before** moving to the next milestone. Pre-commit is the safety net, not the first line of defense.

## Discover project scripts

1. **Read `package.json` `scripts`** at the start of a task.
2. **Read `lint-staged.config.js`** — which checks apply to which patterns.
3. Never assume script names — verify they exist in `package.json` before running.

## Per-file checks (this repo)

From `lint-staged.config.js` — mirror between milestones, not only at commit:

| File pattern                                                                                                  | Checks                                                 |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `*.{js,jsx,ts,tsx,mjs,mts,cjs,cts,astro}`                                                                     | `bun run format:check`                                 |
| `*.{css,json,md,mdc,mdx,html,yaml,yml}`                                                                       | `bun run format:check` (`content/**` ignored by oxfmt) |
| Hub site sources (`blume.config.ts`, `components.ts`, `theme.css`, `components/**`, `pages/**`, `content/**`) | also `bun run check -- --isolated`                     |

Full gate before push (matches CI Docs site job):

`bun run validate -- --strict && bun run check -- --isolated && bun run build && bun run audit`

`.agents/` / `.github/` / README-only: `bun run format:check` is enough unless site sources changed.

## Reference

Tier-1 priming: [`.agents/rules/verify-after-each-step.md`](../../rules/verify-after-each-step.md) · [`no-bypass-hooks`](../../rules/no-bypass-hooks.md)
