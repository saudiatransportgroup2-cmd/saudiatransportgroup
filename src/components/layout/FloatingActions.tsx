import { MessageCircle, Phone } from "lucide-react";
import { site, type Lang } from "@/config/site";
import { getDict } from "@/i18n/dictionaries";
import { defaultWhatsappMessage, telHref, whatsappHref } from "@/lib/contact";

/** Mobile: sticky bottom bar (call + WhatsApp). Desktop: floating WhatsApp button. */
export function FloatingActions({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  const wa = whatsappHref(defaultWhatsappMessage[lang]);
  return (
    <aside aria-label={lang === "ar" ? "تواصل سريع" : "Quick contact"}>
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-px bg-navy-950 shadow-[0_-4px_20px_rgba(0,0,0,0.25)] lg:hidden">
        <a href={telHref} className="flex min-h-14 items-center justify-center gap-2 bg-navy-900 text-sm font-semibold text-white">
          <Phone className="size-4" aria-hidden /> {t.cta.call}
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-14 items-center justify-center gap-2 bg-[#15803d] text-sm font-semibold text-white"
        >
          <MessageCircle className="size-4" aria-hidden /> WhatsApp
        </a>
      </div>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t.cta.whatsapp} ${site.phone.display}`}
        className="fixed bottom-6 end-6 z-30 hidden size-14 place-items-center rounded-full bg-[#15803d] text-white shadow-xl transition-transform hover:scale-105 lg:grid"
      >
        <MessageCircle className="size-7" aria-hidden />
      </a>
    </aside>
  );
}
