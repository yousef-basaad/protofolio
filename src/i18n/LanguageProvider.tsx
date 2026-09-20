"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { en } from "./en";
import { ar } from "./ar";
import type { Dictionary, Locale } from "./types";

const dictionaries: Record<Locale, Dictionary> = { en, ar };

const STORAGE_KEY = "locale";
const defaultLocale: Locale = "en";

type LanguageContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  dict: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function dirFor(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with the default locale so server and first client render match exactly.
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // After mount, apply any saved preference. This runs once and only on the client,
  // so it never causes a server/client markup mismatch.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "ar") setLocaleState(saved);
    } catch {
      // localStorage can throw in private mode / blocked storage — default locale stays.
    }
  }, []);

  // Keep <html lang/dir> and the persisted preference in sync via direct DOM
  // mutation (not React-rendered attributes), the same safe pattern next-themes
  // uses for the `class` attribute — this never triggers a hydration warning.
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dirFor(locale);
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // Non-fatal: language switching still works for the current session.
    }
  }, [locale]);

  const value: LanguageContextValue = {
    locale,
    dir: dirFor(locale),
    dict: dictionaries[locale],
    setLocale: setLocaleState,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
