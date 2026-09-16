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
  features: string[];
  tech: string[];
  demo: string;
  github: string;
  image: string;
  /** Accent colour used for the generated cover / hover glow. */
  color: string;
  featured?: boolean;
  status?: "live" | "in-progress" | "concept";
};

export const projects: Project[] = [
  {
    slug: "ai-fitness-coach",
    title: "AI Fitness Coach",
    tagline: "Full-stack AI-powered fitness platform",
    description:
      "A bilingual (EN / AR) fitness platform with personalised workout plans, nutrition tracking, AI food-image recognition and a conversational AI coach.",
    problem:
      "Generic fitness apps don't adapt to the individual. This app builds plans around the user's goals and learns from their progress.",
    features: [
      "Personalised workout & nutrition plans generated with Gemini",
      "AI food-image recognition with calorie lookup (OpenFoodFacts)",
      "Progress dashboards with Recharts",
      "Secure per-user data with Supabase Auth + Row Level Security",
      "Full RTL / Arabic support",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL", "Edge Functions", "Gemini API"],
    demo: "", // [LIVE DEMO URL]
    github: "", // [GITHUB URL]
    image: "",
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
  },
  {
    slug: "ecommerce",
    title: "[PROJECT NAME] — E-commerce",
    tagline: "[ONE-LINE TAGLINE]",
    description: "[PROJECT DESCRIPTION — 1–2 sentences about what it is.]",
    problem: "[THE PROBLEM IT SOLVES]",
    features: ["[FEATURE 1]", "[FEATURE 2]", "[FEATURE 3]"],
    tech: ["[TECHNOLOGIES]"],
    demo: "", // [LIVE DEMO URL]
    github: "", // [GITHUB URL]
    image: "",
    color: "#ec4899",
    status: "concept",
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
  },
];
