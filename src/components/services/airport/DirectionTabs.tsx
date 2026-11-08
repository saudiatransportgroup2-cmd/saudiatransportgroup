import { Tabs } from "@/components/ui/Tabs";
import { Container } from "@/components/ui/primitives";

const pane = "grid gap-10 lg:grid-cols-2";
const sub = "text-lg font-semibold text-white";
const body = "mt-3 text-base leading-[1.8] text-white/75";

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3 text-sm text-white/85">
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500" />
          {i}
        </li>
      ))}
    </ul>
  );
}

/** Airport-to-hotel versus hotel-to-airport, as a toggle between two complete briefings. */
export function DirectionTabs() {
  return (
    <section className="bg-navy-900 py-20 text-white sm:py-28" aria-labelledby="direction-title">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">Two directions, two mindsets</p>
          <h2 id="direction-title" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Arriving and departing are planned differently
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            An arrival is about meeting you wherever the flight lands. A departure is about getting you to the terminal comfortably and on time. Choose the direction to see what matters in each.
          </p>
        </div>

        <Tabs
          label="Transfer direction"
          className="mt-12"
          listClassName="inline-flex rounded-full border border-white/15 p-1"
          tabClassName="rounded-full px-6 py-2.5 text-sm font-semibold text-white/70 transition-colors hover:text-white"
          activeTabClassName="!bg-gold-500 !text-navy-950"
          panelClassName="mt-10"
          tabs={[
            {
              id: "to-hotel",
              label: "Airport to hotel",
              content: (
                <div className={pane}>
                  <div>
                    <h3 className={sub}>Airport-to-hotel transfers</h3>
                    <p className={body}>
                      Your driver is planned around your flight, so the pickup begins when you walk out of the terminal, not after a wait at a queue. The destination can be a hotel in Makkah, Madinah, Jeddah or Riyadh, a serviced apartment, a private home or an office.
                    </p>
                    <p className={body}>
                      Check-in times matter here. Hotels often have a standard check-in hour, and an early-morning arrival may mean waiting for the room. If you arrive early, ask the hotel in advance about early check-in or luggage storage, and tell us if you would like the driver to drop your bags first and take you elsewhere before you settle in.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-7">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-400">Share with us</h4>
                    <List
                      items={[
                        "Airport, terminal if known, flight number and arrival date",
                        "Hotel name, area and a contact number for the hotel",
                        "Number of passengers, children and suitcases",
                        "Any stops you would like to make on the way",
                      ]}
                    />
                  </div>
                </div>
              ),
            },
            {
              id: "to-airport",
              label: "Hotel to airport",
              content: (
                <div className={pane}>
                  <div>
                    <h3 className={sub}>Hotel-to-airport transfers</h3>
                    <p className={body}>
                      A departure pickup is built backwards from your flight. Work out when you need to be at the terminal, considering check-in and security timings for your airline, then add the road time from your hotel and a sensible margin for traffic. We help you choose a pickup time that does not leave you rushing.
                    </p>
                    <p className={body}>
                      Large hotels can take time to bring luggage down, so ask the hotel to prepare bags before the driver arrives. For early-morning flights, confirm the pickup the evening before so that nobody wakes up wondering whether the car is coming.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-7">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-400">Share with us</h4>
                    <List
                      items={[
                        "Airport, terminal if known, flight number and departure time",
                        "Pickup address and the name the booking is under",
                        "Number of passengers and luggage pieces",
                        "A phone number that will be answered on the morning",
                      ]}
                    />
                  </div>
                </div>
              ),
            },
          ]}
        />
      </Container>
    </section>
  );
}
