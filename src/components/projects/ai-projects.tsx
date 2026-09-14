"use client";

import { Cpu } from "lucide-react";
import { aiProjects } from "@/data/ai-projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ObjectStage } from "@/components/three/object-stage";
import { AiProjectCard } from "./ai-project-card";

const models = ["eNet-B0", "AffectNet", "MediaPipe", "COCO-SSD"];

/** Dedicated AI section inside the Projects area — 3D, live-lab themed. */
export function AiProjects() {
  return (
    <section
      aria-label="AI projects"
      className="relative overflow-hidden border-t border-border bg-surface/30"
    >
      {/* ambient 3D backdrop (desktop only — ObjectStage handles fallbacks) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <ObjectStage
          variant="network"
          fallback={null}
          className="absolute inset-0 opacity-50"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent to-background/70" />
      </div>

      {/* lab grid + ambient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div aria-hidden className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative container-x py-16 sm:py-24">
        <SectionHeading
          align="left"
          eyebrow="AI Project Lab"
          title={
            <>
              AI PROJECTS.
              <span className="text-gradient"> LIVE MACHINE VISION.</span>
            </>
          }
          description="Three browser-based AI experiments built in the RoboSiddhi lab — real neural networks running inference live in your browser."
        />

        {/* HUD status strip */}
        <Reveal delay={0.1} className="mt-10">
          <div role="status" className="glass flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl px-4 py-3 font-mono text-[11px] tracking-wider text-faint">
            <span className="inline-flex items-center gap-1.5 text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-blink" aria-hidden />
              &gt;_ ENGINE ONLINE
            </span>
            <span className="hidden h-3 w-px bg-border sm:block" aria-hidden />
            {models.map((model) => (
              <span
                key={model}
                className="rounded border border-border bg-white/[0.03] px-2 py-0.5 text-muted"
              >
                {model}
              </span>
            ))}
            <span className="ml-auto inline-flex items-center gap-1.5 text-muted">
              <Cpu className="h-3.5 w-3.5" aria-hidden />
              on-device inference
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 [perspective:1400px]">
          {aiProjects.map((project, i) => (
            <AiProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}