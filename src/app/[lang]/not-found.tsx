import { ButtonLink, Section } from "@/components/ui/primitives";

export default function NotFound() {
  // Language isn't available here, so show both.
  return (
    <Section>
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-4xl font-semibold">404</h1>
        <p className="mt-4 text-navy-700">Page not found · الصفحة غير موجودة</p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink href="/en" variant="navy">Home</ButtonLink>
          <ButtonLink href="/ar" variant="outline">الرئيسية</ButtonLink>
        </div>
      </div>
    </Section>
  );
}
