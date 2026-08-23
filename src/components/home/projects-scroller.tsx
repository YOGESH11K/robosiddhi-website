import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { DifficultyBadge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

const scrollerProjects: Project[] = [
  ...projects.filter((p) => p.featured),
  ...projects.filter((p) => !p.featured),
].slice(0, 5);

export function ProjectsScroller() {
  return (
    <section aria-label="Featured student projects" className="mt-28 sm:mt-40">
      <div className="container-x">
        <SectionHeading
          align="left"
          eyebrow="Project Library"
          title={
            <>
              REAL PROJECTS.{" "}
              <span className="text-gradient">REAL ENGINEERING.</span>
            </>
          }
          description="Every project ships with circuits, full code, debugging guides and a challenge to make it yours."
        />
      </div>

      <div className="relative mt-12">
        <div
          role="region"
          aria-label="Featured projects carousel — scroll horizontally"
          tabIndex={0}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] focus-visible:outline-primary md:px-8 xl:px-[calc((100vw-76rem)/2+2rem)] [&::-webkit-scrollbar]:hidden"
        >
          {scrollerProjects.map((project, i) => (
            <article
              key={project.slug}
              className="glass card-hover group flex w-[85%] shrink-0 snap-start flex-col rounded-2xl p-6 sm:w-[46%] lg:w-[31%]"
            >
              <div className="flex items-center justify-between gap-3">
                <DifficultyBadge level={project.difficulty} />
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-faint">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {project.time}
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
                <span className="mr-2 font-mono text-sm text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {project.title}
              </h3>

              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-faint"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <Link
                href={`/projects/${project.slug}`}
                className="glow-line mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-primary"
                aria-label={`Open project: ${project.title}`}
              >
                Open build guide
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </article>
          ))}

          {/* end spacer card */}
          <div
            aria-hidden
            className="flex w-[60%] shrink-0 snap-start items-center justify-center rounded-2xl border border-dashed border-border sm:w-[30%]"
          >
            <Link
              href="/projects"
              className="group flex flex-col items-center gap-3 p-8 text-center text-muted transition-colors hover:text-primary"
              tabIndex={-1}
            >
              <span className="grid h-12 w-12 place-items-center rounded-full border border-border transition-colors group-hover:border-primary/50">
                <ArrowUpRight className="h-5 w-5" />
              </span>
              <span className="font-medium">View all projects</span>
            </Link>
          </div>
        </div>

        <p className="container-x mt-2 hidden font-mono text-[11px] tracking-wide text-faint md:block" aria-hidden>
          ← DRAG / SCROLL →
        </p>
      </div>
    </section>
  );
}
