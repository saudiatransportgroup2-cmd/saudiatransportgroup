import type { Metadata } from "next";
import { site, type Lang } from "@/config/site";
import { href } from "@/i18n/config";

export const absoluteUrl = (path: string) => `${site.url}${path}`;

interface Args {
  lang: Lang;
  /** Path without language prefix, e.g. "/fleet" or "" for home. */
  path?: string;
  title: string;
  description: string;
  /** Use the title as-is without the site-name suffix. */
  absoluteTitle?: boolean;
}

export function buildMetadata({ lang, path = "", title, description, absoluteTitle }: Args): Metadata {
  const url = absoluteUrl(href(lang, path));
  const other: Lang = lang === "en" ? "ar" : "en";
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name[lang]}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: absoluteUrl(href("en", path)),
        ar: absoluteUrl(href("ar", path)),
        "x-default": absoluteUrl(href("en", path)),
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: site.name[lang],
      title: fullTitle,
      description,
      locale: lang === "ar" ? "ar_SA" : "en_SA",
      alternateLocale: other === "ar" ? "ar_SA" : "en_SA",
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}

/** Metadata for the English-only pages that live outside /[lang] (the eight service pages). */
export function buildPageMetadata({ path, title, description }: { path: string; title: string; description: string }): Metadata {
  const url = absoluteUrl(path);
  const full = `${title} | ${site.name.en}`;
  return {
    title: { absolute: full },
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", url, siteName: site.name.en, title: full, description, locale: "en_SA" },
    twitter: { card: "summary_large_image", title: full, description },
  };
}
