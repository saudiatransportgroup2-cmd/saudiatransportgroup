import type { Metadata } from "next";
import { site } from "@/config/site";
import { absoluteUrl } from "@/lib/metadata";
import { arabic, poppins } from "@/lib/fonts";
import { Analytics } from "@/components/seo/Analytics";
import type { PilgrimContent } from "./content";

export const pilgrimViewport = { themeColor: "#10243a" };

/** Root HTML shell for a pilgrim-language landing page. */
export function PilgrimRoot({ c, children }: { c: PilgrimContent; children: React.ReactNode }) {
  return (
    <html lang={c.htmlLang} dir={c.dir} className={`${poppins.variable} ${arabic.variable}`}>
      <body className="font-sans">
        <main id="main">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}

export function pilgrimMetadata(c: PilgrimContent): Metadata {
  const url = absoluteUrl(c.path);
  const full = `${c.metaTitle} | ${site.name.en}`;
  const image = { url: "/og.png", width: 1200, height: 630, alt: site.name.en };
  return {
    metadataBase: new URL(site.url),
    title: { absolute: full },
    description: c.metaDescription,
    applicationName: site.name.en,
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: { type: "website", url, siteName: site.name.en, title: full, description: c.metaDescription, locale: c.ogLocale, images: [image] },
    twitter: { card: "summary_large_image", title: full, description: c.metaDescription, images: [image.url] },
  };
}
