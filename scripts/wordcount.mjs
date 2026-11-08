// Usage: node scripts/wordcount.mjs http://localhost:3000 services/airport-transfers ...
// (paths are given without a leading slash so Git Bash does not rewrite them)
const [base, ...paths] = process.argv.slice(2);
for (const p of paths) {
  const url = `${base}/${p.replace(/^\/+/, "")}`;
  const res = await fetch(url);
  const html = await res.text();
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? "";
  const text = main
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = text.split(" ").filter((w) => /[A-Za-z0-9]/.test(w)).length;
  console.log(`${words} words\t${res.status}\t/${p.replace(/^\/+/, "")}`);
}
