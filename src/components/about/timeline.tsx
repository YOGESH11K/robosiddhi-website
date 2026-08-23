"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { timeline } from "@/data/about";
import { TechIcon } from "@/components/icons/tech-icon";
import { Reveal } from "@/components/ui/reveal";

/**
 * Journey timeline with a scroll-linked glowing progress rail.
 * Entries are editable placeholders (TODO_CONFIG in src/data/about.ts).
 */
export function JourneyTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.72", "end 0.55"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <ol ref={ref} className="relative ml-3 flex flex-col gap-14 sm:ml-5">
      {/* Rail */}
      <div
        aria-hidden
        className="absolute bottom-2 left-0 top-2 w-px bg-white/10 sm:left-2"
      />
      <motion.div
        aria-hidden
        style={{ scaleY }}
        className="absolute bottom-2 left-0 top-2 w-px origin-top bg-gradient-to-b from-primary to-accent shadow-glow-primary sm:left-2"
      />

      {timeline.map((entry, i) => (
        <li key={entry.title} className="relative pl-8 sm:pl-12">
          <span
            aria-hidden
            className="absolute -left-[13px] top-1 grid h-7 w-7 place-items-center rounded-full border border-primary/40 bg-background sm:-left-[9px]"
          >
            <span className="h-2 w-2 rounded-full bg-primary shadow-glow-primary" />
          </span>
          <Reveal delay={i * 0.05}>
            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <TechIcon name={entry.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-faint">
                    {entry.era}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                    {entry.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                {entry.description}
              </p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
