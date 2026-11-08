import { Container } from "@/components/ui/primitives";
import { groupFaqs } from "./faqs";

/** FAQ in three columns of open cards on a white ground, with a dotted divider between rows. */
export function GroupsFaq() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="groups-faq">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Frequently asked questions</p>
        <h2 id="groups-faq" className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
          Group transfer questions
        </h2>
        <div className="mt-12 grid gap-x-10 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
          {groupFaqs.map((f) => (
            <article key={f.q} className="border-t-2 border-navy-900 py-6">
              <h3 className="text-base font-semibold text-navy-900">{f.q}</h3>
              <p className="mt-3 text-sm leading-[1.9] text-muted">{f.a}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
