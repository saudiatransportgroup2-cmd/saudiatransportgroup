// Usage: node scripts/qc.mjs http://localhost:3000
// Checks the eight service pages: metadata, headings, schema, links and uniqueness.
const base = process.argv[2] ?? "http://localhost:3000";
const pages = [
  "services/airport-transfers",
  "services/city-tours-with-private-driver",
  "services/vip-hajj-umrah-transfers",
  "services/event-transportation",
  "services/bus-coach-rental-with-driver",
  "services/group-transfers",
  "services/city-to-city-transfer",
  "private-chauffeur-hire",
  "routes/jeddah-airport-to-makkah",
  "routes/makkah-to-madinah",
  "routes/madinah-airport-to-hotel",
  "agencies",
  "umrah-trip-planner",
  "driver-card",
  "prayer-time-journey-planner",
  "umrah-season-calendar",
  "travel-tools",
  "compare-transport-quotes",
  "check-transport-licence",
  "arrival-day-checklist",
  "corporate-transport",
  "trip-support",
  "ur",
  "id",
];

const get = (html, re) => html.match(re)?.[1]?.replace(/&amp;/g, "&").trim() ?? "";
const titles = new Map();
const descs = new Map();
const allLinks = new Set();
const problems = [];

for (const p of pages) {
  const html = await (await fetch(`${base}/${p}`)).text();
  const title = get(html, /<title[^>]*>([^<]*)<\/title>/);
  const desc = get(html, /<meta name="description" content="([^"]*)"/);
  const canon = get(html, /<link rel="canonical" href="([^"]*)"/);
  const ogTitle = get(html, /<meta property="og:title" content="([^"]*)"/);
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? "";
  const hs = [...main.matchAll(/<h([1-6])[\s>]/g)].map((m) => +m[1]);
  const h1 = hs.filter((h) => h === 1).length;
  let skips = 0;
  hs.forEach((h, i) => { if (i > 0 && h - hs[i - 1] > 1) skips++; });
  const ld = [...html.matchAll(/application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]).join(" ");
  const types = ["Service", "FAQPage", "BreadcrumbList", "LocalBusiness"].filter((t) => ld.includes(`"${t}"`) || ld.includes(`"@type":["${t}"`));
  const imgNoAlt = [...main.matchAll(/<img\b[^>]*>/g)].filter((m) => !/alt="/.test(m[0])).length;
  const emptyLinks = [...main.matchAll(/<a\b[^>]*>\s*<\/a>/g)].length;
  const btnNoName = [...main.matchAll(/<button\b[^>]*>\s*<\/button>/g)].length;
  for (const m of main.matchAll(/href="(\/[^"#?]*)/g)) allLinks.add(m[1]);

  titles.set(title, [...(titles.get(title) ?? []), p]);
  descs.set(desc, [...(descs.get(desc) ?? []), p]);

  if (h1 !== 1) problems.push(`${p}: ${h1} h1 elements`);
  if (skips) problems.push(`${p}: ${skips} heading level skips`);
  if (!canon.endsWith(`/${p}`)) problems.push(`${p}: canonical is "${canon}"`);
  if (!title || title.length > 70) problems.push(`${p}: title length ${title.length}`);
  if (!desc || desc.length > 175 || desc.length < 70) problems.push(`${p}: description length ${desc.length}`);
  if (!ogTitle) problems.push(`${p}: missing og:title`);
  if (!types.includes("Service") || !types.includes("FAQPage") || !types.includes("BreadcrumbList")) problems.push(`${p}: schema types ${types.join(",")}`);
  if (imgNoAlt) problems.push(`${p}: ${imgNoAlt} images without alt`);
  if (emptyLinks) problems.push(`${p}: ${emptyLinks} empty links`);
  if (btnNoName) problems.push(`${p}: ${btnNoName} buttons without text`);

  console.log(`${p.padEnd(42)} h1=${h1} headings=${hs.length} title=${title.length}ch desc=${desc.length}ch schema=${types.join("+")}`);
}

for (const [t, ps] of titles) if (ps.length > 1) problems.push(`duplicate title "${t}" on ${ps.join(", ")}`);
for (const [d, ps] of descs) if (ps.length > 1) problems.push(`duplicate description on ${ps.join(", ")}`);

let broken = 0;
for (const l of allLinks) {
  const r = await fetch(`${base}${l}`, { redirect: "manual" });
  if (r.status >= 400) { problems.push(`broken link ${l} -> ${r.status}`); broken++; }
}
console.log(`\nChecked ${allLinks.size} unique internal links, ${broken} broken.`);
console.log(problems.length ? `\nPROBLEMS (${problems.length}):\n- ${problems.join("\n- ")}` : "\nNo problems found.");
