"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type { CurriculumModule } from "@/types";

/**
 * 3D-styled progress path: modules rendered as nodes along an isometric
 * circuit trace that draws itself as you scroll.
 */
export function ProgressPath({ modules }: { modules: CurriculumModule[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.6"],
  });
  const draw = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });
  const pathLength = useTransform(draw, [0, 1], [0.02, 1]);

  return (
    <ol ref={ref} className="relative mx-auto flex max-w-3xl flex-col gap-10 pl-10 sm:pl-14">
      {/* Circuit rail (desktop) */}
      <svg
        aria-hidden
        viewBox="0 0 60 100"
        preserveAspectRatio="none"
        className="absolute bottom-4 left-0 top-4 h-[calc(100%-2rem)] w-14 sm:w-16"
      >
        <path
          d="M30 0 V20 L12 32 V52 L30 64 V84 L30 100"
          fill="none"
          stroke="oklch(1 0 0 / 0.08)"
          strokeWidth="2.5"
        />
        <motion.path
          d="M30 0 V20 L12 32 V52 L30 64 V84 L30 100"
          fill="none"
          stroke="#2de2ff"
          strokeWidth="2.5"
          style={{ pathLength }}
          strokeLinecap="round"
        />
      </svg>

      {modules.map((module, i) => (
        <li key={module.title} className="relative">
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            aria-hidden
            className="absolute -left-10 top-7 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-primary/45 bg-background font-mono text-[11px] text-primary shadow-glow-primary sm:-left-14"
          >
            {String(i + 1).padStart(2, "0")}
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display text-lg font-semibold tracking-tight text-primary sm:text-xl">
              {module.title}
            </h3>
            <ul className="mt-3 flex flex-col gap-1.5 text-sm leading-relaxed text-muted">
              {module.lessons.map((lesson) => (
                <li key={lesson} className="flex items-start gap-2.5">
                  <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {lesson}
                </li>
              ))}
            </ul>
            {module.project && (
              <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-highlight/25 bg-highlight/10 px-3 py-1.5 text-xs font-medium text-highlight">
                Capstone · {module.project}
              </p>
            )}
          </motion.div>
        </li>
      ))}
    </ol>
  );
}
