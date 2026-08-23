import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Laptop,
  MapPin,
  Rocket,
  Users,
} from "lucide-react";
import { getProgram, programCategories, programs } from "@/data/programs";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";
import { DifficultyBadge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/tabs";
import { Reveal } from "@/components/ui/reveal";
import { ProgressPath } from "@/components/programs/progress-path";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return { title: "Program not found" };
  return {
    title: program.title,
    description: program.summary,
    alternates: { canonical: `/programs/${program.slug}` },
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const related = programs
    .filter((p) => p.slug !== program.slug && p.category === program.category)
    .slice(0, 2);

  const facts = [
    { icon: Users, label: "Who it's for", value: program.audience },
    { icon: CalendarClock, label: "Duration", value: program.duration },
    { icon: MapPin, label: "Format", value: program.format },
    { icon: GraduationCap, label: "Level", value: program.difficulty },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.title,
    description: program.summary,
    educationalLevel: program.difficulty,
    provider: { "@type": "Organization", name: "RoboSiddhi Jaipur" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <PageHero
        eyebrow={program.category}
        title={program.title}
        description={program.summary}
        align="left"
        className="pt-28 sm:pt-36"
      >
        <div className="flex flex-wrap items-center gap-3">
          <DifficultyBadge level={program.difficulty} />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
            {program.technologies.join(" · ")}
          </span>
        </div>
        <ButtonLink href="/contact">
          Register Interest <ArrowRight className="h-4 w-4" />
        </ButtonLink>
        <ButtonLink href="/programs" variant="secondary">
          <ArrowLeft className="h-4 w-4" /> All Programs
        </ButtonLink>
      </PageHero>

      {/* Quick facts */}
      <section className="container-x py-14 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 0.05}>
              <GlassCard className="flex h-full items-start gap-4 p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <fact.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug">{fact.value}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Overview + outcomes */}
      <section className="container-x grid gap-12 pb-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <SectionHeading align="left" eyebrow="Overview" title="What this program is." />
          <p className="mt-6 leading-relaxed text-muted">{program.summary}</p>
          <p className="mt-4 leading-relaxed text-muted">
            <span className="text-foreground">Prerequisites:</span> {program.prerequisites}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <SectionHeading align="left" eyebrow="Outcomes" title="What you'll walk away with." />
          <ul className="mt-6 flex flex-col gap-3">
            {program.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3 leading-relaxed text-muted">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-success" />
                {outcome}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Curriculum — progress path */}
      <section className="border-y border-border bg-surface/30 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Curriculum"
            title="The learning path."
            description="Modules build on each other — follow the circuit."
          />
          <div className="mt-16">
            <ProgressPath modules={program.curriculum} />
          </div>
        </div>
      </section>

      {/* Projects + technology */}
      <section className="container-x grid gap-12 py-20 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading align="left" eyebrow="Projects Built" title="Things you'll have built." />
          <ul className="mt-6 flex flex-col gap-3">
            {program.projectsBuilt.map((project) => (
              <li key={project} className="glass flex items-center gap-3 rounded-xl px-5 py-3.5">
                <Rocket className="h-4 w-4 shrink-0 text-highlight" />
                <span className="text-sm font-medium">{project}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.08}>
          <SectionHeading align="left" eyebrow="Technology Stack" title="Tools & tech you'll use." />
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {program.technologies.map((tech) => (
              <li
                key={tech}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted"
              >
                <Cpu className="h-3.5 w-3.5 text-primary" />
                {tech}
              </li>
            ))}
          </ul>
          <p className="mt-6 inline-flex items-start gap-2 text-sm leading-relaxed text-faint">
            <Laptop className="mt-0.5 h-4 w-4 shrink-0" />
            Kits are provided during sessions; take-home options are discussed at registration.
          </p>
        </Reveal>
      </section>

      {/* FAQ */}
      {program.faqs.length > 0 && (
        <section className="border-t border-border py-20 sm:py-24">
          <div className="container-x max-w-3xl">
            <SectionHeading eyebrow="FAQ" title={`${program.title} questions.`} />
            <Accordion items={program.faqs} className="mt-12" />
          </div>
        </section>
      )}

      {/* Related + CTA */}
      <section className="border-t border-border bg-surface/30 py-20">
        <div className="container-x">
          {related.length > 0 && (
            <>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.26em] text-faint">
                More in {program.category}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {related.map((r) => (
                  <Link key={r.slug} href={`/programs/${r.slug}`} className="block">
                    <GlassCard className="group p-6">
                      <h3 className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                        {r.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-muted">{r.summary}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary">
                        View program <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </GlassCard>
                  </Link>
                ))}
              </div>
            </>
          )}

          <Reveal className="mt-16 text-center">
            <BookOpen className="mx-auto h-8 w-8 text-primary" aria-hidden />
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to start {program.title}?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted">
              Seats are limited per batch. Tell us who&apos;s joining and we&apos;ll schedule your path.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact" size="lg">
                Register Interest <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/robotics-lab" variant="secondary" size="lg">
                Try the Lab First
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
