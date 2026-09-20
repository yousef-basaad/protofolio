"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/i18n";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cn, initials } from "@/lib/utils";

/* ---------- Cover ---------- */
function Cover({ project, priority }: { project: Project; priority?: boolean }) {
  if (project.image) {
    const contain = project.imageFit === "contain";
    return (
      <>
        {/* Neutral backdrop behind letterboxed (contain-mode) screenshots so the
            uncropped image doesn't sit on a transparent gap. No-op for "cover" images. */}
        {contain && <div aria-hidden className="absolute inset-0 bg-bg-elevated" />}
        <Image
          src={project.image}
          alt={project.imageAlt ?? `${project.title} screenshot`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={cn(
            "transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]",
            contain ? "object-contain" : "object-cover object-top",
          )}
        />
      </>
    );
  }
  // Generated cover: a faux dashboard window tinted with the project's accent colour.
  const c = project.color;
  const bars = [38, 62, 48, 80, 56, 92, 70, 64];
  return (
    <div
      className="absolute inset-0 transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
      style={{
        background: `radial-gradient(120% 90% at 15% 0%, ${c}30, transparent 60%), radial-gradient(80% 70% at 100% 100%, ${c}1f, transparent 60%), var(--bg-elevated)`,
      }}
    >
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div className="absolute inset-x-6 bottom-0 top-8 flex flex-col overflow-hidden rounded-t-xl border border-line bg-bg/75 shadow-2xl backdrop-blur sm:inset-x-10 sm:top-10">
        {/* title bar */}
        <div className="flex shrink-0 items-center gap-1.5 border-b border-line px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-fg/15" />
          <span className="h-2 w-2 rounded-full bg-fg/15" />
          <span className="h-2 w-2 rounded-full bg-fg/15" />
          <span className="ms-3 h-2.5 w-24 rounded bg-fg/8" />
          <span className="ms-auto h-4 w-4 rounded-full" style={{ background: `${c}66` }} />
        </div>
        {/* body */}
        <div className="flex min-h-0 flex-1">
          {/* sidebar */}
          <div className="hidden w-[22%] shrink-0 space-y-2 border-e border-line p-3 sm:block">
            <div className="h-2.5 w-3/4 rounded" style={{ background: `${c}99` }} />
            <div className="h-2.5 w-2/3 rounded bg-fg/8" />
            <div className="h-2.5 w-4/5 rounded bg-fg/8" />
            <div className="h-2.5 w-1/2 rounded bg-fg/8" />
          </div>
          {/* main */}
          <div className="flex min-w-0 flex-1 flex-col gap-3 p-3">
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-md border border-line p-2">
                  <div className="h-1.5 w-1/2 rounded bg-fg/8" />
                  <div className="mt-1.5 h-2.5 w-2/3 rounded" style={{ background: i === 0 ? `${c}aa` : "var(--line-strong)" }} />
                </div>
              ))}
            </div>
            <div className="flex h-28 shrink-0 items-end gap-1.5 rounded-md border border-line p-2 sm:h-36">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{ height: `${h}%`, background: i === bars.length - 3 ? `${c}cc` : `${c}40` }}
                />
              ))}
            </div>
            {/* table rows (clipped by the window on short covers) */}
            <div className="space-y-1.5">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-fg/8" />
                  <div className="h-2 flex-1 rounded bg-fg/8" />
                  <div className="h-2 w-10 rounded" style={{ background: i === 1 ? `${c}80` : "var(--line-strong)" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <span
          className="pointer-events-none absolute bottom-3 end-4 font-mono text-3xl font-semibold tracking-tighter opacity-90 sm:text-4xl"
          style={{ color: c }}
        >
          {initials(project.title)}
        </span>
      </div>
    </div>
  );
}

/* ---------- Links ---------- */
function Links({ project, compact }: { project: Project; compact?: boolean }) {
  const { dict } = useLanguage();
  const cls =
    "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-300";
  return (
    <div className={cn("flex flex-wrap gap-2", compact && "mt-4")}>
      {project.demo ? (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(cls, "border-transparent bg-fg text-bg hover:bg-accent hover:text-white")}
        >
          {dict.projects.liveDemo} <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      ) : (
        <span className={cn(cls, "cursor-default border-dashed border-line-strong text-fg-subtle")}>
          {dict.projects.demoSoon}
        </span>
      )}
      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(cls, "border-line-strong text-fg hover:border-fg")}
        >
          <Github className="h-3.5 w-3.5" /> {dict.projects.githubLabel}
        </a>
      ) : (
        <span className={cn(cls, "cursor-default border-dashed border-line-strong text-fg-subtle")}>
          <Github className="h-3.5 w-3.5" /> {dict.projects.githubPrivate}
        </span>
      )}
    </div>
  );
}

function Status({ status }: { status?: Project["status"] }) {
  const { dict } = useLanguage();
  if (!status) return null;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-muted backdrop-blur">
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          status === "live" && "bg-emerald-500",
          status === "in-progress" && "bg-amber-500",
          status === "concept" && "bg-fg-subtle",
        )}
      />
      {dict.projects.statusLabel[status]}
    </span>
  );
}

function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <li key={t} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-fg-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

/* ---------- Project card ----------
 * Single shared layout for every visible project — featured or not — so all
 * cards have identical width, height, image treatment, spacing and controls.
 * The only differences between cards come from project data itself (image,
 * title, description, tech, links, status). */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { dict } = useLanguage();
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group h-full"
    >
      <SpotlightCard className="flex h-full flex-col overflow-hidden">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
          <Cover project={project} priority={index === 0} />
          <div className="absolute start-3 top-3">
            <Status status={project.status} />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-0.5 text-sm text-fg-muted">{project.tagline}</p>
          <p className="text-pretty mt-3 text-sm leading-relaxed text-fg-muted">{project.description}</p>
          <p className="mt-3 text-sm">
            <span className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">{dict.projects.theProblem} · </span>
            <span className="text-fg-muted">{project.problem}</span>
          </p>
          {project.solution && (
            <p className="mt-1.5 text-sm">
              <span className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">{dict.projects.theSolution} · </span>
              <span className="text-fg-muted">{project.solution}</span>
            </p>
          )}
          {project.contribution && (
            <p className="mt-1.5 text-sm">
              <span className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">{dict.projects.myContribution} · </span>
              <span className="text-fg-muted">{project.contribution}</span>
            </p>
          )}
          <ul className="mt-3 space-y-1 text-sm text-fg-muted">
            {project.features.slice(0, 3).map((f) => (
              <li key={f} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-5">
            <TechList tech={project.tech} />
            <Links project={project} compact />
          </div>
        </div>
      </SpotlightCard>
    </motion.article>
  );
}
