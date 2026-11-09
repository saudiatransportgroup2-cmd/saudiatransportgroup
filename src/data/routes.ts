import type { L10n } from "@/config/site";

/** The three hand-written route guides, for home-page cards. Not a page generator. */
export interface RouteLink {
  href: string;
  title: L10n;
  blurb: L10n;
}

export const routeLinks: RouteLink[] = [
  {
    href: "/routes/jeddah-airport-to-makkah",
    title: { en: "Jeddah Airport to Makkah", ar: "مطار جدة إلى مكة المكرمة" },
    blurb: {
      en: "From landing to your hotel lobby, with a plan for luggage, timing and the last stretch.",
      ar: "من الوصول إلى مدخل فندقك، مع خطة للأمتعة والتوقيت والمسافة الأخيرة.",
    },
  },
  {
    href: "/routes/makkah-to-madinah",
    title: { en: "Makkah to Madinah", ar: "مكة المكرمة إلى المدينة المنورة" },
    blurb: {
      en: "A departure-day plan, prayer stops, and an honest comparison with the high-speed train.",
      ar: "خطة ليوم المغادرة وتوقفات للصلاة ومقارنة صريحة مع القطار السريع.",
    },
  },
  {
    href: "/routes/madinah-airport-to-hotel",
    title: { en: "Madinah Airport to your hotel", ar: "مطار المدينة إلى فندقك" },
    blurb: {
      en: "What makes a Madinah arrival different, and how to reach your hotel calmly.",
      ar: "ما الذي يميز الوصول إلى المدينة، وكيف تصل إلى فندقك بهدوء.",
    },
  },
];
