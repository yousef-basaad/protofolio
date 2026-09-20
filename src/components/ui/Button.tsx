import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ease-[var(--ease-out-expo)] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-fg text-bg hover:bg-accent hover:text-white shadow-[0_0_0_1px_var(--line-strong)] hover:shadow-[0_8px_30px_-8px_var(--glow)]",
  secondary: "bg-transparent text-fg border border-line-strong hover:border-fg hover:bg-fg/5",
  ghost: "bg-transparent text-fg-muted hover:text-fg hover:bg-fg/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type Common = { variant?: Variant; size?: Size; className?: string; children: ReactNode };

type LinkButtonProps = Common & {
  href: string;
  external?: boolean;
  download?: boolean;
} & Omit<ComponentProps<"a">, "href" | "children">;

type NativeButtonProps = Common & Omit<ComponentProps<"button">, "children">;

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  external,
  download,
  ...rest
}: LinkButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const isPlainAnchor = external || download || href.startsWith("mailto:") || href.startsWith("#");

  if (isPlainAnchor) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

export function Button({ variant = "primary", size = "md", className, children, ...rest }: NativeButtonProps) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}
