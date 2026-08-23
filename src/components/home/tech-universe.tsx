"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Plus, X } from "lucide-react";
import type { Technology } from "@/types";
import { technologies } from "@/data/technologies";
import { TechIcon } from "@/components/icons/tech-icon";
import { DifficultyBadge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { EASE } from "@/lib/motion";

function TechModal({
  tech,
  onClose,
}: {
  tech: Technology;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    dialogRef.current
      ?.querySelector<HTMLElement>("[data-autofocus]")
      ?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`tech-modal-${tech.slug}`}
        style={{ "--tech": tech.color } as React.CSSProperties}
        className="glass-strong relative max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-t-3xl p-7 sm:rounded-3xl sm:p-9 [border-color:var(--tech)] shadow-[0_30px_90px_-20px_var(--tech)]"
      >
        <button
          onClick={onClose}
          data-autofocus
          aria-label="Close details"
          className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-border bg-white/[0.04] text-muted transition-colors hover:border-primary/40 hover:text-primary"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="font-mono text-xs tracking-[0.24em] text-faint">
          {tech.index} — TECHNOLOGY TRACK
        </p>
        <div className="mt-4 flex items-center gap-4" id={`tech-modal-${tech.slug}`}>
          <span
            className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border bg-white/[0.04]"
            style={{ color: tech.color, borderColor: `${tech.color}44` }}
          >
            <TechIcon name={tech.icon} className="h-7 w-7" />
          </span>
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight">
              {tech.name}
            </h3>
            <p className="text-sm text-muted">{tech.tagline}</p>
          </div>
        </div>

        <div className="mt-5">
          <DifficultyBadge level={tech.difficulty} />
        </div>

        <p className="mt-5 leading-relaxed text-muted">{tech.description}</p>

        <h4 className="mt-7 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground">
          Skills you build
        </h4>
        <ul className="mt-3 flex flex-wrap gap-2">
          {tech.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs text-muted"
            >
              {skill}
            </li>
          ))}
        </ul>

        <h4 className="mt-7 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground">
          Example projects
        </h4>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {tech.exampleProjects.map((project) => (
            <li
              key={project}
              className="flex items-center gap-2 rounded-lg border border-border bg-white/[0.02] px-3 py-2 text-sm text-muted"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: tech.color }}
                aria-hidden
              />
              {project}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/programs" size="md">
            Explore Programs
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </ButtonLink>
          <Link
            href="/projects"
            className="inline-flex h-11 items-center justify-center rounded-full px-5 text-[15px] font-medium text-muted transition-colors hover:text-primary"
          >
            See student projects
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function TechUniverse() {
  const [selected, setSelected] = useState<Technology | null>(null);

  return (
    <section
      aria-label="Technology tracks"
      className="container-x mt-28 sm:mt-40"
    >
      <SectionHeading
        align="center"
        eyebrow="Technology Universe"
        title={
          <>
            ENTER THE{" "}
            <span className="text-gradient">ROBOSIDDHI UNIVERSE</span>.
          </>
        }
        description="Seven technology tracks, one builder mindset. Open any track to see the skills, machines and projects waiting inside."
      />

      <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {technologies.map((tech, i) => (
          <motion.li
            key={tech.slug}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: (i % 4) * 0.07 }}
          >
            <button
              onClick={() => setSelected(tech)}
              aria-haspopup="dialog"
              style={{ "--tech": tech.color } as React.CSSProperties}
              className="glass group relative flex h-full w-full flex-col overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:[border-color:var(--tech)] hover:[box-shadow:0_20px_50px_-20px_var(--tech)]"
            >
              <span
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                style={{ backgroundColor: tech.color }}
                aria-hidden
              />
              <span className="flex items-start justify-between">
                <span
                  className="grid h-12 w-12 place-items-center rounded-xl border bg-white/[0.04]"
                  style={{ color: tech.color, borderColor: `${tech.color}33` }}
                >
                  <TechIcon name={tech.icon} className="h-6 w-6" />
                </span>
                <span className="font-display text-4xl font-bold leading-none text-white/[0.07] transition-colors duration-300 group-hover:text-white/[0.14]">
                  {tech.index}
                </span>
              </span>
              <span className="mt-5 block font-display text-lg font-semibold tracking-tight">
                {tech.name}
              </span>
              <span className="mt-1.5 block text-sm leading-relaxed text-muted">
                {tech.tagline}
              </span>
              <span className="mt-auto flex items-center gap-1.5 pt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-faint transition-colors duration-300 group-hover:text-foreground">
                <Plus
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-90"
                  style={{ color: tech.color }}
                  aria-hidden
                />
                Open track
              </span>
            </button>
          </motion.li>
        ))}
      </ul>

      <MotionConfig reducedMotion="user">
        <AnimatePresence>
          {selected && (
            <TechModal tech={selected} onClose={() => setSelected(null)} />
          )}
        </AnimatePresence>
      </MotionConfig>
    </section>
  );
}
