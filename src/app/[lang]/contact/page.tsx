import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/config/site";
import { href, isLang } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { defaultWhatsappMessage, mailHref, telHref, whatsappHref } from "@/lib/contact";
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
  const m = getDict(lang).meta.contact;
  return buildMetadata({ lang, path: "/contact", title: m.title, description: m.description });
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDict(lang);
  const card = "flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6 transition-colors hover:border-gold-400";
  const icon = "mt-0.5 size-6 shrink-0 text-gold-600";
  return (
    <>
      <PageHero
        title={t.contact.title}
        lead={t.contact.lead}
        crumbs={[{ label: t.nav.home, href: href(lang) }, { label: t.nav.contact }]}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <ul className="space-y-4">
            <li>
              <a href={telHref} className={card}>
                <Phone className={icon} aria-hidden />
                <span><span className="block text-sm text-navy-700/70">{t.contact.phone}</span><span className="font-semibold" dir="ltr">{site.phone.display}</span></span>
              </a>
            </li>
            <li>
              <a href={whatsappHref(defaultWhatsappMessage[lang])} target="_blank" rel="noopener noreferrer" className={card}>
                <MessageCircle className={icon} aria-hidden />
                <span><span className="block text-sm text-navy-700/70">{t.contact.whatsapp}</span><span className="font-semibold" dir="ltr">{site.phone.display}</span></span>
              </a>
            </li>
            <li>
              <a href={mailHref} className={card}>
                <Mail className={icon} aria-hidden />
                <span><span className="block text-sm text-navy-700/70">{t.contact.email}</span><span className="font-semibold break-all">{site.email}</span></span>
              </a>
            </li>
            <li className={card.replace("hover:border-gold-400", "")}>
              <Clock className={icon} aria-hidden />
              <span><span className="block text-sm text-navy-700/70">{t.contact.hours}</span><span className="font-semibold">{t.contact.hoursValue}</span></span>
            </li>
          </ul>
          <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 text-2xl font-semibold">{t.contact.enquiryTitle}</h2>
            <QuoteForm lang={lang} compact />
          </div>
        </div>
      </Section>
      <JsonLd
        data={breadcrumbSchema([
          { name: t.nav.home, path: href(lang) },
          { name: t.nav.contact, path: href(lang, "/contact") },
        ])}
      />
    </>
  );
}
