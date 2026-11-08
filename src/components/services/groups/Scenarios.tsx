import { Container } from "@/components/ui/primitives";

const scenarios = [
  {
    code: "A",
    title: "Airport group pickups",
    lead: "Many people, several flights, one meeting point.",
    body: [
      "Groups rarely land together. Some arrive on the same flight; others come on connections and land hours apart. We discuss whether to collect everyone at the same time, in waves, or per flight.",
      "Send us the list of flights, the number of passengers on each and the destination. For groups on one flight, we can coordinate vehicles so that they leave in turn, starting with those who are ready first.",
    ],
    ask: "Flight list · passengers per flight · luggage · destination",
  },
  {
    code: "B",
    title: "Hotel-to-hotel group transportation",
    lead: "Moving a group between cities or between hotels in the same city.",
    body: [
      "A group may change hotels midway through the trip: from Makkah to Madinah, or from a hotel by the airport to one in town. The transfer should be as simple as checking out and boarding.",
      "Share the checkout time, the new hotel and any stops. Allow time for luggage to come down and be loaded. If the group is large, ask the hotel to stage luggage in advance.",
    ],
    ask: "Checkout time · both hotel names · passengers · luggage",
  },
  {
    code: "C",
    title: "Multiple vehicle arrangements",
    lead: "When one vehicle is not enough, and how to run several.",
    body: [
      "Groups bigger than a single vehicle need a small convoy. We assign a driver to each vehicle, tell each driver where to meet, and give the group leader a single contact for the whole movement.",
      "The aim is to keep the group close together, without holding up the vehicles that are ready. We agree in advance whether vehicles travel together, or leave as soon as they are full.",
    ],
    ask: "Group size · who must travel together · luggage plan",
  },
];

/** Three scenario panels in a tall stacked layout with a lettered rail, on a dark ground. */
export function Scenarios() {
  return (
    <section className="bg-navy-900 py-20 text-white sm:py-28" aria-labelledby="scenarios-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Group transfer scenarios</p>
          <h2 id="scenarios-title" className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Three common movements, three different plans
          </h2>
        </div>
        <div className="mt-14 space-y-6">
          {scenarios.map((s) => (
            <article key={s.code} className="grid gap-8 border border-white/10 bg-navy-950 p-6 sm:p-10 lg:grid-cols-[120px_0.8fr_1.2fr]">
              <span className="text-7xl font-semibold leading-none text-gold-500/80" aria-hidden>{s.code}</span>
              <div>
                <h3 className="text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-gold-400">{s.lead}</p>
              </div>
              <div>
                <div className="space-y-4 text-sm leading-[1.95] text-white/75">
                  {s.body.map((p) => <p key={p}>{p}</p>)}
                </div>
                <p className="mt-5 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.16em] text-white/50">
                  <span className="text-gold-400">Send us: </span>{s.ask}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
