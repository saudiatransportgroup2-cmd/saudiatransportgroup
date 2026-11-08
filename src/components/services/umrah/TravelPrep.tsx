import { Container } from "@/components/ui/primitives";

const groups = [
  {
    title: "Share with us",
    items: ["Names of travellers and a lead contact number", "Flight numbers, dates and arrival times", "Hotel names and areas in each city", "Number of passengers, children and bags", "Mobility needs, child seats and any special requests"],
  },
  {
    title: "Keep with you",
    items: ["Passports and visas or permits", "Hotel booking confirmations", "Your driver’s name and number", "Medication and essential items in hand luggage", "A charged phone and a way to charge it"],
  },
  {
    title: "Ask your hotel",
    items: ["Check-in and checkout times", "Whether early luggage storage is available", "Where vehicles can drop off and whether porters are available", "How to reach the hotel by phone if you are delayed"],
  },
];

/** Transport preparation for pilgrims, as three quiet columns divided by hairlines. */
export function TravelPrep() {
  return (
    <section className="bg-white py-24 sm:py-32" aria-labelledby="prep-title">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Important booking information</p>
          <h2 id="prep-title" className="mt-5 text-3xl font-light leading-tight text-navy-900 sm:text-4xl">
            Preparing for the <span className="font-semibold">road ahead</span>
          </h2>
          <p className="mt-6 text-base leading-[1.95] text-muted">
            Good preparation reduces stress. This list covers the transport side of your journey. It is not a complete guide to Hajj or Umrah preparation, and it does not replace the advice of your agent, scholar or the relevant authorities.
          </p>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-navy-100 rtl:md:divide-x-reverse">
          {groups.map((g) => (
            <section key={g.title} className="md:px-10 first:md:ps-0 last:md:pe-0" aria-label={g.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">{g.title}</h3>
              <ul className="mt-5 space-y-4 text-sm leading-[1.85] text-muted">
                {g.items.map((it) => <li key={it} className="border-s-2 border-navy-100 ps-4">{it}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
