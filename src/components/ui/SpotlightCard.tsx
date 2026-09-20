"use client";

import { useCallback, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** A surface card with a cursor-following radial glow. */
export function SpotlightCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const onMove = useCallback((e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);

  return (
    <Tag
      onMouseMove={onMove}
      className={cn(
        "surface spotlight rounded-2xl transition-all duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-line-strong",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
