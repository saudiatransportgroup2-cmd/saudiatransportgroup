import { Photo } from "@/components/ui/Photo";
import type { ImageId } from "@/config/images";

const types: { kicker: string; title: string; image: ImageId; tone: "navy" | "warm" | "dark"; paras: string[]; bullets: string[] }[] = [
  {
    kicker: "Family group transfers",
    title: "Three generations, one arrival",
    image: "groups-family",
    tone: "warm",
    paras: [
      "Extended families travel with grandparents, parents, children and a lot of luggage. The wish is simple: arrive together, without anyone being left behind at the airport or squeezed into a vehicle that is too small.",
      "For family groups we look first at who needs the most help: elderly relatives, small children, anyone with limited mobility. The vehicle mix is built around them, and the rest of the family fits around that.",
    ],
    bullets: ["Child seats and boosters, if needed", "Vehicles with easy entry for older passengers", "A single pickup point for the whole family", "A driver who waits while everyone settles"],
  },
  {
    kicker: "Tourist group transfers",
    title: "A programme that begins at the airport",
    image: "airport-family",
    tone: "navy",
    paras: [
      "Tourist groups arrive, tour and leave on a timetable. Transport is a thread that ties it together, and delays at one point ripple through the rest. Group leaders appreciate a single contact who can adjust the plan when needed.",
      "If you are a tour leader, send us the itinerary, the group size and your arrival and departure flights. We will propose vehicles, agree meeting points and share driver details in advance.",
    ],
    bullets: ["Airport pickups for arrival day", "Hotel-to-venue transfers during the stay", "Departure transfers timed to flights", "Optional city days with a private driver"],
  },
  {
    kicker: "Pilgrim group transportation",
    title: "Moving a group with care",
    image: "umrah-family",
    tone: "dark",
    paras: [
      "Pilgrim groups need transport that respects the rhythm of worship. Arrival days are long, luggage is heavy, and hotels in the holy cities are often close together but hard to reach by large vehicles.",
      "We plan group transfers for pilgrims around flights, hotels and prayer times, and work with group leaders or agencies. Our pilgrim page covers the routes in more detail.",
    ],
    bullets: ["Airport to hotel and between cities", "Vehicle size matched to group and luggage", "Planned stops for prayer and rest", "Coordination with the group leader"],
  },
];

/** Three alternating split-screen rows, each running edge to edge. */
export function GroupTypes() {
  return (
    <section aria-label="Types of group we transfer">
      {types.map((t, i) => (
        <article key={t.kicker} className={`grid lg:grid-cols-2 ${i % 2 ? "bg-[#f5f7fa]" : "bg-white"}`}>
          <Photo id={t.image} tone={t.tone} sizes="(min-width:1024px) 50vw, 100vw" className={`aspect-[4/3] lg:min-h-[280px] lg:aspect-auto ${i % 2 ? "lg:order-2" : ""}`} />
          <div className="flex flex-col justify-center px-5 py-14 sm:px-10 lg:px-16 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">{t.kicker}</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-navy-900">{t.title}</h2>
            <div className="mt-5 space-y-4 text-base leading-[1.9] text-muted">
              {t.paras.map((p) => <p key={p}>{p}</p>)}
            </div>
            <ul className="mt-6 grid gap-2 text-sm text-ink sm:grid-cols-2">
              {t.bullets.map((b) => (
                <li key={b} className="flex gap-3"><span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500" />{b}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}
