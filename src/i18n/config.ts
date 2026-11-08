import type { Lang } from "@/config/site";

export const locales: Lang[] = ["en", "ar"];
export const defaultLocale: Lang = "en";
export const dir = (lang: Lang) => (lang === "ar" ? "rtl" : "ltr");
export const isLang = (v: string): v is Lang => (locales as string[]).includes(v);

/** Build a localized internal path: href("ar", "/fleet") -> "/ar/fleet" */
export const href = (lang: Lang, path = "") => `/${lang}${path === "/" ? "" : path}`;
