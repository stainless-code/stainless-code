import { PRODUCTS } from "../pages/_home/products";

/** Cmd+K product marks — image paths (Blume ≥1.4.0 resolves these server-side). */
const PRODUCT_SEARCH_ICON = {
  Codemap: "/icons/codemap.svg",
  Persist: "/icons/persist.svg",
  Layers: "/icons/layers.svg",
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
