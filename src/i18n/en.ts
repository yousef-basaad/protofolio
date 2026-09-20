import { site, heroStats } from "@/data/site";
import { about, skillGroups, experience, education, services, process as processSteps } from "@/data/content";
import { projects } from "@/data/projects";
import type { Dictionary } from "./types";

/**
 * English is the site's original, already-approved copy. Everything here is a
 * verbatim mirror of what was previously hardcoded in components — no wording
 * changed, so the English experience is pixel/text-identical to before i18n.
 */
export const en: Dictionary = {
  meta: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  common: {
    location: site.location,
    languageSwitcherLabel: "Change language",
    englishLabel: "English",
    arabicLabel: "Arabic",
    backToTopLabel: "Back to top",
    switchToLightMode: "Switch to light mode",
    switchToDarkMode: "Switch to dark mode",
  },
  nav: {
    primaryLabel: "Primary",
    links: site.nav,
    talk: "Let's talk",
    toggleMenu: "Toggle menu",
  },
  hero: {
    availableBadge: "Available for new projects",
    heroWords: ["scalable", "fast", "accessible", "modern"],
    role: site.role,
    descriptionPrefix: "I build ",
    descriptionSuffix:
      " web applications with React, Next.js and TypeScript — styled with Tailwind CSS and backed by Supabase.",
    ctaWork: "View My Work",
    ctaContact: "Contact Me",
    ctaDownloadCV: "Download CV",
    stats: heroStats,
    scrollLabel: "scroll",
    scrollAriaLabel: "Scroll to About",
  },
  about: {
    eyebrow: "About me",
    title: "Engineer by training, builder by habit.",
    intro: about.intro,
    paragraphs: about.paragraphs,
    educationBadge: "B.E. Computer Science & Engineering",
    languagesBadge: "Arabic · English",
    highlights: about.highlights,
  },
  skills: {
    eyebrow: "Skills",
    title: "A modern, production-ready toolkit.",
    description: "The technologies I reach for to ship real products — grouped by where they live in the stack.",
    groups: skillGroups,
  },
  projects: {
    eyebrow: "Selected work",
    title: "Real products, not just demos.",
    description: "Each project below solves a concrete problem — with the tech decisions and features that made it work.",
    moreOnGithub: "More on GitHub",
    statusLabel: { live: "Live", "in-progress": "In progress", concept: "Coming soon" },
    liveDemo: "Live Demo",
    demoSoon: "Demo soon",
    githubLabel: "GitHub",
    githubPrivate: "Private",
    theProblem: "The problem",
    theSolution: "The solution",
    myContribution: "My contribution",
    items: projects,
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've built things.",
    items: experience,
  },
  education: {
    eyebrow: "Education",
    title: "Foundations.",
    items: education,
  },
  services: {
    eyebrow: "Services",
    title: "What I can build for you.",
    description: "From a fast marketing site to a full web application with AI features — end to end.",
    items: services,
    process: processSteps,
  },
  contact: {
    eyebrow: "Contact",
    heading1: "Have a project in mind?",
    headingHighlight: "Let's build something great.",
    subtext:
      "I'm open to full-time roles, freelance projects and collaborations. Tell me what you're building and I'll get back to you within a day.",
    channelLabels: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      resume: "Resume",
      resumeValue: "Download CV (PDF)",
    },
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project, timeline and goals…",
      submitIdle: "Send message",
      submitSending: "Sending",
      submitSent: "Message sent",
      statusIdle: "I usually reply within 24 hours.",
      statusSent: "Thanks! I'll get back to you within 24 hours.",
      statusError: "Something went wrong — please email me directly.",
      mailSubjectPrefix: "Project inquiry from",
    },
  },
  footer: {
    builtWith: "Built with Next.js · TypeScript · Tailwind",
    rightsReserved: "All rights reserved.",
  },
};
