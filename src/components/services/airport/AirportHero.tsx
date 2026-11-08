import { Plane } from "lucide-react";
import { Crumbs } from "@/components/navigation/Crumbs";
import { BookButtons } from "@/components/booking/BookButtons";
import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";
import { PickupPlanner } from "./PickupPlanner";

/** Cinematic arrival: full-bleed photograph, headline left, arrivals-board planner right. */
export function AirportHero() {
  return (
    <section className="relative isolate bg-navy-950 text-white">
      <Photo id="airport-hero" tone="dark" priority className="absolute inset-0 -z-10" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/70 to-navy-950/20" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-950 to-transparent" />

      <Container className="pb-16 pt-8 sm:pb-24">
        <Crumbs current="Airport Transfers" />
        <div className="mt-12 grid items-end gap-12 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              <Plane className="size-4" aria-hidden /> Private airport transportation
            </p>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              Land. Meet your driver.
              <span className="block text-gold-400">Arrive rested.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Private airport transfers across Saudi Arabia, planned around your flight and your group, so the journey from the arrivals hall to your hotel is the easy part of your trip.
            </p>
            <BookButtons slug="airport-transfers" service="an airport transfer" primaryLabel="Book Airport Transfer" className="mt-9" />
          </div>
          <PickupPlanner />
        </div>
      </Container>
    </section>
  );
}
