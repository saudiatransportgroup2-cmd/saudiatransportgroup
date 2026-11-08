import { Container } from "@/components/ui/primitives";
import { toursFaqs } from "./faqs";

/** FAQ as a numbered two-column set of open cards. Nothing hidden, easy to scan on mobile. */
export function ToursFaq() {
  return (
    <section className="border-t border-navy-100 bg-[#f5f7fa] py-20 sm:py-28" aria-labelledby="tours-faq">
      <Container>
        <h2 id="tours-faq" className="max-w-2xl text-3xl font-light leading-tight text-navy-900 sm:text-5xl">
          Questions, <span className="font-semibold">answered plainly</span>
        </h2>
        <div className="mt-14 grid gap-px bg-navy-100 md:grid-cols-2">
          {toursFaqs.map((f, i) => (
            <article key={f.q} className="bg-[#f5f7fa] p-8 md:p-10">
              <span className="text-xs font-semibold tracking-[0.3em] text-gold-600">Q{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-semibold text-navy-900">{f.q}</h3>
              <p className="mt-3 text-sm leading-[1.9] text-muted">{f.a}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
