import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Lang } from "@/config/site";
import { getDict } from "@/i18n/dictionaries";
import { services, type ServiceLink } from "@/data/services";
import { ServiceGlyph } from "@/components/ui/icons";

export function ServiceCard({ lang, service }: { lang: Lang; service: ServiceLink }) {
  const t = getDict(lang);
  return (
    <article className="reveal group relative flex flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-xl">
      <span className="mb-5 grid size-12 place-items-center rounded-xl bg-navy-900 text-gold-300">
        <ServiceGlyph name={service.icon} />
      </span>
      <h3 className="text-lg font-semibold">
        <Link href={service.href} className="after:absolute after:inset-0 after:content-['']">
          {service.title[lang]}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700/80">{service.short[lang]}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-600">
        {t.cta.learnMore} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden />
      </span>
    </article>
  );
}

export function ServiceGrid({ lang, only }: { lang: Lang; only?: string[] }) {
  const list = only ? services.filter((s) => only.includes(s.slug)) : services;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s) => (
        <ServiceCard key={s.slug} lang={lang} service={s} />
      ))}
    </div>
  );
}
