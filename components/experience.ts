/** Experience entries — logos in `public/experience/`. */

/** `dark`/`light` invert via `theme.css`; `color` unchanged. */
export type LogoTone = "color" | "dark" | "light";

export type ExperienceLink = {
  href: string;
  label: string;
  logo?: string;
  logoTone?: LogoTone;
};

export type ExperienceEntry = {
  id: string;
  name: string;
  href: string;
  logo: string;
  logoTone?: LogoTone;
  meta: string;
  body: string[];
  related?: ExperienceLink[];
  roles?: { title: string; dates: string }[];
};

export const logoToneClass = (tone: LogoTone = "color"): string => {
  if (tone === "dark") {
    return "logo-tone-dark";
  }
  if (tone === "light") {
    return "logo-tone-light";
  }
  return "";
};

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    id: "softstate",
    name: "SoftState Technologies",
    href: "https://soft-state.com/",
    logo: "/experience/softstate.svg",
    logoTone: "color",
    meta: "Freelance · Lead React Developer · Nov 2022 – Present · Remote",
    body: [
      "Engagement through SoftState, with Stainless Code as the founder’s company for this work. Large-scale front-end architecture and MVPs on products including Linus Health and AtScale. SoftState’s broader portfolio is on their site; client relationships sit with SoftState.",
    ],
    related: [
      {
        href: "https://linushealth.com/",
        label: "Linus Health",
        logo: "/experience/linus-health.svg",
        logoTone: "color",
      },
      {
        href: "https://www.atscale.com/",
        label: "AtScale",
        logo: "/experience/atscale.png",
        logoTone: "color",
      },
    ],
  },
  {
    id: "flowbite",
    name: "Flowbite React · Themesberg",
    href: "https://www.flowbite-react.com/",
    logo: "/experience/flowbite-react.svg",
    logoTone: "color",
    meta: "Core maintainer",
    body: [
      "Open-source React components for Tailwind CSS in the Themesberg ecosystem. Maintainer work is public on GitHub.",
    ],
    related: [
      {
        href: "https://themesberg.com/",
        label: "Themesberg",
        logo: "/experience/themesberg.svg",
        logoTone: "dark",
      },
    ],
  },
  {
    id: "streamlyne",
    name: "Streamlyne",
    href: "https://www.streamlyneapp.com/",
    logo: "/experience/streamlyne.png",
    logoTone: "color",
    meta: "Product engineering · React Native",
    body: [
      "Private family organization product — mobile application in React Native.",
    ],
  },
  {
    id: "paybilt",
    name: "Paybilt",
    href: "https://paybilt.com/",
    logo: "/experience/paybilt.png",
    logoTone: "dark",
    meta: "Product engineering",
    body: ["Payments / fintech product work."],
  },
  {
    id: "ledidi",
    name: "Ledidi",
    href: "https://ledidi.com/",
    logo: "/experience/ledidi.png",
    logoTone: "dark",
    meta: "Freelance · Nov 2019 – Oct 2022 (~3 years)",
    body: [
      "Secure clinical research platform (registries, trials, real-world evidence). Roles progressed:",
    ],
    roles: [
      { title: "React Developer", dates: "Nov 2019 – Jan 2021" },
      { title: "Lead Developer", dates: "Jan 2021 – Oct 2022" },
    ],
  },
];
