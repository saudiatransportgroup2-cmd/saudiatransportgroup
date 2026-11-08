"use client";

import { useState } from "react";
import { MessageCircle, PlaneLanding, PlaneTakeoff } from "lucide-react";
import { enquiryLink } from "@/lib/booking";

const airports = [
  "Jeddah (King Abdulaziz International)",
  "Madinah (Prince Mohammad bin Abdulaziz International)",
  "Riyadh (King Khalid International)",
  "Dammam (King Fahd International)",
  "Another airport",
];

const field =
  "block min-h-11 w-full rounded-lg border border-navy-100 bg-white px-3 text-sm text-ink focus:border-gold-500";

/** Arrivals-board style panel that turns trip details into a prefilled WhatsApp enquiry. */
export function PickupPlanner() {
  const [direction, setDirection] = useState<"Arrival" | "Departure">("Arrival");
  const [airport, setAirport] = useState(airports[0]);
  const [flight, setFlight] = useState("");
  const [when, setWhen] = useState("");
  const [pax, setPax] = useState("2");
  const [bags, setBags] = useState("2");
  const [place, setPlace] = useState("");

  const link = enquiryLink("an airport transfer", {
    Direction: direction,
    Airport: airport,
    "Flight number": flight,
    "Date and time": when,
    Passengers: pax,
    Bags: bags,
    [direction === "Arrival" ? "Going to" : "Pickup from"]: place,
  });

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      aria-labelledby="planner-title"
      className="rounded-2xl bg-white p-5 text-ink shadow-2xl sm:p-6"
    >
      <div className="flex items-center justify-between border-b border-navy-100 pb-4">
        <h2 id="planner-title" className="text-sm font-semibold uppercase tracking-[0.16em] text-navy-900">
          Pickup details
        </h2>
        <div role="group" aria-label="Transfer direction" className="flex rounded-full bg-navy-50 p-1 text-xs font-semibold">
          {(["Arrival", "Departure"] as const).map((d) => (
            <button
              key={d}
              type="button"
              aria-pressed={direction === d}
              onClick={() => setDirection(d)}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors ${
                direction === d ? "bg-navy-900 text-white" : "text-muted"
              }`}
            >
              {d === "Arrival" ? <PlaneLanding className="size-3.5" aria-hidden /> : <PlaneTakeoff className="size-3.5" aria-hidden />}
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="sm:col-span-2 text-xs font-medium text-muted">
          Airport
          <select value={airport} onChange={(e) => setAirport(e.target.value)} className={`${field} mt-1`}>
            {airports.map((a) => <option key={a}>{a}</option>)}
          </select>
        </label>
        <label className="text-xs font-medium text-muted">
          Flight number
          <input value={flight} onChange={(e) => setFlight(e.target.value)} placeholder="e.g. SV 123" className={`${field} mt-1`} />
        </label>
        <label className="text-xs font-medium text-muted">
          Date and time
          <input type="datetime-local" value={when} onChange={(e) => setWhen(e.target.value)} className={`${field} mt-1`} />
        </label>
        <label className="text-xs font-medium text-muted">
          Passengers
          <input type="number" min={1} max={60} value={pax} onChange={(e) => setPax(e.target.value)} className={`${field} mt-1`} />
        </label>
        <label className="text-xs font-medium text-muted">
          Suitcases
          <input type="number" min={0} max={60} value={bags} onChange={(e) => setBags(e.target.value)} className={`${field} mt-1`} />
        </label>
        <label className="sm:col-span-2 text-xs font-medium text-muted">
          {direction === "Arrival" ? "Hotel or address to go to" : "Hotel or address to be collected from"}
          <input value={place} onChange={(e) => setPlace(e.target.value)} className={`${field} mt-1`} />
        </label>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1f9d55] text-sm font-semibold text-white hover:bg-[#188046]"
      >
        <MessageCircle className="size-4" aria-hidden /> Send these details on WhatsApp
      </a>
      <p className="mt-3 text-xs text-muted">
        Opens WhatsApp with your details filled in. Nothing is stored on this page, and we confirm the vehicle and price before you travel.
      </p>
    </form>
  );
}
