"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { useLanguage } from "@/i18n";
import { ThemeToggle } from "./ThemeToggle";
import { LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n";

function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, dict } = useLanguage();
  const options: { code: Locale; label: string; display: string }[] = [
    { code: "en", label: dict.common.englishLabel, display: "EN" },
    { code: "ar", label: dict.common.arabicLabel, display: "AR" },
  ];
  return (
    <div
      role="group"
      aria-label={dict.common.languageSwitcherLabel}
      className={cn("flex items-center gap-0.5 rounded-full border border-line p-0.5", className)}
    >
      {options.map((opt) => (
        <button
          key={opt.code}
          type="button"
          onClick={() => setLocale(opt.code)}
          aria-pressed={locale === opt.code}
          aria-label={opt.label}
          className={cn(
            "rounded-full px-2.5 py-1 font-mono text-xs transition-colors",
            locale === opt.code ? "bg-fg text-bg" : "text-fg-muted hover:text-fg",
          )}
        >
          {opt.display}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const { dict } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = dict.nav.links.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [dict.nav.links]);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          aria-label={dict.nav.primaryLabel}
          className={cn(
            "flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2 transition-all duration-500 ease-[var(--ease-out-expo)] sm:px-5",
            scrolled
              ? "border-line bg-bg/70 shadow-[var(--shadow)] backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <Link href="#top" className="flex items-center gap-2 font-semibold tracking-tight" aria-label={dict.common.backToTopLabel}>
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-fg text-bg font-mono text-xs">
              {site.firstName[0]}
            </span>
            <span className="hidden sm:inline">{site.name}</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {dict.nav.links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-sm transition-colors",
                    active === item.href ? "text-fg" : "text-fg-muted hover:text-fg",
                  )}
                >
                  {active === item.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-fg/6"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <LanguageSwitcher className="max-[380px]:hidden" />
            <ThemeToggle />
            <LinkButton href="#contact" size="sm" className="max-md:hidden">
              {dict.nav.talk}
            </LinkButton>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={dict.nav.toggleMenu}
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-fg md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex h-full flex-col items-center justify-center gap-2">
              {dict.nav.links.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-3 text-3xl font-semibold tracking-tight text-fg-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <LanguageSwitcher className="mt-2" />
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="mt-4"
              >
                <LinkButton href="#contact" size="lg" onClick={() => setOpen(false)}>
                  {dict.nav.talk}
                </LinkButton>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
