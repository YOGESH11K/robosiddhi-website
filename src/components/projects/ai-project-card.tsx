"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import type { AiProject } from "@/data/ai-projects";
import { EASE } from "@/lib/motion";
import { HudBrackets } from "@/components/ui/hud";

const TILT = 9;

/** 3D pointer-tracking project card. Falls back to a flat card under reduced motion. */
export function AiProjectCard({
  project,
  index,
}: {
  project: AiProject;
  index: number;
}) {
  const reduced = useReducedMotion();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateY = useSpring(useTransform(mx, [0, 1], [TILT, -TILT]), {
    stiffness: 240,
    damping: 22,
  });
  const rotateX = useSpring(useTransform(my, [0, 1], [-TILT, TILT]), {
    stiffness: 240,
    damping: 22,
  });

  function handleMove(event: React.PointerEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    mx.set(x);
    my.set(y);
    event.currentTarget.style.setProperty("--gx", `${Math.round(x * 100)}%`);
    event.currentTarget.style.setProperty("--gy", `${Math.round(y * 100)}%`);
  }

  function handleLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  const Icon = project.icon;

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 44, scale: 0.96 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE, delay: (index % 3) * 0.14 }}
      className="h-full [transform-style:preserve-3d]"
    >
      {/* floor projection glow — bleeds out from under the card on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-10 -bottom-5 h-12 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
        style={{
          background: `radial-gradient(closest-side, ${project.accent}5e, transparent)`,
        }}
      />
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} — ${project.tagline}. Opens the live project in a new tab`}
        onPointerMove={reduced ? undefined : handleMove}
        onPointerLeave={reduced ? undefined : handleLeave}
        style={
          reduced
            ? undefined
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl outline-offset-4 focus-visible:outline-primary"
      >
        {/* cursor-following glow */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(560px circle at var(--gx, 50%) var(--gy, 50%), ${project.accent}26, transparent 42%)`,
          }}
        />
        {/* top hairline highlight */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-6 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-40"
        />
        {/* CRT scanline texture over the glass */}
        <span
          aria-hidden
          className="scanlines pointer-events-none absolute inset-0 z-10 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
        />
        {/* holographic shimmer sweep on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        >
          <span
            className="animate-holo-shimmer absolute top-0 h-full w-1/3"
            style={{
              background: `linear-gradient(105deg, transparent, ${project.accent}21, transparent)`,
            }}
          />
        </span>
        {/* vertical scan beam on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        >
          <span
            className="animate-scan-y absolute inset-x-0 top-0 h-[22%]"
            style={{
              background: `linear-gradient(to bottom, transparent, ${project.accent}3d, transparent)`,
            }}
          />
        </span>
        {/* HUD targeting brackets */}
        <HudBrackets
          className="inset-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ color: project.accent }}
        />
        {/* glass base + lab texture */}
        <span aria-hidden className="absolute inset-0 glass rounded-2xl" />
        <span
          aria-hidden
          className="absolute inset-0 grid-bg rounded-2xl opacity-40"
        />
        {/* ghost icon emboss */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-7 -top-7 z-10 opacity-[0.08] transition-opacity duration-500 group-hover:opacity-[0.16]"
          style={{ color: project.accent }}
        >
          <Icon className="h-28 w-28 animate-holo-flicker" />
        </span>

        <div className="relative z-20 flex h-full flex-col p-6 sm:p-7">
          {/* header strip */}
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.3em] text-faint">
              {project.index}
            </span>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]"
              style={{
                color: project.accent,
                borderColor: `${project.accent}44`,
                backgroundColor: `${project.accent}14`,
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current animate-blink" />
              AI Project
            </span>
          </div>

          {/* identity */}
          <div className="mt-6 flex items-start gap-4 [transform:translateZ(40px)]">
            <span
              className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border bg-white/[0.04]"
              style={{
                color: project.accent,
                borderColor: `${project.accent}33`,
                boxShadow: `0 0 36px -10px ${project.accent}99`,
              }}
            >
              <Icon className="h-6 w-6 animate-float" />
            </span>
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-white">
                {project.title}
              </h3>
              <p
                className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em]"
                style={{ color: project.accent }}
              >
                {project.tagline}
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted [transform:translateZ(24px)]">
            {project.description}
          </p>

          <ul className="mt-4 flex flex-col gap-1.5">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-center gap-2 text-xs text-faint"
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

          <ul
            className="mt-5 flex flex-wrap gap-1.5"
            aria-label="Technologies used"
          >
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-auto pt-6 [transform:translateZ(36px)]">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 group-hover:gap-3 group-hover:brightness-110"
              style={{
                color: project.accent,
                borderColor: `${project.accent}55`,
                backgroundColor: `${project.accent}14`,
              }}
            >
              View Project
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </span>
            <span className="mt-2 flex items-center gap-1.5 font-mono text-[10px] tracking-wide text-faint">
              <ExternalLink className="h-3 w-3" aria-hidden />
              opens in a new tab
            </span>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}