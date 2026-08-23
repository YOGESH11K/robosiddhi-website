import Link from "next/link";
import { ArrowRight, Clock, Users } from "lucide-react";
import { CircleCheckBig } from "lucide-react";
import { programs } from "@/data/programs";
import { DifficultyBadge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

const featured = programs.filter((p) => p.featured).slice(0, 4);

export function FeaturedPrograms() {
  return (
    <section
      aria-label="Featured programs"
      className="container-x mt-28 sm:mt-40"
    >
      <SectionHeading
        align="left"
        eyebrow="Featured Programs"
        title={
          <>
            PICK YOUR PATH.
            <span className="text-gradient"> START BUILDING.</span>
          </>
        }
        description="Structured, mentor-led programs where you finish with working machines — not just certificates."
      />

      <ul className="mt-12 grid gap-5 md:grid-cols-2">
        {featured.map((program) => (
          <li key={program.slug}>
            <article className="glass-strong card-hover group flex h-full flex-col rounded-2xl p-7 sm:p-8">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-muted">
                <DifficultyBadge level={program.difficulty} />
                <span className="inline-flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-faint" aria-hidden />
                  {program.audience}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-faint" aria-hidden />
                  {program.duration}
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
                {program.title}
              </h3>

              <p className="mt-3 leading-relaxed text-muted">{program.summary}</p>

              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies covered">
                {program.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-faint"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-border pt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-highlight">
                  You will be able to
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {program.outcomes.slice(0, 3).map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2.5 text-sm text-muted">
                      <CircleCheckBig
                        className="mt-0.5 h-4 w-4 shrink-0 text-success"
                        aria-hidden
                      />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/programs/${program.slug}`}
                className="mt-auto inline-flex items-center gap-2 pt-6 font-medium text-primary transition-colors hover:text-accent"
                aria-label={`View the ${program.title} program`}
              >
                View Program
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex justify-center">
        <Link
          href="/programs"
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-6 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
        >
          Browse all programs
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
