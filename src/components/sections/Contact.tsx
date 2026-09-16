import { ArrowUpRight, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";

/** "https://github.com/yousef-basaad" -> "github.com/yousef-basaad" */
const pretty = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail, external: false },
  { label: "LinkedIn", value: pretty(site.links.linkedin), href: site.links.linkedin, icon: Linkedin, external: true },
  { label: "GitHub", value: pretty(site.links.github), href: site.links.github, icon: Github, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-24 md:py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-bg-elevated">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(closest-side, var(--glow), transparent 70%)" }}
          />
          <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-70" />

          <div className="relative grid gap-12 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:p-14">
            <div>
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
                <h2 className="text-balance mt-3 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                  Have a project in mind?
                  <br />
                  <span className="text-fg-muted">Let&apos;s build something great.</span>
                </h2>
                <p className="text-pretty mt-5 max-w-md text-fg-muted">
                  I&apos;m open to full-time roles, freelance projects and collaborations. Tell me what you&apos;re
                  building and I&apos;ll get back to you within a day.
                </p>
              </Reveal>

              <ul className="mt-10 space-y-3">
                {channels.map((c, i) => (
                  <Reveal as="li" key={c.label} delay={0.1 + i * 0.06}>
                    <a
                      href={c.href}
                      {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
                      <ArrowUpRight className="h-4 w-4 text-fg-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
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
