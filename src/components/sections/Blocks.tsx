import { Check, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { site, type Lang, type L10n } from "@/config/site";
import { href } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { defaultWhatsappMessage, telHref, whatsappHref } from "@/lib/contact";
import { ButtonLink, Container, Section } from "@/components/ui/primitives";

export function WhyUs({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {t.why.map((w, i) => (
        <div key={w.t} className="reveal rounded-2xl border border-white/10 bg-white/5 p-7">
          <span className="text-3xl font-semibold text-gold-400" aria-hidden>
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 text-lg font-semibold">{w.t}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">{w.d}</p>
        </div>
      ))}
    </div>
  );
}

export function Steps({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  return (
    <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {t.steps.map((s, i) => (
        <li key={s.t} className="reveal relative">
          <span className="grid size-12 place-items-center rounded-full border-2 border-gold-500 text-lg font-semibold text-gold-600">
            {i + 1}
          </span>
          <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
          <p className="mt-2 text-sm leading-relaxed text-navy-700/80">{s.d}</p>
        </li>
      ))}
    </ol>
  );
}

export function CtaBand({ lang, title, text }: { lang: Lang; title?: string; text?: string }) {
  const t = getDict(lang);
  return (
    <section className="bg-gradient-to-br from-navy-900 to-navy-700 py-16 text-white sm:py-20" aria-labelledby="cta-title">
      <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 id="cta-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title ?? t.home.ctaTitle}
          </h2>
          <p className="mt-4 text-white/75">{text ?? t.home.ctaText}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <ButtonLink href={href(lang, "/get-a-quote")} arrow>{t.cta.quote}</ButtonLink>
          <ButtonLink href={whatsappHref(defaultWhatsappMessage[lang])} external variant="whatsapp">
            <MessageCircle className="size-4" aria-hidden /> {t.cta.whatsapp}
          </ButtonLink>
          <ButtonLink href={telHref} variant="outlineLight">
            <Phone className="size-4" aria-hidden /> <span dir="ltr">{site.phone.display}</span>
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function FaqList({ lang, items }: { lang: Lang; items: { q: L10n; a: L10n }[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white">
      {items.map((f) => (
        <details key={f.q.en} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
            {f.q[lang]}
            <span aria-hidden className="text-xl text-gold-600 transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-navy-700/80">{f.a[lang]}</p>
        </details>
      ))}
    </div>
  );
}

export function CheckList({ items, lang }: { items: L10n[]; lang: Lang }) {
  return (
    <ul className="space-y-3">
      {items.map((i) => (
        <li key={i.en} className="flex items-start gap-3 text-sm leading-relaxed">
          <Check className="mt-0.5 size-4 shrink-0 text-gold-600" aria-hidden />
          <span>{i[lang]}</span>
        </li>
      ))}
    </ul>
  );
}

export function PageHero({
  title,
  lead,
  crumbs,
}: {
  title: string;
  lead?: string;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 text-white sm:py-24">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(50rem_24rem_at_85%_-20%,rgba(184,150,78,0.22),transparent)]" />
      <Container className="relative">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
            <ol className="flex flex-wrap items-center gap-2">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {c.href ? <Link href={c.href} className="hover:text-gold-300">{c.label}</Link> : <span aria-current="page" className="text-white/90">{c.label}</span>}
                  {i < crumbs.length - 1 && <span aria-hidden>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{title}</h1>
        <span className="mt-5 block h-0.5 w-14 bg-gold-500" aria-hidden />
        {lead && <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{lead}</p>}
      </Container>
    </section>
  );
}

export { Section };
