import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, TriangleAlert } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { verifyConfirmation } from "@/lib/confirmation";
import { PrintButton } from "@/components/trip/PrintButton";
import { site } from "@/config/site";
import { telHref } from "@/lib/contact";

export const metadata: Metadata = {
  title: { absolute: `Trip confirmation | ${site.name.en}` },
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

const fmtWhen = (s: string) => (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(s) ? s.replace("T", " at ") : s);

/** Read-only confirmation. Shown as authentic only if the signature matches our records. */
export default async function Page({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const result = await verifyConfirmation(decodeURIComponent(token), process.env.CONFIRMATION_SECRET);

  if (!result.ok) {
    return (
      <Container className="max-w-2xl py-20">
        <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6 text-amber-950">
          <h1 className="flex items-center gap-2 text-xl font-semibold"><TriangleAlert className="size-5" aria-hidden /> We could not verify this confirmation</h1>
          <p className="mt-3 text-sm leading-[1.9]">
            {result.reason === "unconfigured"
              ? "Verification is not available right now. Please contact us before relying on this page."
              : "The link is incomplete or has been changed after we issued it. Do not rely on it. Please contact us and we will confirm your trip."}
          </p>
          <a className="mt-4 inline-block font-semibold underline" href={telHref}>{site.phone.display}</a>
        </div>
      </Container>
    );
  }

  const c = result.data;
  return (
    <Container className="max-w-3xl py-12 sm:py-16">
      <div data-print-target>
      <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900 print:border print:border-emerald-700">
        <ShieldCheck className="size-5 shrink-0" aria-hidden />
        Authentic: issued by {site.name.en} on {new Date(c.issued).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Riyadh" })}
      </div>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">Your trip confirmation</h1>
      <dl className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-navy-100 p-5 text-sm sm:grid-cols-4">
        <div><dt className="text-xs text-muted">Reference</dt><dd className="mt-1 font-semibold" dir="ltr">{c.ref}</dd></div>
        <div><dt className="text-xs text-muted">Name</dt><dd className="mt-1 font-semibold">{c.customer}</dd></div>
        <div><dt className="text-xs text-muted">Passengers</dt><dd className="mt-1 font-semibold">{c.pax || "-"}</dd></div>
        <div><dt className="text-xs text-muted">Suitcases</dt><dd className="mt-1 font-semibold">{c.bags || "-"}</dd></div>
      </dl>

      <ol className="mt-8 space-y-5">
        {c.legs.map((l, i) => (
          <li key={i} className="rounded-xl border border-navy-100 bg-white p-5 break-inside-avoid">
            <h2 className="flex items-center gap-3 text-base font-semibold text-navy-900">
              <span className="grid size-7 place-items-center rounded-full bg-navy-900 text-xs text-gold-300">{i + 1}</span>
              {l.kind}
            </h2>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div><dt className="text-xs text-muted">Date and time</dt><dd className="mt-0.5 font-medium">{fmtWhen(l.when)}</dd></div>
              <div><dt className="text-xs text-muted">Vehicle</dt><dd className="mt-0.5 font-medium">{l.vehicle}</dd></div>
              <div><dt className="text-xs text-muted">From</dt><dd className="mt-0.5 font-medium">{l.from}</dd></div>
              <div><dt className="text-xs text-muted">To</dt><dd className="mt-0.5 font-medium">{l.to}</dd></div>
              {l.flight && <div><dt className="text-xs text-muted">Flight</dt><dd className="mt-0.5 font-medium" dir="ltr">{l.flight}</dd></div>}
              {l.driver && <div><dt className="text-xs text-muted">Driver</dt><dd className="mt-0.5 font-medium">{l.driver}{l.driverPhone ? <> · <span dir="ltr">{l.driverPhone}</span></> : null}</dd></div>}
              {l.price && <div><dt className="text-xs text-muted">Price</dt><dd className="mt-0.5 font-medium">{l.price}</dd></div>}
              {l.note && <div className="sm:col-span-2"><dt className="text-xs text-muted">Note</dt><dd className="mt-0.5">{l.note}</dd></div>}
            </dl>
          </li>
        ))}
      </ol>

      {(c.inclusions || c.cancellation) && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {c.inclusions && <section className="rounded-xl bg-[#f5f7fa] p-5"><h2 className="text-sm font-semibold text-navy-900">What the price includes</h2><p className="mt-2 whitespace-pre-line text-sm leading-[1.9] text-muted">{c.inclusions}</p></section>}
          {c.cancellation && <section className="rounded-xl bg-[#f5f7fa] p-5"><h2 className="text-sm font-semibold text-navy-900">Changes and cancellation</h2><p className="mt-2 whitespace-pre-line text-sm leading-[1.9] text-muted">{c.cancellation}</p></section>}
        </div>
      )}

      <p className="mt-8 text-xs leading-[1.9] text-muted">
        This confirmation shows what we agreed in writing on the date above. If anything changes we send a new confirmation, and the latest one replaces this one. Anyone with this link can read it, so share it only with people who travel with you.
      </p>

      <div className="mt-6 flex flex-wrap gap-3 print:hidden">
        <PrintButton />
        <Link href="/driver-card" className="flex min-h-12 items-center rounded-full border border-navy-200 px-6 text-sm font-semibold text-navy-900 hover:border-gold-500">Make Arabic driver cards</Link>
        <a href={telHref} className="flex min-h-12 items-center rounded-full border border-navy-200 px-6 text-sm font-semibold text-navy-900 hover:border-gold-500">Call {site.phone.display}</a>
      </div>
      </div>
    </Container>
  );
}
