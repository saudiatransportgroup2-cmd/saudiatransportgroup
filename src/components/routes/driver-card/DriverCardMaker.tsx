"use client";

import { useState } from "react";
import { Printer } from "lucide-react";
import { site } from "@/config/site";

const cities = [
  ["Makkah", "مكة المكرمة"],
  ["Madinah", "المدينة المنورة"],
  ["Jeddah", "جدة"],
  ["Other city", ""],
] as const;

const field =
  "mt-1 block min-h-11 w-full min-w-0 max-w-full rounded-lg border border-navy-100 bg-white px-3 text-sm text-ink focus:border-gold-500";

/** Builds a printable bilingual card a pilgrim can show to any driver. Nothing is stored or sent. */
export function DriverCardMaker() {
  const [place, setPlace] = useState("");
  const [placeAr, setPlaceAr] = useState("");
  const [city, setCity] = useState<(typeof cities)[number]>(cities[0]);
  const [cityAr, setCityAr] = useState("");
  const [pax, setPax] = useState("2");
  const [phone, setPhone] = useState("");
  const [brand, setBrand] = useState(true);

  const arCity = city[1] || cityAr;

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <form onSubmit={(e) => e.preventDefault()} aria-label="Driver card details" className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm sm:p-7 print:hidden">
        <div className="grid gap-4">
          <label className="text-xs font-semibold text-muted">Hotel or address (as on your booking)
            <input value={place} onChange={(e) => setPlace(e.target.value)} placeholder="e.g. the name on your hotel voucher" className={field} />
          </label>
          <label className="text-xs font-semibold text-muted">Same name in Arabic (optional, copy it from your voucher or map)
            <input dir="rtl" lang="ar" value={placeAr} onChange={(e) => setPlaceAr(e.target.value)} className={field} />
          </label>
          <label className="text-xs font-semibold text-muted">City
            <select value={city[0]} onChange={(e) => setCity(cities.find((c) => c[0] === e.target.value) ?? cities[0])} className={field}>
              {cities.map((c) => <option key={c[0]}>{c[0]}</option>)}
            </select>
          </label>
          {!city[1] && (
            <label className="text-xs font-semibold text-muted">City in Arabic (optional)
              <input dir="rtl" lang="ar" value={cityAr} onChange={(e) => setCityAr(e.target.value)} className={field} />
            </label>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-semibold text-muted">Number of passengers
              <input type="number" min={1} max={60} value={pax} onChange={(e) => setPax(e.target.value)} className={field} />
            </label>
            <label className="text-xs font-semibold text-muted">Your phone number
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+92…" autoComplete="tel" className={field} />
            </label>
          </div>
          <label className="flex items-start gap-3 text-sm text-muted">
            <input type="checkbox" checked={brand} onChange={(e) => setBrand(e.target.checked)} className="mt-1 size-4" />
            Show the Saudi Transport Group contact number on the card
          </label>
        </div>
        <button type="button" onClick={() => window.print()} className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-navy-900 text-sm font-semibold text-white hover:bg-navy-800">
          <Printer className="size-4" aria-hidden /> Print or save as PDF
        </button>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          Nothing is stored or sent. Please check the Arabic with a native speaker or your hotel before relying on it for an important journey.
        </p>
      </form>

      <div id="driver-card" className="rounded-2xl border-2 border-navy-900 bg-white p-6 text-navy-900 shadow-xl sm:p-8" aria-label="Driver card preview">
        <p dir="rtl" lang="ar" className="text-center text-2xl font-semibold leading-relaxed">من فضلك، أوصلني إلى:</p>
        <p className="text-center text-sm text-muted">Please take me to:</p>

        <div className="mt-5 rounded-xl bg-[#f5f7fa] p-5 text-center">
          <p dir="rtl" lang="ar" className="min-h-[2rem] text-2xl font-semibold leading-relaxed">{placeAr || " "}</p>
          <p className="mt-2 break-words text-lg font-semibold">{place || "Your hotel or address"}</p>
          <p className="mt-3 text-base">
            <span dir="rtl" lang="ar" className="font-semibold">{arCity}</span>
            {arCity && " · "}
            {city[0] === "Other city" ? "" : city[0]}
          </p>
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-3 text-center text-sm">
          <div className="rounded-xl border border-navy-100 p-3">
            <dt dir="rtl" lang="ar" className="font-semibold">عدد الركاب</dt>
            <dt className="text-xs text-muted">Passengers</dt>
            <dd className="mt-1 text-xl font-semibold">{pax}</dd>
          </div>
          <div className="rounded-xl border border-navy-100 p-3">
            <dt dir="rtl" lang="ar" className="font-semibold">رقم هاتفي</dt>
            <dt className="text-xs text-muted">My phone</dt>
            <dd className="mt-1 break-all text-base font-semibold" dir="ltr">{phone || "—"}</dd>
          </div>
        </dl>

        <p dir="rtl" lang="ar" className="mt-5 text-center text-lg font-semibold leading-relaxed">من فضلك اتصل بي عند الوصول.</p>
        <p className="text-center text-sm text-muted">Please call me when you arrive.</p>

        {brand && (
          <p className="mt-6 border-t border-navy-100 pt-4 text-center text-xs text-muted">
            <span dir="rtl" lang="ar">للمساعدة اتصل بـ المجموعة السعودية للنقل</span> · Saudi Transport Group <span dir="ltr">{site.phone.display}</span>
          </p>
        )}
      </div>
    </div>
  );
}
