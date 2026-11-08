import { whatsappHref } from "./contact";

/** Build a WhatsApp enquiry link from a service title and key/value details. */
export function enquiryLink(service: string, details: Record<string, string | number | undefined | false> = {}) {
  const lines = Object.entries(details)
    .filter(([, v]) => v !== undefined && v !== "" && v !== false)
    .map(([k, v]) => `${k}: ${v}`);
  return whatsappHref([`Hello Saudi Transport Group, I would like to enquire about ${service}.`, ...lines].join("\n"));
}

export const quoteHref = (serviceSlug: string) => `/en/get-a-quote?service=${serviceSlug}`;
