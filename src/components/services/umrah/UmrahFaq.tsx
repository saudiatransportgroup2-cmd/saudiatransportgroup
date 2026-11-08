import { Container } from "@/components/ui/primitives";
import { umrahFaqs } from "./faqs";

/** Quiet FAQ: centred reading column with every answer visible, no accordion. */
export function UmrahFaq() {
  return (
    <section className="bg-white py-24 sm:py-32" aria-labelledby="umrah-faq">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Frequently asked questions</p>
          <h2 id="umrah-faq" className="mt-5 text-center text-3xl font-light leading-tight text-navy-900 sm:text-4xl">
            Questions pilgrims <span className="font-semibold">often ask us</span>
          </h2>
          <div className="mt-14 divide-y divide-navy-100">
            {umrahFaqs.map((f) => (
              <div key={f.q} className="py-7">
                <h3 className="text-lg font-semibold text-navy-900">{f.q}</h3>
                <p className="mt-2 text-sm leading-[1.95] text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
