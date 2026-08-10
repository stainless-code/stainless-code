import { PRODUCTS } from "../pages/_home/products";

/**
 * Cmd+K product marks — same markup as `pages/_home/icons/*.svg`.
 * Inline strings (not `readFileSync` / `?raw`): config is jiti-loaded, and Astro
 * prerender rewrites `import.meta.url` so disk reads miss the source files.
 * Image paths become unstyled `<img>`.
 */
const PRODUCT_SEARCH_ICON = {
  Codemap: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="logo-svg" aria-hidden="true">
  <rect
    class="logo-frame"
    x="3.25"
    y="3.25"
    width="17.5"
    height="17.5"
    rx="3.5"
    stroke-width="2"
  />
  <rect
    class="logo-select"
    x="11.25"
    y="11.25"
    width="6.5"
    height="6.5"
    rx="1.5"
  />
</svg>`,
  Persist: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="logo-svg" aria-hidden="true">
  <circle
    class="logo-ring"
    cx="12"
    cy="12"
    r="9"
    stroke-width="1.75"
    stroke-dasharray="4 3"
    stroke-dashoffset="6"
    opacity="0.55"
  />
  <circle class="logo-settled" cx="12" cy="12" r="4.5" />
</svg>`,
  Layers: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="logo-svg" aria-hidden="true">
  <rect class="logo-layer" x="2" y="17" width="20" height="3.5" rx="1" opacity="0.3"/>
  <rect class="logo-layer" x="3" y="12" width="18" height="3.5" rx="1" opacity="0.45"/>
  <rect class="logo-active" x="5" y="7" width="16" height="3.5" rx="1"/>
  <rect class="logo-top logo-layer" x="4" y="2" width="14" height="3.5" rx="1" opacity="0.55"/>
</svg>`,
} as const satisfies Record<(typeof PRODUCTS)[number]["name"], string>;

/** Cmd+K empty-state + 404 — hub pages, then product docs URLs. */
export const CURATED_POPULAR = [
  { href: "/about", label: "About", icon: "info" },
  { href: "/products", label: "Products", icon: "package" },
  { href: "/team", label: "Team", icon: "users" },
  { href: "/experience", label: "Experience", icon: "briefcase" },
  { href: "/contact", label: "Contact", icon: "mail" },
  ...PRODUCTS.map((product) => ({
    href: product.href,
    label: product.name,
    icon: PRODUCT_SEARCH_ICON[product.name],
  })),
] as const;
