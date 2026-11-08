import { Tabs } from "@/components/ui/Tabs";
import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";
import type { ImageId } from "@/config/images";

function Story({ title, image, tone, children }: { title: string; image?: ImageId; tone?: "navy" | "warm"; children: React.ReactNode }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:gap-12">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-navy-900">{title}</h3>
        <div className="mt-4 space-y-4 text-base leading-[1.8] text-muted">{children}</div>
      </div>
      {image && <Photo id={image} tone={tone} sizes="(min-width:1024px) 30vw, 100vw" className="aspect-[4/3] rounded-sm lg:aspect-[4/5]" />}
    </div>
  );
}

/** Who the service is for. A vertical tab list on the left, a story and image on the right. */
export function TravellerTabs() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="travellers-title">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">Who we transfer</p>
          <h2 id="travellers-title" className="mt-4 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            One airport, many kinds of arrival
          </h2>
        </div>

        <Tabs
          label="Traveller type"
          orientation="vertical"
          className="mt-12 grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-16"
          listClassName="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:border-s lg:border-navy-100 lg:pb-0"
          tabClassName="shrink-0 whitespace-nowrap rounded-full bg-navy-50 px-4 py-2.5 text-start text-sm font-medium text-muted transition-colors hover:text-navy-900 lg:-ms-px lg:rounded-none lg:border-s-2 lg:border-transparent lg:bg-transparent lg:px-5 lg:py-3"
          activeTabClassName="!bg-navy-900 !text-white lg:!border-gold-500 lg:!bg-transparent lg:!text-navy-900"
          tabs={[
            {
              id: "families",
              label: "Families",
              content: (
                <Story title="Private family airport transfers" image="airport-family">
                  <p>
                    Travelling with children changes what a good transfer looks like. Space for strollers, room for a child seat, a calm driver and a vehicle that is not already full of strangers all matter more than speed.
                  </p>
                  <p>
                    For family bookings, tell us the ages of the children, whether you need a child seat, and how many bags you are carrying. Grandparents and elderly relatives are another reason to choose a vehicle with easy entry, such as an SUV or van, and to ask the driver to wait while everyone settles.
                  </p>
                  <p>
                    If your family is split across different flights, we can discuss separate pickups or a combined one, depending on arrival times.
                  </p>
                </Story>
              ),
            },
            {
              id: "business",
              label: "Business and executives",
              content: (
                <Story title="Business and executive airport transfers" image="airport-business" tone="warm">
                  <p>
                    Business travellers value predictability: a car that is where it should be, a driver who understands that the phone call in the back seat is private, and a vehicle that is clean and quiet.
                  </p>
                  <p>
                    Share your arrival time, meeting address and a mobile number for the driver. If your schedule is likely to change, say so, and we will discuss how the booking can flex. For regular travel between the airport and your office or hotel, ask us about repeat arrangements so you do not have to re-explain every trip.
                  </p>
                  <p>
                    Companies that book for visiting guests can supply the guest&apos;s name and flight details, and we handle the rest with the guest directly.
                  </p>
                </Story>
              ),
            },
            {
              id: "umrah",
              label: "Umrah visitors",
              content: (
                <Story title="Airport transportation for Umrah visitors" image="airport-umrah">
                  <p>
                    Pilgrims often arrive tired, sometimes in ihram, with a clear intention and little patience for logistics. A pre-arranged transfer from Jeddah or Madinah airport to your hotel lets you begin your journey calmly.
                  </p>
                  <p>
                    Tell us which hotel you are staying at, whether you intend to perform Umrah immediately on arrival, and how many people are in your party. If you plan to continue from Jeddah to Makkah and later to Madinah, ask us about linking the legs into one plan. Our dedicated page on <a className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/services/vip-hajj-umrah-transfers">VIP Hajj and Umrah transfers</a> covers those routes in detail.
                  </p>
                </Story>
              ),
            },
            {
              id: "tourists",
              label: "Tourists",
              content: (
                <Story title="First-time visitors and tourists">
                  <p>
                    If it is your first time in Saudi Arabia, a private transfer takes away the guesswork. You do not need to compare transport options in an unfamiliar airport or work out local payment methods before you have even reached your hotel.
                  </p>
                  <p>
                    Send us your arrival details and the name of your accommodation. If you are planning to explore afterwards, ask about <a className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/services/city-tours-with-private-driver">city tours with a private driver</a>, which can be arranged with the same team.
                  </p>
                </Story>
              ),
            },
            {
              id: "corporate",
              label: "Corporate guests",
              content: (
                <Story title="Corporate guest pickups">
                  <p>
                    When a company is hosting visitors, the airport pickup is the first impression. A named driver, a clean vehicle and a clear message with the driver&apos;s details help your guests feel expected.
                  </p>
                  <p>
                    Send us the guest list with flight details and destination addresses. For larger delegations, we can coordinate several vehicles, and for conferences or exhibitions we can plan a series of pickups across the day. See our <a className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4" href="/services/event-transportation">event transportation</a> page for multi-vehicle planning.
                  </p>
                </Story>
              ),
            },
          ]}
        />
      </Container>
    </section>
  );
}
