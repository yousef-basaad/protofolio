"use client";

import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { useLanguage } from "@/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const { dict } = useLanguage();
  // `featured` only controls ordering here (AI Fitness Coach stays first) —
  // every visible project renders through the same ProjectCard layout.
  const visible = dict.projects.items
    .filter((p) => !p.archived)
    .sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

  return (
    <section id="projects" className="scroll-mt-24 border-t border-line py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={dict.projects.eyebrow}
            title={dict.projects.title}
            description={dict.projects.description}
            className="mb-0"
          />
          <Reveal delay={0.2} className="shrink-0">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
            >
              <span className="link-underline">{dict.projects.moreOnGithub}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
          {visible.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
