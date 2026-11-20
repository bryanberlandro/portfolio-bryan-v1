/** Single source of truth for site identity. Used by metadata, JSON-LD, robots, and sitemap. */
export const SITE_URL = "https://bryanberlandro.com";

export const site = {
  url: SITE_URL,
  name: "Bryan Berlandro",
  fullName: "Bryan Berlandro Godlive",
  title: "Bryan Berlandro | UI/UX Designer & Fullstack Developer",
  jobTitle: "UI/UX Designer & Fullstack Developer",
  description:
    "Bryan Berlandro is a UI/UX Designer and Fullstack Developer based in Depok, Indonesia. He designs in Figma and builds websites and web apps with React, Next.js, Node.js, and Express.js.",
  city: "Depok",
  country: "Indonesia",
  countryCode: "ID",
  locale: "en_US",
  ogImage: "/og/bryan-berlandro-og.png",
  ogImageAlt: "Bryan Berlandro Godlive, UI/UX Designer and Fullstack Developer based in Depok, Indonesia",
  knowsAbout: [
    "UI/UX Design",
    "Web Design",
    "Frontend Development",
    "Fullstack Development",
    "Responsive Web Development",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Figma",
  ],
} as const;
