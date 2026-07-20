/** Public company + maintainer facts — keep pages and JSON-LD in sync. */
export const COMPANY = {
  name: "Stainless Code",
  orgUrl: "https://github.com/stainless-code",
  siteUrl: "https://stainless-code.com",
} as const;

export const MAINTAINER = {
  name: "Sutu Sebastian",
  role: "Founder & maintainer",
  location: "Romania",
  image: "/team/sutu-sebastian.jpg",
  /** Company / B2B — OSS bugs go to product repos. */
  email: "sebastian.sutu@stainless-code.com",
  github: "https://github.com/SutuSebastian",
  linkedin: "https://www.linkedin.com/in/sutu-jeanu-sebastian/",
  x: "https://x.com/sutusebastian",
  bluesky: "https://bsky.app/profile/sutusebastian.bsky.social",
} as const;

export const SOCIAL_SAME_AS = [
  COMPANY.orgUrl,
  MAINTAINER.github,
  MAINTAINER.linkedin,
  MAINTAINER.x,
  MAINTAINER.bluesky,
] as const;
