"use client";

import { useEffect, useState } from "react";

const hijri = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura", { day: "numeric", month: "numeric", year: "numeric", timeZone: "Asia/Riyadh" });
const greg = new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Riyadh" });

const monthNames = ["Muharram", "Safar", "Rabi al-Awwal", "Rabi al-Thani", "Jumada al-Awwal", "Jumada al-Thani", "Rajab", "Shaban", "Ramadan", "Shawwal", "Dhul Qadah", "Dhul Hijjah"];
/** General, widely known context only. No claims about demand, prices or availability. */
const notes: Record<number, string> = {
  9: "Month of fasting. Many pilgrims choose to perform Umrah in Ramadan.",
  10: "Begins with Eid al-Fitr.",
  12: "The month of Hajj, which includes Eid al-Adha.",
  1: "First month of the Hijri year.",
};

interface MonthStart { key: string; month: number; year: number; start: Date }

function hijriParts(d: Date) {
  const p = hijri.formatToParts(d);
  const n = (t: string) => Number(p.find((x) => x.type === t)?.value);
  return { day: n("day"), month: n("month"), year: n("year") };
}

/** Walks forward day by day and records the first day of each Hijri month, from the device's own calendar data. */
function nextMonthStarts(from: Date, count: number): { today: ReturnType<typeof hijriParts>; starts: MonthStart[] } {
  const today = hijriParts(from);
  const starts: MonthStart[] = [];
  for (let i = 1; i <= 400 && starts.length < count; i++) {
    const d = new Date(from.getTime() + i * 86400000);
    const h = hijriParts(d);
    if (h.day === 1) starts.push({ key: `${h.year}-${h.month}`, month: h.month, year: h.year, start: d });
  }
  return { today, starts };
}

export function SeasonCalendar() {
  const [data, setData] = useState<ReturnType<typeof nextMonthStarts> | null>(null);
  useEffect(() => setData(nextMonthStarts(new Date(), 12)), []);

  if (!data) return <p className="text-sm text-muted">Loading the calendar…</p>;
  const { today, starts } = data;

  return (
    <div>
      <p className="text-base text-navy-900">
        Today is <strong>{today.day} {monthNames[today.month - 1]} {today.year} AH</strong> (Umm al-Qura calendar).
      </p>
      <ol className="mt-6 divide-y divide-navy-100 border-y border-navy-100">
        {starts.map((s) => (
          <li key={s.key} className="grid gap-1 py-4 sm:grid-cols-[220px_1fr_1fr] sm:items-baseline sm:gap-6">
            <span className={`font-semibold ${notes[s.month] ? "text-navy-900" : "text-navy-900/80"}`}>
              {monthNames[s.month - 1]} {s.year}
            </span>
            <span className="text-sm text-muted">Expected to begin around <span className="font-medium text-navy-900">{greg.format(s.start)}</span></span>
            <span className="text-sm text-muted">{notes[s.month] ?? ""}</span>
          </li>
        ))}
      </ol>
      <p className="mt-5 text-xs leading-relaxed text-muted">
        Dates come from the calendar data in your browser. Actual month starts depend on moon sighting and official announcements in Saudi Arabia and can differ by a day. Check official sources before you finalise plans.
      </p>
    </div>
  );
}
