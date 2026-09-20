import type { Project } from "@/data/projects";
import type { ExperienceItem, SkillGroup } from "@/data/content";
import type { education, services, process as processSteps } from "@/data/content";

export type Locale = "en" | "ar";

type EducationItem = (typeof education)[number];
type ServiceItem = (typeof services)[number];
type ProcessStep = (typeof processSteps)[number];

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  common: {
    /** Displayed location (e.g. "Saudi Arabia"). */
    location: string;
    languageSwitcherLabel: string;
    englishLabel: string;
    arabicLabel: string;
    backToTopLabel: string;
    switchToLightMode: string;
    switchToDarkMode: string;
  };
  nav: {
    primaryLabel: string;
    links: readonly { label: string; href: string }[];
    talk: string;
    toggleMenu: string;
  };
  hero: {
    availableBadge: string;
    heroWords: string[];
    role: string;
    descriptionPrefix: string;
    descriptionSuffix: string;
    ctaWork: string;
    ctaContact: string;
    ctaDownloadCV: string;
    stats: { value: string; label: string }[];
    scrollLabel: string;
    scrollAriaLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    paragraphs: string[];
    educationBadge: string;
    languagesBadge: string;
    highlights: { title: string; text: string; icon: string }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    groups: SkillGroup[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    moreOnGithub: string;
    statusLabel: { live: string; "in-progress": string; concept: string };
    liveDemo: string;
    demoSoon: string;
    githubLabel: string;
    githubPrivate: string;
    theProblem: string;
    theSolution: string;
    myContribution: string;
    items: Project[];
  };
  experience: {
    eyebrow: string;
    title: string;
    items: ExperienceItem[];
  };
  education: {
    eyebrow: string;
    title: string;
    items: EducationItem[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceItem[];
    process: ProcessStep[];
  };
  contact: {
    eyebrow: string;
    heading1: string;
    headingHighlight: string;
    subtext: string;
    channelLabels: {
      email: string;
      linkedin: string;
      github: string;
      resume: string;
      resumeValue: string;
    };
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitIdle: string;
      submitSending: string;
      submitSent: string;
      statusIdle: string;
      statusSent: string;
      statusError: string;
      mailSubjectPrefix: string;
    };
  };
  footer: {
    builtWith: string;
    rightsReserved: string;
  };
};
