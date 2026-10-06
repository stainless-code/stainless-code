import { defineComponents } from "blume";

import Header from "./components/blume/Header.astro";
import Pagination from "./components/blume/Pagination.astro";
import ExperienceEntries from "./components/seo/ExperienceEntries.astro";
import FaqSection from "./components/seo/FaqSection.astro";
import PersonJsonLd from "./components/seo/PersonJsonLd.astro";
import TeamMember from "./components/seo/TeamMember.astro";

export default defineComponents({
  layout: {
    // Footer: home-only (`pages/index.astro` slot).
    Header,
    Pagination,
  },
  mdx: {
    ExperienceEntries,
    FaqSection,
    PersonJsonLd,
    TeamMember,
  },
});
