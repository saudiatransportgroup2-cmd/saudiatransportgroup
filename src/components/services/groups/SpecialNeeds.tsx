import { Container } from "@/components/ui/primitives";

const needs = [
  { t: "Elderly passengers", d: "Allow extra time for boarding and for rest stops. Vehicles with a higher seat and easy entry are usually more comfortable. Tell us how many elderly passengers there are so that we can plan the seating." },
  { t: "Children and babies", d: "Child seats must be requested in advance, with the ages of the children. Plan for snack and rest breaks, and keep essentials such as milk, nappies and a change of clothes in hand luggage." },
  { t: "Wheelchairs and limited mobility", d: "Tell us the type of wheelchair and whether it folds. We will advise which vehicle can carry it, and whether boarding needs assistance." },
  { t: "Language", d: "If group members speak different languages, tell us. Our team supports customers in Arabic and English, and the group leader’s contact should speak a language everyone shares." },
  { t: "Dietary and prayer needs", d: "On longer legs, stops for food and prayer are part of the plan. Tell us your preferences, so that stops are placed where they are useful." },
  { t: "Medical needs", d: "Keep medicines in hand luggage and tell the leader who needs them. If anyone has a condition that could need attention on the road, share what is helpful with the leader and the driver." },
];

/** Special needs in group transport, as a three-column ruled grid on a soft ground. */
export function SpecialNeeds() {
  return (
    <section className="border-y border-navy-100 bg-[#f5f7fa] py-20 sm:py-28" aria-labelledby="needs-title">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Planning for everyone in the group</p>
          <h2 id="needs-title" className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl">
            The best plan starts with the person who needs the most help
          </h2>
          <p className="mt-5 text-base leading-[1.9] text-muted">
            Every group includes someone with particular needs. If you tell us early, we can choose the vehicles, the seating and the timings to suit them, and everyone else benefits.
          </p>
        </div>
        <div className="mt-12 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {needs.map((n) => (
            <article key={n.t} className="border-t-2 border-navy-900 py-6">
              <h3 className="font-semibold text-navy-900">{n.t}</h3>
              <p className="mt-2 text-sm leading-[1.9] text-muted">{n.d}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
