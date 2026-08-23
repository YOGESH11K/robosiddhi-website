import type { Metadata } from "next";
import {
  ArrowRight,
  Compass,
  FlaskConical,
  Hammer,
  Lightbulb,
  Rocket,
  Trophy,
  Wand2,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "For Students",
  description:
    "Learn, build, experiment, create — start your robotics journey at RoboSiddhi with hands-on programs, an interactive lab and projects you design yourself.",
  alternates: { canonical: "/students" },
};

const journey = [
  {
    icon: Lightbulb,
    title: "Learn",
    text: "Short concept bursts — how a sensor works, why code loops, what a motor driver does. Never more than you need for the next build.",
  },
  {
    icon: Hammer,
    title: "Build",
    text: "Wire it, mount it, print it. Real parts on real benches with mentors who let you try first.",
  },
  {
    icon: FlaskConical,
    title: "Experiment",
    text: "Change variables and watch what happens. Wrong turns are encouraged — that's where intuition comes from.",
  },
  {
    icon: Wand2,
    title: "Create",
    text: "Remix the project into your own invention and present it at demo day. Your name goes on it.",
  },
];

const perks = [
  {
    icon: Compass,
    title: "Interactive Robotics Lab",
    text: "Build virtual circuits and generate real code in your browser — free to use.",
    href: "/robotics-lab",
    cta: "Open the Lab",
  },
  {
    icon: Trophy,
    title: "Competitions & Fairs",
    text: "Represent RoboSiddhi at competitions and show your work at innovation fairs.",
    href: "/events",
    cta: "See Events",
  },
  {
    icon: Rocket,
    title: "Certificates That Verify",
    text: "Finish a program, earn a certificate with a public verification ID.",
    href: "/certificates",
    cta: "How Verification Works",
  },
];

export default function StudentsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Students"
        title={
          <>
            STOP WATCHING VIDEOS.
            <br />
            START <span className="text-gradient">BUILDING ROBOTS.</span>
          </>
        }
        description="This is your launchpad. Programs that fit your age and level, a browser lab to practice in, projects that become yours — and a community of builders who show their work."
      >
        <ButtonLink href="/programs">
          Find Your Program <ArrowRight className="h-4 w-4" />
        </ButtonLink>
        <ButtonLink href="/robotics-lab" variant="secondary">
          Try the Lab Free
        </ButtonLink>
      </PageHero>

      {/* Journey */}
      <section className="container-x py-20 sm:py-24">
        <SectionHeading
          eyebrow="Your Journey"
          title="Learn. Build. Experiment. Create."
        />
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((stage, i) => (
            <StaggerItem key={stage.title}>
              <GlassCard className="relative h-full p-7">
                <span
                  className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl font-bold text-white/[0.04]"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <stage.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{stage.text}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Perks */}
      <section className="border-y border-border bg-surface/30 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why RoboSiddhi"
            title="Everything here is built for you."
          />
          <Stagger className="mt-14 grid gap-4 md:grid-cols-3">
            {perks.map((perk) => (
              <StaggerItem key={perk.title}>
                <GlassCard className="group flex h-full flex-col p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                    <perk.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                    {perk.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{perk.text}</p>
                  <a
                    href={perk.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:brightness-125"
                  >
                    {perk.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                </GlassCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-x py-20 text-center sm:py-24">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            YOUR FIRST PROJECT IS{" "}
            <span className="text-gradient">ONE CLICK AWAY.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Open the Robotics Lab and make something blink in the next five minutes.
          </p>
          <ButtonLink href="/robotics-lab" size="lg" className="mt-9">
            Start Your Project <Rocket className="h-4 w-4" />
          </ButtonLink>
        </Reveal>
      </section>
    </>
  );
}
