import { skillGroups } from "@/data/content";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const marquee = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Supabase",
  "REST APIs", "Framer Motion", "Git", "Vite", "Gemini API", "Responsive Design", "Accessibility",
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-line py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          title="A modern, production-ready toolkit."
          description="The technologies I reach for to ship real products — grouped by where they live in the stack."
        />

        <RevealGroup className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2" stagger={0.1}>
          {skillGroups.map((group, i) => (
            <RevealItem key={group.title} className="bg-bg">
              <div className="h-full p-6 sm:p-8">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
                  <span className="font-mono text-xs text-fg-subtle">0{i + 1}</span>
                </div>
                <p className="mt-1 text-sm text-fg-muted">{group.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((s) => {
                    const placeholder = s.name.startsWith("[");
                    return (
                      <li
                        key={s.name}
                        title={s.note}
                        className={cn(
                          "rounded-full border px-3 py-1.5 text-sm transition-colors duration-300",
                          placeholder
                            ? "border-dashed border-line-strong text-fg-subtle"
                            : "border-line bg-card text-fg hover:border-accent hover:text-accent",
                        )}
                      >
                        {s.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      {/* Marquee */}
      <div
        aria-hidden
        className="mt-16 overflow-hidden border-y border-line py-4 [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]"
      >
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap hover:[animation-play-state:paused]">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i} className="flex items-center gap-10 font-mono text-sm uppercase tracking-widest text-fg-subtle">
              {item}
              <span className="h-1 w-1 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
