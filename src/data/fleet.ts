import type { L10n } from "@/config/site";

export type VehicleKind = "sedan" | "suv" | "luxury" | "van" | "minibus" | "bus";

export interface Vehicle {
  id: VehicleKind;
  name: L10n;
  desc: L10n;
  /** Who the category suits. Seat counts are only shown once verified (see config/fleetVerified.ts). */
  group: L10n;
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
    group: { en: "Individuals and couples", ar: "أفراد وأزواج" },
    luggage: { en: "Light to normal luggage", ar: "أمتعة خفيفة إلى عادية" },
    bestFor: { en: "Airport transfers, city rides", ar: "التوصيل من المطار والتنقل داخل المدينة" },
  },
  {
    id: "suv",
    name: { en: "Family SUV", ar: "دفع رباعي عائلي" },
    desc: { en: "Spacious SUV with extra luggage room for families.", ar: "سيارة دفع رباعي واسعة بمساحة أمتعة إضافية للعائلات." },
    group: { en: "Families", ar: "عائلات" },
    luggage: { en: "Several bags", ar: "عدة حقائب" },
    bestFor: { en: "Families, intercity travel", ar: "العائلات والتنقل بين المدن" },
  },
  {
    id: "luxury",
    name: { en: "Luxury / VIP", ar: "فاخرة / كبار الشخصيات" },
    desc: { en: "Premium sedans and SUVs for executives and special guests.", ar: "سيدان ودفع رباعي فاخرة للتنفيذيين والضيوف المميزين." },
    group: { en: "Executives and VIP guests", ar: "تنفيذيون وكبار الشخصيات" },
    luggage: { en: "Light to normal luggage", ar: "أمتعة خفيفة إلى عادية" },
    bestFor: { en: "Corporate, VIP and chauffeur service", ar: "الشركات وكبار الشخصيات والسائق الخاص" },
  },
  {
    id: "van",
    name: { en: "Passenger Van", ar: "فان ركاب" },
    desc: { en: "Roomy van for larger families and small groups.", ar: "فان واسع للعائلات الكبيرة والمجموعات الصغيرة." },
    group: { en: "Larger families and small groups", ar: "عائلات كبيرة ومجموعات صغيرة" },
    luggage: { en: "Substantial luggage", ar: "أمتعة كثيرة" },
    bestFor: { en: "Umrah families, small groups", ar: "عائلات العمرة والمجموعات الصغيرة" },
  },
  {
    id: "minibus",
    name: { en: "Minibus", ar: "حافلة صغيرة" },
    desc: { en: "Mid-size coach for medium groups and tours.", ar: "حافلة متوسطة للمجموعات المتوسطة والجولات." },
    group: { en: "Medium-sized groups", ar: "مجموعات متوسطة" },
    luggage: { en: "Group luggage", ar: "أمتعة المجموعة" },
    bestFor: { en: "Pilgrim groups, ziyarat tours", ar: "مجموعات المعتمرين وجولات الزيارات" },
  },
  {
    id: "bus",
    name: { en: "Coach / Bus", ar: "حافلة كبيرة" },
    desc: { en: "Full-size coach for large Umrah groups and delegations.", ar: "حافلة كبيرة لمجموعات العمرة والوفود الكبيرة." },
    group: { en: "Large groups", ar: "مجموعات كبيرة" },
    luggage: { en: "Large group luggage", ar: "أمتعة المجموعات الكبيرة" },
    bestFor: { en: "Large groups, events, delegations", ar: "المجموعات الكبيرة والفعاليات والوفود" },
  },
];
