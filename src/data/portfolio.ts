export const personal = {
  name: "Bryan Berlandro Godlive",
  role: "UI/UX Designer & Fullstack Developer",
  experience: "3 Years of Experience",
  heroIntro:
    "I design interfaces in Figma and build them with React, Next.js, and Node.js. Three years of making websites and web apps that are clear to use and easy to maintain.",
  bio: [
    "I'm a UI/UX designer and fullstack developer based in Depok, Indonesia. I design in Figma and build with React, Next.js, Node.js, and Express, so an idea can go from first sketch to a live site in one pair of hands.",
    "Over the past three years I've worked on company profile sites, agency websites, and a community platform. I care about clear structure, readable type, and layouts that hold up on every screen size.",
  ],
  email: "bryanberlandro@gmail.com",
  location: "Depok, Indonesia",
};

export const stats = [
  { number: "8", label: "Success Projects" },
  { number: "3", label: "Product Launches" },
  { number: "3", label: "Years Experience" },
];

export const skills = [
  "UI/UX Design",
  "Web Design",
  "Frontend Development",
  "Fullstack Development",
  "Responsive Web Development",
];

// ─── WHAT I WORK WITH ────────────────────────────────────────────────
export const toolCategories = [
  { category: "Design", tools: ["Figma"] },
  {
    category: "Development",
    tools: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "Express.js"],
  },
  {
    category: "Skills",
    tools: [
      "UI/UX Design",
      "Web Design",
      "Frontend Development",
      "Fullstack Development",
      "Responsive Web Development",
    ],
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────────────────
export const experiences = [
  {
    company: "Transhaka Dunia Teknologi Indonesia",
    role: "Front-End Developer & UI/UX Designer",
    period: "2024 to Present",
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
    period: "2025 to Present",
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
    id: "brakanusacore-web",
    index: "01",
    name: "Braka Nusa Core",
    type: "Digital Agency Website",
    year: "2026",
    tags: ["Website", "UI/UX", "Full Stack"],
    description:
      "Designed and developed the official website for Braka Nusa Core, a digital agency specializing in website development, branding, and digital solutions. Built to showcase services, portfolio, and company credibility through a modern and premium user experience.",
    deliverables: [
      "Brand Strategy",
      "UI/UX Design",
      "Full Stack Development",
      "SEO Optimization",
      "Deployment",
    ],
    outcome:
      "Established a strong digital presence that effectively communicates agency capabilities and builds trust with potential clients.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Figma"],
    liveUrl: "https://brakanusacore.com",
    githubUrl: null,
    dark: false,
    featured: true,
    img: "/images/braka-nusa-core.png",
  },

  {
    id: "pandiproteksi-web",
    index: "02",
    name: "Pandi Proteksi Marine Indonesia",
    type: "Company Profile Website",
    year: "2025",
    tags: ["Website", "UI/UX", "Full Stack"],
    description:
      "Designed and developed a company profile website for a marine services company, focusing on delivering a professional, trustworthy, and responsive digital presence.",
    deliverables: [
      "UX Research",
      "Wireframes",
      "High-fidelity UI",
      "Full Stack Development",
      "Deployment",
    ],
    outcome:
      "Successfully launched a modern website that strengthens brand credibility and improves user accessibility across devices.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Figma"],
    liveUrl: "https://pandiproteksi.com",
    githubUrl: null,
    dark: false,
    featured: true,
    img: "/images/pandi-proteksi.png",
  },

  {
    id: "agentzcreative-web",
    index: "03",
    name: "Agent Z Creative",
    type: "Creative Agency Website",
    year: "2026",
    tags: ["Website", "UI/UX", "Branding"],
    description:
      "Designed and developed a creative agency website focused on visual storytelling, premium presentation, and portfolio-driven user experience.",
    deliverables: [
      "UI/UX Design",
      "Front-End Development",
      "Responsive Design",
      "Brand Experience",
      "Deployment",
    ],
    outcome:
      "Created a modern digital platform that showcases creative work and strengthens the agency's professional image.",
    tech: ["React", "Tailwind CSS", "Figma"],
    liveUrl: "https://agentzcreative.com",
    githubUrl: null,
    dark: true,
    featured: true,
    img: "/images/agent-z-creative.png",
  },

  {
    id: "curhatinaja-web",
    index: "04",
    name: "Curhatin Aja",
    type: "Anonymous Sharing Platform",
    year: "2026",
    tags: ["Website", "UI/UX", "Full Stack"],
    description:
      "Designed and developed an anonymous sharing platform that allows users to express thoughts and emotions safely. Built end-to-end with a strong focus on privacy, comfort, and community engagement.",
    deliverables: [
      "UI/UX Design",
      "Full Stack Development",
      "Database Design",
      "Authentication System",
      "Feature Development",
    ],
    outcome:
      "Created a scalable platform that encourages meaningful interactions and emotional expression in a safe environment.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Figma"],
    liveUrl: "https://curhatinaja.com",
    githubUrl: null,
    dark: false,
    featured: true,
    img: "/images/curhatinaja.png",
  },

  {

    id: "transseaworthy-web",
    index: "05",
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
    liveUrl: null,
    githubUrl: null,
    dark: true,
    featured: true,
    img: "/images/transseaworthy.png",
  },
];

// ─── SERVICES ─────────────────────────────────────────────────────────
export const services = [
  {
    num: "01",
    name: "UI/UX Design",
    desc: "Wireframes, user flows, and high-fidelity interfaces designed in Figma, with clear structure and readable hierarchy.",
  },
  {
    num: "02",
    name: "Web Design",
    desc: "Websites for companies, agencies, and products, designed to present content clearly and feel consistent from page to page.",
  },
  {
    num: "03",
    name: "Frontend Development",
    desc: "Interfaces built with HTML, CSS, JavaScript, React, and Next.js, kept clean and easy to maintain.",
  },
  {
    num: "04",
    name: "Fullstack Development",
    desc: "Web applications with a Node.js and Express backend, from database and authentication to the finished interface.",
  },
  {
    num: "05",
    name: "Responsive Web Development",
    desc: "Layouts that work properly on desktop, tablet, and mobile, tested across screen sizes before launch.",
  },
];

// ─── PROCESS ──────────────────────────────────────────────────────────
export const process = [
  {
    num: "01",
    title: "Discovery",
    desc: "Understanding the goals, the users, and the content before any design work starts.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Defining the page structure, user flows, and technical approach so each decision has a reason.",
  },
  {
    num: "03",
    title: "Design",
    desc: "High-fidelity interface design in Figma, with reusable components and clear specs for development.",
  },
  {
    num: "04",
    title: "Build",
    desc: "Clean, maintainable code with React, Next.js, and Node.js, built to match the design closely.",
  },
  {
    num: "05",
    title: "Launch & Iterate",
    desc: "Deploy the site, check how it performs, and keep improving it after release.",
  },
];

// ─── TESTIMONIALS (placeholder content, NOT rendered. Replace with real quotes before re-enabling) ───
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

// href: null means "no verified profile URL yet". The UI is kept, but it renders as a
// non-link. Replace null with the real https:// profile URL to activate it (it will
// then also be added to the Person JSON-LD sameAs automatically).
export const socials: { label: string; href: string | null }[] = [
  { label: "Instagram", href: "https://www.instagram.com/brynberlandro" },
  { label: "Dribbble", href: null },
  { label: "LinkedIn", href: null },
  { label: "Behance", href: null },
  { label: "GitHub", href: "https://github.com/bryanberlandro" },
];
