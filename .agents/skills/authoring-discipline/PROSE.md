# Authoring discipline — prose depth

Companion to always-on [`.agents/rules/authoring-discipline.md`](../../rules/authoring-discipline.md). Hub marketing/docs voice: [`docs-voice`](../docs-voice/SKILL.md).

## § Concise new prose (comments, JSDoc, docs)

**Decision test:** Could a teammate re-derive this from the code in under 30 seconds? Yes → cut it.

**Keep:** why (not what), non-obvious constraints, cross-cutting context, pointers when a relationship isn't obvious, sentinels/magic values, the rejected alternative, framework quirks (e.g. Blume `.prose` still matching inside `.not-prose`).

**Cut:** file inventories, pasted signatures, restating the next line, generic library practice, duplicate facts across README/About/Experience, tallied counts of re-derivable items ("3 products", "N pages") — the number goes stale the moment it changes; the items carry the story, the number doesn't.

**Comments/JSDoc:** 0 lines when self-explanatory; 1 line default; 2–3 only for irreducible gotchas; `>3 lines` → lift to `docs/` with one-line pointer. Public `.d.ts` / hover docs should read well — `@param` / `@returns` / `@default` / `@example` (with real, resolving imports) carry the meaning when usage isn't obvious; types stay, narrating them does not.

**Exception — JSDoc as types (`.mjs`, `@ts-check`):** Untyped JS has no `.ts` surface — **`@typedef`, `@param`, `@returns`, and inline `@type` are the type system; keep them.** Apply the decision test only to **prose** in those blocks (keep non-obvious _why_; cut restatements of param names or return shapes).

**Historical traces** in committed prose — "indexed on …", "following up on …", changelog-edit residue, stale rosters — earn no ROI once the moment passes; write as if fresh, cut the trace. Source comments: the rule's "update if outdated" covers them.

## End-of-turn sweep

**When to sweep:**

- **Always before the final report** — make it the last thing you do.
- **After every comment-touching edit during a long session** — don't accumulate noise across turns.
- **If you find yourself writing 3+ lines of prose for one decision** — stop, ask whether a one-liner with a code reference would do.

Before completing a turn that touched code or docs: cut duplicated tables and narration. Hub copy stays honest per [`docs-voice`](../docs-voice/SKILL.md).
