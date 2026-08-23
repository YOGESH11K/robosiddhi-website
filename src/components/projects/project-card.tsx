import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";
import { GlassCard } from "@/components/ui/glass-card";
import { DifficultyBadge } from "@/components/ui/badge";

/** Deterministic pseudo-circuit glyph so every card gets an original visual. */
function CircuitGlyph({ seed }: { seed: number }) {
  const lines = Array.from({ length: 6 }, (_, i) => {
    const y = 14 + ((seed * (i + 3)) % 5) * 9;
    const x2 = 40 + ((seed * (i + 7)) % 80);
    return { y, x2 };
  });
  return (
    <svg viewBox="0 0 160 84" className="h-full w-full" fill="none" aria-hidden>
      <rect x="0" y="0" width="160" height="84" rx="12" className="fill-[#0a1020]" />
      <g stroke="#1c2c4a" strokeWidth="1.5">
        {lines.map((l, i) => (
          <path key={i} d={`M12 ${l.y} H${l.x2} V${Math.min(l.y + 18, 72)}`} strokeLinecap="round" />
        ))}
      </g>
      <circle cx="128" cy="26" r="4" fill="#2de2ff" opacity="0.9" />
      <circle cx="34" cy="62" r="4" fill="#7c6cff" opacity="0.8" />
      <rect x="58" y="30" width="44" height="24" rx="4" fill="#101a30" stroke="#22314f" />
    </svg>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full"
      aria-label={`${project.title} — open build guide`}
    >
      <GlassCard className="flex h-full flex-col overflow-hidden">
        <div className="relative h-32 overflow-hidden border-b border-border">
          <div className="h-full transition-transform duration-500 group-hover:scale-[1.04]">
            <CircuitGlyph seed={project.slug.length + project.title.length} />
          </div>
          <span className="absolute right-3 top-3">
            <DifficultyBadge level={project.difficulty} />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
            {project.technologies.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
              >
                {t}
              </li>
            ))}
          </ul>

          <p className="mt-auto pt-5 font-mono text-[11px] tracking-wide text-faint">
            {project.time} · {project.components.length} components
          </p>
          <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            Open build guide
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </GlassCard>
    </Link>
  );
}
