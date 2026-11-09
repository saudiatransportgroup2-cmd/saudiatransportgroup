import Link from "next/link";

export function Crumbs({ current, tone = "light", parent = { label: "Services", href: "/en/services" } }: { current: string; tone?: "light" | "dark"; parent?: { label: string; href: string } }) {
  const c = tone === "light" ? "text-white/65" : "text-muted";
  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${c}`}>
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/en" className="hover:text-gold-400">Home</Link></li>
        <li aria-hidden>/</li>
        <li><Link href={parent.href} className="hover:text-gold-400">{parent.label}</Link></li>
        <li aria-hidden>/</li>
        <li aria-current="page" className={tone === "light" ? "text-white" : "text-ink"}>{current}</li>
      </ol>
    </nav>
  );
}
