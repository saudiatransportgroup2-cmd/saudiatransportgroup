import type { Metadata } from "next";
import { site } from "@/config/site";
import { buildPageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = buildPageMetadata({
  path: "/privacy",
  title: "Privacy Policy",
  description: "How Saudi Transport Group collects and uses the details you send through this website, WhatsApp and the quote form.",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="November 2026"
      intro={`This page explains what information ${site.name.en} collects through ${site.domain}, why, and how you can contact us about it.`}
    >
      <h2>What we collect</h2>
      <p>We collect only what you choose to send us when you ask for a quote or make an enquiry:</p>
      <ul>
        <li>Your name and phone or WhatsApp number</li>
        <li>Your email address, if you give one</li>
        <li>Trip details: service, pickup and drop-off places, date, time, number of passengers and bags, preferred vehicle, and any notes</li>
      </ul>
      <p>
        You can also contact us directly by WhatsApp, phone or email. In that case we receive whatever you write and the number or address you contact us from.
      </p>

      <h2>How we use it</h2>
      <p>We use your details to reply to your request, prepare and confirm a quote, arrange your transport and contact you about your booking. We do not sell your details.</p>

      <h2>How the quote form works</h2>
      <p>
        When you submit the form, your details are put into a WhatsApp message that opens on your device, and are also sent to our website server so that the enquiry is not lost. The server passes the enquiry on to our team, and may record it in our hosting logs.
      </p>

      <h2>Free planning tools and share links</h2>
      <p>
        Our trip planner, prayer-time planner, driver card, season calendar, checklists and the group list tool work in your browser. What you type into them is not sent to our servers or stored by us. It only reaches us if you press a button that opens WhatsApp with your details, and then you choose whether to send it.
      </p>
      <p>
        The trip planner can create a share link. That link contains the plan you entered, such as journeys, places, dates, flight numbers and notes, inside the link itself. Anyone who has the link can read it, so share it only with people you trust. We do not keep a copy.
      </p>

      <h2>Trip confirmation links</h2>
      <p>
        When we confirm a trip with you, our team may send you a confirmation link. The link contains the details we agreed, such as your name, journeys, dates, flight numbers, vehicle, price and, when known, the driver’s name and phone number. It is protected by a signature so that it cannot be altered without showing as unverified. We do not store the confirmation on our servers.
      </p>
      <p>
        Anyone who has the link can read it. Please share it only with people who travel with you. A link cannot be withdrawn after it is sent: if the trip changes, we send a new confirmation and the latest one replaces the earlier one. These pages are hidden from search engines.
      </p>

      <h2>Services that handle data for us</h2>
      <ul>
        <li><strong>WhatsApp</strong> (Meta) carries the messages you send. Their own privacy policy applies to that service.</li>
        <li><strong>Cloudflare</strong> hosts this website, so visitor requests pass through its network.</li>
        <li>An email or messaging service may be used to deliver enquiries to our team.</li>
      </ul>

      <h2>How long we keep it</h2>
      <p>We keep enquiry details for as long as we need them to deal with your request and to keep a record of the booking. You can ask us to delete your details at any time.</p>

      <h2>Cookies and analytics</h2>
      <p>This site does not set advertising cookies. If we switch on visit statistics, they are used only to understand how the site is used.</p>

      <h2>Your choices</h2>
      <p>You can ask to see, correct or delete the information we hold about you. Contact us using the details below.</p>

      <h2>Contact</h2>
      <p>
        Phone and WhatsApp: <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>. Email: <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>We may update this page. The date at the top shows when it last changed.</p>
    </LegalPage>
  );
}
