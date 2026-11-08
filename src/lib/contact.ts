import { site } from "@/config/site";

export const telHref = `tel:${site.phone.tel}`;
export const mailHref = `mailto:${site.email}`;

/** wa.me link with an optional prefilled message. */
export function whatsappHref(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const defaultWhatsappMessage = {
  en: "Hello Saudi Transport Group, I would like to book transport.",
  ar: "السلام عليكم، أرغب في حجز خدمة نقل.",
};
