---
name: docs-voice
description: Voice, tone, and format for the Stainless Code company hub. Use when authoring or editing landing, About, Products, footer, or OG/description copy — or deciding brand beat vs capacity pitch.
---

# Docs voice — Stainless Code hub

Mixture of Codemap / Layers / Persist docs-voice, thinned for a **company index** (not a product docs tree). Keep landing, About, Products, and footer reading like one voice.

Landing shape borrows clarity from peer org hubs (category claim → why → browse → CTA) without their hype, stats, or partner walls.

## Voice in one line

Senior-dev to senior-dev: concrete, dry, honest about scope. Pragmatic marketing — searchable category language, clear CTAs — without slogans that sound like ads.

## Do

- **Brand beat ≠ capacity pitch.** Category line for H1 accent / OG title. Site `description` expands with TypeScript/JavaScript + sharp contracts — no package roll call.
- **Landing rhythm:** Hero (who + for whom) → Why (3 principles) → Browse libraries → Final CTA. Period-terminated marketing headers.
- **Lead with the pain or the contract, then the catalog.** "Platform glue…" → "libraries with sharp contracts."
- **Product cards: title = product name; body = that product's capacity one-liner.** Cards name packages; hero/OG/footer do not.
- **SEO without stuffing.** Prefer natural phrases people search (`TypeScript`, `JavaScript`, `open-source`, `AI agents`) inside honest sentences.
- **One idea per sentence in leads.** Short claim first, then expand.
- **Outbound to products.** Absolute product URLs. Hub owns company chrome only.
- **About earns unique facts.** Hub vs product docs, how to contribute/issues, MIT/org — not a paste of the home pitch. FAQ answers live in `components/seo/company-faqs.ts` (body + FAQPage schema).
- **Products: when-to-use.** One honest sentence per library on `/products` (problem → package). Keep brand beat free of package roll call.
- **Team & Contact are honest.** One-person org today (`components/company.ts`). No fake teammates or invented Stainless Code customers. Social links only when real (GitHub, LinkedIn, X, Bluesky).
- **Experience ≠ client wall.** `/experience` is founder background under Sutu Sebastian (including pre–Stainless Code work such as Ledidi). SoftState portfolio clients stay attributed to SoftState — never “Trusted by” on the Stainless Code home.

## Don't

- Don't open a page with a 60+ word sentence.
- Don't restate the frontmatter `description` in the first body sentence on MDX pages.
- Don't enumerate the current package set in brand beat, site description, footer, or hero.
- Don't advertise hosting topology or the docs framework in capacity / SEO / public copy.
- Don't manufacture social proof, download counts, partner logos, or maturity adjectives ("production-grade", "battle-tested", "world-class").
- Don't hype ("blazing-fast", "revolutionary", "AI-powered" as decoration).
- Don't apologize for scope with "small" / "tiny" / "little".
- Don't clone product Guides trees or peer-site merch/stats sections.

## Canonical patterns (use verbatim)

- **Brand one-liner:** "Open-source tooling for JS/TS and AI agents."
- **Home title / OG:** `Stainless Code — Open-source tooling for JS/TS and AI agents.`
- **Site / OG / npm-style description:**
  "Open-source TypeScript and JavaScript libraries with sharp contracts — tooling for modern apps and AI-agent workflows."
- **Why principles (landing + About):** Sharp contracts. Independent libraries. Built for agents too.
- **About description:** "Who Stainless Code is, how we ship open-source libraries, and where product docs live — without a platform pitch."
- **Product capacity one-liners** (cards / product-index tables only) — prefer each product's `llms.txt` blurb (first sentence), thinned only if the hub card needs it:
  - **Codemap:** "Local SQLite index for agents — SQL and recipes instead of scanning the tree." ([llms.txt](https://stainless-code.com/codemap/llms.txt) full blurb is longer)
  - **Layers:** "Headless modal/dialog/drawer/popover/toast manager — open any layer from anywhere." ([llms.txt](https://stainless-code.com/layers/llms.txt))
  - **Persist:** "Any store, any storage — one middleware, no hydrate flash."

## Verify

```bash
bun run validate -- --strict && bun run check -- --isolated && bun run build && bun run audit
```
