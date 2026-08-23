"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { events } from "@/data/events";
import type { LabEvent } from "@/types";

type LabEventFilter = LabEvent["type"];
type Category = "All" | LabEventFilter;

const CATEGORIES: Category[] = [
  "All",
  "Workshop",
  "Bootcamp",
  "Camp",
  "Competition",
  "School Event",
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const TYPE_COLORS: Record<LabEvent["type"], string> = {
  Workshop: "#2de2ff",
  Bootcamp: "#7c6cff",
  Camp: "#ffb547",
  Competition: "#ff5c7a",
  "School Event": "#35e39b",
};

/** Interactive event timeline with category filtering. */
export function EventTimeline() {
  const [category, setCategory] = useState<Category>("All");
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.75", "end 0.6"],
  });
  const railScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  const visible = useMemo(
    () =>
      [...events]
        .filter((e) => category === "All" || e.type === category)
        .sort((a, b) => a.date.localeCompare(b.date)),
    [category],
  );

  return (
    <div>
      {/* Filters */}
      <div role="tablist" aria-label="Filter events by category" className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => {
          const active = c === category;
          const color = c === "All" ? "#2de2ff" : TYPE_COLORS[c as LabEvent["type"]];
          return (
            <button
              key={c}
              role="tab"
              aria-selected={active}
              onClick={() => setCategory(c)}
              style={active ? { borderColor: `${color}66`, color, backgroundColor: `${color}14` } : undefined}
              className={cn(
                "rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-300",
                !active && "border-border bg-white/[0.03] text-muted hover:border-white/20 hover:text-foreground",
              )}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Timeline */}
      <ol ref={listRef} className="relative mt-12 flex flex-col gap-10 pl-8 sm:pl-10">
        <div aria-hidden className="absolute bottom-3 left-[7px] top-3 w-px bg-white/10" />
        <motion.div
          aria-hidden
          style={{ scaleY: railScale }}
          className="absolute bottom-3 left-[7px] top-3 w-px origin-top bg-gradient-to-b from-primary to-accent"
        />

        {visible.map((event, i) => {
          const color = TYPE_COLORS[event.type];
          return (
            <li key={event.slug} id={event.slug} className="relative scroll-mt-28">
              <span
                aria-hidden
                className="absolute -left-8 top-7 h-[15px] w-[15px] rounded-full border-2 bg-background sm:-left-10"
                style={{ borderColor: color }}
              />
              <motion.article
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.04 }}
                className="glass rounded-2xl p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em]"
                    style={{ color, backgroundColor: `${color}14`, border: `1px solid ${color}40` }}
                  >
                    {event.type}
                  </span>
                  {event.status === "registration-open" && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-success">
                      ● Registration open
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {event.title}
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted">{event.description}</p>

                <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-faint">
                  <div className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" style={{ color }} aria-hidden />
                    <dt className="sr-only">Date</dt>
                    <dd>{formatDate(event.date)}{event.endDate ? ` → ${formatDate(event.endDate)}` : ""}</dd>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4" style={{ color }} aria-hidden />
                    <dt className="sr-only">Duration</dt>
                    <dd>{event.duration}</dd>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Users className="h-4 w-4" style={{ color }} aria-hidden />
                    <dt className="sr-only">Audience</dt>
                    <dd>{event.ageGroup}</dd>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4" style={{ color }} aria-hidden />
                    <dt className="sr-only">Location</dt>
                    <dd>{event.location}</dd>
                  </div>
                </dl>

                {event.highlights.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Highlights">
                    {event.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-lg border border-border bg-white/[0.03] px-3 py-1.5 text-xs text-muted"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                  Seats · {event.seats}
                </p>
              </motion.article>
            </li>
          );
        })}
      </ol>

      {visible.length === 0 && (
        <p className="mt-12 text-center text-muted">No events in this category yet.</p>
      )}

      <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
        Dates are configured placeholders until confirmed (TODO_CONFIG in src/data/events.ts)
      </p>
    </div>
  );
}
