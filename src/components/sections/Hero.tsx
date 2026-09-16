"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Download, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import { useEffect, useState } from "react";
import { heroStats, heroWords, site } from "@/data/site";
import { LinkButton } from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.9, delay, ease },
  };
}

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % heroWords.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-16">
      {/* Backdrop */}
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-20%] h-[60vh] w-[80vw] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--glow), transparent 70%)" }}
      />

      <div className="container-x relative">
        <motion.div {...fadeUp(0.1)} className="mb-8 flex items-center gap-3">
          {site.availableForWork && (
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-fg-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new projects
            </span>
          )}
          <span className="hidden font-mono text-xs text-fg-subtle sm:inline">{site.location}</span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-balance text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.03em]"
        >
          {site.name}
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-4 text-[clamp(1.125rem,2.6vw,1.75rem)] font-medium tracking-tight text-fg-muted"
        >
          {site.role}
        </motion.p>

        <motion.p {...fadeUp(0.4)} className="text-pretty mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
          I build{" "}
          <motion.span
            layout
            transition={{ layout: { duration: 0.45, ease } }}
            className="relative inline-flex overflow-hidden align-baseline text-fg"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={heroWords[wordIndex]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease }}
                className="font-semibold"
              >
                {heroWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.span>{" "}
          web applications — from pixel-perfect React interfaces to the APIs and data behind them. Currently focused on
          Next.js, TypeScript and AI-powered products.
        </motion.p>

        <motion.div {...fadeUp(0.5)} className="mt-10 flex flex-wrap items-center gap-3">
          <LinkButton href="#projects" size="lg">
            View My Work
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </LinkButton>
          <LinkButton href="#contact" variant="secondary" size="lg">
            Contact Me
          </LinkButton>
          <LinkButton href={site.links.cv} variant="ghost" size="lg" download>
            <Download className="h-4 w-4" />
            Download CV
          </LinkButton>
        </motion.div>

        <motion.div {...fadeUp(0.6)} className="mt-8 flex items-center gap-5 text-sm text-fg-muted">
          <SocialLink href={site.links.github} label="GitHub" icon={<Github className="h-4 w-4" />} />
          <SocialLink href={site.links.linkedin} label="LinkedIn" icon={<Linkedin className="h-4 w-4" />} />
          <SocialLink href={`mailto:${site.email}`} label="Email" icon={<Mail className="h-4 w-4" />} plain />
        </motion.div>

        <motion.dl
          {...fadeUp(0.75)}
          className="mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3"
        >
          {heroStats.map((s) => (
            <div key={s.label} className="bg-bg px-5 py-4">
              <dt className="text-xs uppercase tracking-wider text-fg-subtle">{s.label}</dt>
              <dd className="mt-1 text-lg font-semibold tracking-tight">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-fg-subtle md:flex"
      >
        <span className="font-mono">scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-line-strong">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-fg"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}

function SocialLink({
  href,
  label,
  icon,
  plain,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  plain?: boolean;
}) {
  return (
    <a
      href={href}
      {...(plain ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className="group inline-flex items-center gap-2 transition-colors hover:text-fg"
    >
      {icon}
      <span className="link-underline">{label}</span>
      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
    </a>
  );
}
