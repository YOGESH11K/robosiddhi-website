"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { projects, projectTechFilters } from "@/data/projects";
import type { Difficulty } from "@/types";
import { ProjectCard } from "./project-card";

const DIFFICULTIES: ("All" | Difficulty)[] = ["All", "Beginner", "Intermediate", "Advanced"];

/** Project gallery with difficulty + technology filtering. */
export function ProjectsExplorer() {
  const [difficulty, setDifficulty] = useState<(typeof DIFFICULTIES)[number]>("All");
  const [tech, setTech] = useState<string>("All");

  const visible = useMemo(
    () =>
      projects.filter((p) => {
        const diffOk = difficulty === "All" || p.difficulty === difficulty;
        const techOk = tech === "All" || p.technologies.includes(tech);
        return diffOk && techOk;
      }),
    [difficulty, tech],
  );

  return (
    <div>
      {/* Difficulty filter */}
      <div className="flex flex-wrap items-center gap-6">
        <div role="radiogroup" aria-label="Filter by difficulty" className="flex flex-wrap gap-2">
          {DIFFICULTIES.map((d) => {
            const active = d === difficulty;
            return (
              <button
                key={d}
                role="radio"
                aria-checked={active}
                onClick={() => setDifficulty(d)}
                className={cn(
                  "rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-300",
                  active
                    ? "border-primary/50 bg-primary/12 text-primary shadow-glow-primary"
                    : "border-border bg-white/[0.03] text-muted hover:border-primary/25 hover:text-foreground",
                )}
              >
                {d}
              </button>
            );
          })}
        </div>
      </div>

      {/* Technology filter */}
      <div role="group" aria-label="Filter by technology" className="mt-4 flex flex-wrap gap-2">
        {["All", ...projectTechFilters].map((t) => {
          const active = t === tech;
          return (
            <button
              key={t}
              aria-pressed={active}
              onClick={() => setTech(t)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-xs transition-all duration-300",
                active
                  ? "border-accent/50 bg-accent/12 text-accent"
                  : "border-border bg-white/[0.02] text-muted hover:border-accent/25 hover:text-foreground",
              )}
            >
              {t}
            </button>
          );
        })}
      </div>

      <p className="mt-8 font-mono text-xs tracking-wide text-faint" aria-live="polite">
        {visible.length} project{visible.length === 1 ? "" : "s"} found
      </p>

      <motion.div layout className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <div className="glass mt-10 rounded-2xl p-12 text-center text-muted">
          No projects match these filters — try clearing one.
        </div>
      )}
    </div>
  );
}
