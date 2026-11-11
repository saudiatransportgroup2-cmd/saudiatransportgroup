"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import type { Lang } from "@/config/site";
import type { Dict } from "@/i18n/dictionaries";
import { emptyEnquiry, validateEnquiry, type EnquiryInput, type FieldErrors } from "@/lib/validation";
import { whatsappHref } from "@/lib/contact";
import { cx } from "@/components/ui/primitives";

interface Option { value: string; label: string }

interface Props {
  lang: Lang;
  t: Dict["form"];
  services: Option[];
  vehicles: Option[];
  /** Compact variant hides the less-essential fields (used on the Contact page). */
  compact?: boolean;
}

/** WhatsApp message is always composed in English so dispatchers can read it. */
function composeMessage(v: EnquiryInput, serviceLabel: string, vehicleLabel: string) {
  const rows: [string, string][] = [
    ["Name", v.name], ["Phone", v.phone], ["Email", v.email], ["Service", serviceLabel],
    ["Vehicle", vehicleLabel], ["Pickup", v.pickup], ["Drop-off", v.dropoff],
    ["Date", v.date], ["Time", v.time], ["Passengers", v.passengers], ["Bags", v.luggage], ["Notes", v.notes],
  ];
  return ["Hello Saudi Transport Group, I would like a quote:", ...rows.filter(([, val]) => val).map(([k, val]) => `${k}: ${val}`)].join("\n");
}

export function EnquiryForm({ lang, t, services, vehicles, compact }: Props) {
  const uid = useId();
  const [values, setValues] = useState<EnquiryInput>(emptyEnquiry);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "failed">("idle");
  const [waLink, setWaLink] = useState("");

  // Prefill from ?service= / ?vehicle= (set by cards across the site).
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const service = q.get("service") ?? "";
    const vehicle = q.get("vehicle") ?? "";
    setValues((v) => ({
      ...v,
      service: services.some((s) => s.value === service) ? service : v.service,
      vehicle: vehicles.some((s) => s.value === vehicle) ? vehicle : v.vehicle,
    }));
  }, [services, vehicles]);

  const set = (k: keyof EnquiryInput) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const errText = (k: keyof EnquiryInput) => {
    const e = errors[k];
    return e === "phone" ? t.invalidPhone : e === "email" ? t.invalidEmail : e ? t.required : "";
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (values.website) return; // honeypot
    const found = validateEnquiry(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus("idle");
      document.getElementById(`${uid}-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    setStatus("sending");
    const label = (opts: Option[], val: string) => opts.find((o) => o.value === val)?.label ?? "";
    const link = whatsappHref(composeMessage(values, label(services, values.service), label(vehicles, values.vehicle)));
    setWaLink(link);
    // Open WhatsApp synchronously (avoids popup blockers), record the enquiry in the background.
    window.open(link, "_blank", "noopener,noreferrer");
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, lang }),
        keepalive: true,
      });
    } catch {
      /* WhatsApp is the primary channel; the API call is best-effort. */
    }
    setStatus("done");
  }

  const field = (k: keyof EnquiryInput, label: string, props: Record<string, unknown> = {}, required = false) => (
    <div className={props.wide ? "sm:col-span-2" : ""}>
      <label htmlFor={`${uid}-${k}`} className="mb-1.5 block text-sm font-medium">
        {label}
        {required && <span aria-hidden className="text-gold-600"> *</span>}
      </label>
      <input
        id={`${uid}-${k}`}
        name={k}
        value={values[k]}
        onChange={set(k)}
        required={required}
        aria-invalid={!!errors[k]}
        aria-describedby={errors[k] ? `${uid}-${k}-err` : undefined}
        className={inputCls(!!errors[k])}
        {...Object.fromEntries(Object.entries(props).filter(([key]) => key !== "wide"))}
      />
      {errors[k] && <p id={`${uid}-${k}-err`} role="alert" className="mt-1 text-xs text-red-600">{errText(k)}</p>}
    </div>
  );

  const select = (k: "service" | "vehicle", label: string, opts: Option[], required = false) => (
    <div>
      <label htmlFor={`${uid}-${k}`} className="mb-1.5 block text-sm font-medium">
        {label}
        {required && <span aria-hidden className="text-gold-600"> *</span>}
      </label>
      <select
        id={`${uid}-${k}`}
        name={k}
        value={values[k]}
        onChange={set(k)}
        required={required}
        aria-invalid={!!errors[k]}
        aria-describedby={errors[k] ? `${uid}-${k}-err` : undefined}
        className={inputCls(!!errors[k])}
      >
        <option value="">{k === "vehicle" ? t.any : t.select}</option>
        {opts.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {errors[k] && <p id={`${uid}-${k}-err`} role="alert" className="mt-1 text-xs text-red-600">{errText(k)}</p>}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2" aria-describedby={`${uid}-status`}>
      {field("name", t.name, { autoComplete: "name" }, true)}
      {field("phone", t.phone, { type: "tel", autoComplete: "tel", inputMode: "tel", dir: "ltr" }, true)}
      {!compact && field("email", t.email, { type: "email", autoComplete: "email", dir: "ltr" })}
      {select("service", t.service, services, true)}
      {field("pickup", t.pickup, {}, true)}
      {field("dropoff", t.dropoff)}
      {field("date", t.date, { type: "date" })}
      {field("time", t.time, { type: "time" })}
      {field("passengers", t.passengers, { type: "number", min: 1, max: 100, inputMode: "numeric" })}
      {!compact && select("vehicle", t.vehicle, vehicles)}
      {!compact && field("luggage", t.luggage, { type: "number", min: 0, max: 200, inputMode: "numeric" })}

      <div className="sm:col-span-2">
        <label htmlFor={`${uid}-notes`} className="mb-1.5 block text-sm font-medium">{t.notes}</label>
        <textarea id={`${uid}-notes`} name="notes" rows={4} value={values.notes} onChange={set("notes")} className={inputCls(false)} />
      </div>

      {/* Honeypot: hidden from people and assistive tech, bots fill it. */}
      <div aria-hidden className="absolute -start-[9999px] h-0 w-0 overflow-hidden">
        <label>Website<input tabIndex={-1} autoComplete="off" name="website" value={values.website} onChange={set("website")} /></label>
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#15803d] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#166534] disabled:opacity-60 sm:w-auto"
        >
          <MessageCircle className="size-4" aria-hidden />
          {status === "sending" ? t.sending : t.submit}
        </button>
        <p className="mt-3 text-xs text-navy-700">{t.privacy}</p>
        <div id={`${uid}-status`} role="status" aria-live="polite" className="mt-4">
          {Object.keys(errors).length > 0 && status === "idle" && <p className="text-sm text-red-600">{t.error}</p>}
          {status === "done" && (
            <div className="rounded-xl border border-gold-400 bg-gold-300/20 p-4 text-sm">
              <p>{t.success}</p>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-navy-900 underline">
                {t.openWa}
              </a>
            </div>
          )}
          {status === "failed" && <p className="text-sm text-red-600">{t.failed}</p>}
        </div>
      </div>
    </form>
  );
}

const inputCls = (invalid: boolean) =>
  cx(
    "block min-h-12 w-full rounded-xl border bg-white px-4 py-2.5 text-base text-navy-900 placeholder:text-navy-700/40 focus:border-gold-500",
    invalid ? "border-red-500" : "border-navy-100",
  );
