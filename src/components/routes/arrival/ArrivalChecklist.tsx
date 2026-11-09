"use client";

import { useState } from "react";
import { Printer } from "lucide-react";

const groups: { title: string; items: string[] }[] = [
  {
    title: "Before you fly",
    items: [
      "Passports and visa or Umrah permit documents saved on your phone and printed",
      "Hotel names, addresses and booking numbers for Makkah and Madinah",
      "Arrival flight number and time shared with your driver",
      "Driver’s name and phone number saved (ask for them in writing)",
      "A phone plan or SIM that works in Saudi Arabia",
      "Printed Arabic driver card for each hotel",
    ],
  },
  {
    title: "After landing",
    items: [
      "Message your driver or coordinator that you have landed",
      "Collect all bags and count them against your list",
      "Agree the meeting point by message, not by shouting across the hall",
      "Check the driver’s name and vehicle against what you were sent",
      "Confirm the destination hotel before the vehicle moves",
    ],
  },
  {
    title: "In the vehicle",
    items: [
      "Keep passports, medicines and valuables with you, not in the boot",
      "Tell the driver about any prayer-time or rest-stop needs early",
      "Keep water and any medicines within reach on long journeys",
      "Ask for the departure time of your next journey while you are together",
    ],
  },
];

/** Printable arrival-day checklist. Ticks stay on this device only. */
export function ArrivalChecklist() {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const total = groups.reduce((n, g) => n + g.items.length, 0);
  const count = Object.values(done).filter(Boolean).length;

  return (
    <div id="driver-card" className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
        <p className="text-sm font-semibold text-navy-900" aria-live="polite">{count} of {total} done</p>
        <button type="button" onClick={() => window.print()} className="flex min-h-11 items-center gap-2 rounded-full border border-navy-200 px-5 text-sm font-semibold text-navy-900 hover:border-gold-500">
          <Printer className="size-4" aria-hidden /> Print or save as PDF
        </button>
      </div>
      {groups.map((g) => (
        <fieldset key={g.title} className="mt-6">
          <legend className="text-lg font-semibold text-navy-900">{g.title}</legend>
          <ul className="mt-3 space-y-1">
            {g.items.map((item) => (
              <li key={item}>
                <label className="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg px-2 py-2 text-sm leading-relaxed text-ink hover:bg-[#f5f7fa]">
                  <input type="checkbox" checked={!!done[item]} onChange={() => setDone((d) => ({ ...d, [item]: !d[item] }))} className="mt-1 size-4 shrink-0" />
                  {item}
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
      ))}
    </div>
  );
}
