import { services } from "@/data/services";
import { fleet } from "@/data/fleet";

export interface EnquiryInput {
  name: string;
  phone: string;
  email: string;
  service: string;
  vehicle: string;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  passengers: string;
  luggage: string;
  notes: string;
  /** Honeypot — must stay empty. */
  website: string;
}

export type FieldErrors = Partial<Record<keyof EnquiryInput, "required" | "phone" | "email">>;

export const emptyEnquiry: EnquiryInput = {
  name: "", phone: "", email: "", service: "", vehicle: "", pickup: "", dropoff: "",
  date: "", time: "", passengers: "", luggage: "", notes: "", website: "",
};

export const serviceOptions = services.map((s) => s.slug);
export const vehicleOptions = fleet.map((v) => v.id as string);

export function validateEnquiry(v: EnquiryInput): FieldErrors {
  const e: FieldErrors = {};
  if (v.name.trim().length < 2) e.name = "required";
  const digits = v.phone.replace(/\D/g, "");
  if (!v.phone.trim()) e.phone = "required";
  else if (digits.length < 8 || digits.length > 15 || !/^[+\d\s()-]+$/.test(v.phone)) e.phone = "phone";
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "email";
  if (!v.service) e.service = "required";
  if (!v.pickup.trim()) e.pickup = "required";
  return e;
}

/** Trim + length-cap every field (used server-side before forwarding). */
export function sanitizeEnquiry(raw: unknown): EnquiryInput {
  const out = { ...emptyEnquiry };
  if (raw && typeof raw === "object") {
    for (const k of Object.keys(out) as (keyof EnquiryInput)[]) {
      const val = (raw as Record<string, unknown>)[k];
      out[k] = typeof val === "string" ? val.trim().slice(0, k === "notes" ? 1000 : 200) : "";
    }
  }
  return out;
}
