import { Container } from "@/components/ui/primitives";

const info = [
  ["Who we are", "We provide private road transport only. We are not a Hajj or Umrah package operator, and we do not issue visas or permits. Please make sure your travel documents and permissions are in order through the appropriate channels."],
  ["What we need", "Names of travellers, the airports and flight details, hotel names in each city, dates, passenger count, luggage count, and any special needs such as wheelchair access or a child seat."],
  ["Confirmation", "We confirm your vehicle type, pickup arrangements and price in writing, and you receive driver details before travel."],
  ["Changes", "Flights get rescheduled and itineraries change. Message us as early as you can, and we will adjust where possible."],
  ["Seasonal demand", "During Ramadan and other busy periods, early booking helps. Vehicle availability is never guaranteed until we confirm it."],
  ["Payment", "Payment arrangements are agreed when we confirm your booking."],
];

/** Important booking information as a two-column notice board. */
export function BookingInfo() {
  return (
    <section className="bg-[#f5f7fa] py-24 sm:py-32" aria-labelledby="booking-info">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Important booking information</p>
            <h2 id="booking-info" className="mt-5 text-3xl font-light leading-tight text-navy-900 sm:text-4xl">
              What to know <span className="font-semibold">before you book</span>
            </h2>
          </div>
          <dl className="grid gap-px overflow-hidden rounded-2xl bg-navy-100 sm:grid-cols-2">
            {info.map(([k, v]) => (
              <div key={k} className="bg-white p-7">
                <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-navy-900">{k}</dt>
                <dd className="mt-3 text-sm leading-[1.9] text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
