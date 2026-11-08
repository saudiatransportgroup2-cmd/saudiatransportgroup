import { Luggage, Users } from "lucide-react";
import type { Lang } from "@/config/site";
import { href } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";
import { fleet, type Vehicle } from "@/data/fleet";
import { VehicleArt } from "@/components/ui/VehicleArt";
import { ButtonLink } from "@/components/ui/primitives";

export function VehicleCard({ lang, v, showCta }: { lang: Lang; v: Vehicle; showCta?: boolean }) {
  const t = getDict(lang);
  return (
    <article className="reveal flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-shadow hover:shadow-xl">
      <div className="grid h-44 place-items-center bg-gradient-to-br from-navy-900 to-navy-700 px-8 text-gold-300">
        {v.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={v.image} alt={v.name[lang]} loading="lazy" width={640} height={352} className="size-full object-cover" />
        ) : (
          <VehicleArt kind={v.id} className="w-full max-w-[15rem]" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{v.name[lang]}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-700/80">{v.desc[lang]}</p>
        <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-navy-50 p-3">
            <dt className="flex items-center gap-1.5 text-xs text-navy-700/70"><Users className="size-3.5" aria-hidden /> {t.fleet.passengers}</dt>
            <dd className="mt-1 font-semibold">{v.passengers}</dd>
          </div>
          <div className="rounded-xl bg-navy-50 p-3">
            <dt className="flex items-center gap-1.5 text-xs text-navy-700/70"><Luggage className="size-3.5" aria-hidden /> {t.fleet.luggage}</dt>
            <dd className="mt-1 font-semibold">{v.luggage[lang]}</dd>
          </div>
        </dl>
        <p className="mt-4 text-xs text-navy-700/70">
          <span className="font-semibold text-navy-900">{t.fleet.bestFor}:</span> {v.bestFor[lang]}
        </p>
        {showCta && (
          <ButtonLink href={`${href(lang, "/get-a-quote")}?vehicle=${v.id}`} variant="navy" className="mt-6">
            {t.cta.requestVehicle}
          </ButtonLink>
        )}
      </div>
    </article>
  );
}

export function FleetGrid({ lang, showCta, limit }: { lang: Lang; showCta?: boolean; limit?: number }) {
  const list = limit ? fleet.slice(0, limit) : fleet;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((v) => (
        <VehicleCard key={v.id} lang={lang} v={v} showCta={showCta} />
      ))}
    </div>
  );
}
