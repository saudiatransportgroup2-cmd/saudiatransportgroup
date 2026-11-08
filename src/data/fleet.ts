import type { L10n } from "@/config/site";

export type VehicleKind = "sedan" | "suv" | "luxury" | "van" | "minibus" | "bus";

export interface Vehicle {
  id: VehicleKind;
  name: L10n;
  desc: L10n;
  /** Typical capacity — confirmed per booking. */
  passengers: string;
  luggage: L10n;
  bestFor: L10n;
  /** Optional real photo path under /public. When set, it replaces the illustration. */
  image?: string;
}

export const fleet: Vehicle[] = [
  {
    id: "sedan",
    name: { en: "Sedan", ar: "سيدان" },
    desc: { en: "Comfortable private car for solo travellers and couples.", ar: "سيارة خاصة مريحة للمسافرين الأفراد والأزواج." },
    passengers: "1–3",
    luggage: { en: "2–3 bags", ar: "2–3 حقائب" },
    bestFor: { en: "Airport transfers, city rides", ar: "التوصيل من المطار والتنقل داخل المدينة" },
  },
  {
    id: "suv",
    name: { en: "Family SUV", ar: "دفع رباعي عائلي" },
    desc: { en: "Spacious SUV with extra luggage room for families.", ar: "سيارة دفع رباعي واسعة بمساحة أمتعة إضافية للعائلات." },
    passengers: "1–6",
    luggage: { en: "4–5 bags", ar: "4–5 حقائب" },
    bestFor: { en: "Families, intercity travel", ar: "العائلات والتنقل بين المدن" },
  },
  {
    id: "luxury",
    name: { en: "Luxury / VIP", ar: "فاخرة / كبار الشخصيات" },
    desc: { en: "Premium sedans and SUVs for executives and special guests.", ar: "سيدان ودفع رباعي فاخرة للتنفيذيين والضيوف المميزين." },
    passengers: "1–4",
    luggage: { en: "2–4 bags", ar: "2–4 حقائب" },
    bestFor: { en: "Corporate, VIP and chauffeur service", ar: "الشركات وكبار الشخصيات والسائق الخاص" },
  },
  {
    id: "van",
    name: { en: "Passenger Van", ar: "فان ركاب" },
    desc: { en: "Roomy van for larger families and small groups.", ar: "فان واسع للعائلات الكبيرة والمجموعات الصغيرة." },
    passengers: "5–10",
    luggage: { en: "6–10 bags", ar: "6–10 حقائب" },
    bestFor: { en: "Umrah families, small groups", ar: "عائلات العمرة والمجموعات الصغيرة" },
  },
  {
    id: "minibus",
    name: { en: "Minibus", ar: "حافلة صغيرة" },
    desc: { en: "Mid-size coach for medium groups and tours.", ar: "حافلة متوسطة للمجموعات المتوسطة والجولات." },
    passengers: "11–25",
    luggage: { en: "Group luggage", ar: "أمتعة المجموعة" },
    bestFor: { en: "Pilgrim groups, ziyarat tours", ar: "مجموعات المعتمرين وجولات الزيارات" },
  },
  {
    id: "bus",
    name: { en: "Coach / Bus", ar: "حافلة كبيرة" },
    desc: { en: "Full-size coach for large Umrah groups and delegations.", ar: "حافلة كبيرة لمجموعات العمرة والوفود الكبيرة." },
    passengers: "26–50",
    luggage: { en: "Large group luggage", ar: "أمتعة المجموعات الكبيرة" },
    bestFor: { en: "Large groups, events, delegations", ar: "المجموعات الكبيرة والفعاليات والوفود" },
  },
];
