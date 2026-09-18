"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import type { AiProject } from "@/data/ai-projects";
import { EASE } from "@/lib/motion";
import { HudBrackets } from "@/components/ui/hud";

/** Full-width flagship spotlight card for the featured AI build. */
export function FeaturedAiCard({ project }: { project: AiProject }) {
  const reduced = useReducedMotion();
  const Icon = project.icon;

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 48, scale: 0.97 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: EASE }}
      className="relative"
    >
      {/* floor projection glow that dissolves downward */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-8 -bottom-10 h-24 rounded-full opacity-80 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(closest-side, ${project.accent}8c, transparent)`,
        }}
      />

      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} — ${project.tagline}. Opens the live project in a new tab`}
        className="group focus-visible:outline-primary relative block outline-offset-4"
      >
        {/* rotating conic border frame */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-px overflow-hidden rounded-3xl"
        >
          <span
            className="animate-gradient-rotate absolute left-1/2 top-1/2 aspect-square w-[170%] -translate-x-1/2 -translate-y-1/2"
            style={{
              background: `conic-gradient(from 0deg, transparent 0deg, ${project.accent} 45deg, #2de2ff 130deg, #7c6cff 210deg, transparent 300deg, transparent 360deg)`,
            }}
          />
        </span>

        {/* soft outer glow */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-90"
          style={{
            background: `linear-gradient(120deg, ${project.accent}55, #2de2ff30 45%, transparent 70%)`,
          }}
        />

        {/* surface */}
        <div className="glass-strong relative overflow-hidden rounded-[calc(1.5rem-1px)]">
          {/* CRT scanlines over the glass */}
          <span
            aria-hidden
            className="scanlines pointer-events-none absolute inset-0 z-10 opacity-25 transition-opacity duration-500 group-hover:opacity-50"
          />
          {/* lab grid under the glass */}
          <span
            aria-hidden
            className="grid-bg pointer-events-none absolute inset-0 opacity-50"
          />
          {/* holographic shimmer sweep on hover */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          >
            <span
              className="animate-holo-shimmer absolute top-0 h-full w-1/3"
              style={{
                background: `linear-gradient(105deg, transparent, ${project.accent}24, transparent)`,
              }}
            />
          </span>
          {/* ghost icon emboss */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 z-10 opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.14]"
            style={{ color: project.accent }}
          >
            <Icon className="h-56 w-56 animate-holo-flicker" />
          </span>
          {/* HUD targeting brackets */}
          <HudBrackets
            className="inset-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ color: project.accent }}
          />

          <div className="relative z-20 p-6 sm:p-9 lg:p-12">
            {/* header strip */}
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]"
                style={{
                  color: project.accent,
                  borderColor: `${project.accent}55`,
                  backgroundColor: `${project.accent}14`,
                }}
              >
                <span className="h-1.5 w-1.5 animate-blink rounded-full bg-current" aria-hidden />
                Flagship AI Build
              </span>
              <span className="font-mono text-xs font-semibold tracking-[0.3em] text-faint">
                {project.index} / LIVE
              </span>
              <span className="ml-auto inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                RoboSiddhi Lab
              </span>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              {/* identity + description */}
              <div>
                <div className="flex items-start gap-5">
                  {/* scanning radar emblem */}
                  <span
                    aria-hidden
                    className="relative hidden h-24 w-24 shrink-0 place-items-center sm:grid"
                  >
                    <span
                      className="absolute inset-0 animate-pulse-ring rounded-2xl border"
                      style={{ borderColor: `${project.accent}66` }}
                    />
                    <span
                      className="absolute inset-[-8px] animate-pulse-ring rounded-2xl border opacity-60"
                      style={{ borderColor: `${project.accent}44` }}
                    />
                    <span
                      className="grid h-full w-full place-items-center rounded-2xl border bg-white/[0.04]"
                      style={{
                        color: project.accent,
                        borderColor: `${project.accent}33`,
                        boxShadow: `0 0 48px -8px ${project.accent}99`,
                      }}
                    >
                      <Icon className="h-10 w-10 animate-float" />
                    </span>
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-white sm:text-4xl lg:text-5xl">
                      {project.title}
                    </h3>
                    <p
                      className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] sm:text-xs"
                      style={{ color: project.accent }}
                    >
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {project.description}
                </p>

                <ul
                  className="mt-6 flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted transition-colors duration-300 group-hover:border-white/15"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* highlights + CTA */}
              <div className="flex flex-col gap-6">
                <ul className="grid gap-2.5 sm:grid-cols-1">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="glass flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-foreground/90 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <span
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border"
                        style={{
                          color: project.accent,
                          borderColor: `${project.accent}44`,
                          backgroundColor: `${project.accent}14`,
                        }}
                      >
                        <Sparkles className="h-4 w-4" aria-hidden />
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div>
                  <span
                    className="inline-flex items-center gap-2 rounded-2xl border px-6 py-3.5 text-base font-semibold text-background transition-all duration-300 group-hover:gap-3 group-hover:brightness-110"
                    style={{
                      backgroundColor: project.accent,
                      borderColor: project.accent,
                      boxShadow: `0 10px 40px -10px ${project.accent}99`,
                    }}
                  >
                    Launch Live App
                    <ArrowUpRight
                      className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                  <span className="mt-3 flex items-center gap-1.5 font-mono text-[10px] tracking-wide text-faint">
                    <ExternalLink className="h-3 w-3" aria-hidden />
                    opens the live app in a new tab
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}