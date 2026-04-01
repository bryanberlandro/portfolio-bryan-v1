// ─── PORTFOLIO DATA ─────────────────────────────────────────────────
// Edit this file to customise all content across the portfolio.

export const personal = {
  name: "Bryan Berlandro Godlive Sibuea",
  role: "Designer & Developer",
  tagline: "EXPLORE MY PORTFOLIO",
  established: "Est. 2020",
  bio: [
    "I'm a freelance designer & developer with a sharp eye for aesthetics and a passion for building digital products that feel as good as they look.",
    "Every project is an opportunity to push boundaries — combining bold typography, clean structure, and thoughtful interactions into experiences people remember.",
  ],
  email: "bryanberlandro@gmail.com",
  location: "Depok, Indonesia",
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
    company: "Transhaka Dunia Teknologi Indonesia",
    role: "Front-End Developer & UI/UX Designer",
    period: "2024 — Present",
    location: "Indonesia",
    description:
      "Led the design and front-end development of a corporate technology website, focusing on building a modern, responsive, and user-friendly digital experience. Responsible for translating business needs into intuitive interfaces and ensuring optimal performance across devices.",
    highlights: [
      "Designed and developed full website interface from scratch",
      "Implemented responsive design with mobile-first approach",
      "Improved overall user experience through clean and modern UI design",
    ],
  },
  {
    company: "Transseaworthy",
    role: "Full Stack Developer & UI/UX Designer",
    period: "2024",
    location: "Indonesia",
    description:
      "Handled end-to-end development for a marine and certification company, covering both full-stack implementation and UI/UX design. Focused on building a structured, scalable, and high-performance web platform.",
    highlights: [
      "Developed full-stack application from front-end to back-end",
      "Designed intuitive UI/UX aligned with business and industry needs",
      "Ensured performance, scalability, and cross-device compatibility",
    ],
  },
  {
    company: "CurhatinAja",
    role: "Full Stack Developer",
    period: "2025 — Present",
    location: "Indonesia",
    description:
      "Built and developed an anonymous sharing platform designed to help users express thoughts and emotions safely. Responsible for end-to-end development including UI/UX design, backend architecture, and feature implementation.",
    highlights: [
      "Developed full-stack application using modern web technologies",
      "Designed user experience focused on anonymity and emotional comfort",
      "Implemented core features such as posting, interaction, and user flows",
    ],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────
export const projects = [
  {
    id: "pandiproteksi-web",
    index: "01",
    name: "Pandi Proteksi Marine Indonesia",
    type: "Company Profile Website",
    year: "2024",
    tags: ["Website", "UI/UX", "Full Stack"],
    description:
      "Designed and developed a company profile website for a marine services company, focusing on delivering a clean, professional, and trustworthy digital presence. Built end-to-end from UI/UX design to full-stack implementation.",
    deliverables: [
      "UX Research",
      "Wireframes",
      "High-fidelity UI",
      "Full Stack Development",
      "Deployment",
    ],
    outcome:
      "Successfully launched a responsive and modern website that strengthens brand credibility and improves user accessibility across devices.",
    tech: ["ReactJS", "Node.js", "Express", "MongoDB", "Figma"],
    liveUrl: "https://pandiproteksi.com",
    githubUrl: null,
    dark: false,
    featured: true,
    img: "/images/pandi-proteksi.png",
  },
  {
    id: "transseaworthy-web",
    index: "02",
    name: "Transseaworthy",
    type: "Company Profile Website",
    year: "2024",
    tags: ["Website", "UI/UX", "Full Stack"],
    description:
      "Developed a modern company profile website for Transseaworthy, handling both UI/UX design and full-stack development. Focused on creating a structured, informative, and visually strong interface tailored to the marine and certification industry.",
    deliverables: [
      "UI/UX Design",
      "Front-End Development",
      "Back-End Development",
      "Responsive Design",
      "Deployment",
    ],
    outcome:
      "Delivered a scalable and responsive website that enhances company visibility and presents services in a clear and professional manner.",
    tech: ["ReactJS", "Node.js", "Express", "MongoDB", "Figma"],
    liveUrl: "#",
    githubUrl: null,
    dark: true,
    featured: true,
    img: "/images/transseaworthy.png",
  },
  {
    id: "transhaka-web",
    index: "03",
    name: "Transhaka Dunia Teknologi Indonesia",
    type: "Company Profile Website",
    year: "2024",
    tags: ["Website", "UI/UX", "Full Stack"],
    description:
      "Built a corporate website for a technology consulting company, covering full-stack development and UI/UX design. Focused on delivering a modern layout with clear service structure and strong digital branding.",
    deliverables: [
      "UX Research",
      "UI Design",
      "Full Stack Development",
      "System Structuring",
      "Deployment",
    ],
    outcome:
      "Launched a professional and responsive platform that effectively communicates company services and strengthens digital presence.",
    tech: ["ReactJS", "Node.js", "Express", "MongoDB", "Figma"],
    liveUrl: "https://transglobalindonesia.co.id",
    githubUrl: null,
    dark: false,
    featured: true,
    img: "/images/transhaka.png",
  },
  {
    id: "curhatinaja-web",
    index: "04",
    name: "Curhatin Aja",
    type: "Anonymous Sharing Platform",
    year: "2026",
    tags: ["Website", "UI/UX", "Full Stack"],
    description:
      "Designed and developed an anonymous sharing platform that allows users to express thoughts and emotions safely. Built end-to-end system including front-end, back-end, and user experience design focused on comfort and privacy.",
    deliverables: [
      "UI/UX Design",
      "Full Stack Development",
      "Database Design",
      "Authentication System",
      "Feature Implementation",
    ],
    outcome:
      "Created a scalable platform with a user-focused experience that encourages engagement and emotional expression in a safe environment.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Figma"],
    liveUrl: "https://curhatinaja.com",
    githubUrl: "#",
    dark: false,
    featured: false,
    img: "/images/curhatinaja.png",
  },
  {
    id: "transglobal-web",
    index: "04",
    name: "Transglobal Indonesia Consultant",
    type: "Company Profile Website",
    year: "2024",
    tags: ["Website", "Front-End"],
    description:
      "Developed the front-end for a consulting company website, focusing on performance, responsiveness, and clean UI implementation aligned with business needs.",
    deliverables: [
      "Front-End Development",
      "Responsive Layout",
      "UI Implementation",
      "Performance Optimization",
    ],
    outcome:
      "Delivered a fast and responsive interface that improves usability and ensures consistent experience across devices.",
    tech: ["HTML", "CSS", "JavaScript", "Figma"],
    liveUrl: "https://transglobalindonesia.co.id",
    githubUrl: null,
    dark: false,
    featured: true,
    img: "/images/transglobal.png",
  },
  {
    id: "transhaka-branding",
    index: "06",
    name: "Transhaka Brand Identity",
    type: "Logo & Brand Identity",
    year: "2024",
    tags: ["Branding", "Logo Design", "Identity"],
    description:
      "Created a complete brand identity for Transhaka, including logo design, typography, and visual direction to reflect a modern and technology-driven company.",
    deliverables: [
      "Logo Design",
      "Color System",
      "Typography",
      "Brand Guidelines",
      "Visual Direction",
    ],
    outcome:
      "Established a strong and consistent brand identity that enhances company recognition and professionalism.",
    tech: ["Illustrator", "Figma", "Photoshop"],
    liveUrl: "#",
    githubUrl: null,
    dark: false,
    featured: false,
    img: "/images/transhaka-logo.png",
  },
  {
    id: "curhatinaja-branding",
    index: "07",
    name: "Curhatin Aja Brand Identity",
    type: "Logo & Brand Identity",
    year: "2025",
    tags: ["Branding", "Logo Design", "Identity"],
    description:
      "Designed the brand identity for Curhatin Aja, focusing on a soft, friendly, and emotionally safe visual direction aligned with its purpose as an anonymous sharing platform.",
    deliverables: [
      "Logo Design",
      "Color Palette",
      "Typography",
      "Brand Guidelines",
      "Social Media Assets",
    ],
    outcome:
      "Built a relatable and approachable brand that resonates with users seeking comfort and emotional expression.",
    tech: ["Illustrator", "Figma", "Photoshop"],
    liveUrl: "#",
    githubUrl: null,
    dark: false,
    featured: false,
    img: "/images/curhatin-logo.png",
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
  { label: "Instagram", href: "https://www.instagram.com/brynberlandro" },
  { label: "Dribbble", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
  { label: "GitHub", href: "https://github.com/bryanberlandro" },
];
