import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Braces,
  Bug,
  Code2,
  Lightbulb,
  Puzzle,
  Terminal,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { ObjectStage } from "@/components/three/object-stage";

export const metadata: Metadata = {
  title: "Coding",
  description:
    "From visual block coding to Arduino C++ and Python — RoboSiddhi teaches coding where it matters: inside robots, devices and real projects.",
  alternates: { canonical: "/coding" },
};

const stagesOfCode = [
  {
    icon: Blocks,
    title: "Block Coding",
    text: "Drag-and-drop logic with instant results on real hardware — no syntax anxiety, pure cause-and-effect learning.",
    tag: "Ages 8–11",
  },
  {
    icon: Braces,
    title: "Arduino C++",
    text: "The bridge to real engineering: loops, functions, pins and interrupts controlling actual circuits.",
    tag: "Ages 11+",
  },
  {
    icon: Terminal,
    title: "Python",
    text: "Data, dashboards and AI experiments in the language of modern technology careers.",
    tag: "Ages 13+",
  },
];

const skills = [
  { icon: Puzzle, title: "Problem Solving", text: "Decompose big problems into steps a machine can follow — the core skill of all programming." },
  { icon: Bug, title: "Debugging", text: "Errors are lessons. Students learn systematic debugging instead of random guessing." },
  { icon: Code2, title: "Embedded Thinking", text: "Code that lives on hardware: tight loops, timing, memory and the physical world's feedback." },
  { icon: Lightbulb, title: "Project-Based Practice", text: "Every concept lands inside a project the same day it is introduced — never theory alone." },
];

function CodeFallback() {
  return (
    <div className="grid h-full place-items-center" role="img" aria-label="Illustration of floating code blocks">
      <div className="relative flex w-full max-w-sm flex-col gap-3">
        {[
          { w: "82%", c: "#2de2ff", d: "0s" },
          { w: "58%", c: "#7c6cff", d: "-1.4s" },
          { w: "70%", c: "#ffb547", d: "-2.8s" },
          { w: "44%", c: "#2de2ff", d: "-4s" },
        ].map((row, i) => (
          <span
            key={i}
            className="glass animate-float rounded-lg px-4 py-3"
            style={{ width: row.w, animationDelay: row.d }}
            aria-hidden
          >
            <span className="block h-1.5 rounded-full" style={{ backgroundColor: row.c, opacity: 0.8 }} />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CodingPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology · Coding"
        title={
          <>
            CODE IS THE
            <br />
            <span className="text-gradient">SUPERPOWER.</span>
          </>
        }
        description="Code is the thread tying robots, AI and IoT together. We start with visual blocks, graduate to C++ and Python — always inside projects that do something real."
      >
        <ButtonLink href="/programs">
          Coding Programs <ArrowRight className="h-4 w-4" />
        </ButtonLink>
        <ButtonLink href="/robotics-lab" variant="secondary">
          Try Block Coding Now
        </ButtonLink>
      </PageHero>

      {/* Hero object */}
      <section className="container-x grid items-center gap-10 pb-20 pt-4 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="From Blocks to Text"
            title="A ladder, not a leap."
            description="Most students quit coding at the syntax wall. Our ladder avoids it: blocks first, then code that mirrors those blocks line-for-line, then freedom. Each rung controls real hardware, so motivation never runs out."
          />
        </Reveal>
        <ObjectStage
          variant="code"
          fallback={<CodeFallback />}
          className="mx-auto aspect-square w-full max-w-[480px]"
        />
      </section>

      {/* Stages */}
      <section className="border-y border-border bg-surface/30 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Progression Path" title="Three stages, one continuum." />
          <Stagger className="mt-14 grid gap-4 md:grid-cols-3">
            {stagesOfCode.map((stage, i) => (
              <StaggerItem key={stage.title}>
                <GlassCard className="relative h-full p-7">
                  <span className="absolute right-6 top-6 font-display text-5xl font-bold text-white/[0.05]" aria-hidden>
                    {i + 1}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                    <stage.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{stage.text}</p>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-highlight">
                    {stage.tag}
                  </p>
                </GlassCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Skills */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="What You Learn"
          title="Skills that transfer everywhere."
        />
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2">
          {skills.map((skill) => (
            <StaggerItem key={skill.title}>
              <GlassCard className="flex h-full items-start gap-5 p-7">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                  <skill.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{skill.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{skill.text}</p>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Lab teaser */}
      <section className="border-t border-border bg-surface/30 py-20 sm:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Write your first program in the browser —{" "}
              <span className="text-gradient">right now.</span>
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-muted">
              The Robotics Lab includes an original block editor that generates real
              Arduino-style code. Stack blocks, watch the circuit respond, copy the code.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ButtonLink href="/robotics-lab" size="lg">
              Open Robotics Lab <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="container-x py-16 text-center">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-faint">
            Keep exploring
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link href="/robotics" className="glass card-hover rounded-full px-5 py-2.5 text-sm">Robotics</Link>
            <Link href="/ai-iot" className="glass card-hover rounded-full px-5 py-2.5 text-sm">AI &amp; IoT</Link>
            <Link href="/drones" className="glass card-hover rounded-full px-5 py-2.5 text-sm">Drones</Link>
            <Link href="/stem" className="glass card-hover rounded-full px-5 py-2.5 text-sm">STEM</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
