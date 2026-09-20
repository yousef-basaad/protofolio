/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CONTENT — About, Skills, Experience, Education, Services.
 *  Edit freely; nothing here is hard-coded in the components.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/* ---------- About ---------- */
export const about = {
  intro:
    "I'm a Computer Science Engineer who builds web products end-to-end — from clean, accessible interfaces to the APIs and data models behind them.",
  paragraphs: [
    "My engineering background gives me a strong foundation in data structures, algorithms and system design, which I apply to building fast, maintainable web applications.",
    "I work across the stack — React and Next.js on the front-end, Supabase and PostgreSQL on the back-end — and I'm genuinely excited about integrating modern AI tooling into real products.",
  ],
  highlights: [
    {
      title: "CS Engineering background",
      text: "Bachelor of Engineering in Computer Science — solid fundamentals in algorithms, databases and systems.",
      icon: "GraduationCap",
    },
    {
      title: "Frontend craftsmanship",
      text: "Pixel-accurate, responsive and accessible interfaces with React, Next.js, TypeScript and Tailwind.",
      icon: "LayoutTemplate",
    },
    {
      title: "Backend & data",
      text: "REST APIs, authentication, and relational data with Supabase and PostgreSQL.",
      icon: "Database",
    },
    {
      title: "Problem solving",
      text: "I break ambiguous requirements into clear, testable pieces and ship them iteratively.",
      icon: "Puzzle",
    },
    {
      title: "Modern web applications",
      text: "Production-ready apps with performance, SEO and clean architecture built in from day one.",
      icon: "Rocket",
    },
    {
      title: "AI-curious",
      text: "Building with LLM APIs and AI-assisted workflows to ship smarter features, faster.",
      icon: "Sparkles",
    },
  ],
};

/* ---------- Skills ---------- */
export type SkillGroup = {
  /** Stable, locale-independent identifier — used as the React key and to
   *  single out groups (like "tools") that must stay in English. */
  id: string;
  title: string;
  description: string;
  skills: { name: string; note?: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces that are fast, accessible and pleasant to use.",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
      { name: "Redux Toolkit" },
      { name: "React Router" },
      { name: "Recharts" },
      { name: "Responsive Design" },
      { name: "Component Architecture" },
      { name: "State Management" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "APIs, auth and data that scale with the product.",
    skills: [
      { name: "Supabase" },
      { name: "PostgreSQL" },
      { name: "Supabase Auth" },
      { name: "Supabase Edge Functions" },
      { name: "Row Level Security" },
      { name: "REST APIs" },
      { name: "Gemini API" },
      { name: "OpenFoodFacts" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    description: "The workflow around the code.",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Vite" },
      { name: "Type Safety" },
      { name: "Performance Optimization" },
    ],
  },
];

/* ---------- Experience ---------- */
export type ExperienceItem = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location?: string;
  type: "work" | "training" | "project";
  bullets: string[];
  tech?: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Front-End Developer Intern",
    company: "JISR HR",
    companyUrl: "",
    period: "Apr 2026 — Jul 2026",
    type: "training",
    bullets: [
      "Completed a Front-End Developer internship focused on modern frontend practices, including React and component-based architecture.",
      "Built responsive user interfaces and reusable components through structured, hands-on development exercises.",
      "Collaborated with peers and trainers to apply frontend best practices and receive feedback on code quality.",
    ],
    tech: ["React", "JavaScript", "Component Architecture"],
  },
  {
    role: "Independent Projects",
    company: "Self-directed",
    period: "2025 — Present",
    type: "project",
    bullets: [
      "Designed and built full-stack applications (AI Fitness Coach, Nova Admin, Habit Tracker) with React, Next.js and Supabase.",
      "Implemented authentication, row-level security, AI integrations and bilingual RTL interfaces.",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Gemini API"],
  },
];

/* ---------- Education ---------- */
export const education = [
  {
    degree: "B.E. in Computer Science & Engineering",
    school: "BMS Institute of Technology",
    location: "Bangalore, India",
    period: "2021 — 2025",
    details: [] as string[],
  },
];

/* ---------- Services ---------- */
export const services = [
  {
    title: "Website Development",
    text: "Marketing sites and landing pages that load fast, rank well and convert.",
    icon: "Globe",
  },
  {
    title: "Web Applications",
    text: "Dashboards, SaaS products and internal tools with real authentication and data.",
    icon: "AppWindow",
  },
  {
    title: "Frontend Development",
    text: "Pixel-accurate React / Next.js interfaces from Figma or from scratch.",
    icon: "LayoutTemplate",
  },
  {
    title: "Backend Development",
    text: "REST APIs, database design and secure auth with Supabase and PostgreSQL.",
    icon: "Server",
  },
  {
    title: "API Integration",
    text: "Connecting payments, third-party services and your own systems.",
    icon: "Plug",
  },
  {
    title: "Responsive Websites",
    text: "Layouts that feel native on phones, tablets and desktops — RTL included.",
    icon: "Smartphone",
  },
  {
    title: "Website Optimization",
    text: "Performance, Core Web Vitals, accessibility and SEO audits with fixes.",
    icon: "Gauge",
  },
  {
    title: "AI Integration",
    text: "LLM-powered features — chat, search, generation — built into your product.",
    icon: "Sparkles",
  },
];

/* ---------- Process (shown on the Services section) ---------- */
export const process = [
  { step: "01", title: "Discover", text: "Understand goals, users and constraints." },
  { step: "02", title: "Design", text: "Structure, wireframes and a clear scope." },
  { step: "03", title: "Build", text: "Clean, typed, tested code — shipped iteratively." },
  { step: "04", title: "Launch & iterate", text: "Deploy, measure and improve." },
];
