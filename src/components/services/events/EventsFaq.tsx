import { Container } from "@/components/ui/primitives";
import { eventFaqs } from "./faqs";

/** Dark accordion with large numerals, set in a single wide column. */
export function EventsFaq() {
  return (
    <section className="bg-navy-900 py-24 text-white sm:py-32" aria-labelledby="events-faq">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">Event-specific FAQs</p>
        <h2 id="events-faq" className="mt-5 max-w-3xl text-3xl font-light leading-tight sm:text-5xl">
          What organisers <span className="font-semibold">ask us most</span>
        </h2>
        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {eventFaqs.map((f, i) => (
            <details key={f.q} className="group py-6">
              <summary className="grid cursor-pointer list-none grid-cols-[48px_1fr_24px] items-baseline gap-4 marker:hidden [&::-webkit-details-marker]:hidden sm:grid-cols-[72px_1fr_24px]">
                <span className="text-2xl font-light text-gold-500">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg font-semibold">{f.q}</span>
                <span aria-hidden className="text-2xl leading-none text-gold-400 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl ps-[64px] text-sm leading-[1.95] text-white/70 sm:ps-[88px]">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
