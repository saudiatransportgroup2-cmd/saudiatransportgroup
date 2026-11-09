"use client";

import { useMemo, useState } from "react";
import { CalculationMethod, Coordinates, PrayerTimes } from "adhan";
import { MessageCircle } from "lucide-react";
import { enquiryLink } from "@/lib/booking";

const cities = {
  Makkah: new Coordinates(21.4225, 39.8262),
  Madinah: new Coordinates(24.4672, 39.6111),
  Jeddah: new Coordinates(21.5433, 39.1728),
} as const;
type City = keyof typeof cities;

const names = ["fajr", "dhuhr", "asr", "maghrib", "isha"] as const;
const label: Record<(typeof names)[number], string> = { fajr: "Fajr", dhuhr: "Dhuhr", asr: "Asr", maghrib: "Maghrib", isha: "Isha" };

const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Riyadh" });
const fmtDay = new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short", timeZone: "Asia/Riyadh" });

/** Prayer instants for a Gregorian calendar date, using the Umm al-Qura method. */
function timesFor(city: City, y: number, m: number, d: number) {
  const pt = new PrayerTimes(cities[city], new Date(y, m - 1, d), CalculationMethod.UmmAlQura());
  return names.map((n) => ({ key: `${y}-${m}-${d}-${n}`, name: label[n], at: pt[n] as Date }));
}

const field =
  "mt-1 block min-h-11 w-full min-w-0 max-w-full rounded-lg border border-navy-100 bg-white px-3 text-sm text-ink focus:border-gold-500";

/** Shows calculated prayer times and which of them fall inside a journey. No travel durations are assumed. */
export function PrayerPlanner() {
  const [city, setCity] = useState<City>("Makkah");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [hours, setHours] = useState("");
  const [mins, setMins] = useState("");

  const result = useMemo(() => {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
    if (!m) return null;
    const [y, mo, d] = [Number(m[1]), Number(m[2]), Number(m[3])];
    const day = timesFor(city, y, mo, d);
    const next = new Date(y, mo - 1, d + 1);
    const nextDay = timesFor(city, next.getFullYear(), next.getMonth() + 1, next.getDate());

    const dur = (Number(hours) || 0) * 60 + (Number(mins) || 0);
    if (!time || dur <= 0) return { day, trip: null as null };
    const start = new Date(`${date}T${time}:00+03:00`);
    const end = new Date(start.getTime() + dur * 60000);
    const during = [...day, ...nextDay].filter((p) => p.at >= start && p.at <= end);
    return { day, trip: { start, end, during } };
  }, [city, date, time, hours, mins]);

  const link = enquiryLink("a Makkah and Madinah journey planned around prayer times", {
    "Departing from": city,
    Date: date,
    "Preferred departure": time,
  });

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
      <form onSubmit={(e) => e.preventDefault()} aria-label="Prayer-aware departure planner" className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm sm:p-7">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-xs font-semibold text-muted">Departing from
            <select value={city} onChange={(e) => setCity(e.target.value as City)} className={field}>
              {Object.keys(cities).map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
          <label className="text-xs font-semibold text-muted">Travel date
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={field} />
          </label>
          <label className="text-xs font-semibold text-muted">Departure time (Saudi time)
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className={field} />
          </label>
          <fieldset className="text-xs font-semibold text-muted">
            <legend>Journey length you expect</legend>
            <div className="mt-1 grid grid-cols-2 gap-2">
              <input aria-label="Hours" type="number" min={0} max={24} value={hours} onChange={(e) => setHours(e.target.value)} placeholder="hours" className={field.replace("mt-1 ", "")} />
              <input aria-label="Minutes" type="number" min={0} max={59} value={mins} onChange={(e) => setMins(e.target.value)} placeholder="min" className={field.replace("mt-1 ", "")} />
            </div>
          </fieldset>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          We do not guess the length of your journey. Use the time you were told or have planned, including stops, and the planner shows which prayers fall inside it.
        </p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1f9d55] text-sm font-semibold text-white hover:bg-[#188046]">
          <MessageCircle className="size-4" aria-hidden /> Ask us to plan this journey
        </a>
      </form>

      <div aria-live="polite" className="rounded-2xl border border-navy-100 bg-[#f5f7fa] p-5 sm:p-7">
        {!result ? (
          <p className="text-sm leading-relaxed text-muted">Choose a city and a date to see the calculated prayer times for that day.</p>
        ) : (
          <>
            <h2 className="text-lg font-semibold text-navy-900">{city}, {fmtDay.format(result.day[0].at)}</h2>
            <ul className="mt-4 divide-y divide-navy-100 border-y border-navy-100">
              {result.day.map((p) => {
                const inside = result.trip?.during.some((x) => x.key === p.key);
                return (
                  <li key={p.key} className={`flex items-center justify-between gap-3 py-3 text-sm ${inside ? "font-semibold text-navy-900" : "text-muted"}`}>
                    <span>{p.name}</span>
                    <span className="flex items-center gap-3">
                      {inside && <span className="rounded-full bg-gold-500/20 px-2.5 py-0.5 text-xs text-gold-600">during your journey</span>}
                      <span dir="ltr" className="tabular-nums">{fmt.format(p.at)}</span>
                    </span>
                  </li>
                );
              })}
            </ul>

            {result.trip && (
              <div className="mt-5 text-sm leading-[1.8] text-navy-900">
                <p>
                  You leave at <strong dir="ltr">{fmt.format(result.trip.start)}</strong> and the journey ends around <strong dir="ltr">{fmt.format(result.trip.end)}</strong>
                  {fmtDay.format(result.trip.end) !== fmtDay.format(result.trip.start) ? ` (${fmtDay.format(result.trip.end)})` : ""}.
                </p>
                {result.trip.during.length === 0 ? (
                  <p className="mt-2 text-muted">No prayer falls inside this journey, so no prayer stop is needed.</p>
                ) : (
                  <p className="mt-2">
                    {result.trip.during.map((p) => `${p.name} (${fmt.format(p.at)})`).join(", ")} fall{result.trip.during.length === 1 ? "s" : ""} inside your journey. Plan a stop, or leave earlier or later, and tell your driver in advance.
                  </p>
                )}
              </div>
            )}
          </>
        )}
        <p className="mt-5 text-xs leading-relaxed text-muted">
          Times are calculated with the Umm al-Qura method for the city centre and may differ from your local timetable by a few minutes. During Ramadan, Isha is later than shown. Always check the official timetable for the day.
        </p>
      </div>
    </div>
  );
}
