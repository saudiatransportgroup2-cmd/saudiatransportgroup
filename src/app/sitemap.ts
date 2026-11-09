import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { href, locales } from "@/i18n/config";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const localized = ["", "/about", "/services", "/fleet", "/contact", "/get-a-quote"].flatMap((p) =>
    locales.map((lang) => ({
      url: `${site.url}${href(lang, p)}`,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.7,
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${site.url}${href(l, p)}`])) },
    })),
  );
  // The eight English-only service pages live outside /[lang].
  const servicePages = services.map((s) => ({
    url: `${site.url}${s.href}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  // Hand-written route guides and the agencies page.
  const extra = ["/routes/jeddah-airport-to-makkah", "/routes/makkah-to-madinah", "/routes/madinah-airport-to-hotel", "/agencies", "/umrah-trip-planner", "/driver-card"].map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: 0.7 }));
  const legal = ["/privacy", "/terms"].map((p) => ({ url: `${site.url}${p}`, changeFrequency: "yearly" as const, priority: 0.3 }));
  return [...localized, ...servicePages, ...extra, ...legal];
}
