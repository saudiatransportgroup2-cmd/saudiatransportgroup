import { Container } from "@/components/ui/primitives";

const principles = [
  ["Plan the movement, not just the cars", "A good event plan describes how people move: when they arrive, where they wait, and how they leave. Vehicles are chosen to fit that picture."],
  ["One point of contact", "Event days are busy. A single coordinator for transport means organisers are not chasing several drivers."],
  ["Margins built in", "Traffic, late guests and venue delays are normal. A plan with margin absorbs them without anyone noticing."],
];

/** Statement paragraph on dark, followed by a ruled three-column principles strip. */
export function EventsIntro() {
  return (
    <section className="bg-navy-900 py-24 text-white sm:py-32" aria-labelledby="events-intro">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400 lg:col-span-3">Introduction</p>
          <div className="lg:col-span-9">
            <h2 id="events-intro" className="text-3xl font-light leading-[1.25] sm:text-5xl">
              Guests remember how they arrived, <span className="font-semibold">and how they left.</span>
            </h2>
            <div className="mt-8 grid gap-8 text-base leading-[1.95] text-white/70 md:grid-cols-2">
              <p>
                Event transportation is the quiet part of event planning. When it works, nobody mentions it. When it fails, it is the first thing guests talk about: the wedding guests waiting at the roadside, the delegate who missed the keynote, the VIP whose car never arrived.
              </p>
              <p>
                Saudi Transport Group arranges vehicles and drivers for events of many sizes. We help organisers decide how many vehicles they need, when each should arrive, where guests should be met and how departures should be staged. This page explains how that planning works and what we need from you.
              </p>
            </div>
          </div>
        </div>

        <ul className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
          {principles.map(([t, d], i) => (
            <li key={t} className="bg-navy-900 p-8 md:p-10">
              <span className="text-4xl font-light text-gold-500" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-lg font-semibold">{t}</h3>
              <p className="mt-3 text-sm leading-[1.9] text-white/65">{d}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
