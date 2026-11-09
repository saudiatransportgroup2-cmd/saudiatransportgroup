"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const questions = [
  "Is the price per vehicle, or per passenger?",
  "Does the price include fuel and tolls?",
  "Does it include waiting time at the airport, and how long?",
  "Are rest and prayer stops included on a long journey?",
  "What vehicle will I get, and how many passengers and suitcases does it take?",
  "What is the cancellation and change policy, in writing?",
  "What happens if my flight is delayed?",
  "Will I receive the driver's name and phone number before I arrive?",
  "Is the operator licensed for passenger transport, and can you share the details?",
  "Can you confirm all of this in writing before I pay?",
] as const;

/** Lets a traveller pick the questions they want answered and copy them to send to any operator. */
export function QuoteChecker() {
  const [picked, setPicked] = useState<boolean[]>(() => questions.map(() => true));
  const [copied, setCopied] = useState(false);
  const chosen = questions.filter((_, i) => picked[i]);
  const text = `Hello, I would like a quote. Before I decide, please answer in writing:\n${chosen.map((q, i) => `${i + 1}. ${q}`).join("\n")}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable: the text is also shown on the page */
    }
  }

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm sm:p-8">
      <fieldset>
        <legend className="text-sm font-semibold text-navy-900">Choose the questions to ask</legend>
        <ul className="mt-4 space-y-2">
          {questions.map((q, i) => (
            <li key={q}>
              <label className="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg px-2 py-2 text-sm leading-relaxed text-ink hover:bg-[#f5f7fa]">
                <input
                  type="checkbox"
                  checked={picked[i]}
                  onChange={() => setPicked((p) => p.map((v, j) => (j === i ? !v : v)))}
                  className="mt-1 size-4 shrink-0"
                />
                {q}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
      <label className="mt-6 block text-xs font-semibold text-muted">Message to send to the operator
        <textarea readOnly value={text} rows={Math.min(14, chosen.length + 3)} className="mt-1 block w-full min-w-0 rounded-lg border border-navy-100 bg-[#f5f7fa] p-3 text-sm text-ink" />
      </label>
      <button type="button" onClick={copy} className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-semibold text-white hover:bg-navy-800">
        {copied ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />} {copied ? "Copied" : "Copy these questions"}
      </button>
      <p className="mt-3 text-xs leading-relaxed text-muted">Use it with any company, including us. Nothing is stored or sent from this page.</p>
    </div>
  );
}
