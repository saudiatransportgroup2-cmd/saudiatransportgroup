import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { dir, isLang, locales } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { telHref } from "@/lib/contact";
import { localBusinessSchema } from "@/lib/schema";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { JsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@/components/seo/Analytics";
import { arabic, poppins } from "@/lib/fonts";
import "../globals.css";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return {
    metadataBase: new URL(site.url),
    title: { default: site.name[lang], template: `%s | ${site.name[lang]}` },
    applicationName: site.name[lang],
    robots: { index: true, follow: true },
  };
}

export const viewport = { themeColor: "#0a1a33" };

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDict(lang);

  return (
    <html lang={lang} dir={dir(lang)} className={`${poppins.variable} ${arabic.variable}`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-navy-950"
        >
          {t.skip}
        </a>
        <Header
          lang={lang}
          siteName={site.name[lang]}
          phoneDisplay={site.phone.display}
          phoneHref={telHref}
          labels={t.nav}
        />
        <main id="main">{children}</main>
        <Footer lang={lang} />
        <FloatingActions lang={lang} />
        <Analytics />
        <JsonLd data={localBusinessSchema(lang)} />
      </body>
    </html>
  );
}
