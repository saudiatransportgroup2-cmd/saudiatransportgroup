import Link from "next/link";
import { BookButtons } from "@/components/booking/BookButtons";
import { Container } from "@/components/ui/primitives";

export function UmrahCta() {
  return (
    <section className="bg-gradient-to-b from-[#f5f7fa] to-white py-24 text-center sm:py-32" aria-labelledby="umrah-cta">
      <Container>
        <div className="mx-auto max-w-2xl">
          <span aria-hidden className="mx-auto block h-12 w-px bg-gold-500" />
          <h2 id="umrah-cta" className="mt-8 text-3xl font-light leading-tight text-navy-900 sm:text-5xl">
            May your journey be <span className="font-semibold">easy and accepted.</span>
          </h2>
          <p className="mt-6 text-base leading-[1.95] text-muted">
            Send your flights, hotels and dates, and we will confirm the vehicle and price for your pilgrim transfers.
          </p>
          <BookButtons slug="vip-hajj-umrah-transfers" service="a VIP Hajj or Umrah transfer" primaryLabel="Plan My Pilgrim Transfer" className="mt-9 justify-center" />
          <p className="mt-12 text-sm text-muted">
            Related:{" "}
            <Link href="/services/airport-transfers" className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4">airport transfers</Link>,{" "}
            <Link href="/services/group-transfers" className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4">group transfers</Link>,{" "}
            <Link href="/services/city-to-city-transfer" className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4">city-to-city transfers</Link>.
          </p>
        </div>
      </Container>
    </section>
  );
}
