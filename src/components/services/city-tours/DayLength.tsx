"use client";

import { Moon, Sun, Sunrise } from "lucide-react";
import { Tabs } from "@/components/ui/Tabs";
import { Container } from "@/components/ui/primitives";

function Panel({ icon, title, intro, good, watch }: { icon: React.ReactNode; title: string; intro: string; good: string[]; watch: string[] }) {
  return (
    <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
      <div>
        <div className="flex items-center gap-3 text-gold-600">{icon}</div>
        <h3 className="mt-4 text-2xl font-semibold text-navy-900">{title}</h3>
        <p className="mt-4 text-base leading-[1.9] text-muted">{intro}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-1">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-900">Works well for</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {good.map((g) => <li key={g} className="border-s-2 border-gold-500 ps-3">{g}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-900">Keep in mind</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {watch.map((g) => <li key={g} className="border-s-2 border-navy-100 ps-3">{g}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

/** Half-day versus full-day arrangements as a toggle between two complete briefings. */
export function DayLength() {
  return (
    <section className="border-y border-navy-100 bg-[#f5f7fa] py-20 sm:py-28" aria-labelledby="daylength-title">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Half day or full day</p>
          <h2 id="daylength-title" className="mt-4 text-3xl font-light leading-tight text-navy-900 sm:text-5xl">
            How much of the city do you <span className="font-semibold">want to see?</span>
          </h2>
          <p className="mt-5 text-base leading-[1.8] text-muted">
            We arrange private drivers for part of a day or a full day. Tell us your preferred start time and how long you would like the vehicle with you, and we confirm the arrangement and price.
          </p>
        </div>

        <Tabs
          label="Duration of the tour"
          className="mt-12"
          listClassName="inline-flex rounded-full bg-white p-1 shadow-sm"
          tabClassName="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-muted transition-colors"
          activeTabClassName="!bg-navy-900 !text-white"
          panelClassName="mt-10 bg-white p-8 shadow-sm sm:p-12"
          tabs={[
            {
              id: "half",
              label: "Half day",
              content: (
                <Panel
                  icon={<Sunrise className="size-7" aria-hidden />}
                  title="Half-day arrangement"
                  intro="A half day suits a focused plan: one district and one or two stops, a long coffee, or a shopping trip. It is a good choice between flights, after a morning of meetings, or when travelling with young children who tire quickly."
                  good={["A single heritage area or waterfront", "A shopping trip with several stores", "A layover between flights", "Families with small children"]}
                  watch={["Agree a clear start and finish time", "Choose two or three places, not six", "Travel time between areas can use more of the day than expected"]}
                />
              ),
            },
            {
              id: "full",
              label: "Full day",
              content: (
                <Panel
                  icon={<Sun className="size-7" aria-hidden />}
                  title="Full-day arrangement"
                  intro="A full day lets you combine areas, include a proper lunch, rest in the afternoon and head out again in the evening. It suits first-time visitors who want a broad introduction, and groups with a range of interests."
                  good={["Several districts in one city", "Combining heritage, shopping and a waterfront evening", "Mixed groups with different interests", "Visitors with only one day in the city"]}
                  watch={["Plan a rest break in the middle of the day", "Prayer times can shape the rhythm of the schedule", "Tell us if you may want to finish late"]}
                />
              ),
            },
            {
              id: "evening",
              label: "Evening only",
              content: (
                <Panel
                  icon={<Moon className="size-7" aria-hidden />}
                  title="Evening arrangement"
                  intro="In warmer months, many people prefer to go out after sunset. An evening arrangement covers dinner, a waterfront walk or an evening of shopping, and takes you back to the hotel without a late-night search for a ride."
                  good={["Dinner and an evening walk", "Late shopping", "Visitors who prefer cooler hours", "Special occasions"]}
                  watch={["Confirm finishing time in advance", "Evenings can be busy, so allow extra time for traffic", "Book early for weekends and holidays"]}
                />
              ),
            },
          ]}
        />
      </Container>
    </section>
  );
}
