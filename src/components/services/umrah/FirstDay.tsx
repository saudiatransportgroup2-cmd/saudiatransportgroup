import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";

const beats = [
  { t: "You land", d: "After immigration and baggage reclaim, you message your driver. Pilgrims often take longer at the airport than expected, especially at busy times, so there is no pressure to hurry. Tell us when you are through." },
  { t: "The vehicle is ready", d: "Your driver helps load luggage and confirms the destination with you. If you need to change into ihram, or pray before leaving, say so and we will wait." },
  { t: "The road", d: "The journey is quiet and unhurried. If anyone feels unwell, or you wish to stop for prayer or refreshment, tell the driver." },
  { t: "The hotel", d: "Your driver brings you as close to the hotel as is practical and helps with luggage. If a short walk is needed, the driver will tell you before you set out." },
  { t: "Rest, then begin", d: "Many pilgrims rest before starting Umrah, and many go straight to the Haram. Both are fine. Tell us if you would like a vehicle again later in the day." },
];

/** A reading of a typical first day as five short beats beside a tall photograph. Illustrative only. */
export function FirstDay() {
  return (
    <section className="bg-white py-24 sm:py-32" aria-labelledby="firstday-title">
      <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Photo id="umrah-hero" tone="navy" sizes="(min-width:1024px) 35vw, 100vw" className="aspect-[4/3] lg:aspect-[3/4]" />
          <p className="mt-4 text-xs text-muted">Illustrative only. Every journey is arranged around the pilgrims travelling.</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Introduction to private pilgrimage transportation</p>
          <h2 id="firstday-title" className="mt-5 text-3xl font-light leading-tight text-navy-900 sm:text-4xl">
            What a first day <span className="font-semibold">can look like</span>
          </h2>
          <p className="mt-6 text-base leading-[1.95] text-muted">
            Pilgrims often tell us that the first day sets their mood for the whole trip. Here is how we think about it: five small moments, each one an opportunity to make things easier.
          </p>
          <ol className="mt-10 space-y-8">
            {beats.map((b, i) => (
              <li key={b.t} className="flex gap-5">
                <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-gold-500 text-xs font-semibold text-gold-600">{i + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold text-navy-900">{b.t}</h3>
                  <p className="mt-1 text-sm leading-[1.95] text-muted">{b.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
