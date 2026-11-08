import Link from "next/link";
import { BookButtons } from "@/components/booking/BookButtons";
import { Container } from "@/components/ui/primitives";

/** Closing call to action with contextual internal links. */
export function AirportCta() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28" aria-labelledby="airport-cta">
      <div aria-hidden className="absolute -end-32 -top-32 size-96 rounded-full border border-gold-500/20" />
      <div aria-hidden className="absolute -end-10 -top-10 size-96 rounded-full border border-gold-500/10" />
      <Container className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <h2 id="airport-cta" className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Your driver should be the first familiar face you see.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Send your flight details and we will confirm the vehicle and price for your airport transfer.
          </p>
          <BookButtons slug="airport-transfers" service="an airport transfer" primaryLabel="Book Airport Transfer" className="mt-9" />
        </div>
        <nav aria-label="Related services" className="border-s border-white/15 ps-8 text-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Continue your journey</p>
          <ul className="mt-4 space-y-3">
            <li><Link className="text-white/85 hover:text-gold-400" href="/services/vip-hajj-umrah-transfers">VIP Hajj and Umrah transfers</Link></li>
            <li><Link className="text-white/85 hover:text-gold-400" href="/services/city-to-city-transfer">City-to-city transfers</Link></li>
            <li><Link className="text-white/85 hover:text-gold-400" href="/services/group-transfers">Group transfers</Link></li>
            <li><Link className="text-white/85 hover:text-gold-400" href="/private-chauffeur-hire">Private chauffeur hire</Link></li>
          </ul>
        </nav>
      </Container>
    </section>
  );
}
