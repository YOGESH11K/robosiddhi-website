import Link from "next/link";
import { ArrowRight, Clock, Users } from "lucide-react";
import type { Program } from "@/types";
import { GlassCard } from "@/components/ui/glass-card";
import { DifficultyBadge } from "@/components/ui/badge";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Link href={`/programs/${program.slug}`} className="block h-full" aria-label={`${program.title} — view details`}>
      <GlassCard className="flex h-full flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
            {program.category}
          </span>
          <DifficultyBadge level={program.difficulty} />
        </div>

        <h3 className="mt-4 font-display text-xl font-semibold leading-snug tracking-tight">
          {program.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
          {program.summary}
        </p>

        <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-faint">
          <div className="inline-flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-primary" />
            <dt className="sr-only">Audience</dt>
            <dd>{program.audience}</dd>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-accent" />
            <dt className="sr-only">Duration</dt>
            <dd>{program.duration}</dd>
          </div>
        </dl>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies covered">
          {program.technologies.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-primary">
          View program
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </GlassCard>
    </Link>
  );
}
