import { Container } from "@/components/ui/primitives";

/** Introduction: a quote-led statement, then two-column body and a ruled list of what we coordinate. */
export function GroupsIntro() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="groups-intro">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-600">Introduction to coordinated group transportation</p>
            <h2 id="groups-intro" className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              The hard part of group travel is not the road. It is keeping everyone in the same plan.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-[1.9] text-muted">
              <p>
                Every group has the same difficulties: different arrival times, different luggage, different hotels, and one person trying to hold the plan together on their phone. When each person organises their own ride, the group scatters, and the organiser spends the day answering messages.
              </p>
              <p>
                A coordinated group transfer replaces many small arrangements with one. You give us the passengers, the dates, the places and the luggage. We propose the vehicles, assign drivers, agree meeting points, and share a single plan with a single contact.
              </p>
              <p>
                We arrange group transfers for families, tourist parties, pilgrim groups and delegations. This page explains how coordination works, what we need from you, and how to decide whether a coordinated booking is right for your trip.
              </p>
            </div>
          </div>
          <div className="self-start border border-navy-100 bg-[#f5f7fa] p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-navy-900">What we coordinate</h3>
            <ul className="mt-5 divide-y divide-navy-100 text-sm">
              {[
                ["Vehicles", "A mix of sizes chosen for people and luggage"],
                ["Drivers", "Named drivers with contact details shared before travel"],
                ["Meeting points", "Clear, agreed places and times for every pickup"],
                ["Timings", "A schedule that accounts for flights, hotels and traffic"],
                ["Changes", "One contact to adjust the plan if something shifts"],
              ].map(([k, v]) => (
                <li key={k} className="grid gap-1 py-3 sm:grid-cols-[120px_1fr]">
                  <span className="font-semibold text-navy-900">{k}</span>
                  <span className="text-muted">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
