"use client";

import { useEffect, useState } from "react";

export interface SpineStep {
  id: string;
  label: string;
}

/** Sticky journey spine. Highlights the step currently in view; every step stays a real anchor link. */
export function SpineNav({ steps }: { steps: SpineStep[] }) {
  const [active, setActive] = useState(steps[0].id);

  useEffect(() => {
    const els = steps.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [steps]);

  const idx = steps.findIndex((s) => s.id === active);

  return (
    <nav aria-label="Airport journey steps" className="relative">
      <div aria-hidden className="absolute start-[15px] top-3 h-[calc(100%-1.5rem)] w-px bg-navy-100" />
      <div
        aria-hidden
        className="absolute start-[15px] top-3 w-px bg-gold-500 transition-all duration-500"
        style={{ height: `${(idx / (steps.length - 1)) * (100 - 8)}%` }}
      />
      <ol className="relative space-y-6">
        {steps.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              aria-current={active === s.id ? "step" : undefined}
              className="group flex items-center gap-4"
            >
              <span
                className={`grid size-[31px] shrink-0 place-items-center rounded-full border text-xs font-semibold transition-colors ${
                  i <= idx ? "border-gold-500 bg-gold-500 text-navy-950" : "border-navy-100 bg-white text-muted"
                }`}
              >
                {i + 1}
              </span>
              <span className={`text-sm font-medium transition-colors ${active === s.id ? "text-navy-900" : "text-muted group-hover:text-navy-900"}`}>
                {s.label}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
