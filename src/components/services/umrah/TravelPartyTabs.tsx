import { Tabs } from "@/components/ui/Tabs";
import { Photo } from "@/components/ui/Photo";
import { Container } from "@/components/ui/primitives";

/** Family, VIP and group pilgrims as three calm tabbed briefings. */
export function TravelPartyTabs() {
  return (
    <section className="bg-navy-50 py-24 sm:py-32" aria-labelledby="party-title">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">For every kind of pilgrim party</p>
          <h2 id="party-title" className="mt-5 text-3xl font-light leading-tight text-navy-900 sm:text-5xl">
            Arranged for <span className="font-semibold">your family, your guests, or your group</span>
          </h2>
        </div>

        <Tabs
          label="Type of pilgrim party"
          className="mt-14"
          listClassName="mx-auto flex max-w-xl justify-center gap-1 rounded-full bg-white p-1 shadow-sm"
          tabClassName="flex-1 rounded-full px-4 py-3 text-sm font-semibold text-muted transition-colors"
          activeTabClassName="!bg-navy-900 !text-white"
          panelClassName="mt-10 grid items-center gap-10 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-2"
          tabs={[
            {
              id: "family",
              label: "Family Umrah",
              content: (
                <>
                  <Photo id="umrah-family" tone="warm" sizes="(min-width:1024px) 40vw, 100vw" className="aspect-[4/3]" />
                  <div>
                    <h3 className="text-2xl font-semibold text-navy-900">Family Umrah transfers</h3>
                    <div className="mt-4 space-y-4 text-sm leading-[1.95] text-muted">
                      <p>
                        Travelling with parents, spouses and children means different people with different needs in one vehicle. We help you choose a car or van with room for everyone, and for the luggage that comes with a family.
                      </p>
                      <p>
                        Tell us about elderly relatives, anyone who finds long journeys difficult, and children who need a child seat. A calm driver and an unhurried pick-up make a real difference to a family&apos;s first day.
                      </p>
                      <p>
                        If your family is arriving on separate flights, we can discuss separate pickups or a shared one.
                      </p>
                    </div>
                  </div>
                </>
              ),
            },
            {
              id: "vip",
              label: "Private VIP",
              content: (
                <>
                  <Photo id="chauffeur-interior" tone="dark" sizes="(min-width:1024px) 40vw, 100vw" className="aspect-[4/3]" />
                  <div>
                    <h3 className="text-2xl font-semibold text-navy-900">Private VIP transportation</h3>
                    <div className="mt-4 space-y-4 text-sm leading-[1.95] text-muted">
                      <p>
                        VIP here means private, unhurried and well presented: a premium sedan or SUV, a courteous driver, and a plan that fits your schedule instead of a shared programme.
                      </p>
                      <p>
                        It suits senior guests, distinguished visitors, and families who simply prefer the highest level of comfort for their pilgrimage. Discretion matters, so we keep the arrangement simple and the communication clear.
                      </p>
                      <p>
                        Premium vehicles are subject to availability, so please book early and tell us your preferred vehicle type.
                      </p>
                    </div>
                  </div>
                </>
              ),
            },
            {
              id: "group",
              label: "Group pilgrims",
              content: (
                <>
                  <Photo id="coach-hero" tone="navy" sizes="(min-width:1024px) 40vw, 100vw" className="aspect-[4/3]" />
                  <div>
                    <h3 className="text-2xl font-semibold text-navy-900">Group pilgrim transfers</h3>
                    <div className="mt-4 space-y-4 text-sm leading-[1.95] text-muted">
                      <p>
                        For groups, the work is in coordination: matching vehicles to flights, spreading luggage sensibly, and keeping everyone together. We can arrange minibuses, coaches or several vehicles, depending on the group size.
                      </p>
                      <p>
                        Send us the group size, the flight list, hotels and dates. If your group is organised by an agency or a group leader, we are happy to speak with the coordinator directly.
                      </p>
                      <p>
                        More detail is on our <a href="/services/group-transfers" className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4">group transfers</a> and <a href="/services/bus-coach-rental-with-driver" className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4">bus and coach rental</a> pages.
                      </p>
                    </div>
                  </div>
                </>
              ),
            },
          ]}
        />
      </Container>
    </section>
  );
}
