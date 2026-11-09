# Saudi Transport Group: Mobility 2030 to 2035

Prepared November 2026, after `docs/market-research.md` and `docs/innovation-strategy.md`. Written for the founder.

## How to read this

- **Originality labels** (your four classes): **ECN** existing concept, new execution. **EMO** emerging market opportunity. **PNC** potentially novel product concept. **UOR** unverified originality, needs more research. I never call anything the world's first. **PNC means "I did not find it in a limited search", not "it does not exist".**
- **Evidence labels:** **[Verified]** a source states it. **[Claim]** a vendor says it. **[Assumption]** my reasoning. **[Unknown]** not found.
- **Cost and effort.** I have no cost data for your company, so I give relative size only: **S** (weeks, one person), **M** (2 to 4 months, small team), **L** (6 to 12 months, team), **XL** (more than a year or a partner-dependent build). I give no currency figures and no revenue forecasts.
- **Research base.** About 26 searches across three missions. Sources are mostly vendor pages and news. No customer interviews.
- **Standing conditions.** Everything depends on: (1) a Saudi transport licence in the right category, (2) legal advice on whether brokering, prepayment or marketplace activity needs separate approval, and (3) personal data law compliance.

---

## 1. What the world looks like by 2030 to 2035, and what is real today

| Trend | Evidence today | What it means for us |
|---|---|---|
| Robotaxis arrive in Saudi cities | WeRide began Saudi Arabia's first robotaxi trial in Riyadh in July 2025 through Uber, under a TGA sandbox, with a safety operator in each ride ([Gasgoo](https://autonews.gasgoo.com/articles/news/weride-begins-saudi-arabias-first-robotaxi-trial-operation-in-riyadh-70038304)). I found no confirmation of full commercial launch. | We do not build vehicles. By 2030 the opportunity is the **coordination layer** across human and autonomous fleets, not the cars. |
| GCC moves toward one visa | GCC Grand Tours visa: approved Nov 2023, pilot reported from Feb 2026, full rollout still pending ([Gulf News](https://gulfnews.com/business/tourism/gcc-unified-visa-to-be-launched-in-2026-saudi-minister-confirms-1.500337884), [Business Dubai](https://www.businessdubai.ae/blogs/gcc-unified-tourist-visa-2026)) | Multi-country trips become one trip. Ground legs across borders need a coordinator. |
| Cross-border taxis open | Licensed Saudi-Bahrain taxis allowed across the causeway from 6 September 2026 ([Gulf News](https://gulfnews.com/world/gulf/bahrain/saudi-arabia-bahrain-allow-taxis-to-carry-passengers-across-king-fahd-causeway-1.500665250)) | First real cross-border passenger rule. Others may follow. |
| Pilgrim volumes keep rising | About 18.03 million Umrah performers in 2025 against a 30 million target by 2030; 122 million total visitors ([Arab News](https://www.arabnews.pk/node/2630117)) | Peak-season capacity is the scarce thing, not demand. |
| Official pilgrim platform | Nusuk handles permits, visas, hotels and flights; whether it books buses and taxis is unconfirmed ([Vision 2030](https://www.vision2030.gov.sa/en/explore-more/nusuk/)) | Build to be **integrated**, not to compete. |
| Public transport apps | Darb sells time-based tickets and plans trips across metro, bus and on-demand services; I found no MaaS subscription bundle in Riyadh ([App Store](https://apps.apple.com/app/id1549817739)) | Mobility bundles are a gap in public data, but they are a government-scale matter. |
| Capacity marketplaces for group transport | CharterUP (US) positions itself as a marketplace and operating system for charter buses; fleet and operator counts are self-reported and inconsistent ([BusinessWire](https://www.businesswire.com/news/home/20221026005353/en/Real-Time-Charter-Bus-Marketplace-CharterUP-Raises-60M-Series-A-Led-by-Tritium-Partners/)) | The model exists abroad. Saudi version **NF** in my search. |
| Flight data is available by API | FlightAware AeroAPI (pull plus alerts) and Cirium (push stream, enterprise) ([Geekflare](https://geekflare.com/guides/flight-data-api/), [Cirium](https://www.cirium.com/industry-solutions/air-operations)) | Delay-aware logistics is technically accessible. Pricing varies between sources; confirm with vendors. |
| WhatsApp is a booking channel | Travel brands such as Almosafer run WhatsApp journeys; many vendors sell bots; adoption figures are vendor claims ([Zawya](https://www.zawya.com/en/press-release/middle-east-travel-brand-almosafer-announces-whatsapp-business-solution-to-help-travellers-make-the-most-of-lrlpjunn)) | Our customers already live in WhatsApp. Automate there. |
| Personal data law is enforced | PDPL fully enforceable since 14 September 2024; SDAIA transfer regulation issued August 2024 with adequacy, safeguards and limited exceptions ([Clyde & Co](https://www.clydeco.com/en/insights/2024/09/saudi-arabia-s-personal-data-protection-law-become), [King & Spalding](https://www.kslaw.com/insights/articles/international-personal-data-transfers-under-saudi-arabias-data-protection-law)) | Any product that holds passenger data needs a compliance design from day one. Details need a lawyer. |

---

## 2. Challenging the traditional model: seven questions, answered

1. **What if customers never had to book manually?** Then the booking is created from a signal they already give: a flight number and a hotel. A flight-synced system proposes the ground legs, the customer taps once, and the system maintains them. (Arrival Autopilot, Journey Contract.)
2. **What if transport arranged itself around their plans?** Plans change. The product is the **exception handling**: delays, diversions, hotel changes. People rarely mind booking; they mind when the plan breaks.
3. **What if customers bought mobility, not rides?** For a group, "mobility" means a quantity of capacity for a period with rules. (Capacity Exchange, Peak Reserve.)
4. **One ecosystem for hotels, airports, airlines and providers?** Not by owning it. By defining a **shared record of the ground leg** that each of them can read and write. (Journey Contract.)
5. **One verified network across GCC countries through one account?** Credible only one border at a time, with licensed operators on each side and a coordinator in the middle. (GCC Hop.)
6. **Can operators share capacity without building technology?** Yes, if the technology is a listing and settlement layer they rent. (Capacity Exchange, Operator Starter Kit.)
7. **Can AI coordinate whole journeys without a human?** Not fully, and not safely at first. AI can read, route, and draft; humans approve exceptions. Selling "AI" before reliability is how companies lose trust.

---

## 3. Fifteen innovation areas: where I would and would not play

| # | Area | My view | Evidence | Play? |
|---|---|---|---|---|
| 1 | Autonomous coordination | Coordinate, do not build. Wait for commercial AV rules. | WeRide/Uber Riyadh pilot | Watch |
| 2 | Predictive mobility | Season and flight data give real signal for demand and delays | Season calendar, flight APIs | Yes (internal first) |
| 3 | AI personal travel agent | Draft and route only. Human approves. | Vendor bots exist | Limited |
| 4 | Transportation as subscription | Weak for pilgrims; ok for residents and corporates | Careem Plus | Later |
| 5 | Cross-company fleet sharing | Strongest structural idea | CharterUP abroad | Yes (pilot) |
| 6 | Smart marketplaces | Only with quality control | Hoppa, Jayride | Via exchange |
| 7 | Digital mobility wallets | Possible, regulation unclear | Bank limo credits abroad | Later, legal first |
| 8 | Hotel and airline ecosystems | Start with hotels; airlines for disruption | Mozio, Transfeero (hotels) | Yes |
| 9 | Intelligent group coordination | Core pain for agencies | NF as Umrah-specific | Yes |
| 10 | Automated corporate mobility | Itinerary-level, not rides | Careem for Business (rides) | Later |
| 11 | Demand prediction | Same as 2 | | Yes |
| 12 | Capacity exchanges | Same as 5 | | Yes |
| 13 | Smart tourism infrastructure | Meeting points, QR handshakes | Partly | Yes (low cost) |
| 14 | Border journey coordination | Narrow start: Bahrain causeway | Gulf News Sept 2026 | Watch, then pilot |
| 15 | New ownership and revenue models | See section 8 | | Yes |

---

## 4. Twenty-five products

Each entry: **Problem** · **Concept** · **Customers** · **Edge** · **Model** · **Tech** · **Effort** · **Revenue** · **GCC scale** · **Class**. Names are working titles.

**1. Arrival Autopilot.** *Problem:* a delayed flight breaks the pickup and nobody knows. *Concept:* the customer shares a flight number and hotel once; the system watches the flight, moves the pickup, tells driver, hotel and group leader, and re-plans if the flight is diverted. *Customers:* pilgrims, agencies, hotels. *Edge:* handles the exception, not just the booking. *Model:* per journey, or a fee to agencies. *Tech:* flight data API, WhatsApp Business API, rules engine. *Effort:* M. *Revenue:* per trip, agency subscriptions. *GCC:* high; airport-agnostic. *Class:* ECN (flight-linked pickups exist in premium chauffeur; Umrah-group execution is the new part).

**2. Journey Contract API.** *Problem:* every party keeps a different version of the same ground leg. *Concept:* each leg is a structured record (parties, time, vehicle class, price, inclusions, cancellation, state). Partners read and update it by API. *Customers:* agencies, hotels, travel apps. *Edge:* a shared record, not another app. *Model:* free for hotels, fees for volume. *Tech:* API, database, webhooks, signing. *Effort:* L. *Revenue:* API fees. *GCC:* high. *Class:* UOR (similar to airline reservation records, not found for ground transport in KSA).

**3. Capacity Exchange ("Sa'a").** *Problem:* operators have idle vehicle-days off peak and none at peak; agencies cannot find capacity at peak. *Concept:* licensed operators list available vehicles for dates; agencies reserve; we guarantee quality and settle payment. *Customers:* operators, agencies. *Edge:* we are the quality guarantor. *Model:* take rate plus listing tools. *Tech:* marketplace, scheduling, escrow. *Effort:* XL. *Revenue:* commission, SaaS tier. *GCC:* high. *Class:* ECN (CharterUP abroad) / EMO in KSA.

**4. Hotel Ground Desk.** *Problem:* a hotel's front desk juggles several operators on paper and WhatsApp. *Concept:* one inbox where the hotel sees all guest transfers across operators with statuses. *Customers:* hotels. *Edge:* neutral across operators. *Model:* free for hotels, fees from operators. *Tech:* web app, inbound webhooks. *Effort:* M. *Revenue:* operator fees. *GCC:* high. *Class:* ECN (transfer integrations exist; neutral Umrah-hotel desk **NF**).

**5. Group Pulse.** *Problem:* a leader with 10 groups cannot see where everyone is. *Concept:* one screen for groups, vehicles, ETAs and exceptions. *Customers:* agencies. *Edge:* built for pilgrim groups. *Model:* subscription per season. *Tech:* web app, status updates. *Effort:* M. *Revenue:* subscription. *GCC:* medium. *Class:* ECN.

**6. Delay Ripple Engine.** *Problem:* one late flight affects hotel check-in, the next leg and the group schedule. *Concept:* a rules engine that cascades a delay through dependent legs and proposes fixes. *Customers:* agencies, hotels. *Edge:* multi-leg awareness. *Model:* part of Autopilot or sold alone. *Tech:* graph of legs, flight events. *Effort:* M to L. *Revenue:* bundled. *GCC:* high. *Class:* UOR.

**7. Peak Forecast Board.** *Problem:* agencies and operators plan blind for peak weeks. *Concept:* a calendar of demand signals built from the Hijri season calendar, historical bookings and flight schedules. *Customers:* operators, agencies. *Edge:* pilgrim-calendar aware. *Model:* internal planning first, later a paid view. *Tech:* data pipeline, simple models. *Effort:* M. *Revenue:* subscription. *GCC:* medium. *Class:* EMO.

**8. Vehicle Pool Passport.** *Problem:* hotels and agencies cannot easily check a vehicle or driver's papers. *Concept:* operators upload documents once; we verify and issue a QR credential visible to partners. *Customers:* hotels, agencies. *Edge:* verification we stand behind. *Model:* annual verification fee. *Tech:* document store, verification workflow. *Effort:* M. *Revenue:* operator fees. *GCC:* high. *Class:* UOR.

**9. Operator Starter Kit.** *Problem:* small operators have no booking page or WhatsApp flow. *Concept:* a ready branded page plus request-to-confirm flow in Arabic, English and Urdu. *Customers:* small operators. *Edge:* pilgrim-specific, in local languages. *Model:* monthly fee. *Tech:* multi-tenant pages, templates. *Effort:* L. *Revenue:* subscription. *GCC:* high. *Class:* ECN (white-label platforms exist; this niche is new in my search).

**10. Pilgrim Wallet.** *Problem:* paying for several journeys and groups is clumsy. *Concept:* prepaid balance that pays legs in a trip. *Customers:* pilgrims, agencies. *Edge:* tied to the trip, not a general wallet. *Model:* float and fees. *Tech:* payments, ledger. *Effort:* L. *Revenue:* fees. *GCC:* medium. *Class:* ECN. **Needs legal clearance first.**

**11. Ride on Us (hotel credits).** *Problem:* hotels want an amenity that is not a discount. *Concept:* hotels buy transfer credits to gift to guests, e.g. airport pickup for long stays. *Customers:* hotels. *Edge:* amenity, not commission. *Model:* prepaid credits. *Tech:* credit ledger, voucher links. *Effort:* M. *Revenue:* prepaid sales. *GCC:* high. *Class:* UOR.

**12. Disruption Ground Pack.** *Problem:* when flights are cancelled, airlines scramble for ground transport for stranded passengers. *Concept:* a standing arrangement where an airline triggers pre-agreed ground capacity. *Customers:* airlines, airports. *Edge:* standing capacity, fast confirmation. *Model:* retainer plus per-use. *Tech:* API, capacity reserve. *Effort:* L. *Revenue:* retainers. *GCC:* high. *Class:* EMO (needs airline partnership; demand **[Assumption]**).

**13. Corporate Trip Orchestrator.** *Problem:* a visiting delegation needs airport, chauffeur and intercity legs with approvals and cost centres. *Concept:* build one itinerary, route approvals, issue one invoice. *Customers:* companies. *Edge:* itinerary-level, not ride-level. *Model:* per itinerary plus subscription. *Tech:* workflow, invoicing. *Effort:* L. *Revenue:* recurring. *GCC:* high. *Class:* ECN.

**14. GCC Hop.** *Problem:* a cross-border trip needs two licensed operators and a handover. *Concept:* one booking, a defined handover point, two licensed operators, one confirmation. *Customers:* families, tour groups. *Edge:* coordination with documents and times. *Model:* coordination fee. *Tech:* leg contract, partner network. *Effort:* XL. *Revenue:* fees. *GCC:* high. *Class:* EMO (rules new and changing).

**15. Border Brief.** *Problem:* travellers do not know what documents and waits to expect at a crossing. *Concept:* a verified checklist per crossing, with official sources. *Customers:* travellers. *Edge:* citation-based, no invented timings. *Model:* acquisition tool. *Tech:* content. *Effort:* S. *Revenue:* indirect. *GCC:* high. *Class:* ECN. **Needs legal verification before publishing.**

**16. Family Convoy.** *Problem:* a family needs three vehicles for a multi-day trip and cannot coordinate them. *Concept:* one plan, several vehicles, shared ETA and one contact. *Customers:* large families. *Edge:* multi-vehicle as one booking. *Model:* per convoy. *Tech:* leg grouping. *Effort:* M. *Revenue:* per trip. *GCC:* high. *Class:* ECN.

**17. Assisted Transfer Protocol.** *Problem:* elderly or wheelchair travellers get inconsistent help. *Concept:* a defined protocol and trained assistant for pickup and drop. *Customers:* families, agencies. *Edge:* a standard, not an extra. *Model:* per assisted trip. *Tech:* protocol and checklists. *Effort:* M (operations-heavy). *Revenue:* premium per trip. *GCC:* high. *Class:* ECN.

**18. Prayer-Stop Router.** *Problem:* a long road trip crosses prayers and rest needs. *Concept:* a route and stop plan built on calculated prayer times and verified stop partners. *Customers:* groups, families. *Edge:* built on the prayer planner we already have. *Model:* quote feature. *Tech:* prayer calc, stop database. *Effort:* M. *Revenue:* indirect. *GCC:* high. *Class:* PNC (not found elsewhere in my searches).

**19. Bag Courier ("Hotel to hotel luggage").** *Problem:* carrying heavy bags between Makkah and Madinah slows everyone down. *Concept:* bags are collected from one hotel and delivered to the next while travellers move separately. *Customers:* families, groups. *Edge:* separates people from luggage. *Model:* per bag or per group. *Tech:* tracking tags, simple logistics. *Effort:* L (operations). *Revenue:* per bag. *GCC:* medium. *Class:* ECN (luggage forwarding exists abroad; Saudi pilgrim version not found).

**20. Pilgrim Bundle Marketplace.** *Problem:* travellers buy SIMs, water and transport separately. *Concept:* partner bundles with transport at the centre. *Customers:* travellers. *Edge:* one order. *Model:* commission. *Tech:* catalogue, partner API. *Effort:* M. *Revenue:* commissions. *GCC:* medium. *Class:* ECN.

**21. Quality Ledger.** *Problem:* ratings are anonymous and unverifiable. *Concept:* public stats for each operator tied to completed trips (on time, complaints resolved). *Customers:* everyone. *Edge:* trip-linked. *Model:* trust asset for the network. *Tech:* event logging, public pages. *Effort:* M. *Revenue:* indirect. *GCC:* high. *Class:* UOR.

**22. Dispatch-as-a-Service.** *Problem:* small fleets dispatch by phone. *Concept:* time-window assignment suggestions via API. *Customers:* small operators. *Edge:* Arabic, pilgrim-calendar aware. *Model:* per vehicle monthly. *Tech:* optimisation, mobile driver view. *Effort:* L. *Revenue:* subscription. *GCC:* high. *Class:* ECN (generic dispatch SaaS exists).

**23. Journey Protection Rider.** *Problem:* a missed flight or breakdown leaves the traveller stranded. *Concept:* an optional protection with a licensed insurer. *Customers:* travellers. *Edge:* trip-linked. *Model:* commission. *Tech:* partner API. *Effort:* M plus licensing. *Revenue:* commission. *GCC:* medium. *Class:* ECN. **Needs insurer and legal partner.**

**24. Handshake Code.** *Problem:* travellers get approached by unlicensed drivers; they cannot tell the booked driver. *Concept:* a short code sent in advance that the driver must say or show. *Customers:* travellers. *Edge:* cheap and easy to understand. *Model:* trust feature. *Tech:* code in messages. *Effort:* S. *Revenue:* indirect. *GCC:* high. *Class:* ECN (PIN verification exists in ride-hailing; applying it to pre-booked pilgrim pickups is the new bit).

**25. Verified Ground Partner badge.** *Problem:* hotels cannot signal which operators they trust. *Concept:* a badge program for operators, tied to the Vehicle Pool Passport and Quality Ledger. *Customers:* hotels, operators. *Edge:* both a standard and a distribution channel. *Model:* annual fee. *Tech:* verification, badge page. *Effort:* M. *Revenue:* fees. *GCC:* high. *Class:* UOR.

---

## 5. Fifteen unexplored business opportunities

Not found in my searches as described. Demand is **[Assumption]** for all.

1. Delay-aware group pickups for Umrah.
2. A shared "ground leg" record across hotels and agencies.
3. Peak-week capacity pooled across licensed operators.
4. A neutral hotel transfer inbox.
5. Hotel-bought transfer credits as an amenity.
6. Baggage forwarding between Makkah and Madinah hotels.
7. Verified credential wallet for vehicles and drivers.
8. A public, trip-linked quality ledger for operators.
9. Prayer-time-aware route and stop planning.
10. Handshake codes for pilgrim pickups.
11. One booking for a Saudi-Bahrain journey, with two licensed operators.
12. Ground legs inside airline disruption handling.
13. White-label booking kits in Arabic and Urdu for small operators.
14. Season demand boards built on the Hijri calendar.
15. Corporate itineraries priced and invoiced as one unit across cities.

---

## 6. Ten technology infrastructure ideas

1. **Leg Engine:** the core data model for a ground leg and its state changes.
2. **Event bus:** flight, driver and hotel events flow into legs.
3. **WhatsApp conversation layer:** structured requests in, confirmations out (official Business API).
4. **Flight watcher:** API connection with delay and diversion handling.
5. **Rules engine:** delay cascade and re-plan suggestions, human approves.
6. **Partner API and webhooks:** hotels, agencies, apps read and write legs.
7. **Credential service:** document verification and QR credentials.
8. **Settlement ledger:** payments between agencies, operators and us.
9. **Privacy by design:** minimal data, retention rules, consent logs, PDPL-aligned.
10. **Forecast pipeline:** Hijri calendar, flight schedules and our bookings, in one data store.

---

## 7. Five new revenue models

1. **Take rate on exchanged capacity** (Capacity Exchange).
2. **Per-leg API fee** for partners that embed Journey Contract.
3. **Annual verification and badge fees** from operators.
4. **Prepaid credits** for hotels and agencies, with clear refund rules (legal review).
5. **Operator SaaS** (Starter Kit, Dispatch-as-a-Service) priced per vehicle per month.

---

## 8. Red-team review of the biggest ideas

| Idea | Already built? | Real need? | Regulation | Needs partners or licence | Revenue sustainable? | Without a big fleet? | Class |
|---|---|---|---|---|---|---|---|
| Arrival Autopilot | Flight-linked pickups exist | Delays are a stated pain **[Assumption]** | Data privacy | Flight data vendor | Per trip | Yes | ECN |
| Journey Contract API | Not found for ground in KSA | Needs partner interest | Data law | Hotels, agencies | API fees | Yes | UOR |
| Capacity Exchange | CharterUP abroad | Peak scarcity **[Assumption]** | **Brokering rules unknown** | Licensed operators | Take rate | Yes | ECN abroad / EMO here |
| Hotel Ground Desk | Transfer integrations exist | Hotels use several operators **[Assumption]** | Low | Hotels | Operator fees | Yes | ECN |
| GCC Hop | NF | Rules only just opening | **High** (two jurisdictions) | Licensed operators each side | Fees | Yes | EMO |
| Vehicle Pool Passport | NF | Hotels need proof **[Assumption]** | Licensing sensitive | Operators | Fees | Yes | UOR |
| Disruption Ground Pack | NF | Airline demand **[Unknown]** | Contract law | Airlines | Retainer | Needs reserve | EMO |
| Pilgrim Wallet | Bank credits abroad | Uncertain | **Payments licence unknown** | Bank or licensed provider | Fees | Yes | ECN |
| Autonomous coordination | Robotaxis exist (Riyadh pilot) | Not yet for pilgrims | TGA sandbox | AV operators | Unknown | Yes | Watch only |

**What I would reject:** owning autonomous vehicles; a general consumer wallet before legal clearance; AI that talks to customers unsupervised; and anything in the table that requires a licence you have not confirmed.

**What worries me most**
1. **Licence classification** for exchange, wallet and prepaid products. A wrong assumption here can end the business.
2. **Cold start.** Exchanges, APIs and ledgers need two sides. With no operations track record, partners will not join.
3. **Operations quality.** If a driver does not arrive, an elegant platform collapses.
4. **Data protection.** Flight numbers, hotels and phone numbers are personal data. PDPL compliance must be designed in, with legal review of any cross-border storage.
5. **Dependency.** Flight APIs, WhatsApp and Nusuk are platforms we do not control.

---

## 9. Three category-defining products

### Flagship 1: **Journey Contract Network** (the shared record of the ground leg)

1. **Vision.** Every road journey in a pilgrim's trip is a clear, shared record that the pilgrim, the agency, the hotel and the operator all see, so nobody works from a stale message.
2. **Customer journey.** An agency pastes a manifest. Each leg becomes a record with a confirmed time, vehicle class, price and inclusions. The hotel receives a link for its guests. When a flight is late, the record updates and everyone sees it.
3. **Business architecture.** We start as the operator that issues records for our own trips. Then we invite agencies and hotels to read and write. Later, other operators issue records through the same format, with verification.
4. **Technical architecture.** Leg database, state machine (requested, confirmed, assigned, in progress, completed, disputed), webhooks, read-only share links, signing, audit log, privacy controls, WhatsApp and email delivery.
5. **Revenue.** Free for hotels and travellers; fees per leg for agencies at volume; verification fees for other operators. No revenue forecast: **[Unknown]**.
6. **Competitor alternatives.** WhatsApp threads and spreadsheets (today's reality); generic dispatch SaaS (A to Z Dispatch, TaxiCaller, Yelowsoft); transfer platforms such as Hoppa and Mozio that own the booking but not a shared neutral record. Originality: **UOR**.
7. **Market opportunity.** Tied to Umrah volumes (18 million performers in 2025) and group travel. I cannot size revenue.
8. **Launch strategy.** Quarter 1 internal use only (records for our own trips). Quarter 2 invite two agencies and two hotels. Quarter 3 open the read API. Quarter 4 pilot a second operator.
9. **Moat.** The confirmed leg history, partner integrations and the trust that comes from consistent records. A competitor can copy a page, not a network of confirmed trips.

### Flagship 2: **Sa'a Capacity Exchange** (the peak-season capacity market)

1. **Vision.** When agencies cannot find vehicles for a peak week and operators have idle ones elsewhere, a trusted exchange matches them.
2. **Customer journey.** An operator lists vehicle-days with verified documents. An agency searches by date and group size and reserves. Payment is held and released after completion. Both rate the trip on the ledger.
3. **Business architecture.** Take rate; verified operators only; quality guarantee backed by our own fleet or reserve as a last resort.
4. **Technical architecture.** Listings, availability calendars, reservation holds, escrow with a licensed payments partner, document verification, quality ledger, dispute workflow.
5. **Revenue.** Commission plus premium listing tools for operators.
6. **Competitor alternatives.** Direct phone calls and WhatsApp groups (today); CharterUP-style marketplaces abroad ([BusinessWire](https://www.businesswire.com/news/home/20221026005353/en/Real-Time-Charter-Bus-Marketplace-CharterUP-Raises-60M-Series-A-Led-by-Tritium-Partners/)); transfer aggregators for single rides. Class: **ECN abroad, EMO in Saudi Arabia.**
7. **Market opportunity.** Peak pressure is plausible given volume growth, but **[Unknown]** how much capacity is idle off peak. Interview operators.
8. **Launch strategy.** Run it manually first: you personally match five agencies with five operators for one peak week, take a small fee, and learn. Software follows what repeats.
9. **Moat.** Liquidity (enough operators and buyers), verified quality data, and settlement trust.
- **Hard gate:** a lawyer must confirm whether acting as an intermediary requires a taxi broker or similar licence (TGA has a separate broker regulation).

### Flagship 3: **Arrival Autopilot** (flight-synced, exception-first arrival)

1. **Vision.** The pilgrim shares a flight number once, then does nothing. Pickup times, drivers, hotels and group leaders follow the real flight.
2. **Customer journey.** Request on WhatsApp or web. Confirmation in writing. When the flight lands early, late, or is diverted, messages go out to the driver, the hotel and the leader, with a corrected pickup time and a fallback. The pilgrim gets the driver details and the handshake code.
3. **Business architecture.** Sold per journey; bundled into agency plans; later offered to operators as a module.
4. **Technical architecture.** Flight data API (pull alerts to start; push stream at scale), rules engine, WhatsApp Business API, driver messaging, handshake code, audit trail, privacy design.
5. **Revenue.** Per-trip premium, agency subscriptions, module fees for other operators.
6. **Competitor alternatives.** Premium chauffeur companies advertise flight tracking **[Claim, I did not verify per company]**; ride apps do not coordinate groups; **our difference** is the group, hotel and multi-leg cascade. Class: **ECN with new execution.**
7. **Market opportunity.** Every arriving pilgrim and visitor at the main airports; I cannot size revenue.
8. **Launch strategy.** Pilot on one airport and one hotel cluster with a human watching every case. Publish only what the pilot proves.
9. **Moat.** Operational data about delays and recoveries, and the reliability reputation that results. It is difficult to copy because it depends on disciplined operations, not a feature.

---

## 10. Competitive originality assessment

| Product | Closest alternative found | Verdict |
|---|---|---|
| Arrival Autopilot | Chauffeur flight tracking (Claim) | ECN |
| Journey Contract Network | Generic dispatch and aggregator back-ends | UOR |
| Sa'a Capacity Exchange | CharterUP (US) | ECN abroad, EMO here |
| Hotel Ground Desk | Mozio, Transfeero hotel tools | ECN |
| Vehicle Pool Passport, Verified Ground Partner, Quality Ledger | NF | UOR |
| Delay Ripple Engine | NF | UOR |
| GCC Hop | NF | EMO |
| Prayer-Stop Router | NF | PNC |
| Bag Courier | Luggage forwarding abroad | ECN |
| Handshake Code | Ride-hailing PINs | ECN |
| Ride on Us | NF | UOR |

No item is claimed as the world's first.

---

## 11. Development effort and complexity

| Tier | Products |
|---|---|
| **S** (weeks) | Border Brief (content), Handshake Code |
| **M** (2 to 4 months) | Arrival Autopilot v1, Hotel Ground Desk, Group Pulse, Family Convoy, Peak Forecast Board, Quality Ledger, Prayer-Stop Router, Vehicle Pool Passport, Ride on Us, Assisted Transfer Protocol |
| **L** (6 to 12 months) | Journey Contract Network (full API), Operator Starter Kit, Dispatch-as-a-Service, Corporate Trip Orchestrator, Pilgrim Wallet, Disruption Ground Pack, Bag Courier |
| **XL** (partner-dependent) | Capacity Exchange (software plus legal plus liquidity), GCC Hop (two jurisdictions) |

Build cost, team size and margins are **[Unknown]**. I would size them only after the first pilot.

---

## 12. Twelve-month execution strategy

**Months 1 to 2: foundations (non-negotiable)**
- Licence and legal opinion: brokering, prepayment, escrow, data storage and cross-border transfer under PDPL.
- Run reliable operations on confirmed vehicles. Without this, nothing below matters.
- Interview five agencies, three hotel desks and five operators on three questions: what breaks when a flight is late, what is hardest at peak, and what would you pay to avoid it.

**Months 3 to 4: Journey Contract, internal**
- Define the leg record and states. Use it for every trip we run. Send confirmations from it.
- Add the Handshake Code and driver details in each confirmation (only if operations can deliver).

**Months 5 to 6: Arrival Autopilot pilot**
- One airport, one hotel cluster, a human reviewing every delay. Measure delay-to-notification time and pickup success.
- Choose a flight data vendor after confirming current pricing and terms.

**Months 7 to 8: partners**
- Hotel Ground Desk with two hotels. Read-only share links for two agencies.
- Publish a short "how we handle delays" page, based only on the pilot.

**Months 9 to 10: capacity pilot (manual)**
- Run a manual exchange for one peak period between a few verified operators and agencies. Small fee. No software beyond a spreadsheet and the leg record.

**Months 11 to 12: decide**
- Review: reliability, repeat usage, partner interest, margin per trip, legal clearance.
- Decide which of the three flagships earns the next year: open API, formal exchange, or automation depth.
- Revisit cross-border only if the GCC visa and transport rules are clear.

---

## 13. What I would do first

1. Fix the licence question and get legal advice on exchange, wallet and prepayment.
2. Run the interviews. Their answers decide which flagship to start with.
3. Build the **Journey Contract** record for your own trips first. It is cheap, it makes you more reliable, and it is the base for the other two.
4. Treat every idea marked UOR or PNC as unproven until a customer pays for it.
5. Be wary of grand language. Reliability, not novelty, wins this market.
