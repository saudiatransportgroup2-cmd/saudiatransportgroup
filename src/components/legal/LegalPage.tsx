import type { ReactNode } from "react";
import { Crumbs } from "@/components/navigation/Crumbs";
import { Container } from "@/components/ui/primitives";

/** Plain reading layout for policy pages. */
export function LegalPage({ title, updated, intro, children }: { title: string; updated: string; intro: string; children: ReactNode }) {
  return (
    <>
      <section className="bg-navy-900 py-14 text-white sm:py-20">
        <Container>
          <Crumbs current={title} />
          <h1 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-white/60">Last updated: {updated}</p>
        </Container>
      </section>
      <section className="bg-white py-14 sm:py-20">
        <Container>
          <article className="mx-auto max-w-3xl text-base leading-[1.9] text-muted [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-navy-900 [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:ps-6 [&_a]:font-semibold [&_a]:text-navy-900 [&_a]:underline [&_a]:decoration-gold-500 [&_a]:underline-offset-4">
            <p className="!mt-0 text-lg text-ink">{intro}</p>
            {children}
          </article>
        </Container>
      </section>
    </>
  );
}
