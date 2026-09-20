"use client";

import { ArrowUpRight, Download, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import { site } from "@/data/site";
import { useLanguage } from "@/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";

/** "https://github.com/yousef-basaad" -> "github.com/yousef-basaad" */
const pretty = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export function Contact() {
  const { dict } = useLanguage();
  const channels = [
    { label: dict.contact.channelLabels.email, value: site.email, href: `mailto:${site.email}`, icon: Mail, external: false, download: false },
    { label: dict.contact.channelLabels.linkedin, value: pretty(site.links.linkedin), href: site.links.linkedin, icon: Linkedin, external: true, download: false },
    { label: dict.contact.channelLabels.github, value: pretty(site.links.github), href: site.links.github, icon: Github, external: true, download: false },
    { label: dict.contact.channelLabels.resume, value: dict.contact.channelLabels.resumeValue, href: site.links.cv, icon: Download, external: false, download: true },
  ];

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-24 md:py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-bg-elevated">
          <div
            aria-hidden
            className="pointer-events-none absolute -end-32 -top-32 h-96 w-96 rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(closest-side, var(--glow), transparent 70%)" }}
          />
          <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-70" />

          <div className="relative grid gap-12 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:p-14">
            <div>
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{dict.contact.eyebrow}</p>
                <h2 className="text-balance mt-3 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                  {dict.contact.heading1}
                  <br />
                  <span className="text-fg-muted">{dict.contact.headingHighlight}</span>
                </h2>
                <p className="text-pretty mt-5 max-w-md text-fg-muted">{dict.contact.subtext}</p>
              </Reveal>

              <ul className="mt-10 space-y-3">
                {channels.map((c, i) => (
                  <Reveal as="li" key={i} delay={0.1 + i * 0.06}>
                    <a
                      href={c.href}
                      {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      {...(c.download ? { download: true } : {})}
                      className="group flex items-center justify-between rounded-xl border border-line bg-bg/50 px-4 py-3 transition-all duration-300 hover:border-line-strong hover:bg-bg"
                    >
                      <span className="flex items-center gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-soft text-accent">
                          <c.icon className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-xs text-fg-subtle">{c.label}</span>
                          <span className="block text-sm font-medium">{c.value}</span>
                        </span>
                      </span>
                      {c.download ? (
                        <Download className="h-4 w-4 text-fg-subtle transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-fg" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4 text-fg-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                      )}
                    </a>
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal delay={0.15} className="surface rounded-2xl p-6 sm:p-8">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
