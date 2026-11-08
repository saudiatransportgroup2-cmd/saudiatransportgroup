import { Crumbs } from "@/components/navigation/Crumbs";
import { BookButtons } from "@/components/booking/BookButtons";
import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";

const types = ["Weddings", "Corporate events", "Conferences", "Exhibitions", "Product launches", "VIP guests"];

/** Poster hero: dark, huge type, an index of event types on the left edge and a tall photo strip right. */
export function EventsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div aria-hidden className="absolute -start-24 top-10 -z-10 select-none text-[22rem] font-bold leading-none text-white/[0.025]">
        01
      </div>
      <Container className="pb-20 pt-8 sm:pb-28">
        <Crumbs current="Event Transportation" />
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">Event transportation · Saudi Arabia</p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1] tracking-tight sm:text-7xl lg:text-[6rem]">
              Every guest.
              <span className="block text-gold-400">On time.</span>
              <span className="block font-light text-white/60">In comfort.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-[1.9] text-white/75 sm:text-lg">
              Coordinated vehicles and drivers for weddings, conferences, exhibitions and corporate gatherings, planned before the event so that the day itself runs quietly.
            </p>
            <BookButtons slug="event-transportation" service="event transportation" primaryLabel="Plan Event Transport" className="mt-10" />
            <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-6 text-xs font-medium uppercase tracking-[0.18em] text-white/55">
              {types.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <div className="relative">
            <Photo id="events-hero" tone="dark" priority sizes="(min-width:1024px) 35vw, 100vw" className="aspect-[4/5] lg:aspect-[3/4]" />
            <div className="absolute -bottom-6 start-6 border border-gold-500/60 bg-navy-950/95 px-5 py-4 text-xs uppercase tracking-[0.2em] text-gold-400">
              Run of show · Before · During · After
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
