import { PageHero } from "@/components/layout/page-hero";
import { siteConfig } from "@/data/site-config";

export const metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.fullName} collects, uses and protects your information.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`How ${siteConfig.fullName} handles your data.`}
      />
      <section className="container-x max-w-3xl py-16">
        <div className="flex flex-col gap-8 leading-relaxed text-muted [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_li]:list-disc [&_li]:pl-2">
          <div>
            <h2 className="mb-3">Information we collect</h2>
            <p>
              When you submit an enquiry or register for a program we collect the
              details you provide: name, email, phone number, organization and
              message content. We do not sell your personal information.
            </p>
          </div>
          <div>
            <h2 className="mb-3">How we use it</h2>
            <ul className="flex flex-col gap-2">
              <li>Responding to enquiries and program registrations</li>
              <li>Scheduling lab visits, workshops and events</li>
              <li>Issuing certificates for completed programs</li>
              <li>Sending occasional updates you can opt out of at any time</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3">What we never do</h2>
            <ul className="flex flex-col gap-2">
              <li>Share student data with third parties for marketing</li>
              <li>Store payment card details on our systems</li>
              <li>Publish identifiable student work without guardian consent</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3">Your rights</h2>
            <p>
              You can request access to, correction of, or deletion of your data
              by contacting{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-primary hover:underline"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
