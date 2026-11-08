import { Container } from "@/components/ui/primitives";
import { coachFaqs } from "./faqs";

/** FAQ as an index table: question in the left column, answer in the right, every row visible. */
export function CoachFaq() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="coach-faq">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Frequently asked questions</p>
        <h2 id="coach-faq" className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
          Bus and coach rental, answered
        </h2>
        <dl className="mt-12 border-t-2 border-navy-900">
          {coachFaqs.map((f) => (
            <div key={f.q} className="grid gap-3 border-b border-navy-100 py-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
              <dt className="font-semibold text-navy-900">{f.q}</dt>
              <dd className="text-sm leading-[1.9] text-muted">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
