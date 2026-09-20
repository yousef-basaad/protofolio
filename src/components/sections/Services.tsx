"use client";

import { useLanguage } from "@/i18n";
import { Icon } from "@/components/ui/Icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function Services() {
  const { dict } = useLanguage();
  return (
    <section id="services" className="scroll-mt-24 border-t border-line py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow={dict.services.eyebrow}
          title={dict.services.title}
          description={dict.services.description}
          align="center"
        />

        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {dict.services.items.map((s) => (
            <RevealItem key={s.icon} className="h-full">
              <SpotlightCard className="h-full p-6">
                <span className="mb-5 grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{s.text}</p>
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {dict.services.process.map((p) => (
            <div key={p.step} className="bg-bg p-6">
              <span className="font-mono text-xs text-accent">{p.step}</span>
              <h3 className="mt-2 font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-1 text-sm text-fg-muted">{p.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
