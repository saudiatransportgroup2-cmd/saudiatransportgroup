import Link from "next/link";
import { BookButtons } from "@/components/booking/BookButtons";
import { Container } from "@/components/ui/primitives";
import { VehicleArt } from "@/components/ui/VehicleArt";

export function CoachCta() {
  return (
    <section className="bg-navy-950 py-20 text-white sm:py-28" aria-labelledby="coach-cta">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <h2 id="coach-cta" className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Tell us the group. We will recommend the vehicle.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-[1.9] text-white/70">
            Send the date, route, number of passengers and luggage. We reply with a proposed vehicle and a clear price.
          </p>
          <BookButtons slug="bus-coach-rental-with-driver" service="bus or coach rental with a driver" primaryLabel="Request Bus Quote" className="mt-8" />
          <p className="mt-8 text-sm text-white/55">
            See also{" "}
            <Link href="/services/group-transfers" className="font-semibold text-gold-400 underline underline-offset-4">group transfers</Link>,{" "}
            <Link href="/services/event-transportation" className="font-semibold text-gold-400 underline underline-offset-4">event transportation</Link> and{" "}
            <Link href="/services/vip-hajj-umrah-transfers" className="font-semibold text-gold-400 underline underline-offset-4">pilgrim transfers</Link>.
          </p>
        </div>
        <div aria-hidden className="border border-white/10 p-8 text-gold-300">
          <VehicleArt kind="bus" className="w-full" />
        </div>
      </Container>
    </section>
  );
}
