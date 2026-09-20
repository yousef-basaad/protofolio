"use client";

import { Briefcase, FolderGit2, GraduationCap } from "lucide-react";
import { useLanguage } from "@/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const typeIcon = {
  work: Briefcase,
  training: GraduationCap,
  project: FolderGit2,
};

export function Experience() {
  const { dict } = useLanguage();
  return (
    <section id="experience" className="scroll-mt-24 border-t border-line py-24 md:py-32">
      <div className="container-x grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        {/* Experience timeline */}
        <div>
          <SectionHeading eyebrow={dict.experience.eyebrow} title={dict.experience.title} />
          <ol className="relative border-s border-line ps-8">
            {dict.experience.items.map((item, i) => {
              const Icon = typeIcon[item.type];
              const placeholder = item.role.startsWith("[");
              return (
                <Reveal as="li" key={i} delay={i * 0.08} className="relative pb-12 last:pb-0">
                  <span
                    className={cn(
                      "absolute -start-[calc(2rem+13px)] top-0.5 grid h-[26px] w-[26px] place-items-center rounded-full border bg-bg",
                      placeholder ? "border-dashed border-line-strong text-fg-subtle" : "border-line text-accent",
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className={cn("text-lg font-semibold tracking-tight", placeholder && "text-fg-subtle")}>
                      {item.role}
                    </h3>
                    <span className="font-mono text-xs text-fg-subtle">{item.period}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-fg-muted">
                    {item.companyUrl ? (
                      <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-fg">
                        {item.company}
                      </a>
                    ) : (
                      item.company
                    )}
                    {item.location && <span className="text-fg-subtle"> · {item.location}</span>}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-fg-muted">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {item.tech && (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <li key={t} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-fg-muted">
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              );
            })}
          </ol>
        </div>

        {/* Education */}
        <div id="education" className="scroll-mt-24">
          <SectionHeading eyebrow={dict.education.eyebrow} title={dict.education.title} />
          <div className="space-y-4">
            {dict.education.items.map((e) => (
              <Reveal key={e.school} className="surface rounded-2xl p-6">
                <span className="mb-4 grid h-9 w-9 place-items-center rounded-lg bg-accent-soft text-accent">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight">{e.degree}</h3>
                <p className="mt-1 text-sm text-fg-muted">
                  {e.school} · {e.location}
                </p>
                <p className="mt-1 font-mono text-xs text-fg-subtle">{e.period}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-fg-muted">
                  {e.details.map((d) => (
                    <li key={d} className={cn(d.startsWith("[") && "text-fg-subtle")}>
                      {d}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
