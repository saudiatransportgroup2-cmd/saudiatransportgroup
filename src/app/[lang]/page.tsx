import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { isLang, href } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { generalFaqs } from "@/data/faqs";
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

      <Section tone="navy" labelledBy="why-h">
        <SectionHeading id="why-h" title={t.home.whyTitle} invert />
        <WhyUs lang={lang} />
      </Section>

      <Section labelledBy="steps-h">
        <SectionHeading id="steps-h" title={t.home.processTitle} />
        <Steps lang={lang} />
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
