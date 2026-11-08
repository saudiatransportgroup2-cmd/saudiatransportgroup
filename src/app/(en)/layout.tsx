import type { Metadata } from "next";
import { site } from "@/config/site";
import { getDict } from "@/i18n/dictionaries";
import { telHref } from "@/lib/contact";
import { localBusinessSchema } from "@/lib/schema";
import { arabic, poppins } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { JsonLd } from "@/components/seo/JsonLd";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name.en,
  robots: { index: true, follow: true },
};
export const viewport = { themeColor: "#10243a" };

/** Root layout for the English-only service pages (outside /[lang]). */
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  const t = getDict("en");
  return (
    <html lang="en" dir="ltr" className={`${poppins.variable} ${arabic.variable}`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-navy-950"
        >
          {t.skip}
        </a>
        <Header lang="en" siteName={site.name.en} phoneDisplay={site.phone.display} phoneHref={telHref} labels={t.nav} />
        <main id="main">{children}</main>
        <Footer lang="en" />
        <FloatingActions lang="en" />
        <JsonLd data={localBusinessSchema("en")} />
      </body>
    </html>
  );
}
