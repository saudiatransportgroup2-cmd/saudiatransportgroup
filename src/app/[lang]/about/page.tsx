import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { href, isLang } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { CtaBand, PageHero } from "@/components/sections/Blocks";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { JsonLd } from "@/components/seo/JsonLd";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const m = getDict(lang).meta.about;
  return buildMetadata({ lang, path: "/about", title: m.title, description: m.description });
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDict(lang);
  return (
    <>
      <PageHero
        title={t.about.title}
        lead={t.about.lead}
        crumbs={[{ label: t.nav.home, href: href(lang) }, { label: t.nav.about }]}
      />
      <Section>
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-navy-700">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>
      </Section>
      <Section tone="soft" labelledBy="values-h">
        <SectionHeading id="values-h" title={t.about.valuesTitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.values.map((v) => (
            <div key={v.t} className="reveal rounded-2xl border border-navy-100 bg-white p-7">
              <h3 className="text-lg font-semibold">{v.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section labelledBy="about-services">
        <SectionHeading id="about-services" title={t.home.servicesTitle} />
        <ServiceGrid lang={lang} />
      </Section>
      <CtaBand lang={lang} />
      <JsonLd
        data={breadcrumbSchema([
          { name: t.nav.home, path: href(lang) },
          { name: t.nav.about, path: href(lang, "/about") },
        ])}
      />
    </>
  );
}
