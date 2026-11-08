import Link from "next/link";
import { BookButtons } from "@/components/booking/BookButtons";
import { Container } from "@/components/ui/primitives";

/** Back-cover style close: centred, quiet, with next-read links. */
export function ToursCta() {
  return (
    <section className="bg-white py-24 text-center sm:py-32" aria-labelledby="tours-cta">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Your city, your pace</p>
        <h2 id="tours-cta" className="mx-auto mt-5 max-w-3xl text-4xl font-light leading-tight text-navy-900 sm:text-6xl">
          Tell us where you would like to <span className="font-semibold">go first.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-[1.9] text-muted">
          Send the city, the date and the number of travellers. We will reply with a practical plan, the right vehicle and a clear price.
        </p>
        <BookButtons slug="city-tours-with-private-driver" service="a city tour with a private driver" primaryLabel="Plan My City Tour" className="mt-10 justify-center" />
        <p className="mt-14 text-sm text-muted">
          Also see{" "}
          <Link href="/services/airport-transfers" className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4">airport transfers</Link>,{" "}
          <Link href="/private-chauffeur-hire" className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4">private chauffeur hire</Link> and{" "}
          <Link href="/services/group-transfers" className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4">group transfers</Link>.
        </p>
      </Container>
    </section>
  );
}
