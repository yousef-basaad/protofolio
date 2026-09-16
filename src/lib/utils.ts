/** Tiny className joiner — avoids pulling in clsx/tailwind-merge for one job. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** "AI Fitness Coach" -> "AF" — used for generated project covers. */
export function initials(title: string, max = 2) {
  return title
    .replace(/\[|\]/g, "")
    .split(/\s|—|-/)
    .filter(Boolean)
    .slice(0, max)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}
