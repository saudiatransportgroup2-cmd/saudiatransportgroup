import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Section({
  tone = "white",
  className,
  children,
  id,
  labelledBy,
}: {
  tone?: "white" | "soft" | "navy";
  className?: string;
  children: ReactNode;
  id?: string;
  labelledBy?: string;
}) {
  const tones = {
    white: "bg-white text-navy-900",
    soft: "bg-navy-50 text-navy-900",
    navy: "bg-navy-900 text-white",
  } as const;
  return (
    <section id={id} aria-labelledby={labelledBy} className={cx("py-16 sm:py-24", tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  align = "start",
  invert,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  id?: string;
  align?: "start" | "center";
  invert?: boolean;
}) {
  return (
    <div className={cx("reveal mb-10 max-w-3xl sm:mb-14", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">{eyebrow}</p>
      )}
      <h2 id={id} className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      <span className={cx("mt-4 block h-0.5 w-14 bg-gold-500", align === "center" && "mx-auto")} aria-hidden />
      {lead && <p className={cx("mt-5 text-base leading-relaxed sm:text-lg", invert ? "text-white/75" : "text-navy-700")}>{lead}</p>}
    </div>
  );
}

type Variant = "primary" | "navy" | "outline" | "outlineLight" | "whatsapp";

const variants: Record<Variant, string> = {
  primary: "bg-gold-500 text-navy-950 hover:bg-gold-400",
  navy: "bg-navy-900 text-white hover:bg-navy-700",
  outline: "border border-navy-900/25 text-navy-900 hover:border-navy-900 hover:bg-navy-50",
  outlineLight: "border border-white/40 text-white hover:border-white hover:bg-white/10",
  whatsapp: "bg-[#15803d] text-white hover:bg-[#166534]",
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors duration-200";

export function ButtonLink({
  variant = "primary",
  arrow,
  className,
  external,
  href,
  children,
  ...rest
}: Omit<ComponentProps<"a">, "href"> & { variant?: Variant; arrow?: boolean; external?: boolean; href: string }) {
  const cls = cx(base, variants[variant], className);
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />}
    </>
  );
  if (external || /^(https?:|tel:|mailto:)/.test(href)) {
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}
