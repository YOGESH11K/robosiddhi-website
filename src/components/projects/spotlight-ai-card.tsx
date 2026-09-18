"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  HandMetal,
  Sparkles,
} from "lucide-react";
import type { AiProject } from "@/data/ai-projects";
import { EASE } from "@/lib/motion";
import { HudBrackets } from "@/components/ui/hud";

const ASL_WORDS = [
  "HELLO",
  "THANK YOU",
  "PLEASE",
  "I LOVE YOU",
  "YES",
  "NO",
  "HELP",
  "FRIEND",
  "LEARN",
  "MORE",
];

/** Full-width cinematic closing spotlight for the newest lab build. */
export function SpotlightAiCard({ project }: { project: AiProject }) {
  const reduced = useReducedMotion();
  const Icon = project.icon;

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 56, scale: 0.97 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: EASE }}
      className="relative"
    >
      {/* ground glow bleeding off the bottom edge */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-8 -bottom-12 h-28 rounded-full opacity-80 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(closest-side, ${project.accent}99, transparent)`,
        }}
      />

      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} — ${project.tagline}. Opens the live project in a new tab`}
        className="group relative block focus-visible:outline-primary outline-offset-4"
      >
        {/* triple rotating conic border */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-px overflow-hidden rounded-[2rem]"
        >
          <span
            className="animate-gradient-rotate absolute left-1/2 top-1/2 aspect-square w-[180%] -translate-x-1/2 -translate-y-1/2"
            style={{
              background: `conic-gradient(from 0deg, transparent 0deg, ${project.accent} 50deg, #2de2ff 120deg, #7c6cff 190deg, ${project.accent}66 260deg, transparent 330deg, transparent 360deg)`,
            }}
          />
        </span>

        {/* soft outer glow */}
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `linear-gradient(120deg, ${project.accent}66, #2de2ff33 45%, #7c6cff40 70%, transparent)`,
          }}
        />

        {/* surface */}
        <div className="glass-strong relative overflow-hidden rounded-[calc(2rem-1px)]">
          {/* scanlines */}
          <span
            aria-hidden
            className="scanlines pointer-events-none absolute inset-0 z-10 opacity-25 transition-opacity duration-500 group-hover:opacity-50"
          />
          {/* lab grid */}
          <span
            aria-hidden
            className="grid-bg pointer-events-none absolute inset-0 opacity-50"
          />
          {/* holo shimmer sweep */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          >
            <span
              className="animate-holo-shimmer absolute top-0 h-full w-1/3"
              style={{
                background: `linear-gradient(105deg, transparent, ${project.accent}2e, transparent)`,
              }}
            />
          </span>
          {/* vertical scan beam */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          >
            <span
              className="animate-scan-y absolute inset-x-0 top-0 h-[22%]"
              style={{
                background: `linear-gradient(to bottom, transparent, ${project.accent}4d, transparent)`,
              }}
            />
          </span>
          {/* giant ghost hand emboss */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-12 -top-12 z-10 opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.16]"
            style={{ color: project.accent }}
          >
            <Icon className="h-72 w-72 animate-holo-flicker" />
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -left-10 z-10 opacity-[0.05] transition-opacity duration-500 group-hover:opacity-[0.12]"
            style={{ color: "#2de2ff" }}
          >
            <HandMetal className="h-56 w-56 animate-holo-flicker" />
          </span>
          {/* HUD brackets */}
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
                <Sparkles className="h-3 w-3" aria-hidden />
                Newest AI Build
              </span>
              <span className="font-mono text-xs font-semibold tracking-[0.3em] text-faint">
                {project.index} / LIVE
              </span>
              <span className="ml-auto inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                RoboSiddhi Lab
              </span>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              {/* ASL eye-candy column */}
              <div className="relative">
                {/* radar emblem */}
                <span
                  aria-hidden
                  className="relative grid h-32 w-32 place-items-center sm:h-40 sm:w-40"
                >
                  <span
                    className="absolute inset-0 animate-pulse-ring rounded-3xl border"
                    style={{ borderColor: `${project.accent}59` }}
                  />
                  <span
                    className="absolute inset-[-10px] animate-pulse-ring rounded-3xl border opacity-60"
                    style={{ borderColor: `${project.accent}3d` }}
                  />
                  <span
                    className="absolute inset-2 animate-spin rounded-full border border-dashed opacity-40"
                    style={{ borderColor: `${project.accent}59` }}
                  />
                  <span className="absolute inset-5 grid place-items-center rounded-2xl border bg-white/[0.04]"
                    style={{
                      color: project.accent,
                      borderColor: `${project.accent}33`,
                      boxShadow: `0 0 60px -8px ${project.accent}99`,
                    }}
                  >
                    <Icon className="h-16 w-16 animate-float sm:h-20 sm:w-20" />
                  </span>
                </span>

                {/* animated ASL marquee */}
                <div
                  className="mt-8 overflow-hidden rounded-xl border"
                  style={{ borderColor: `${project.accent}33` }}
                  aria-hidden
                >
                  <p className="flex items-center border-b bg-white/[0.03] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em]"
                    style={{ color: project.accent, borderColor: `${project.accent}33` }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current animate-blink" />
                    gesture dictionary
                  </p>
                  <div className="flex w-max animate-marquee gap-8 py-3 pl-8 font-mono text-xs tracking-[0.2em] text-muted">
                    {[...ASL_WORDS, ...ASL_WORDS].map((word, i) => (
                      <span key={`${word}-${i}`} className="inline-flex items-center gap-8">
                        {word}
                        <span style={{ color: project.accent }}>✕</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* identity + description */}
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

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <span
                    className="inline-flex items-center gap-2 rounded-2xl border px-6 py-3.5 text-base font-semibold text-background transition-all duration-300 group-hover:gap-3 group-hover:brightness-110"
                    style={{
                      backgroundColor: project.accent,
                      borderColor: project.accent,
                      boxShadow: `0 10px 40px -10px ${project.accent}99`,
                    }}
                  >
                    Launch Live Demo
                    <ArrowUpRight
                      className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wide text-faint">
                    <ExternalLink className="h-3 w-3" aria-hidden />
                    opens the live app in a new tab
                  </span>
                </div>

                {/* highlights */}
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="glass flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-xs text-foreground/90 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <Sparkles
                        className="h-3.5 w-3.5 shrink-0"
                        style={{ color: project.accent }}
                        aria-hidden
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}