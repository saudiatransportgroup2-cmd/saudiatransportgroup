/** The hand-written GCC route guides. A list for links only, not a page generator. */
export const gccRoutes = [
  { href: "/gcc/al-khobar-to-manama", title: "Al Khobar to Manama", country: "Saudi Arabia → Bahrain", text: "Across the King Fahd Causeway from the Eastern Province into Bahrain." },
  { href: "/gcc/manama-to-al-khobar", title: "Manama to Al Khobar", country: "Bahrain → Saudi Arabia", text: "Into Saudi Arabia, with onward legs to Dammam airport, Riyadh or the Holy Cities." },
  { href: "/gcc/dammam-to-doha", title: "Dammam to Doha", country: "Saudi Arabia → Qatar", text: "A long road journey through the Salwa land border, planned in advance." },
  { href: "/gcc/doha-to-dammam", title: "Doha to Dammam", country: "Qatar → Saudi Arabia", text: "Entering Saudi Arabia by road, often as the first step of a longer trip." },
] as const;

/** Reported change that the Bahrain pages refer to. Keep wording cautious. */
export const causewayRuleNote =
  "Saudi and Bahraini authorities announced that, from September 2026, licensed taxis may carry passengers across the King Fahd Causeway, subject to conditions on the vehicle and the operator. Details of the rules, including who may collect passengers on each side, have been reported differently, so we confirm what applies to your journey before we accept it.";
