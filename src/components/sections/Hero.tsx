import { MessageCircle } from "lucide-react";
import type { Lang } from "@/config/site";
import { href } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { defaultWhatsappMessage, whatsappHref } from "@/lib/contact";
import { ButtonLink, Container } from "@/components/ui/primitives";
import { VehicleArt } from "@/components/ui/VehicleArt";

export function Hero({ lang }: { lang: Lang }) {
  const t = getDict(lang);
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_80%_-10%,rgba(184,150,78,0.22),transparent),radial-gradient(40rem_30rem_at_0%_100%,rgba(35,69,131,0.6),transparent)]"
      />
      <svg aria-hidden className="absolute inset-0 -z-10 size-full opacity-[0.06]">
        <defs>
          <pattern id="geo" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M24 0 L48 24 L24 48 L0 24 Z" fill="none" stroke="#fff" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geo)" />
      </svg>

      <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
        <div className="animate-fade-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
            {t.home.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            {t.home.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">{t.home.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={href(lang, "/get-a-quote")} arrow>
              {t.cta.quote}
            </ButtonLink>
            <ButtonLink
              href={whatsappHref(defaultWhatsappMessage[lang])}
              external
              variant="whatsapp"
            >
              <MessageCircle className="size-4" aria-hidden /> {t.cta.whatsapp}
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-gold-500/25 to-transparent blur-2xl" />
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <VehicleArt kind="luxury" className="w-full text-gold-300" />
            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-white/70">
              <span className="rounded-xl bg-white/5 py-3">Makkah</span>
              <span className="rounded-xl bg-white/5 py-3">Madinah</span>
              <span className="rounded-xl bg-white/5 py-3">Jeddah · Riyadh</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
