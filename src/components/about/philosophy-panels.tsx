"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/data/site-config";

/**
 * JIGYASA → SADHANA → SIDDHI
 * Three giant panels that transform into one another on scroll,
 * visualising the RoboSiddhi learning philosophy.
 */
export function PhilosophyPanels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const stages = siteConfig.learningJourney;

  // Panel 1 (Jigyasa) folds away as panel 2 arrives, etc.
  const y1 = useTransform(scrollYProgress, [0.25, 0.6], ["0%", "-14%"]);
  const scale1 = useTransform(scrollYProgress, [0.25, 0.6], [1, 0.92]);
  const opacity1 = useTransform(scrollYProgress, [0.3, 0.55], [1, 0.15]);

  const y2 = useTransform(scrollYProgress, [0, 0.3], ["10%", "0%"]);
  const opacity2 = useTransform(scrollYProgress, [0.62, 0.85], [1, 0.2]);
  const scale2 = useTransform(scrollYProgress, [0.62, 0.9], [1, 0.94]);

  const y3 = useTransform(scrollYProgress, [0.35, 0.7], ["12%", "0%"]);

  return (
    <div ref={containerRef} className="relative" style={{ height: `${stages.length * 88}vh` }}>
      {/* Sticky stage */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />

        <div className="container-x relative grid w-full items-center gap-10 lg:grid-cols-[1fr_1fr]">
          {/* Left: giant stage word */}
          <div className="relative h-[300px] sm:h-[380px]">
            {stages.map((stage, i) => {
              const style =
                i === 0
                  ? { y: y1, scale: scale1, opacity: opacity1 }
                  : i === 1
                    ? { y: y2, scale: scale2, opacity: opacity2 }
                    : { y: y3 };
              return (
                <motion.div
                  key={stage.stage}
                  style={{ ...style, position: "absolute", inset: 0 }}
                  className="flex flex-col justify-center"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                    STAGE {String(i + 1).padStart(2, "0")} · {stage.meaning}
                  </span>
                  <h3 className="mt-4 font-display text-[clamp(3rem,9vw,7rem)] font-bold leading-none tracking-tight">
                    <span className={i === 2 ? "text-gradient" : ""}>{stage.stage.toUpperCase()}</span>
                  </h3>
                  <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                    {stage.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right: stacked depth cards */}
          <div className="relative hidden h-[420px] lg:block" aria-hidden>
            {stages.map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: "absolute",
                  insetInline: 0,
                  top: `${i * 26}px`,
                  rotateX: 8,
                  transformPerspective: 900,
                }}
                className="glass-strong rounded-2xl"
              >
                <div className="flex h-full min-h-[150px] flex-col justify-between p-6">
                  <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.22em] text-faint">
                    <span>{stages[i].meaning.toUpperCase()}</span>
                    <span>{String(i + 1).padStart(2, "0")} / 03</span>
                  </div>
                  <div className="flex items-end gap-1" aria-hidden>
                    {[38, 64, 46, 80, 58].slice(0, i + 3).map((h, j) => (
                      <span
                        key={j}
                        className="w-2.5 rounded-full bg-gradient-to-t from-primary/30 to-primary"
                        style={{ height: `${h}px`, opacity: 0.35 + j * 0.13 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress rail */}
        <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 items-center gap-3 sm:flex">
          <ArrowDown className="h-4 w-4 animate-float text-faint" />
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-faint">
            Keep scrolling — curiosity becomes mastery
          </span>
        </div>
      </div>
    </div>
  );
}
