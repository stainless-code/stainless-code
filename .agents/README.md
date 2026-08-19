# `.agents/` — rules & skills

Source of truth for AI agent configuration. Cursor loads skills from `.agents/skills/` natively and rules via `.cursor/rules/*.mdc` → `.agents/rules/*.md` symlinks.

## Start here

| Question                               | Read                                                                 |
| -------------------------------------- | -------------------------------------------------------------------- |
| Repo-root stub                         | [`AGENTS.md`](../AGENTS.md)                                          |
| Where files live, rule `.mdc` symlinks | [rules/agents-first-convention.md](rules/agents-first-convention.md) |
| PRs that publish the hub               | [rules/hub-deploy.md](rules/hub-deploy.md) (`docs` label)            |
| Hub voice                              | [`docs-voice`](skills/docs-voice/SKILL.md)                           |
| Unslop (always-on)                     | [`unslop`](skills/unslop/SKILL.md)                                   |
| Past corrections                       | [`lessons.md`](lessons.md)                                           |
| What exists on disk                    | `ls .agents/rules` · `ls .agents/skills`                             |

## Tier legend (summary)

| Tier  | Attachment            | Cost                           |
| ----- | --------------------- | ------------------------------ |
| **1** | `alwaysApply: true`   | Every turn                     |
| **2** | `globs:`              | When matching files in scope   |
| **3** | `description:` intent | When user/agent intent matches |

## Conventions

- **`-priming` suffix** when a Tier-2 rule filename ≠ skill folder name (`docs-voice-priming` ↔ `docs-voice`).
- **No `AGENTS.md` in skill folders** — use topic siblings (`PROSE.md`, `WORKFLOW.md`). Repo root `AGENTS.md` is a thin stub only.
- **Thin rules** (~10–40 lines); depth in `SKILL.md` or siblings.

## Layout

```text
.agents/
  rules/<name>.md          → .cursor/rules/<name>.mdc (symlink)
  skills/<name>/SKILL.md   → Cursor reads in place
  lessons.md               → .cursor/rules/lessons.mdc (symlink)
```
