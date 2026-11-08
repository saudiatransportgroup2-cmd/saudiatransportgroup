import { Container } from "@/components/ui/primitives";
import { airportFaqs } from "./faqs";

/** Two-column FAQ: sticky lead on the left, one-open-at-a-time feel via native details. */
export function AirportFaq() {
  return (
    <section className="bg-navy-50 py-20 sm:py-28" aria-labelledby="airport-faq">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">Airport journey FAQs</p>
          <h2 id="airport-faq" className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Questions travellers ask before they land
          </h2>
          <p className="mt-5 text-base leading-[1.8] text-muted">
            Can&apos;t find your question? Message us on WhatsApp and we will answer it, usually before you book.
          </p>
        </div>
        <div className="divide-y divide-navy-100 border-y border-navy-100">
          {airportFaqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-semibold text-navy-900 marker:hidden [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="mt-0.5 text-xl leading-none text-gold-600 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-[1.8] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
