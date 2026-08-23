import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TechIcon } from "@/components/icons/tech-icon";
import { PhilosophyPanels } from "@/components/about/philosophy-panels";
import { JourneyTimeline } from "@/components/about/timeline";
import { values, teachingApproach } from "@/data/about";
import { technologies } from "@/data/technologies";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: `Who we are, how we teach and where we're going — meet ${siteConfig.fullName}, a robotics, AI, IoT and STEM innovation lab built around one idea: students learn best by building.`,
  alternates: { canonical: "/about" },
};

const counters = [
  { label: "Students guided", value: siteConfig.stats.students.value, suffix: siteConfig.stats.students.suffix },
  { label: "Projects shipped", value: siteConfig.stats.projects.value, suffix: siteConfig.stats.projects.suffix },
  { label: "Partner schools", value: siteConfig.stats.schools.value, suffix: siteConfig.stats.schools.suffix },
  { label: "Programs offered", value: siteConfig.stats.programs.value, suffix: siteConfig.stats.programs.suffix },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About RoboSiddhi"
        title={
          <>
            WHERE CURIOSITY
            <br />
            BECOMES <span className="text-gradient">CREATION.</span>
          </>
        }
        description={siteConfig.description}
      >
        <ButtonLink href="/programs">
          Explore Programs <ArrowRight className="h-4 w-4" />
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Visit the Lab
        </ButtonLink>
      </PageHero>

      {/* Who we are */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="A lab, not a classroom."
              description="RoboSiddhi is a hands-on innovation lab in Jaipur where students don't just study technology — they take it apart, rebuild it and make it their own. Robotics, AI, IoT, drones, 3D printing and coding all live under one roof, connected by a single method: build first, understand deeper."
            />
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-4">
            {counters.map((c) => (
              <StaggerItem key={c.label}>
                <GlassCard className="p-6 text-center">
                  <AnimatedCounter
                    value={c.value}
                    suffix={c.suffix}
                    className="font-display text-3xl font-bold text-gradient sm:text-4xl"
                  />
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                    {c.label}
                  </p>
                </GlassCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Mission & Vision */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <Reveal>
            <GlassCard className="group h-full p-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary">
                Our Mission
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                Make every student a builder.
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Put real tools — boards, sensors, motors, code — into young hands early,
                and mentor them until curiosity turns into capability and capability into
                confidence.
              </p>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.08}>
            <GlassCard className="h-full p-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.26em] text-accent">
                Our Vision
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                A generation that creates technology.
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                A future where students across Jaipur and beyond grow up as creators of
                robots, devices and intelligent systems — not just consumers of them.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* Learning philosophy — scroll experience */}
      <section aria-label="Our learning philosophy" className="border-y border-border bg-surface/30">
        <PhilosophyPanels />
      </section>

      {/* Technology ecosystem */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="Technology Ecosystem"
          title="One universe of technologies."
          description="Every discipline feeds the others. Sensors power robots, robots generate data, AI makes sense of it — students learn the whole loop."
        />
        <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech) => (
            <StaggerItem key={tech.slug}>
              <Link href="/programs" className="block h-full">
                <GlassCard className="flex h-full flex-col gap-3 p-6">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl border"
                    style={{
                      color: tech.color,
                      borderColor: `${tech.color}44`,
                      backgroundColor: `${tech.color}14`,
                    }}
                  >
                    <TechIcon name={tech.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {tech.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{tech.tagline}</p>
                </GlassCard>
              </Link>
            </StaggerItem>
          ))}
          <StaggerItem>
            <Link href="/programs" className="block h-full">
              <GlassCard className="flex h-full flex-col justify-between gap-3 p-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
                  + Electronics
                </span>
                <p className="font-display text-lg font-semibold tracking-tight text-primary">
                  See all programs →
                </p>
              </GlassCard>
            </Link>
          </StaggerItem>
        </Stagger>
      </section>

      {/* How we teach */}
      <section className="border-y border-border bg-surface/30 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="How We Teach"
            title="The build loop."
            description="A five-step rhythm every RoboSiddhi session follows — designed to make learning irreversible."
          />
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {teachingApproach.map((step) => (
              <StaggerItem key={step.step}>
                <GlassCard className="relative h-full overflow-hidden p-6">
                  <span className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl font-bold text-white/[0.04]">
                    {step.step}
                  </span>
                  <p className="font-mono text-xs text-primary">{step.step}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </GlassCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="container-x py-20 sm:py-28">
        <div className="mb-14">
          <SectionHeading
            align="left"
            eyebrow="Our Journey"
            title="From one workbench to a movement."
            description="Milestones are configured placeholders until verified history is added (see src/data/about.ts)."
          />
        </div>
        <JourneyTimeline />
      </section>

      {/* Values */}
      <section className="border-y border-border bg-surface/30 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Believe"
            title="Values wired into every session."
          />
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <GlassCard className="h-full p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                    <TechIcon name={value.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </GlassCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 text-center sm:py-24">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Come see what you can <span className="text-gradient">build</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Book a free lab visit or start with the interactive Robotics Lab right now.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/robotics-lab" size="lg">
              Open Robotics Lab <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Contact Us
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
