import type { Metadata } from "next";
import { ArrowRight, Compass } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ProgramExplorer } from "@/components/programs/program-explorer";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore RoboSiddhi programs — school robotics curriculums, Arduino and AI/IoT courses, drone bootcamps, summer camps, internships and teacher training in Jaipur.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  const featured = programs.filter((p) => p.featured).length;

  return (
    <>
      <PageHero
        eyebrow={`Programs · ${programs.length} learning paths`}
        title={
          <>
            PICK YOUR PATH.
            <br />
            <span className="text-gradient">START BUILDING.</span>
          </>
        }
        description={`From first circuits to AI vision robots — ${featured} flagship tracks and more, each ending with projects you built yourself.`}
      >
        <ButtonLink href="/robotics-lab">
          <Compass className="h-4 w-4" /> Try the Robotics Lab
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Talk to a Mentor
        </ButtonLink>
      </PageHero>

      <section className="container-x py-16 sm:py-24">
        <Reveal className="mb-12">
          <SectionHeading
            align="left"
            eyebrow="Program Explorer"
            title="Filter by category. Every path is hands-on."
          />
        </Reveal>
        <ProgramExplorer />
      </section>

      <section className="border-t border-border bg-surface/30 py-16 text-center sm:py-20">
        <div className="container-x">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Not sure which program fits?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Book a free lab visit — we&apos;ll assess interests hands-on and recommend a path.
            </p>
            <ButtonLink href="/contact" size="lg" className="mt-7">
              Book a Free Visit <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
