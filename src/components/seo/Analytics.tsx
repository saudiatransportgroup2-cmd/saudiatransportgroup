"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Optional analytics. Nothing loads unless an ID is provided at build time:
 *   NEXT_PUBLIC_GA_ID            Google Analytics 4 measurement ID (G-XXXXXXXXXX)
 *   NEXT_PUBLIC_CF_BEACON_TOKEN  Cloudflare Web Analytics token
 * When GA is on, clicks on WhatsApp and phone links are sent as events, so you can
 * see how many visitors actually start a booking conversation.
 */
export function Analytics() {
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const cf = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

  useEffect(() => {
    if (!ga) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      const href = a?.getAttribute("href") ?? "";
      if (!window.gtag) return;
      if (href.startsWith("https://wa.me/")) window.gtag("event", "whatsapp_click", { link_url: href.split("?")[0], page_path: location.pathname });
      else if (href.startsWith("tel:")) window.gtag("event", "phone_click", { page_path: location.pathname });
      else if (href.includes("/get-a-quote")) window.gtag("event", "quote_click", { page_path: location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [ga]);

  return (
    <>
      {ga && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${ga}');`}
          </Script>
        </>
      )}
      {cf && (
        <Script src="https://static.cloudflareinsights.com/beacon.min.js" strategy="afterInteractive" data-cf-beacon={JSON.stringify({ token: cf })} />
      )}
    </>
  );
}
