---
description: After each working milestone, verify changed files using the same checks lint-staged runs
alwaysApply: true
---

# Verify after each step

After completing a step, verify every file you touched — don't wait for `git commit`. The pre-commit hook is a safety net, not a first line of defense.

## What counts as a step

Landing/copy edit, component change, content/MDX update, config tweak, review comment.

## Rules

1. **Verify after every step** — run checks matching touched file patterns before moving on.
2. **Fix before moving on** — never carry forward known failures.
3. **Use the right scope** — `format:check` on touched files when possible; `bun run check -- --isolated` when hub site sources may be affected.

**Full per-file check table:** [`verify-after-each-step`](../skills/verify-after-each-step/SKILL.md).

Related: [`no-bypass-hooks`](./no-bypass-hooks.md).
