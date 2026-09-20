/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PROJECTS — the most important section of the site.
 *
 *  • Add / remove / reorder entries in this array. The UI updates automatically.
 *  • `featured: true` renders the project as a large card at the top.
 *  • `image` is a path under /public (e.g. "/projects/habit-tracker.png").
 *    Recommended size: 1600 × 1000 (16:10). If empty, a generated
 *    gradient cover with the project initials is shown instead.
 *  • Leave `demo` or `github` empty ("") to hide that button.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  /** How the problem was solved — shown alongside `problem`. */
  solution?: string;
  /** What you personally built/owned on this project. */
  contribution?: string;
  features: string[];
  tech: string[];
  demo: string;
  github: string;
  image: string;
  /** Alt text for the screenshot. Falls back to "{title} screenshot" if omitted. */
  imageAlt?: string;
  /** How the screenshot fills its card. "cover" (default) crops to fill; use
   *  "contain" for screenshots whose aspect ratio doesn't match the card and
   *  must be shown in full, uncropped. */
  imageFit?: "cover" | "contain";
  /** Accent colour used for the generated cover / hover glow. */
  color: string;
  featured?: boolean;
  status?: "live" | "in-progress" | "concept";
  /** Archived projects are kept in the data but hidden from the public Projects section. */
  archived?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-fitness-coach",
    title: "AI Fitness Coach",
    tagline: "Full-stack AI-powered fitness platform",
    description:
      "A bilingual (English/Arabic) fitness platform with personalised workout plans, nutrition tracking, AI food-image recognition and a conversational AI coach.",
    problem:
      "Generic fitness apps don't adapt to the individual — users get static plans and have to log nutrition by hand.",
    solution:
      "A full-stack platform that generates personalised plans and food recognition with the Gemini API, backed by secure, per-user data in Supabase.",
    contribution:
      "Designed and built the application end-to-end: the React/TypeScript frontend, the Supabase backend (auth, RLS, database, Edge Functions), and the Gemini + OpenFoodFacts integrations.",
    features: [
      "Personalised workout & nutrition plans generated with Gemini",
      "AI food-image recognition with lookup via OpenFoodFacts",
      "Conversational AI fitness coach",
      "Progress tracking with Recharts dashboards",
      "Secure per-user data with Supabase Auth + Row Level Security",
      "Full English/Arabic support with RTL layout",
    ],
    tech: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "Row Level Security",
      "Supabase Edge Functions",
      "Gemini API",
      "OpenFoodFacts API",
      "Recharts",
    ],
    demo: "https://ai-fitness-coach-coral.vercel.app/",
    github: "https://github.com/yousef-basaad/Ai-Fitness-coach",
    image: "/projects/ai-fitness-coach.png",
    imageAlt: "AI Fitness Coach web application",
    imageFit: "contain",
    color: "#22c55e",
    featured: true,
    status: "live",
  },
  {
    slug: "nova-admin",
    title: "Nova Admin",
    tagline: "Full-stack SaaS admin dashboard",
    description:
      "A production-grade admin dashboard with authentication, live data widgets and a custom dark design system (“Nova Violet”).",
    problem:
      "SaaS teams need an internal dashboard that's fast, consistent and easy to extend — without rebuilding UI foundations for every page.",
    features: [
      "Email / OAuth authentication with protected routes",
      "Dashboard home with live data from Supabase",
      "Reusable design-system components (tables, forms, charts)",
      "Type-safe data layer with server components",
    ],
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    demo: "", // [LIVE DEMO URL]
    github: "", // [GITHUB URL]
    image: "",
    color: "#8b5cf6",
    featured: true,
    status: "in-progress",
    archived: true,
  },
  {
    slug: "travio",
    title: "Travio",
    tagline: "Multi-tenant SaaS for travel agencies",
    description:
      "An Arabic-first, RTL enterprise dashboard for travel agencies to manage bookings, customers and operations across multiple tenants.",
    problem:
      "Travel agencies juggle bookings across spreadsheets and chat apps. Travio centralises operations in one secure, multi-tenant workspace.",
    features: [
      "Multi-tenant architecture with row-level security",
      "Pixel-accurate implementation from Figma",
      "RTL-first layout and Arabic typography",
      "Monorepo setup with shared UI packages",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Monorepo"],
    demo: "", // [LIVE DEMO URL]
    github: "", // [GITHUB URL]
    image: "",
    color: "#0ea5e9",
    status: "in-progress",
    archived: true,
  },
  {
    slug: "habit-tracker",
    title: "Habit Tracker",
    tagline: "Build streaks that actually stick",
    description:
      "A clean habit-tracking app with daily check-ins, streak calculation and persistent data — built with reusable, well-typed components.",
    problem:
      "Most habit apps over-complicate a simple loop. This one focuses on a frictionless daily check-in and honest streak math.",
    features: [
      "Create, edit and archive habits",
      "Date-based tracking with streak calculation (date-fns)",
      "Persistent data with Supabase / PostgreSQL",
      "Fully responsive, keyboard-accessible UI",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "date-fns"],
    demo: "", // [LIVE DEMO URL]
    github: "", // [GITHUB URL]
    image: "",
    color: "#f59e0b",
    status: "live",
    archived: true,
  },
  {
    slug: "ecommerce",
    title: "Scalable E-Commerce Application",
    tagline: "Type-safe React storefront with Redux Toolkit",
    description:
      "A scalable e-commerce storefront with product listing, filtering, cart management and a full checkout flow, built on a type-safe, performance-focused architecture.",
    problem:
      "E-commerce storefronts need to handle a growing catalogue and non-trivial state — filters, cart, checkout — without becoming slow or hard to maintain.",
    solution:
      "A React/TypeScript app using Redux Toolkit with async thunks for state and API data, React Router for navigation, and Vite with lazy loading and code splitting for fast loads.",
    contribution:
      "Built the frontend architecture — state management, routing, API integration and the checkout flow — with a focus on type safety and performance.",
    features: [
      "Product listing & filtering",
      "Cart management",
      "Full checkout flow",
      "State management with Redux Toolkit & async thunks",
      "RESTful API integration",
      "Lazy loading & code splitting for performance",
    ],
    tech: ["React.js", "TypeScript", "Redux Toolkit", "Async Thunks", "RESTful APIs", "React Router", "Vite"],
    demo: "https://ecommerce-flame-five-86.vercel.app/",
    github: "https://github.com/yousef-basaad/ecommerce",
    image: "/projects/ecommerce.png",
    imageAlt: "Scalable E-Commerce web application",
    color: "#ec4899",
    status: "live",
  },
  {
    slug: "link-checker",
    title: "[PROJECT NAME] — Link Checker",
    tagline: "[ONE-LINE TAGLINE]",
    description: "[PROJECT DESCRIPTION — 1–2 sentences about what it is.]",
    problem: "[THE PROBLEM IT SOLVES]",
    features: ["[FEATURE 1]", "[FEATURE 2]", "[FEATURE 3]"],
    tech: ["[TECHNOLOGIES]"],
    demo: "", // [LIVE DEMO URL]
    github: "", // [GITHUB URL]
    image: "",
    color: "#14b8a6",
    status: "concept",
    archived: true,
  },
];
