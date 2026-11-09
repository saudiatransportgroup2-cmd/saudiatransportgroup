"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="flex min-h-12 items-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-semibold text-white hover:bg-navy-800">
      <Printer className="size-4" aria-hidden /> Print or save as PDF
    </button>
  );
}
