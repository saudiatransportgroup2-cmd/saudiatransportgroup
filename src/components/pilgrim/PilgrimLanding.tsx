import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { site } from "@/config/site";
import { telHref, whatsappHref } from "@/lib/contact";
import { Logo } from "@/components/layout/Logo";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { PilgrimForm } from "./PilgrimForm";
import type { PilgrimContent } from "./content";

/** Landing page for Urdu and Indonesian readers. One page per language, written for that audience. */
export function PilgrimLanding({ c }: { c: PilgrimContent }) {
  const wa = whatsappHref("Hello Saudi Transport Group, I would like to enquire about transport.");
  return (
    <>
      <header className="bg-navy-900">
        <Container className="flex items-center justify-between gap-4 py-4">
          <Link href={c.path} aria-label={site.name.en}><Logo name={site.name.en} /></Link>
          <div className="flex items-center gap-3 text-sm">
            <Link href="/en" lang="en" hrefLang="en" className="rounded-full border border-white/25 px-4 py-2 font-medium text-white hover:border-gold-400">English</Link>
            <a href={telHref} className="hidden items-center gap-2 font-semibold text-gold-300 sm:flex" dir="ltr"><Phone className="size-4" aria-hidden /> {site.phone.display}</a>
          </div>
        </Container>
      </header>

      <section className="bg-[#f5f7fa]">
        <Container className="pb-16 pt-12 sm:pb-24 sm:pt-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">{c.hero.eyebrow}</p>
              <h1 className="mt-5 text-3xl font-semibold leading-[1.35] tracking-tight text-navy-900 sm:text-5xl sm:leading-[1.25]">{c.hero.title}</h1>
              <p className="mt-6 max-w-xl text-base leading-[2] text-muted sm:text-lg">{c.hero.lead}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={wa} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#15803d] px-7 text-sm font-semibold text-white hover:bg-[#166534]">
                  <MessageCircle className="size-4" aria-hidden /> {c.hero.whatsapp}
                </a>
                <a href={telHref} className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-navy-200 px-7 text-sm font-semibold text-navy-900 hover:border-gold-500">
                  <Phone className="size-4" aria-hidden /> {c.hero.call}
                </a>
              </div>
              <p className="mt-6 max-w-xl border-s-2 border-gold-500 ps-4 text-sm leading-[1.9] text-muted">{c.hero.note}</p>
            </div>
            <PilgrimForm c={c} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24" aria-labelledby="pg-arrange">
        <Container>
          <h2 id="pg-arrange" className="text-3xl font-semibold tracking-tight text-navy-900">{c.arrangeTitle}</h2>
          <dl className="mt-8 divide-y divide-navy-100 border-y border-navy-100">
            {c.arrange.map(([k, v]) => (
              <div key={k} className="grid gap-2 py-5 md:grid-cols-[280px_1fr] md:gap-10">
                <dt className="font-semibold text-navy-900">{k}</dt>
                <dd className="text-sm leading-[2] text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-navy-900 py-16 text-white sm:py-24" aria-labelledby="pg-steps">
        <Container>
          <h2 id="pg-steps" className="text-3xl font-semibold tracking-tight">{c.stepsTitle}</h2>
          <ol className="mt-10 grid gap-px bg-white/10 md:grid-cols-4">
            {c.steps.map(([t, d], i) => (
              <li key={t} className="bg-navy-900 p-6">
                <span className="text-3xl font-semibold text-gold-500" dir="ltr">{i + 1}</span>
                <h3 className="mt-3 font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-[1.95] text-white/70">{d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24" aria-labelledby="pg-honest">
        <Container className="max-w-3xl">
          <h2 id="pg-honest" className="text-3xl font-semibold tracking-tight text-navy-900">{c.honestTitle}</h2>
          <ul className="mt-8 list-disc space-y-3 ps-6 text-base leading-[2] text-muted">
            {c.honest.map((h) => <li key={h}>{h}</li>)}
          </ul>
        </Container>
      </section>

      <section className="border-y border-navy-100 bg-[#f5f7fa] py-16 sm:py-24" aria-labelledby="pg-tools">
        <Container>
          <h2 id="pg-tools" className="text-3xl font-semibold tracking-tight text-navy-900">{c.toolsTitle}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-[2] text-muted">{c.toolsLead}</p>
          <ul className="mt-8 divide-y divide-navy-100 border-y border-navy-100 bg-white">
            {c.tools.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className="grid gap-1 p-5 hover:bg-[#f5f7fa] md:grid-cols-[320px_1fr] md:gap-8">
                  <span className="font-semibold text-navy-900">{t.name}</span>
                  <span className="text-sm leading-[1.9] text-muted">{t.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24" aria-labelledby="pg-faq">
        <Container>
          <h2 id="pg-faq" className="text-3xl font-semibold tracking-tight text-navy-900">{c.faqTitle}</h2>
          <div className="mt-8 max-w-3xl divide-y divide-navy-100 border-y border-navy-100">
            {c.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none font-semibold text-navy-900">{f.q}</summary>
                <p className="mt-3 text-sm leading-[2] text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <footer className="bg-navy-950 py-10 pb-24 text-sm text-white/70 lg:pb-10">
        <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name.en}. {c.footer.rights}.</p>
          <nav className="flex gap-5" aria-label="Footer">
            <Link href="/en" lang="en" className="hover:text-white">{c.footer.english}</Link>
            <Link href="/privacy" className="hover:text-white">{c.footer.privacy}</Link>
          </nav>
        </Container>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-px bg-navy-950 shadow-[0_-4px_20px_rgba(0,0,0,0.25)] lg:hidden">
        <a href={telHref} className="flex min-h-14 items-center justify-center gap-2 bg-navy-900 text-sm font-semibold text-white"><Phone className="size-4" aria-hidden /> {c.hero.call}</a>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-center gap-2 bg-[#15803d] text-sm font-semibold text-white"><MessageCircle className="size-4" aria-hidden /> WhatsApp</a>
      </div>

      <JsonLd data={faqSchema(c.faqs)} />
    </>
  );
}
