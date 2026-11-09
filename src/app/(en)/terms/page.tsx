import type { Metadata } from "next";
import { site } from "@/config/site";
import { buildPageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = buildPageMetadata({
  path: "/terms",
  title: "Booking Terms",
  description: "How bookings with Saudi Transport Group work: quotes, confirmation, changes, cancellations and passenger responsibilities.",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Booking Terms"
      updated="November 2026"
      intro={`These terms describe how bookings with ${site.name.en} work. The details of your own booking, including price, vehicle, timings and any cancellation terms, are confirmed in the booking message we send you.`}
    >
      <h2>Quotes and confirmation</h2>
      <p>
        We quote each journey individually. A booking is confirmed only when we confirm it to you in writing, for example by WhatsApp or email, stating the service, date, vehicle type and price. Until then, vehicles and drivers are not reserved and availability is not guaranteed.
      </p>

      <h2>Information you give us</h2>
      <p>
        Please give accurate details: pickup and drop-off places, flight numbers, passenger and luggage numbers, and any special needs. Where a journey depends on information you gave us, we are not responsible for problems that come from it being incorrect or incomplete.
      </p>

      <h2>Vehicles</h2>
      <p>
        We propose a vehicle category that suits your passengers and luggage. Exact models and capacities are confirmed with your booking. Where we confirm a vehicle, we aim to provide it, and if we need to change it we will tell you as early as we can.
      </p>

      <h2>Payment</h2>
      <p>Payment arrangements, including when and how you pay and what the price includes, are agreed when we confirm your booking.</p>

      <h2>Changes and cancellations</h2>
      <p>
        If your plans change, tell us as early as possible. We will adjust the booking where we can. Any charges for changes or cancellations are those stated in your booking confirmation, so please read it and ask us if anything is unclear.
      </p>

      <h2>Delays</h2>
      <p>
        For airport pickups, how delays and waiting time are handled is agreed with your booking. Please keep us informed of changes to your flight. Road, weather and security conditions can affect journeys, and we will keep you informed if they affect yours.
      </p>

      <h2>Passenger responsibilities</h2>
      <ul>
        <li>Carry valid passports, visas, permits and any other documents your journey needs, including for cross-border routes.</li>
        <li>Follow the driver&apos;s safety instructions, including seat belt use where fitted.</li>
        <li>Tell us in advance if you need a child seat, wheelchair space or other assistance.</li>
        <li>Respect local laws and the rules of venues and holy sites.</li>
      </ul>

      <h2>What we provide</h2>
      <p>
        We provide road transport with a driver. We are not a Hajj or Umrah package operator, a travel agency or a licensed tour guide service, and we do not issue visas or permits.
      </p>

      <h2>Your rights</h2>
      <p>Nothing on this page limits any right you have under the laws of Saudi Arabia.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms or a booking: <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a> or <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
