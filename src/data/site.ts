/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONFIG — edit this file to change personal info, links and copy.
 *  Everything marked with [BRACKETS] is a placeholder waiting for your data.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Yousef Basaad",
  firstName: "Yousef",
  role: "Computer Science Engineer & Web Developer",
  tagline: "I design and build modern, scalable web applications.",
  description:
    "Computer Science Engineer and Web Developer specializing in modern, scalable web applications with React, Next.js and TypeScript.",
  /** Where the site will live — used for SEO, sitemap and OpenGraph. */
  url: "https://yousefbasaad.com", // [YOUR DOMAIN]
  location: "Saudi Arabia",
  /** Shown in the hero badge. Set to false to hide. */
  availableForWork: true,

  email: "yousefweb21@gmail.com",
  links: {
    github: "https://github.com/yousef-basaad",
    linkedin: "https://www.linkedin.com/in/yousef-web/",
    /** Put your CV at /public/Yousef-Basaad-CV.pdf (or change the path). */
    cv: "/Yousef-Basaad-CV.pdf",
  },

  /** Contact form — paste a Formspree / Getform / Web3Forms endpoint here.
   *  Leave empty to fall back to opening the user's email client. */
  formEndpoint: "", // e.g. "https://formspree.io/f/xxxxxxx"

  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

/** Rotating words in the hero sub-headline. */
export const heroWords = ["scalable", "fast", "accessible", "modern"];

/** Quick facts under the hero — keep them short and true. */
export const heroStats = [
  { value: "B.E.", label: "Computer Science & Engineering" },
  { value: "React / Next.js", label: "Primary stack" },
  { value: "Full-stack", label: "Frontend + Backend + AI" },
];
