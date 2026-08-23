import type { Metadata } from "next";
import { BookOpen, Database } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { ResourcesExplorer } from "@/components/resources/resources-explorer";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "The RoboSiddhi knowledge hub — guides on Arduino, ESP32, IoT, coding progression, drone safety and STEM education. Searchable and free to read.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Hub"
        title={
          <>
            LEARN THE THEORY.
            <br />
            <span className="text-gradient">THEN IGNORE NOTHING.</span>
          </>
        }
        description="Short, practical guides written by our mentors — the same explanations we give at the bench, in searchable form."
      />

      <section className="container-x py-14 sm:py-20">
        <Reveal>
          <ResourcesExplorer />
        </Reveal>

        <Reveal className="mt-16">
          <GlassCard hover={false} className="flex flex-col items-start gap-4 p-7 sm:flex-row sm:items-center sm:p-8">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
              <Database className="h-6 w-6" />
            </span>
            <div>
              <h2 className="font-display text-lg font-semibold tracking-tight">
                Built for growth
              </h2>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">
                This hub is powered by a structured content layer (src/data/resources.ts) ready
                for CMS integration — more guides land every month.
              </p>
            </div>
            <BookOpen className="ml-auto hidden h-8 w-8 shrink-0 text-faint sm:block" aria-hidden />
          </GlassCard>
        </Reveal>
      </section>
    </>
  );
}
