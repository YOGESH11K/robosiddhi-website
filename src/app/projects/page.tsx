import type { Metadata } from "next";
import { ArrowRight, Compass } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse RoboSiddhi student builds — obstacle-avoiding robots, IoT plant monitors, AI vision robots and more, each with a complete build guide.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Project Gallery"
        title={
          <>
            REAL BUILDS.
            <br />
            <span className="text-gradient">REAL GUIDES.</span>
          </>
        }
        description="Every project here has been built by students in our labs. Each guide includes components, circuits, code, build steps and debugging help."
      >
        <ButtonLink href="/robotics-lab">
          <Compass className="h-4 w-4" /> Open in Robotics Lab
        </ButtonLink>
      </PageHero>

      <section className="container-x py-16 sm:py-20">
        <Reveal>
          <ProjectsExplorer />
        </Reveal>
      </section>

      <section className="border-t border-border bg-surface/30 py-16 text-center sm:py-20">
        <div className="container-x">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Built something? Show it off.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Students present projects at demo days and competitions — and the best guides get published here.
            </p>
            <ButtonLink href="/contact" size="lg" className="mt-7">
              Share Your Build <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
