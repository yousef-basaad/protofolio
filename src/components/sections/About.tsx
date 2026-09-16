import { about } from "@/data/content";
import { site } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="About me" title="Engineer by training, builder by habit." className="mb-8" />
            <Reveal delay={0.1}>
              <p className="text-pretty text-lg leading-relaxed text-fg sm:text-xl">{about.intro}</p>
            </Reveal>
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.15 + i * 0.05}>
                <p className="text-pretty mt-5 leading-relaxed text-fg-muted">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-fg-subtle">
              <span>📍 {site.location}</span>
              <span>🎓 B.E. Computer Science &amp; Engineering</span>
              <span>💬 Arabic · English</span>
            </Reveal>
          </div>

          <RevealGroup className="grid gap-3 sm:grid-cols-2" stagger={0.07}>
            {about.highlights.map((h) => (
              <RevealItem key={h.title}>
                <SpotlightCard className="h-full p-5">
                  <span className="mb-4 grid h-9 w-9 place-items-center rounded-lg bg-accent-soft text-accent">
                    <Icon name={h.icon} className="h-4 w-4" />
                  </span>
                  <h3 className="font-semibold tracking-tight">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{h.text}</p>
                </SpotlightCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
