# Stainless Code

**Open-source tooling for JS/TS and AI agents.**

Org hub for **[Stainless Code](https://github.com/stainless-code)** — the company site at [https://stainless-code.com/](https://stainless-code.com/). Open-source TypeScript and JavaScript libraries with sharp contracts.

Product docs ship as sibling sites, including:

| Product                                              | Docs                                                             |
| ---------------------------------------------------- | ---------------------------------------------------------------- |
| [Codemap](https://github.com/stainless-code/codemap) | [stainless-code.com/codemap](https://stainless-code.com/codemap) |
| [Layers](https://github.com/stainless-code/layers)   | [stainless-code.com/layers](https://stainless-code.com/layers)   |
| [Persist](https://github.com/stainless-code/persist) | [stainless-code.com/persist](https://stainless-code.com/persist) |

## Status

Company hub pages: home, About, Products, Team, Experience, Contact. Deploy plan:

→ **[docs/plans/company-docs-site.md](./docs/plans/company-docs-site.md)**

## This repo

Company hub for `https://stainless-code.com/` — pitch + product index. It does **not** replace product documentation trees.

### Local docs

```bash
bun install
bun run dev             # local preview
bun run validate
bun run check
bun run build           # → dist/
bun run format          # oxfmt write
bun run format:check
```
