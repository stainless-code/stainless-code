# Stainless Code company docs site — plan

> **Status:** in progress · authored 2026-07-20 · Slices 0–4 scaffolded (landing chrome, SEO, CI/FTP workflows). Awaiting brand grill + root FTP secrets before live replace.
>
> **Motivator:** [https://stainless-code.com/](https://stainless-code.com/) is a placeholder (“Hang in there! A website is coming…”). Product docs already ship under subpaths (`/codemap`, `/layers`, `/persist`). This repo owns the **org hub**: who Stainless Code is, what it builds, and an index into those products — without folding company marketing into any one product site.
>
> **Tier:** M effort. Reuse the established docs + FTP pattern; invent company voice, product catalog, and root deploy path.
>
> **Inspiration:** Sibling product docs sites (markdown-first static docs) — not peer company hubs.

---

## Agent start here

Repo at `/Users/sutusebastian/Developer/OSS/stainless-code/stainless-code`. Single-package docs app at the **repo root** (not a Bun workspace / `apps/*` layout — siblings keep `apps/docs` because they ship a product lib). Landing `_home/*`, company Footer, `/about` + `/products`, root `.htaccess`, CI/deploy workflows. Open: lock final one-liner/logo if desired; confirm domain-root FTP secrets before first deploy.

### Sibling evidence (do not re-explore unless drift suspected)

| Product | Repo                     | Live docs  | Docs app            | Accent                 |
| ------- | ------------------------ | ---------- | ------------------- | ---------------------- |
| Codemap | `stainless-code/codemap` | `/codemap` | `apps/docs` @ 1.1.2 | blue `#1d4ed8`         |
| Layers  | `stainless-code/layers`  | `/layers`  | `apps/docs` @ 1.1.2 | teal                   |
| Persist | `stainless-code/persist` | `/persist` | `apps/docs` @ 1.1.2 | amber-copper `#b45309` |

Shared pattern across all three:

- Bun workspace + private `@stainless-code/<product>-docs`
- `deployment: { output: "static", site: "https://stainless-code.com", base: "/<product>" }`
- Custom Astro landing (`pages/index.astro` + `_home/*`) + MDX under `content/`
- Changelog via `github-releases` content source
- CI: validate → check → build → audit; deploy: FTP (`SamKirkland/FTP-Deploy-Action`) on `docs` label / release / dispatch
- **Product-first chrome** — footer says product name, not “Stainless Code”; org appears as npm scope + GitHub owner + domain host
- **Zero cross-product links** today — hub is net-new discovery surface

### Out of scope (this plan)

- Redesigning product docs nav/themes inside codemap/layers/persist
- Moving product docs into this monorepo
- Shared design-system package (optional later; zinc chrome is copy-paste today)
- Rewriting older `@stainless-code/react-*` packages (see [§ Product catalog](#product-catalog))

---

## Goal

Ship a static docs site at **`https://stainless-code.com/`** (`base: "/"`) that:

1. **Names the company** — Stainless Code (GitHub org display name: `STAINLESS CODE`).
2. **States what it is** — open-source tooling for JS/TS apps and AI-agent workflows; libraries with sharp contracts.
3. **Indexes products** — cards (and optional catalog pages) for Codemap, Layers, Persist with one-line pitch, status, docs URL, GitHub, npm.
4. **Routes outbound** — primary CTAs leave the hub for product docs; hub is not a second copy of each product guide tree.

---

## Product catalog

### Flagship (hub front page)

| Product     | One-line (from README / site)                                                   | Docs                                                             | npm                                   |
| ----------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------- |
| **Codemap** | Local SQLite structural index for AI agents — SQL/recipes instead of tree scans | [stainless-code.com/codemap](https://stainless-code.com/codemap) | `@stainless-code/codemap`             |
| **Layers**  | Headless layer/stack manager — modals/drawers/toasts as awaitable stacks        | [stainless-code.com/layers](https://stainless-code.com/layers)   | `@stainless-code/layers` (+ adapters) |
| **Persist** | Hydration-aware persistence for any reactive store — no hydrate flash           | [stainless-code.com/persist](https://stainless-code.com/persist) | `@stainless-code/persist`             |

### Legacy / adjacent (secondary index page or footer — not hero)

Older React utilities under the same org (npm-homed, no dedicated docs site today):

- `@stainless-code/react-custom-events`
- `@stainless-code/react-paginate`
- `@stainless-code/react-memo`
- `react-modal-manager` (superseded conceptually by Layers — decide copy carefully)

Treat these as **archive / npm links**, not equal peers of Codemap/Layers/Persist, unless product owners promote them.

---

## Site architecture

```text
https://stainless-code.com/           ← THIS REPO (hub, base "/")
https://stainless-code.com/codemap/   ← codemap/apps/docs (exists)
https://stainless-code.com/layers/    ← layers/apps/docs (exists)
https://stainless-code.com/persist/   ← persist/apps/docs (exists)
```

### Repo layout

```text
stainless-code/             # single package — docs app at root (no workspaces)
  README.md
  package.json              # docs toolchain + oxfmt; dev/build/check/… scripts
  blume.config.ts           # site "/", company title (framework config)
  pages/index.astro         # company landing
  pages/_home/              # Hero, Products, FinalCta
  content/                  # thin MDX: about, products
  public/                   # logo, favicons, .htaccess for root
  theme.css
  docs/
    plans/                  # this plan (delete + lift when shipped)
  .github/workflows/
    ci.yml
    deploy-docs.yml         # FTP to domain root (new credentials / path)
```

### Content IA (thin on purpose)

| Route                             | Role                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------ |
| `/`                               | Custom Astro landing: brand → one sentence → product cards → CTA to GitHub org |
| `/products` (or `/` section only) | Index of flagship products; optional legacy subsection                         |
| `/about`                          | What Stainless Code is / how we ship (OSS, MIT, agent-native where relevant)   |
| Product deep docs                 | **Out** — absolute links to `/codemap`, `/layers`, `/persist`                  |

Avoid cloning product “Guides / Recipes / Concepts / Reference” tabs. Hub tabs should stay company-shaped.

---

## Branding & voice (open decisions)

Pre-locked from evidence:

- Org name: **Stainless Code** (GitHub: `STAINLESS CODE`)
- Domain: `https://stainless-code.com/`
- Product sites stay product-branded; hub is the only place company chrome owns the footer (`© {year} Stainless Code`)

Needs a short grill before Slice 2 copy locks:

1. **Company one-liner** — capacity pitch for OG/description (not the same as Codemap’s “Query your codebase.”).
2. **Company accent** — distinct from blue / teal / amber product accents (candidates: near-black ink, cool steel gray, or muted slate).
3. **Logo** — new mark vs wordmark-only for v1.
   Optional later: org-level `docs-voice` skill in this repo (much thinner than Codemap’s).

---

## Deployment

| Concern   | Decision                                                                                                                     |
| --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Host      | Same Apache/FTP host as product sites                                                                                        |
| Path      | FTP account / remote dir for **domain root** (not `/codemap` etc.) — **new secrets or path**; do not reuse product FTP roots |
| Triggers  | Mirror siblings: `workflow_dispatch`, merge to `main` with `docs` label, optional release                                    |
| Apache    | Root `.htaccess` (404 → `/404.html`, CSP/HSTS, `llms.txt` MIME) — adapt from product templates, drop `/<product>` prefixes   |
| Collision | Product deploys must keep writing only under their subfolders; hub never uploads into `/codemap`                             |

---

## Cross-linking strategy

**Hub → products:** absolute URLs (`https://stainless-code.com/codemap`, …) on every product card + footer Products column.

**Products → hub (follow-up, separate PRs):** optional one-line footer link “Stainless Code” → `/`. Not required for hub v1; schedule as Slice 5 so product owners can review voice.

Do **not** iframe or MDX-remote product content into the hub for v1 — cards + outbound links only. Multi-source content is available later if we want mirrored READMEs.

---

## Tracer-bullet slices

### Slice 0 — Repo bootstrap

- Initial commit: README + this plan + root `package.json` (single package, no workspace)
- Confirm FTP root credentials exist (or open infra ticket) before Slice 4

**Done when:** repo has a non-empty `main` and agents can clone meaningfully.

### Slice 1 — Empty docs app at `/`

- Scaffold the docs app at repo root (siblings use `apps/docs` only because they also ship a lib)
- Site config with `base: "/"`, company title
- Stub `pages/index.astro` (“Stainless Code” + placeholder products section)
- `dev` / `build` / `check` green locally

**Done when:** `bun run build` emits `dist/` with index at site root paths.

### Slice 2 — Landing + product index

- Lock company one-liner + accent (grill if needed)
- `_home/Hero`, `Products` (three flagship cards), `FinalCta`
- Thin `/about` and/or `/products` MDX if landing alone feels too thin
- Logo + favicons + `theme.css`

**Done when:** local preview reads as a company hub, not a fourth product docs site.

### Slice 3 — AI / SEO surfaces

- `llmsTxt`, sitemap, OG, agent readability (mirror siblings)
- Curated search popular entries pointing at hub pages + maybe product absolute URLs if the search index allows

**Done when:** `validate` + `audit` pass with root `base`.

### Slice 4 — CI + FTP deploy

- `.github/workflows/ci.yml` docs job
- `deploy-docs.yml` → FTP domain root
- Replace placeholder at live `/`

**Done when:** [https://stainless-code.com/](https://stainless-code.com/) shows the hub; `/codemap` etc. unchanged.

### Slice 5 — Soft cross-links from products (optional)

- One footer or nav affordance on each product site → hub
- Separate PRs per product repo

**Done when:** each flagship docs footer can reach the company index in one click.

---

## Verification

```bash
# In this repo (after Slice 1+)
bun install
bun run dev
bun run validate -- --strict
bun run check
bun run build
bun run audit

# After Slice 4
curl -sI https://stainless-code.com/ | head
curl -sI https://stainless-code.com/codemap/ | head   # must still be Codemap
```

---

## Risks & watchouts

| Risk                               | Mitigation                                                                                              |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
| FTP path clobbering product dirs   | Dedicated root FTP user/dir; deploy only hub `dist/`                                                    |
| Hub grows a fake product docs tree | Keep IA thin; link out                                                                                  |
| Brand collision with Codemap blue  | Company accent ≠ product accents                                                                        |
| Copy drift vs product READMEs      | Product cards cite README one-liners; refresh via occasional audit (or later `update-docs`-style skill) |
| Empty-repo first commit hygiene    | Plan + README first; no fake content stubs that look shipped                                            |

---

## Closing state (when shipped)

Per docs lifecycle: delete this plan after lift into durable surfaces:

- `README.md` — what the repo is + local docs scripts
- Optional `docs/architecture.md` — hub vs product subpath hosting
- Product repos — only if Slice 5 footer links land

---

## Reference links

- Org: [github.com/stainless-code](https://github.com/stainless-code)
- Placeholder today: [stainless-code.com](https://stainless-code.com/)
- Sibling inventory sources (local): `../codemap/apps/docs`, `../layers/apps/docs`, `../persist/apps/docs`
