import { Container } from "@/components/ui/primitives";

const rungs = [
  { who: "One to three travellers", vehicle: "Sedan or executive sedan", note: "Couples and small parties with ordinary luggage. Choose an executive sedan for added comfort on the longer Makkah and Madinah road." },
  { who: "A family of four to six", vehicle: "Family SUV", note: "Space for children, grandparents and several suitcases, with easy entry and exit." },
  { who: "Six to ten travellers, or a lot of luggage", vehicle: "Passenger van", note: "A good fit for extended families. Ask whether a van or two cars will be more comfortable for your party." },
  { who: "Eleven to about twenty-five", vehicle: "Minibus", note: "Small groups and friends travelling together. Luggage space depends on the vehicle, so give us your bag count." },
  { who: "Larger groups", vehicle: "Coach", note: "For full-size pilgrim groups. We confirm the vehicle and seating when we reply to your enquiry." },
];

/** A vertical ladder, ordered by group size. Guidance only; exact capacities are confirmed per booking. */
export function VehicleLadder() {
  return (
    <section className="bg-white py-24 sm:py-32" aria-labelledby="ladder-title">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Passengers, luggage and vehicles</p>
          <h2 id="ladder-title" className="mt-5 text-3xl font-light leading-tight text-navy-900 sm:text-4xl">
            Choosing a vehicle <span className="font-semibold">that leaves room to breathe</span>
          </h2>
          <div className="mt-6 space-y-5 text-base leading-[1.95] text-muted">
            <p>
              Pilgrim luggage is often larger than other travellers&apos;: extra clothing, gifts, Zamzam water on the return, and sometimes wheelchairs or walkers. When you plan a vehicle, count not only people but also suitcases, hand luggage and mobility aids.
            </p>
            <p>
              The ladder on this page is a guide to the usual vehicle categories. It is not a promise of availability, and we confirm the exact vehicle and its capacity when we reply to your request.
            </p>
            <p>
              If you are unsure, send the numbers and we will recommend an arrangement. We would rather suggest a bigger vehicle than see a family squeezed into a smaller one.
            </p>
          </div>
        </div>

        <ol className="relative border-s border-navy-100 ps-8">
          {rungs.map((r, i) => (
            <li key={r.vehicle} className="relative pb-10 last:pb-0">
              <span className="absolute -start-[41px] top-1 grid size-5 place-items-center rounded-full border-2 border-gold-500 bg-white text-[10px] font-bold text-gold-600">{i + 1}</span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{r.who}</p>
              <h3 className="mt-1 text-xl font-semibold text-navy-900">{r.vehicle}</h3>
              <p className="mt-2 text-sm leading-[1.9] text-muted">{r.note}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
