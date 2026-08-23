"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Blocks,
  FlaskConical,
  Lightbulb,
  Microscope,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { EASE } from "@/lib/motion";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

const stages: { label: string; icon: LucideIcon; note: string }[] = [
  { label: "DISCOVER", icon: Lightbulb, note: "Ask how things work" },
  { label: "LEARN", icon: Microscope, note: "Concepts through builds" },
  { label: "BUILD", icon: Wrench, note: "Wire it, code it, make it real" },
  { label: "TEST", icon: FlaskConical, note: "Break it, debug it, improve it" },
  { label: "INNOVATE", icon: Blocks, note: "Design something original" },
];

function Progression() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.55"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.02, 1]);

  return (
    <div ref={ref} className="relative pl-2">
      <div className="absolute bottom-3 left-[calc(1rem+7px)] top-3 w-px bg-white/[0.07]" aria-hidden />
      <motion.div
        className="absolute bottom-3 left-[calc(1rem+7px)] top-3 w-px origin-top bg-gradient-to-b from-primary via-primary to-accent shadow-glow-primary"
        style={{ scaleY }}
        aria-hidden
      />
      <ol className="flex flex-col gap-5">
        {stages.map((stage, i) => (
          <Reveal as="li" key={stage.label} delay={i * 0.08} y={20}>
            <div className="group flex items-start gap-4">
              <span className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-surface text-muted transition-colors duration-300 group-hover:border-primary/50 group-hover:text-primary">
                <stage.icon className="h-4 w-4" aria-hidden />
              </span>
              <div className="glass flex-1 rounded-xl px-4 py-3 transition-colors duration-300 group-hover:border-primary/25">
                <p className="font-mono text-sm font-semibold tracking-[0.18em] text-foreground">
                  <span className="mr-2 text-faint">0{i + 1}</span>
                  {stage.label}
                </p>
                <p className="mt-0.5 text-sm text-muted">{stage.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export function LearningJourney() {
  const journey = siteConfig.learningJourney;

  return (
    <section
      aria-label="Our learning philosophy"
      className="container-x mt-24 sm:mt-36"
    >
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
              The RoboSiddhi way
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              FROM CURIOSITY
              <br />
              TO CREATION.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              We don&apos;t teach technology from slideshows. Every concept is
              met with a screwdriver, a sensor or a line of code — because the
              moment a student sees their own machine come alive, theory stops
              being homework and starts being power.
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-muted">
              One method carries every program: discover what excites you,
              learn the fundamentals by building, test against reality and
              iterate until your idea works in the real world.
            </p>
          </Reveal>
        </div>

        <Progression />
      </div>

      <Stagger className="mt-16 grid gap-5 md:grid-cols-3" stagger={0.12}>
        {journey.map((phase) => (
          <StaggerItem key={phase.stage}>
            <article className="glass card-hover relative h-full overflow-hidden rounded-2xl p-7">
              <span
                className="pointer-events-none absolute -right-6 -top-9 select-none font-display text-[7rem] font-bold leading-none text-white/[0.04]"
                aria-hidden
              >
                {phase.meaning.slice(0, 1)}
              </span>
              <p
                className="font-display text-3xl font-bold tracking-tight"
                lang="sa-Latn"
              >
                <span className="text-gradient">{phase.stage}</span>
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-highlight">
                {phase.meaning}
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                {phase.description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        className="mt-10 text-center font-mono text-xs uppercase tracking-[0.24em] text-faint"
      >
        Curiosity → Practice → Mastery
      </motion.p>
    </section>
  );
}
