import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { href, isLang } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { PageHero } from "@/components/sections/Blocks";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Section } from "@/components/ui/primitives";
import { JsonLd } from "@/components/seo/JsonLd";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const m = getDict(lang).meta.quote;
  return buildMetadata({ lang, path: "/get-a-quote", title: m.title, description: m.description });
}

export default async function QuotePage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDict(lang);
  return (
    <>
      <PageHero
        title={t.quotePage.title}
        lead={t.quotePage.lead}
        crumbs={[{ label: t.nav.home, href: href(lang) }, { label: t.nav.quote }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl rounded-3xl border border-navy-100 bg-white p-6 shadow-sm sm:p-10">
          <QuoteForm lang={lang} />
        </div>
      </Section>
      <JsonLd
        data={breadcrumbSchema([
          { name: t.nav.home, path: href(lang) },
          { name: t.nav.quote, path: href(lang, "/get-a-quote") },
        ])}
      />
    </>
  );
}
