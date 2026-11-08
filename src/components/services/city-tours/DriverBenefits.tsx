import { Container } from "@/components/ui/primitives";

const reasons = [
  { n: "01", t: "Your timetable, not a coach schedule", d: "Spend longer where you are enjoying yourself and move on when you are ready. If you want an unplanned detour, you can take it." },
  { n: "02", t: "Out of the heat, into the car", d: "Between stops you are in an air-conditioned vehicle instead of walking in the sun or waiting for a ride. In the warmer months this matters." },
  { n: "03", t: "No parking, no navigation", d: "Your driver deals with traffic, drop-off points and parking, so you step out at the entrance and step back in when you are done." },
  { n: "04", t: "Space for shopping and shade for children", d: "Bags, strollers and purchases stay in the vehicle, and tired children get a seat and some rest between activities." },
  { n: "05", t: "Better for mixed groups", d: "Grandparents, children and adults can each do what suits them, then regroup at the car. A private vehicle makes that easy." },
  { n: "06", t: "A local on the road", d: "Your driver can suggest practical things: where to eat, when a district is quieter, how to avoid the worst traffic." },
];

/** Large-numeral list. Deliberately not a card grid. */
export function DriverBenefits() {
  return (
    <section className="border-y border-navy-100 bg-[#f5f7fa] py-20 sm:py-28" aria-labelledby="benefits-title">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 id="benefits-title" className="max-w-xl text-3xl font-light leading-tight text-navy-900 sm:text-5xl">
            Six reasons to <span className="font-semibold">explore with a private driver</span>
          </h2>
          <p className="max-w-sm text-base leading-[1.8] text-muted">
            The benefits of a private driver are practical, and they add up over a day in a large city.
          </p>
        </div>
        <ol className="mt-16 grid gap-x-16 md:grid-cols-2">
          {reasons.map((r) => (
            <li key={r.n} className="flex gap-6 border-t border-navy-900/15 py-8">
              <span className="text-5xl font-light leading-none text-gold-500" aria-hidden>{r.n}</span>
              <div>
                <h3 className="text-lg font-semibold text-navy-900">{r.t}</h3>
                <p className="mt-2 text-sm leading-[1.8] text-muted">{r.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
