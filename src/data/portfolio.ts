// ─── PORTFOLIO DATA ─────────────────────────────────────────────────
// Edit this file to customise all content across the portfolio.

export const personal = {
  name: "Your Name",
  role: "Designer & Developer",
  tagline: "EXPLORE MY PORTFOLIO",
  established: "Est. 2020",
  bio: [
    "I'm a freelance designer & developer with a sharp eye for aesthetics and a passion for building digital products that feel as good as they look.",
    "Every project is an opportunity to push boundaries — combining bold typography, clean structure, and thoughtful interactions into experiences people remember.",
  ],
  email: "hello@portfolio.com",
  location: "Jakarta, Indonesia",
};

export const stats = [
  { number: "5M+",  label: "Success Projects" },
  { number: "3K+",  label: "Product Launches" },
  { number: "24+",  label: "Years Experience" },
  { number: "98%",  label: "Client Satisfaction" },
];

export const skills = [
  "UI / UX",
  "Web Design",
  "Landing Page",
  "UI Design Figma",
  "Expert Webflow",
];

// ─── SKILLS & TOOLS ──────────────────────────────────────────────────
export const toolCategories = [
  {
    category: "Design",
    tools: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "After Effects", "Principle"],
  },
  {
    category: "Development",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"],
  },
  {
    category: "Platform",
    tools: ["Webflow", "Framer", "WordPress", "Shopify", "Vercel", "Netlify"],
  },
  {
    category: "Other",
    tools: ["Git", "Notion", "Linear", "Slack", "Lottie", "GSAP"],
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────────────────
export const experiences = [
  {
    company: "Studio Noire",
    role: "Senior UI/UX Designer & Developer",
    period: "2022 — Present",
    location: "Jakarta, ID",
    description:
      "Lead designer and front-end developer for a boutique digital agency. Responsible for end-to-end product design, client communication, and delivery of high-fidelity web experiences for clients across Southeast Asia.",
    highlights: [
      "Delivered 40+ projects for 25+ clients",
      "Built internal design system used across 12 products",
      "Reduced design-to-dev handoff time by 60%",
    ],
  },
  {
    company: "Pixel Republic",
    role: "UI/UX Designer",
    period: "2020 — 2022",
    location: "Remote",
    description:
      "Worked as a mid-level designer on SaaS and e-commerce products. Focused on user research, wireframing, prototyping, and usability testing.",
    highlights: [
      "Redesigned core checkout flow — conversion +34%",
      "Created 3 component libraries in Figma",
      "Mentored 2 junior designers",
    ],
  },
  {
    company: "Freelance",
    role: "UI Designer & Webflow Developer",
    period: "2019 — 2020",
    location: "Jakarta, ID",
    description:
      "Independent designer building landing pages, brand identities, and marketing sites for local startups and small businesses.",
    highlights: [
      "15+ clients in the first year",
      "Specialised in Webflow no-code development",
      "Launched 3 personal design products",
    ],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────
export const projects = [
  {
    id: "solar-app",
    index: "01",
    name: "SolarPulse App",
    type: "Mobile App Design",
    year: "2024",
    tags: ["Mobile App", "UI/UX", "Figma"],
    description:
      "End-to-end design of a solar energy management app. Designed the full user journey from onboarding to daily energy tracking, with a focus on data visualisation and accessibility.",
    deliverables: ["UX Research", "Wireframes", "High-fidelity UI", "Prototype", "Design System"],
    outcome:
      "4.8★ App Store rating on launch. 12K downloads in first 30 days. Featured in Mobbin and Dribbble's Top 100.",
    tech: ["Figma", "Principle", "Lottie"],
    liveUrl: "#",
    githubUrl: null,
    dark: false,
    featured: true,
  },
  {
    id: "furniture-ecom",
    index: "02",
    name: "WoodCraft Store",
    type: "E-Commerce Web Design",
    year: "2024",
    tags: ["Web Design", "Webflow", "E-Commerce"],
    description:
      "Full redesign of a premium furniture brand's e-commerce experience. Rebuilt site architecture, product pages, and checkout flow in Webflow — resulting in a significant improvement in conversion.",
    deliverables: ["Information Architecture", "UI Design", "Webflow Build", "CMS Setup", "SEO"],
    outcome:
      "Conversion rate improved by 41%. Avg. session duration increased by 2m 30s. Bounce rate dropped from 72% to 38%.",
    tech: ["Figma", "Webflow", "Finsweet"],
    liveUrl: "#",
    githubUrl: null,
    dark: true,
    featured: true,
  },
  {
    id: "brand-identity",
    index: "03",
    name: "Kalos Brand Identity",
    type: "Branding & Identity",
    year: "2023",
    tags: ["Branding", "Identity", "Print"],
    description:
      "Complete brand identity system for a Jakarta-based wellness startup. Included logo design, typography system, colour palette, brand guidelines, and print collateral.",
    deliverables: ["Logo Design", "Brand Guidelines", "Typography System", "Print Collateral", "Social Templates"],
    outcome:
      "Brand launched to 50K social followers. Identity system adopted across 3 physical locations and all digital touchpoints.",
    tech: ["Illustrator", "Photoshop", "InDesign"],
    liveUrl: "#",
    githubUrl: null,
    dark: false,
    featured: true,
  },
  {
    id: "saas-dashboard",
    index: "04",
    name: "Orbit Dashboard",
    type: "SaaS Product Design",
    year: "2023",
    tags: ["SaaS", "Dashboard", "React"],
    description:
      "Designed and built the front-end for a B2B analytics dashboard. Focused on data-dense UI that stays clean and scannable, with a robust component library in React and Tailwind.",
    deliverables: ["UI Design", "Component Library", "React Dev", "Documentation"],
    outcome:
      "Used by 200+ B2B clients. NPS score of 72 post-launch. Development time for new features reduced by 45%.",
    tech: ["Figma", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    dark: false,
    featured: false,
  },
  {
    id: "landing-fintech",
    index: "05",
    name: "Vault Finance",
    type: "Landing Page",
    year: "2023",
    tags: ["Landing Page", "Next.js", "Framer Motion"],
    description:
      "High-converting landing page for a fintech startup. Built with Next.js and Framer Motion, featuring scroll-triggered animations, a custom 3D hero, and full CMS integration.",
    deliverables: ["UI Design", "Next.js Dev", "Animations", "CMS Integration", "Analytics Setup"],
    outcome:
      "28% sign-up conversion rate. PageSpeed score 98. Featured on Awwwards as Site of the Day.",
    tech: ["Next.js", "Framer Motion", "TypeScript", "Sanity CMS"],
    liveUrl: "#",
    githubUrl: "#",
    dark: false,
    featured: false,
  },
  {
    id: "design-system",
    index: "06",
    name: "Forma Design System",
    type: "Design System",
    year: "2022",
    tags: ["Design System", "Figma", "Storybook"],
    description:
      "Built a comprehensive design system from scratch for a 30-person product team. Includes 120+ components, tokens, accessibility guidelines, and a Storybook-powered developer library.",
    deliverables: ["Component Library", "Token System", "Storybook", "Documentation", "Figma Library"],
    outcome:
      "Adopted by entire product team. Reduced design-to-dev handoff time by 60%. Used across 4 live products.",
    tech: ["Figma", "React", "Storybook", "Style Dictionary"],
    liveUrl: "#",
    githubUrl: "#",
    dark: false,
    featured: false,
  },
];

// ─── SERVICES ─────────────────────────────────────────────────────────
export const services = [
  {
    num: "01",
    name: "UI / UX Design",
    desc: "Research-driven interfaces that are beautiful and convert. From wireframes to pixel-perfect design.",
  },
  {
    num: "02",
    name: "Web Design & Dev",
    desc: "Full-stack web builds using Next.js, Tailwind, and Framer Motion. Fast, accessible, and memorable.",
  },
  {
    num: "03",
    name: "Landing Page Design",
    desc: "High-converting landing pages built to turn visitors into customers — with speed and precision.",
  },
  {
    num: "04",
    name: "UI Design in Figma",
    desc: "Clean, scalable Figma files with components, auto layout, and developer-ready handoff.",
  },
  {
    num: "05",
    name: "Mobile App Design",
    desc: "iOS and Android UI design with full prototype, interaction design, and design system.",
  },
  {
    num: "06",
    name: "Brand Identity",
    desc: "Logo, typography, colour system, and brand guidelines that position you for growth.",
  },
];

// ─── PROCESS ──────────────────────────────────────────────────────────
export const process = [
  {
    num: "01",
    title: "Discovery",
    desc: "Deep dive into your goals, users, and market. I ask the right questions before touching a single pixel.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Define the information architecture, user flows, and technical approach. No guessing, only intentional decisions.",
  },
  {
    num: "03",
    title: "Design",
    desc: "High-fidelity UI design with full component system, motion direction, and dev-ready specs.",
  },
  {
    num: "04",
    title: "Build",
    desc: "Clean, performant code. Next.js, Tailwind, Framer Motion — or Webflow/Framer for no-code builds.",
  },
  {
    num: "05",
    title: "Launch & Iterate",
    desc: "Deploy, monitor, and improve. Data-backed iterations based on real user behaviour.",
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────
export const testimonials = [
  {
    quote:
      "Working with this designer completely transformed our product. The attention to detail and design sensibility is unlike anything we've experienced with other agencies.",
    author: "Arya Santoso",
    role: "CEO, SolarPulse",
    company: "SolarPulse",
  },
  {
    quote:
      "Our conversion rate jumped 41% after the redesign. More importantly, customers now say our site 'feels premium' — which perfectly matches our brand.",
    author: "Rina Maharani",
    role: "Founder, WoodCraft",
    company: "WoodCraft Store",
  },
  {
    quote:
      "The design system has completely changed how our team works. We ship features twice as fast and everything is consistent. Absolutely worth the investment.",
    author: "Bima Prasetyo",
    role: "Head of Product, Orbit",
    company: "Orbit Analytics",
  },
];

export const socials = [
  { label: "Instagram", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
  { label: "GitHub", href: "#" },
];
