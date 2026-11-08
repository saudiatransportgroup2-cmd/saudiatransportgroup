import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";
import type { ImageId } from "@/config/images";

interface Band {
  n: string;
  title: string;
  lead: string;
  body: string[];
  notes: string[];
  image?: ImageId;
}

const bands: Band[] = [
  {
    n: "01",
    title: "Wedding guest transportation",
    lead: "Large guest lists, mixed ages, formal clothing and a tight ceremony time.",
    body: [
      "Weddings concentrate many people into a short arrival window, often to a venue that is not on a main road. Guests wearing formal clothing, elderly relatives and families with children all benefit from a vehicle that takes them from a meeting point to the venue entrance.",
      "We help families plan pickups from hotels, from a central meeting point, or from the airport for guests travelling in, and organise the return journey at the end of the evening, which is often the harder part.",
    ],
    notes: ["Share the venue address and entrance for drop-off", "Agree return pickup times with the family", "Plan separate arrangements for the couple if required"],
    image: "events-wedding",
  },
  {
    n: "02",
    title: "Corporate event transfers",
    lead: "Staff days, away days, dinners and client hospitality.",
    body: [
      "Corporate events usually involve a mixture of people: senior staff, guests, and teams who must arrive together. We agree pickup points, group sizes and timings with the organiser, and keep a single contact for changes on the day.",
    ],
    notes: ["Provide guest lists or group sizes in advance", "Name a contact who can approve changes", "Agree what happens if the programme overruns"],
  },
  {
    n: "03",
    title: "Conference transportation",
    lead: "Delegates arriving across several days, with sessions that start on time.",
    body: [
      "Conferences create waves of movement: arrivals at the airport, transfers to the hotel, mornings at the venue, and departures. Delegates often travel on different flights, so we plan around flight lists as well as session times.",
      "Where delegates stay in more than one hotel, a scheduled shuttle pattern between hotels and the venue is often more practical than individual rides.",
    ],
    notes: ["Share the programme and the hotel list", "Decide whether transfers are scheduled or on request", "Plan VIP speaker transfers separately"],
    image: "events-conference",
  },
  {
    n: "04",
    title: "Exhibition and trade show transportation",
    lead: "Exhibitors, equipment and visitors, often at venues with limited access.",
    body: [
      "Exhibitions have more constraints than most events: loading times for exhibitors, restricted access for vehicles, and large crowds at opening and closing times. We plan vehicle access with the organiser and agree where each vehicle may wait.",
      "Passenger vehicles do not replace freight arrangements for exhibition stands. If you need to move stand materials, tell us and we will explain what we can and cannot carry.",
    ],
    notes: ["Confirm venue vehicle access and permits", "Plan for peak times at opening and closing", "Agree drop-off points for exhibitors and visitors"],
  },
  {
    n: "05",
    title: "Product launches",
    lead: "A defined arrival moment and guests who notice details.",
    body: [
      "A launch is a performance, and arrivals are part of it. Presentation matters: clean vehicles, well-turned-out drivers and a smooth hand-off at the entrance. We coordinate arrival times so that the entrance is not crowded and guests are not left waiting at the kerb.",
    ],
    notes: ["Provide the guest arrival window", "Agree vehicle appearance and any branding limitations", "Plan the departure of key guests discreetly"],
  },
  {
    n: "06",
    title: "VIP guest transfers",
    lead: "A small number of important guests who expect discretion and punctuality.",
    body: [
      "For VIP guests, we recommend a dedicated vehicle and driver, a confirmed pickup point and an agreed way to communicate. Share the guest name, arrival details and preferences, and we confirm the arrangement.",
      "See our private chauffeur hire page for arrangements that cover a whole visit, not just one event.",
    ],
    notes: ["Provide guest names and contact numbers", "Agree a discreet pickup point", "Confirm vehicle type in writing"],
  },
];

/** Programme-guide bands: a large index numeral, a title, and a notes column. Some include a photograph. */
export function EventTypeBands() {
  return (
    <section className="bg-navy-950 text-white" aria-labelledby="bands-title">
      <Container className="pt-24 sm:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">What we transport for</p>
        <h2 id="bands-title" className="mt-5 max-w-3xl text-3xl font-light leading-tight sm:text-5xl">
          Six kinds of event, <span className="font-semibold">six different plans</span>
        </h2>
      </Container>

      <div className="mt-16">
        {bands.map((b, i) => (
          <article key={b.n} className={`border-t border-white/10 py-14 sm:py-20 ${i % 2 ? "bg-navy-900" : ""}`}>
            <Container className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-2">
                <span className="text-7xl font-light leading-none text-gold-500/80 sm:text-8xl" aria-hidden>{b.n}</span>
              </div>
              <div className={b.image ? "lg:col-span-5" : "lg:col-span-6"}>
                <h3 className="text-2xl font-semibold sm:text-3xl">{b.title}</h3>
                <p className="mt-3 text-base text-gold-400">{b.lead}</p>
                <div className="mt-5 space-y-4 text-sm leading-[1.95] text-white/70">
                  {b.body.map((p) => <p key={p}>{p}</p>)}
                </div>
              </div>
              <div className={`${b.image ? "lg:col-span-5" : "lg:col-span-4"} grid gap-6`}>
                {b.image && <Photo id={b.image} tone="warm" sizes="(min-width:1024px) 40vw, 100vw" className="aspect-[4/3]" />}
                <div className="border-s border-gold-500/60 ps-6">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">Planning notes</h4>
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    {b.notes.map((n) => <li key={n}>{n}</li>)}
                  </ul>
                </div>
              </div>
            </Container>
          </article>
        ))}
      </div>
    </section>
  );
}
