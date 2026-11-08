import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/primitives";
import { enquiryLink, quoteHref } from "@/lib/booking";

/** Shared booking button pair. Each page decides how and where to present it. */
export function BookButtons({
  slug,
  service,
  primaryLabel,
  whatsappLabel = "WhatsApp us",
  className = "",
}: {
  slug: string;
  service: string;
  primaryLabel: string;
  whatsappLabel?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <ButtonLink href={quoteHref(slug)} arrow>{primaryLabel}</ButtonLink>
      <ButtonLink href={enquiryLink(service)} external variant="whatsapp">
        <MessageCircle className="size-4" aria-hidden /> {whatsappLabel}
      </ButtonLink>
    </div>
  );
}
