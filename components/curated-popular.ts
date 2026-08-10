import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { PRODUCTS } from "../pages/_home/products";

/** Cmd+K product marks — inline card SVGs (paths become unstyled `<img>`; jiti can't `?raw`). */
const iconsDir = join(
  dirname(fileURLToPath(import.meta.url)),
  "../pages/_home/icons",
);

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
    icon: readFileSync(join(iconsDir, `${product.icon}.svg`), "utf8").trim(),
  })),
] as const;
