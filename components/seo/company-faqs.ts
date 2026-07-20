/** Shared FAQ copy — About page body + FAQPage JSON-LD stay in sync. */
export const COMPANY_FAQS = [
  {
    question: "Is Stainless Code a platform?",
    answer:
      "No. We ship independent open-source libraries — not a unified suite or hosted platform. Pick the packages you need.",
  },
  {
    question: "Where do product docs live?",
    answer:
      "Each library has its own docs site under stainless-code.com (for example /codemap, /layers, /persist). This hub is the company index and pitch — not a second copy of those guides.",
  },
  {
    question: "How do Codemap, Layers, and Persist differ?",
    answer:
      "Codemap indexes a local codebase for agents (SQL and recipes instead of scanning the tree). Layers treats overlays as awaitable calls. Persist adds hydration-aware persistence to reactive stores. Different problems; no forced stack.",
  },
  {
    question: "Are the libraries open source?",
    answer:
      "Yes. Work lives under the stainless-code GitHub org and is typically MIT-licensed. Check each package for its license file.",
  },
  {
    question: "What is llms.txt?",
    answer:
      "A machine-readable docs map for AI agents. Product sites publish llms.txt so agents can navigate the docs without scraping the whole tree.",
  },
  {
    question: "Who maintains Stainless Code?",
    answer:
      "Today, founder and maintainer Sutu Sebastian. Team has profile links; Contact has the company email for partnerships.",
  },
  {
    question: "Does Stainless Code have a client portfolio?",
    answer:
      "Stainless Code ships open-source libraries. The Experience page covers the founder’s background — SoftState, Flowbite React, and other product work — with client attribution kept on those companies’ own sites where it belongs.",
  },
] as const;
