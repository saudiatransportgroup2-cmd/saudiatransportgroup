import { Container } from "@/components/ui/primitives";

const luggage = [
  "Count large suitcases separately from hand luggage",
  "Tell us about prams, wheelchairs, sports gear or gifts",
  "Pack essentials, such as medicines, water and chargers, in a bag you keep in the cabin",
  "For family groups, a roof box or a larger vehicle may be more comfortable than a full boot",
];

const prep = [
  { t: "Rest before you go", d: "Long journeys are easier when you start rested. Avoid scheduling an early departure after a late night, where possible." },
  { t: "Plan meals and water", d: "Stops for food are part of a long trip. Tell us if you prefer certain stops, and keep water in the vehicle." },
  { t: "Prayer and rest stops", d: "We can plan stops around prayer times. Tell the driver your preferences at the start." },
  { t: "Charge your devices", d: "Bring chargers and a power bank. Navigation, tickets and contact details all depend on your phone." },
  { t: "Carry documents", d: "Keep your ID, travel documents and booking confirmation within reach, not in the boot." },
  { t: "Dress for the vehicle, not the destination", d: "Air conditioning is strong. Bring a light layer, and change at your destination." },
  { t: "Children and long routes", d: "Bring snacks, a favourite toy and a change of clothes. Tell us in advance if you need a child seat." },
  { t: "Tell someone your plan", d: "Share the driver details and your expected arrival with someone you trust." },
];

/** Long-distance journey preparation (two-column numbered list) with family and luggage planning in a side panel. */
export function LongDistancePrep() {
  return (
    <section className="bg-navy-50 py-20 sm:py-28" aria-labelledby="prep-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Long-distance journey preparation</p>
          <h2 id="prep-title" className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Eight habits that make a long drive easy
          </h2>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <ol className="grid gap-x-10 sm:grid-cols-2">
            {prep.map((p, i) => (
              <li key={p.t} className="border-t border-navy-900/15 py-6">
                <span className="text-xs font-semibold text-gold-600">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 font-semibold text-navy-900">{p.t}</h3>
                <p className="mt-2 text-sm leading-[1.9] text-muted">{p.d}</p>
              </li>
            ))}
          </ol>
          <aside className="self-start bg-navy-900 p-7 text-white" aria-labelledby="fam-title">
            <h3 id="fam-title" className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-400">Family, group and luggage planning</h3>
            <p className="mt-4 text-sm leading-[1.9] text-white/75">
              Families and groups travelling between cities usually carry more than they expect. Plan the vehicle by the bags as well as by the people.
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-[1.8] text-white/80">
              {luggage.map((l) => <li key={l} className="flex gap-3"><span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500" />{l}</li>)}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
