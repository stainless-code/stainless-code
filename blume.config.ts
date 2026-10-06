import { defineConfig } from "blume";
import { orama } from "blume/search";
import { filesystem } from "blume/sources";

import { COMPANY, MAINTAINER } from "./components/company";
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

  lastModified: "git",

  content: {
    sources: [filesystem({ root: "content" })],
  },

  navigation: {
    tabs: [
      { label: "Products", path: "/products" },
      { label: "About", path: "/about" },
      { label: "Team", path: "/team" },
      { label: "Experience", path: "/experience" },
      { label: "Contact", path: "/contact" },
    ],
    sidebar: { display: "flat" },
  },

  footer: {
    links: [
      { label: "About", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Team", href: "/team" },
      { label: "Experience", href: "/experience" },
      { label: "Contact", href: "/contact" },
    ],
    socials: {
      github: COMPANY.orgUrl,
      linkedin: MAINTAINER.linkedin,
      x: MAINTAINER.x,
      bluesky: MAINTAINER.bluesky,
    },
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
    provider: orama(),
    popular: CURATED_POPULAR.map(({ href, label, icon }) => ({
      href,
      label,
      icon,
    })),
  },

  markdown: {
    externalLinks: true,
    code: {
      icons: true,
      theme: { light: "github-light", dark: "github-dark" },
    },
  },

  toc: { minHeadingLevel: 2, maxHeadingLevel: 3 },

  agents: {
    llmsTxt: true,
    agentReadability: true,
  },

  seo: {
    og: {
      enabled: true,
      titles: { "/": homeTitle, "/404": notFoundTitle },
    },
    sitemap: true,
    robots: true,
    structuredData: true,
  },

  deployment: {
    site: "https://stainless-code.com",
    base: "/",
  },
});
