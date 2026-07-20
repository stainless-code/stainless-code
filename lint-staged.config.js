import path from "node:path";

function toPosixRel(file) {
  return path.relative(process.cwd(), file).replace(/\\/g, "/");
}

/** Hub site sources — run `blume check` when any of these are staged. */
function touchesHubSite(filenames) {
  return filenames.some((f) => {
    const r = toPosixRel(f);
    return (
      r === "blume.config.ts" ||
      r === "components.ts" ||
      r === "theme.css" ||
      r.startsWith("components/") ||
      r.startsWith("pages/") ||
      r.startsWith("content/")
    );
  });
}

function hubCheck(filenames) {
  return touchesHubSite(filenames) ? "bun run check -- --isolated" : "true";
}

/** @type {import('lint-staged').Configuration} */
export default {
  // No oxlint in this repo — format only for code; site typecheck via hubCheck.
  "*.{js,jsx,ts,tsx,mjs,mts,cjs,cts,astro}": ["bun run format:check", hubCheck],
  // `content/**` ignored by oxfmt (Blume `:::` fences) — ignorePatterns handle it.
  "*.{css,json,md,mdc,mdx,html,yaml,yml}": ["bun run format:check", hubCheck],
};
