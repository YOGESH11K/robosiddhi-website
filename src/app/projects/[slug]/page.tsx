import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  FlaskConical,
  ListChecks,
  Target,
  Timer,
  Wrench,
} from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";
import { DifficultyBadge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/code-block";
import { Reveal } from "@/components/ui/reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

/** Stylized breadboard illustration — decorative, with numbered steps beside it. */
function CircuitIllustration({ seed }: { seed: number }) {
  const hue = ["#2de2ff", "#7c6cff", "#ffb547"][seed % 3];
  return (
    <svg viewBox="0 0 320 200" className="w-full" role="img" aria-label="Stylized circuit diagram">
      <rect x="8" y="8" width="304" height="184" rx="14" fill="#0a1020" stroke="#1c2c4a" />
      {/* controller board */}
      <rect x="28" y="60" width="84" height="80" rx="8" fill="#101a30" stroke="#22314f" />
      <text x="70" y="106" textAnchor="middle" fill="#8d97b0" fontSize="11" fontFamily="monospace">CTRL</text>
      {/* breadboard rails */}
      <line x1="150" y1="40" x2="292" y2="40" stroke="#22314f" strokeWidth="2" strokeDasharray="6 6" />
      <line x1="150" y1="164" x2="292" y2="164" stroke="#22314f" strokeWidth="2" strokeDasharray="6 6" />
      {/* component */}
      <rect x="196" y="76" width="52" height="52" rx="8" fill="#131f38" stroke={hue} strokeOpacity="0.5" />
      <circle cx="222" cy="102" r="10" fill={hue} opacity="0.85">
        <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
      </circle>
      {/* wires */}
      <path d="M112 78 H160 V88 H196" stroke="#2de2ff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M112 122 H172 V132 H196" stroke="#ff5c7a" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = project.related
    .map((r) => getProject(r))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <>
      <PageHero
        eyebrow={`Build Guide · ${project.difficulty}`}
        title={project.title}
        description={project.description}
        align="left"
        className="pt-28 sm:pt-36"
      >
        <div className="flex flex-wrap items-center gap-3">
          <DifficultyBadge level={project.difficulty} />
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            <Timer className="h-3.5 w-3.5 text-primary" /> {project.time}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            {project.technologies.join(" · ")}
          </span>
        </div>
        {project.labTemplate && (
          <ButtonLink href="/robotics-lab">
            <Compass className="h-4 w-4" /> Open in Robotics Lab
          </ButtonLink>
        )}
        <ButtonLink href="/projects" variant="secondary">
          <ArrowLeft className="h-4 w-4" /> All Projects
        </ButtonLink>
      </PageHero>

      {/* Objective + components */}
      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_1fr] lg:gap-16 sm:py-20">
        <Reveal>
          <SectionHeading align="left" eyebrow="Objective" title="What you're building & why." />
          <p className="mt-6 flex gap-3 leading-relaxed text-muted">
            <Target className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
            {project.objective}
          </p>
          <h3 className="mt-10 font-display text-xl font-semibold tracking-tight">How it works</h3>
          <ol className="mt-4 flex flex-col gap-3">
            {project.howItWorks.map((step, i) => (
              <li key={i} className="flex items-start gap-3 leading-relaxed text-muted">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border border-accent/30 bg-accent/10 font-mono text-[11px] text-accent">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.08}>
          <SectionHeading align="left" eyebrow="Components" title="What's on the bench." />
          <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {project.components.map((component) => (
              <li key={component} className="glass rounded-lg px-4 py-3 text-sm text-muted">
                {component}
              </li>
            ))}
          </ul>
          <p className="mt-5 inline-flex items-start gap-2 text-xs leading-relaxed text-faint">
            <FlaskConical className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            Educational guide — always build with supervision, correct polarity and appropriate
            power sources. This page does not replace hands-on instruction.
          </p>
        </Reveal>
      </section>

      {/* Circuit */}
      <section className="border-y border-border bg-surface/30 py-16 sm:py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <CircuitIllustration seed={project.slug.length} />
            <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
              Stylized wiring overview — follow the written steps for your actual build
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading align="left" eyebrow="Circuit" title="Wire it step by step." />
            <ol className="mt-6 flex flex-col gap-3">
              {project.circuit.map((step, i) => (
                <li key={i} className="glass flex items-start gap-3 rounded-xl px-5 py-3.5 leading-relaxed text-muted">
                  <ListChecks className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Code */}
      <section className="container-x py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Code"
            title="The full sketch."
            description="Type it yourself rather than copy-pasting — that's how the syntax sticks."
          />
        </Reveal>
        <Reveal delay={0.08} className="mt-8 max-w-3xl">
          <CodeBlock code={project.code} lang={project.codeLang} />
        </Reveal>
      </section>

      {/* Build steps */}
      <section className="border-y border-border bg-surface/30 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Build Steps" title="From parts to working robot." />
          <ol className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
            {project.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.04} as="li">
                <GlassCard className="flex h-full gap-4 p-6">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-primary/35 bg-primary/10 font-mono text-sm text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.detail}</p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Debugging + challenge */}
      <section className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading align="left" eyebrow="Debugging" title="When it doesn't work." />
          <div className="mt-6 flex flex-col gap-3">
            {project.commonErrors.map((err) => (
              <GlassCard key={err.error} hover={false} className="p-5">
                <p className="inline-flex items-center gap-2 font-mono text-sm text-danger">
                  ✕ {err.error}
                </p>
                <p className="mt-2 inline-flex items-start gap-2 text-sm leading-relaxed text-muted">
                  <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                  <span><span className="text-success">Fix:</span> {err.fix}</span>
                </p>
              </GlassCard>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <SectionHeading align="left" eyebrow="Level Up" title="Take it further." />
          <GlassCard hover={false} className="mt-6 border-highlight/25 bg-highlight/[0.05] p-7">
            <p className="text-lg leading-relaxed text-highlight/90">{project.challenge}</p>
            <ButtonLink href="/robotics-lab" variant="secondary" size="sm" className="mt-5">
              Prototype in the Lab <Compass className="h-4 w-4" />
            </ButtonLink>
          </GlassCard>
        </Reveal>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-border bg-surface/30 py-16 sm:py-20">
          <div className="container-x">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.26em] text-faint">
              Related builds
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <Link key={r.slug} href={`/projects/${r.slug}`} className="block">
                  <GlassCard className="group p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                        {r.title}
                      </h3>
                      <DifficultyBadge level={r.difficulty} />
                    </div>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary">
                      Open guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
