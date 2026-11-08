"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

/**
 * Accessible tabs primitive (roving tabindex, arrow keys, Home/End).
 * All panels stay in the DOM (inactive ones are `hidden`) so their text remains crawlable.
 * Each page supplies its own classes, so the visual result is page-specific.
 */
export function Tabs({
  tabs,
  label,
  orientation = "horizontal",
  listClassName = "",
  tabClassName,
  activeTabClassName,
  panelClassName = "",
  className = "",
  initial = 0,
}: {
  tabs: TabItem[];
  label: string;
  orientation?: "horizontal" | "vertical";
  listClassName?: string;
  /** Classes for every tab; `activeTabClassName` is added to the selected one. */
  tabClassName: string;
  activeTabClassName: string;
  panelClassName?: string;
  className?: string;
  initial?: number;
}) {
  const [active, setActive] = useState(initial);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const move = (i: number) => {
    const n = (i + tabs.length) % tabs.length;
    setActive(n);
    refs.current[n]?.focus();
  };

  const onKey = (e: KeyboardEvent, i: number) => {
    const next = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
    const prev = orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (e.key === next) { e.preventDefault(); move(i + 1); }
    else if (e.key === prev) { e.preventDefault(); move(i - 1); }
    else if (e.key === "Home") { e.preventDefault(); move(0); }
    else if (e.key === "End") { e.preventDefault(); move(tabs.length - 1); }
  };

  return (
    <div className={className}>
      <div role="tablist" aria-label={label} aria-orientation={orientation} className={listClassName}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => { refs.current[i] = el; }}
            role="tab"
            type="button"
            id={`tab-${t.id}`}
            aria-selected={active === i}
            aria-controls={`panel-${t.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
            className={`${tabClassName} ${active === i ? activeTabClassName : ""}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`panel-${t.id}`}
          aria-labelledby={`tab-${t.id}`}
          hidden={active !== i}
          tabIndex={0}
          className={panelClassName}
        >
          {t.content}
        </div>
      ))}
    </div>
  );
}
