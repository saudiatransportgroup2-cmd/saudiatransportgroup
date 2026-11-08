/**
 * Single source of truth for business details.
 * Edit here only — every page, schema and form reads from this file.
 */
export const site = {
  domain: "saudiatransportgroup.com",
  url: "https://saudiatransportgroup.com",
  name: { en: "Saudi Transport Group", ar: "المجموعة السعودية للنقل" },
  phone: { display: "+966 57 580 6733", tel: "+966575806733" },
  /** WhatsApp number in international format, digits only. */
  whatsapp: "966575806733",
  /** TODO: confirm the real inbox. Placeholder until the owner supplies it. */
  email: "info@saudiatransportgroup.com",
  /** Add a verified street address here to include it in LocalBusiness schema. */
  address: null as null | { street: string; city: string; country: string },
  hours: "24/7",
  /** Add only real, verified profile URLs. */
  social: [] as string[],
  areaServed: ["Saudi Arabia", "Makkah", "Madinah", "Jeddah", "Riyadh", "GCC"],
};

export type Lang = "en" | "ar";
export type L10n = { en: string; ar: string };
