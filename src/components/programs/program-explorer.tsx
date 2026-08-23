"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { programs, programCategories } from "@/data/programs";
import { ProgramCard } from "./program-card";

/** Futuristic program explorer with category filtering. */
export function ProgramExplorer() {
  const [category, setCategory] = useState<string>("All");

  const filters = useMemo(() => ["All", ...programCategories], []);
  const visible = useMemo(
    () =>
      category === "All"
        ? programs
        : programs.filter((p) => p.category === category),
    [category],
  );

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter programs by category"
        className="flex flex-wrap items-center gap-2"
      >
        {filters.map((f) => {
          const active = f === category;
          return (
            <button
              key={f}
              role="tab"
              aria-selected={active}
              onClick={() => setCategory(f)}
              className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-300 ${
                active
                  ? "border-primary/50 bg-primary/12 text-primary shadow-glow-primary"
                  : "border-border bg-white/[0.03] text-muted hover:border-primary/25 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((program) => (
            <motion.div
              key={program.slug}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <ProgramCard program={program} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="mt-14 text-center text-muted">
          No programs in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}
