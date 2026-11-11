import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { href, isLang } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { CtaBand, PageHero } from "@/components/sections/Blocks";
import { FleetGrid } from "@/components/sections/FleetGrid";
import { Section } from "@/components/ui/primitives";
import { JsonLd } from "@/components/seo/JsonLd";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const m = getDict(lang).meta.fleet;
  return buildMetadata({ lang, path: "/fleet", title: m.title, description: m.description });
}

export default async function FleetPage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDict(lang);
  return (
    <>
      <PageHero
        title={t.fleet.title}
        lead={t.fleet.lead}
        crumbs={[{ label: t.nav.home, href: href(lang) }, { label: t.nav.fleet }]}
      />
      <Section labelledBy="fleet-list">
        <h2 id="fleet-list" className="sr-only">{t.fleet.title}</h2>
        <FleetGrid lang={lang} showCta />
        <p className="mt-10 text-sm text-navy-700">{t.fleet.note}</p>
      </Section>
      <CtaBand lang={lang} />
      <JsonLd
        data={breadcrumbSchema([
          { name: t.nav.home, path: href(lang) },
          { name: t.nav.fleet, path: href(lang, "/fleet") },
        ])}
      />
    </>
  );
}
