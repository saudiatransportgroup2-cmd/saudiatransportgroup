import type { L10n } from "@/config/site";

export type ServiceIcon = "plane" | "map" | "kaaba" | "calendar" | "bus" | "users" | "route" | "user";

/**
 * Index of the eight hand-built service pages. Used only for navigation, cards,
 * the sitemap and the enquiry form's service list — page content lives with each page.
 */
export interface ServiceLink {
  slug: string;
  /** Absolute path of the page (English-only pages sit outside /[lang]). */
  href: string;
  icon: ServiceIcon;
  title: L10n;
  short: L10n;
}

export const services: ServiceLink[] = [
  {
    slug: "airport-transfers",
    href: "/services/airport-transfers",
    icon: "plane",
    title: { en: "Airport Transfers", ar: "التوصيل من وإلى المطار" },
    short: {
      en: "Private pickups and drop-offs between Saudi airports, hotels and homes.",
      ar: "استقبال وتوصيل خاص بين مطارات المملكة والفنادق والمنازل.",
    },
  },
  {
    slug: "city-tours-with-private-driver",
    href: "/services/city-tours-with-private-driver",
    icon: "map",
    title: { en: "City Tours with Private Driver", ar: "جولات المدن مع سائق خاص" },
    short: {
      en: "Explore Riyadh, Jeddah, Makkah, Madinah and the Eastern Province at your own pace.",
      ar: "استكشف الرياض وجدة ومكة المكرمة والمدينة المنورة والمنطقة الشرقية بوقتك.",
    },
  },
  {
    slug: "vip-hajj-umrah-transfers",
    href: "/services/vip-hajj-umrah-transfers",
    icon: "kaaba",
    title: { en: "VIP Hajj & Umrah Transfers", ar: "نقل الحج والعمرة VIP" },
    short: {
      en: "Comfortable private transport for pilgrims between Jeddah, Makkah and Madinah.",
      ar: "نقل خاص ومريح للمعتمرين بين جدة ومكة المكرمة والمدينة المنورة.",
    },
  },
  {
    slug: "event-transportation",
    href: "/services/event-transportation",
    icon: "calendar",
    title: { en: "Event Transportation", ar: "النقل للفعاليات" },
    short: {
      en: "Coordinated transport for weddings, conferences, exhibitions and corporate events.",
      ar: "نقل منسق لحفلات الزفاف والمؤتمرات والمعارض وفعاليات الشركات.",
    },
  },
  {
    slug: "bus-coach-rental-with-driver",
    href: "/services/bus-coach-rental-with-driver",
    icon: "bus",
    title: { en: "Bus & Coach Rental with Driver", ar: "تأجير الحافلات مع سائق" },
    short: {
      en: "Private buses and coaches for corporate, school, tourist and pilgrim groups.",
      ar: "حافلات خاصة لمجموعات الشركات والمدارس والسياح والمعتمرين.",
    },
  },
  {
    slug: "group-transfers",
    href: "/services/group-transfers",
    icon: "users",
    title: { en: "Group Transfers", ar: "التوصيل للمجموعات" },
    short: {
      en: "Organised transport for families, tourists and pilgrim groups, planned as one booking.",
      ar: "نقل منظم للعائلات والسياح والمعتمرين، يُخطط له كحجز واحد.",
    },
  },
  {
    slug: "city-to-city-transfer",
    href: "/services/city-to-city-transfer",
    icon: "route",
    title: { en: "City-to-City Transfers", ar: "التنقل بين المدن" },
    short: {
      en: "Private intercity travel across Saudi Arabia and selected GCC destinations.",
      ar: "رحلات خاصة بين المدن في المملكة ووجهات مختارة في دول الخليج.",
    },
  },
  {
    slug: "private-chauffeur-hire",
    href: "/private-chauffeur-hire",
    icon: "user",
    title: { en: "Private Chauffeur Hire", ar: "تأجير سائق خاص" },
    short: {
      en: "A dedicated driver and vehicle by the hour, day or week for business and personal travel.",
      ar: "سائق ومركبة مخصصان بالساعة أو اليوم أو الأسبوع لرحلات العمل والرحلات الشخصية.",
    },
  },
];
