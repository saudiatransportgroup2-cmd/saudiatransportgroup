import { Container } from "@/components/ui/primitives";

/** Plain accessible FAQ list used by the standalone guide and tool pages. */
export function DetailsFaq({ id, title, items }: { id: string; title: string; items: { q: string; a: string }[] }) {
  return (
    <section className="border-t border-navy-100 bg-[#f5f7fa] py-20 sm:py-24" aria-labelledby={id}>
      <Container>
        <h2 id={id} className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">{title}</h2>
        <div className="mt-8 max-w-3xl divide-y divide-navy-100 border-y border-navy-100">
          {items.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="cursor-pointer list-none font-semibold text-navy-900">{f.q}</summary>
              <p className="mt-3 text-sm leading-[1.9] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
