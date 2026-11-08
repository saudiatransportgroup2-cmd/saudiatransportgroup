"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Languages } from "lucide-react";
import type { Lang } from "@/config/site";
import { href } from "@/i18n/config";
import { ButtonLink, Container, cx } from "@/components/ui/primitives";
import { Logo } from "./Logo";

export interface HeaderProps {
  lang: Lang;
  siteName: string;
  phoneDisplay: string;
  phoneHref: string;
  labels: Record<"home" | "about" | "services" | "fleet" | "contact" | "quote" | "menu" | "close" | "language" | "primary", string>;
}

export function Header({ lang, siteName, phoneDisplay, phoneHref, labels }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || `/${lang}`;
  const other: Lang = lang === "en" ? "ar" : "en";
  const otherPath = pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${other}`);

  const links = [
    { path: "", label: labels.home },
    { path: "/services", label: labels.services },
    { path: "/fleet", label: labels.fleet },
    { path: "/about", label: labels.about },
    { path: "/contact", label: labels.contact },
  ];

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (p: string) => {
    const full = href(lang, p);
    return p === "" ? pathname === full : pathname === full || pathname.startsWith(full + "/");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-900/95 text-white backdrop-blur">
      <Container className="flex h-18 items-center justify-between gap-4">
        <Link href={href(lang)} className="min-w-0 shrink" aria-label={siteName}>
          <Logo name={siteName} />
        </Link>

        <nav aria-label={labels.primary} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.path}>
                <Link
                  href={href(lang, l.path)}
                  aria-current={isActive(l.path) ? "page" : undefined}
                  className={cx(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-gold-300",
                    isActive(l.path) ? "text-gold-300" : "text-white/85",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={phoneHref} className="flex items-center gap-2 text-sm font-medium text-white/85 hover:text-gold-300" dir="ltr">
            <Phone className="size-4" aria-hidden /> {phoneDisplay}
          </a>
          <Link
            href={otherPath}
            hrefLang={other}
            lang={other}
            className="flex items-center gap-1.5 rounded-full border border-white/25 px-3 py-1.5 text-sm hover:border-gold-300 hover:text-gold-300"
          >
            <Languages className="size-4" aria-hidden /> {labels.language}
          </Link>
          <ButtonLink href={href(lang, "/get-a-quote")} className="min-h-10 px-5">
            {labels.quote}
          </ButtonLink>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <Link
            href={otherPath}
            hrefLang={other}
            lang={other}
            className="rounded-full border border-white/25 px-3 py-1.5 text-sm"
          >
            {labels.language}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? labels.close : labels.menu}
            className="grid size-11 place-items-center rounded-full border border-white/25"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </Container>

      <div id="mobile-nav" hidden={!open} className="border-t border-white/10 bg-navy-900 lg:hidden">
        <nav aria-label={labels.primary} className="mx-auto max-w-7xl px-5 pb-6 pt-2">
          <ul>
            {links.map((l) => (
              <li key={l.path} className="border-b border-white/10">
                <Link
                  href={href(lang, l.path)}
                  aria-current={isActive(l.path) ? "page" : undefined}
                  className={cx("block py-4 text-base font-medium", isActive(l.path) ? "text-gold-300" : "text-white")}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid gap-3">
            <ButtonLink href={href(lang, "/get-a-quote")}>{labels.quote}</ButtonLink>
            <ButtonLink href={phoneHref} variant="outlineLight">
              <Phone className="size-4" aria-hidden /> <span dir="ltr">{phoneDisplay}</span>
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
