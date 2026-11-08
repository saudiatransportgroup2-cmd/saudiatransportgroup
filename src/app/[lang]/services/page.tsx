import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { href, isLang } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { CtaBand, PageHero } from "@/components/sections/Blocks";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Section } from "@/components/ui/primitives";
import { JsonLd } from "@/components/seo/JsonLd";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const m = getDict(lang).meta.services;
  return buildMetadata({ lang, path: "/services", title: m.title, description: m.description });
}

export default async function ServicesPage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDict(lang);
  return (
    <>
      <PageHero
        title={t.services.title}
        lead={t.services.lead}
        crumbs={[{ label: t.nav.home, href: href(lang) }, { label: t.nav.services }]}
      />
      <Section>
        <ServiceGrid lang={lang} />
      </Section>
      <CtaBand lang={lang} />
      <JsonLd
        data={breadcrumbSchema([
          { name: t.nav.home, path: href(lang) },
          { name: t.nav.services, path: href(lang, "/services") },
        ])}
      />
    </>
  );
}
