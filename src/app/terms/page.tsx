import { PageHero } from "@/components/layout/page-hero";
import { siteConfig } from "@/data/site-config";

export const metadata = {
  title: "Terms of Service",
  description: `Terms governing the use of ${siteConfig.fullName} programs, labs and services.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description={`The ground rules for using ${siteConfig.fullName} programs, labs and services.`}
      />
      <section className="container-x max-w-3xl py-16">
        <div className="flex flex-col gap-8 leading-relaxed text-muted [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_ul]:flex-col [&_ul]:gap-2 [&_ul_li]:list-disc [&_ul_li]:pl-2">
          <div>
            <h2 className="mb-3">Programs & registration</h2>
            <p>
              Registration is confirmed on fee payment. Seats are limited and
              allocated on a first-come basis. Rescheduling requests are honored
              where capacity allows.
            </p>
          </div>
          <div>
            <h2 className="mb-3">Lab safety</h2>
            <ul>
              <li>Students must follow mentor instructions around tools, soldering equipment and flying devices.</li>
              <li>Drone activities follow DGCA hobby guidelines in approved areas only.</li>
              <li>Electrical projects are low-voltage unless part of a supervised advanced module.</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3">Equipment</h2>
            <p>
              Lab kits remain the property of RoboSiddhi unless purchased. Deliberate
              damage to shared equipment may be charged at replacement cost.
            </p>
          </div>
          <div>
            <h2 className="mb-3">Certificates</h2>
            <p>
              Certificates are issued on completing program requirements and carry a
              unique verifiable ID. Fraudulent alteration voids verification.
            </p>
          </div>
          <div>
            <h2 className="mb-3">Contact</h2>
            <p>
              Questions about these terms:{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
