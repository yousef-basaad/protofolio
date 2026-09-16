import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: Props) {
  return (
    <Reveal className={cn("mb-12 md:mb-16", align === "center" && "text-center mx-auto", className)}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
        <span aria-hidden className="inline-block w-6 h-px bg-accent align-middle mr-3" />
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className={cn("text-pretty mt-4 max-w-2xl text-base sm:text-lg text-fg-muted", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
