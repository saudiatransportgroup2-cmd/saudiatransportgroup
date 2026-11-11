import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { isLang, href } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { generalFaqs } from "@/data/faqs";
import { routeLinks } from "@/data/routes";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { FleetGrid } from "@/components/sections/FleetGrid";
import { CtaBand, FaqList, Steps, WhyUs } from "@/components/sections/Blocks";
import { ButtonLink, Section, SectionHeading } from "@/components/ui/primitives";
import { JsonLd } from "@/components/seo/JsonLd";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const m = getDict(lang).meta.home;
  return buildMetadata({ lang, title: `${m.title} | ${site.name[lang]}`, absoluteTitle: true, description: m.description });
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDict(lang);

  return (
    <>
      <Hero lang={lang} />

      <Section labelledBy="services-h">
        <SectionHeading id="services-h" title={t.home.servicesTitle} lead={t.home.servicesLead} />
        <ServiceGrid lang={lang} />
      </Section>

      <Section tone="soft" labelledBy="fleet-h">
        <SectionHeading id="fleet-h" title={t.home.fleetTitle} lead={t.home.fleetLead} />
        <FleetGrid lang={lang} limit={3} />
        <div className="mt-10">
          <ButtonLink href={href(lang, "/fleet")} variant="navy" arrow>
            {t.cta.viewFleet}
          </ButtonLink>
        </div>
      </Section>

      <Section labelledBy="routes-h">
        <SectionHeading id="routes-h" title={t.home.routesTitle} lead={t.home.routesLead} />
        <ul className="grid gap-6 md:grid-cols-3">
          {routeLinks.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-gold-400 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold">{r.title[lang]}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700">{r.blurb[lang]}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-600">
                  {t.cta.learnMore} <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="navy" labelledBy="why-h">
        <SectionHeading id="why-h" title={t.home.whyTitle} invert />
        <WhyUs lang={lang} />
      </Section>

      <Section labelledBy="steps-h">
        <SectionHeading id="steps-h" title={t.home.processTitle} />
        <Steps lang={lang} />
      </Section>

      <Section labelledBy="planner-h">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 id="planner-h" className="text-3xl font-semibold tracking-tight sm:text-4xl">{lang === "ar" ? "خطط لكل تنقلات رحلة العمرة" : "Plan every journey of your Umrah"}</h2>
            <p className="mt-4 text-base leading-relaxed text-navy-700">
              {lang === "ar"
                ? "أضف المطار ومكة والمدينة والمغادرة في طلب واحد، وأرسله برسالة واحدة على واتساب."
                : "Add the airport, Makkah, Madinah and departure in one request and send it as a single WhatsApp message."}
            </p>
          </div>
          <ButtonLink href="/umrah-trip-planner" variant="navy" arrow>{lang === "ar" ? "افتح مخطط الرحلة" : "Open the trip planner"}</ButtonLink>
        </div>
      </Section>

      <Section tone="soft" labelledBy="agencies-h">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 id="agencies-h" className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.home.agenciesTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-navy-700">{t.home.agenciesText}</p>
          </div>
          <ButtonLink href="/agencies" variant="navy" arrow>{t.home.agenciesCta}</ButtonLink>
        </div>
      </Section>

      <Section labelledBy="faq-h">
        <SectionHeading id="faq-h" title={t.home.faqTitle} align="center" />
        <FaqList lang={lang} items={generalFaqs} />
      </Section>

      <CtaBand lang={lang} />
      <JsonLd data={faqSchema(generalFaqs.map((f) => ({ q: f.q[lang], a: f.a[lang] })))} />
    </>
  );
}
