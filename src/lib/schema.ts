import { site, type Lang } from "@/config/site";
import { absoluteUrl } from "./metadata";

/** Site-wide LocalBusiness (TaxiService is a LocalBusiness subtype). No ratings or reviews are asserted. */
export function localBusinessSchema(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "@id": `${site.url}/#business`,
    name: site.name[lang],
    alternateName: lang === "en" ? site.name.ar : site.name.en,
    url: site.url,
    telephone: site.phone.tel,
    email: site.email,
    priceRange: "$$",
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
    availableLanguage: ["English", "Arabic"],
    ...(site.address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressCountry: site.address.country,
      },
    }),
    ...(site.social.length && { sameAs: site.social }),
  };
}

export function serviceSchema(s: { name: string; description: string; path: string; serviceType: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    url: absoluteUrl(s.path),
    serviceType: s.serviceType,
    provider: { "@id": `${site.url}/#business` },
    areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}
