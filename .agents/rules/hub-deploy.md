---
description: How to open PRs and deploy the company hub to stainless-code.com
alwaysApply: true
---

# Hub deploy (PRs → FTP)

## Opening a PR that should publish

1. Branch off `main`; open the PR **into `main`**.
2. Add the **`docs` label** before merge — required for auto-deploy.
3. Wait for required checks: **Format**, **Docs site** (`ci.yml`).

Merge with `docs` → **Deploy docs** builds `dist/` and FTPS-uploads to domain root.

Without `docs`: merge does **not** deploy. Use Actions → **Deploy docs** → `workflow_dispatch` instead.

## FTP constraints (do not violate)

- Account root = `https://stainless-code.com/` (secrets: `FTP_HOST`, `FTP_USERNAME`, `FTP_PASSWORD`).
- Workflow **exclude** keeps `codemap/`, `layers/`, `persist/`, `.well-known/` (not uploaded, not deleted).
- **Never** set `dangerous-clean-slate` — it ignores exclude and wipes product docs.

Source of truth: [`.github/workflows/deploy-docs.yml`](../../.github/workflows/deploy-docs.yml).
