import {
  AppWindow,
  Database,
  Gauge,
  Globe,
  GraduationCap,
  LayoutTemplate,
  Plug,
  Puzzle,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
  type LucideProps,
} from "lucide-react";

/** Map of icon names used in the data files → Lucide components.
 *  Add a new icon here if you reference it in /src/data. */
const icons = {
  AppWindow,
  Database,
  Gauge,
  Globe,
  GraduationCap,
  LayoutTemplate,
  Plug,
  Puzzle,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
};

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = icons[name as IconName] ?? Sparkles;
  return <Cmp aria-hidden {...props} />;
}
