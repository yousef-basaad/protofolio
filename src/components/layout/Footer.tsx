import { ArrowUp, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight">{site.name}</p>
          <p className="mt-1 text-sm text-fg-muted">{site.role}</p>
          <div className="mt-5 flex items-center gap-2">
            <FooterLink href={site.links.github} label="GitHub" external>
              <Github className="h-4 w-4" />
            </FooterLink>
            <FooterLink href={site.links.linkedin} label="LinkedIn" external>
              <Linkedin className="h-4 w-4" />
            </FooterLink>
            <FooterLink href={`mailto:${site.email}`} label="Email">
              <Mail className="h-4 w-4" />
            </FooterLink>
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg-muted">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} className="link-underline hover:text-fg">
              {n.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-5 text-xs text-fg-subtle sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="font-mono">Built with Next.js · TypeScript · Tailwind</p>
            <a
              href="#top"
              aria-label="Back to top"
              className="grid h-8 w-8 place-items-center rounded-full border border-line transition-colors hover:border-line-strong hover:text-fg"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="grid h-9 w-9 place-items-center rounded-full border border-line text-fg-muted transition-all hover:-translate-y-0.5 hover:border-line-strong hover:text-fg"
    >
      {children}
    </a>
  );
}
