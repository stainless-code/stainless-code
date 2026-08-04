import { defineConfig } from "blume";

import { CURATED_POPULAR } from "./components/curated-popular";

const title = "Stainless Code";
/** Custom `.astro` pages have no frontmatter — name OG cards (else humanized segment). */
const homeTitle = `${title} — Open-source tooling for JS/TS and AI agents.`;
const notFoundTitle = "Page not found";
/** Capacity pitch — searchable category language; do not restate the brand beat (docs-voice). */
const description =
  "Open-source TypeScript and JavaScript libraries with sharp contracts — tooling for modern apps and AI-agent workflows.";

export default defineConfig({
  title,
  description,

  logo: { image: "/logo.svg", text: title },

  github: {
    owner: "stainless-code",
    repo: "stainless-code",
    branch: "main",
    dir: ".",
  },

  lastModified: true,

  content: {
    sources: [{ type: "filesystem", root: "content" }],
  },

  navigation: {
    tabs: [
      { label: "Products", path: "/products", icon: "package" },
      { label: "About", path: "/about", icon: "info" },
      { label: "Team", path: "/team", icon: "users" },
      { label: "Experience", path: "/experience", icon: "briefcase" },
      { label: "Contact", path: "/contact", icon: "mail" },
    ],
    featured: [
      {
        label: "GitHub",
        href: "https://github.com/stainless-code",
        icon: "github",
      },
    ],
    sidebar: { display: "flat" },
  },

  // Zinc shell + steel accent (not Codemap blue / Persist amber / Layers teal).
  theme: {
    accent: { light: "#3f3f46", dark: "#a1a1aa" },
    background: { light: "#fafafa", dark: "#18181b" },
    radius: "sm",
    mode: "system",
    fonts: {
      display: "inter-tight",
      body: "inter",
      mono: "geist-mono",
    },
  },

  search: {
    provider: "orama",
    popular: CURATED_POPULAR.map(({ href, label, icon }) => ({
      href,
      label,
      icon,
    })),
  },

  markdown: {
    code: { icons: true },
    codeBlocks: { theme: { light: "github-light", dark: "github-dark" } },
  },

  toc: { minHeadingLevel: 2, maxHeadingLevel: 3 },

  ai: {
    llmsTxt: true,
  },

  seo: {
    og: {
      enabled: true,
      titles: { "/": homeTitle, "/404": notFoundTitle },
    },
    sitemap: true,
    robots: true,
    structuredData: true,
    agentReadability: true,
  },

  deployment: {
    output: "static",
    site: "https://stainless-code.com",
    base: "/",
  },
});
