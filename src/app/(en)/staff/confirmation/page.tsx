import type { Metadata } from "next";
import { Container } from "@/components/ui/primitives";
import { ConfirmationBuilder } from "@/components/trip/ConfirmationBuilder";

export const metadata: Metadata = {
  title: { absolute: "Staff: issue a confirmation" },
  robots: { index: false, follow: false },
};

/** Internal tool for staff. Not linked anywhere, not indexed, and gated by a password checked on the server. */
export default function Page() {
  return (
    <Container className="max-w-4xl py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-navy-900">Issue a trip confirmation</h1>
      <p className="mt-3 text-sm leading-[1.9] text-muted">
        Enter only what has been agreed with the customer. The result is a signed link: the customer can read it, and nobody can change it without the link showing as unverified. Nothing is stored on our servers.
      </p>
      <div className="mt-8"><ConfirmationBuilder /></div>
    </Container>
  );
}
