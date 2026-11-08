import { Crumbs } from "@/components/navigation/Crumbs";
import { BookButtons } from "@/components/booking/BookButtons";
import { Photo } from "@/components/ui/Photo";

/** Split-screen hero: text panel on one side, a photograph with a flow overlay on the other. Edge to edge. */
export function GroupsHero() {
  return (
    <section className="grid bg-navy-900 text-white lg:min-h-[640px] lg:grid-cols-2">
      <div className="flex flex-col justify-center px-5 py-14 sm:px-10 lg:px-[max(2.5rem,calc((100vw-80rem)/2+2rem))] lg:pe-16">
        <Crumbs current="Group Transfers" />
        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Coordinated group transportation</p>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
          One booking for the whole group.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-[1.9] text-white/75 sm:text-lg">
          Families, tourists, pilgrims and delegations travel better when the transport is planned together. We organise vehicles, drivers, meeting points and timings as a single arrangement.
        </p>
        <BookButtons slug="group-transfers" service="a group transfer" primaryLabel="Plan Group Transfer" className="mt-9" />
      </div>
      <div className="relative min-h-[320px]">
        <Photo id="groups-hero" tone="warm" priority sizes="(min-width:1024px) 50vw, 100vw" className="absolute inset-0" />
        <svg aria-hidden viewBox="0 0 400 300" className="absolute inset-0 size-full p-8 text-gold-400/80" preserveAspectRatio="xMidYMid meet">
          {[60, 120, 180, 240].map((y, i) => (
            <g key={y}>
              <circle cx="40" cy={y} r="9" fill="currentColor" />
              <path d={`M52 ${y} C 140 ${y}, 160 150, 250 150`} stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5 6" opacity={0.7 - i * 0.05} />
            </g>
          ))}
          <rect x="250" y="130" width="110" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <text x="305" y="155" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="600">One plan</text>
        </svg>
      </div>
    </section>
  );
}
