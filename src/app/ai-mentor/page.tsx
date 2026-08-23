import type { Metadata } from "next";
import {
  ArrowRight,
  Bug,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "RoboMentor — AI Lab Assistant",
  description:
    "RoboMentor is RoboSiddhi's 24×7 AI lab assistant — it knows every kit we teach with, explains concepts at your level and helps you debug when mentors are offline.",
  alternates: { canonical: "/ai-mentor" },
};

const capabilities = [
  {
    icon: Lightbulb,
    title: "Explains concepts",
    text: "PWM, pull-up resistors, serial monitors — explained at your level, from age-8 simple to exam-ready precise.",
  },
  {
    icon: Bug,
    title: "Debugs with you",
    text: "Paste your code or describe the misbehaving circuit. RoboMentor asks the questions a mentor would and helps you find the bug yourself.",
  },
  {
    icon: Sparkles,
    title: "Suggests projects",
    text: "Tell it the parts you own and it proposes builds you can actually finish — then breaks them into weekend-sized steps.",
  },
  {
    icon: GraduationCap,
    title: "Preps you for demos",
    text: "Quizzing before competitions, rehearsing viva questions, polishing your demo-day explanation — it's your practice audience.",
  },
];

const prompts = [
  "Explain PWM like I'm 12",
  "Project idea for a smart garden",
  "Why is my servo jittering?",
  "How do I read two sensors at once?",
];

const guardrails = [
  {
    title: "Grounded in our curriculum",
    text: "Answers stay aligned to what you're learning in your program — same kits, same terminology, same build standards.",
  },
  {
    title: "Age-appropriate by default",
    text: "It knows whether it's talking to a nine-year-old or a class-twelve student and adjusts depth, tone and examples.",
  },
  {
    title: "Mentors in the loop",
    text: "Stuck beyond the AI? Every conversation can be picked up by a human mentor during lab hours — nothing gets lost.",
  },
];

export default function AiMentorPage() {
  return (
    <>
      <PageHero
        eyebrow="Your 24×7 Lab Assistant"
        title={
          <>
            STUCK ON A CIRCUIT?
            <br />
            ASK <span className="text-gradient">ROBOMENTOR.</span>
          </>
        }
        description="RoboMentor knows every kit we teach with, explains concepts at your level and never gets tired of 'why'. It's the mentor between mentors."
      >
        <ButtonLink href="/contact?type=program" size="lg">
          Get Access With A Program <MessageCircle className="h-4 w-4" aria-hidden />
        </ButtonLink>
        <ButtonLink href="/programs" variant="secondary" size="lg">
          Explore Programs
        </ButtonLink>
      </PageHero>

      {/* Capabilities */}
      <section className="container-x py-20 sm:py-24">
        <SectionHeading
          eyebrow="What It Does"
          title="Four ways RoboMentor keeps you building."
        />
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <StaggerItem key={capability.title}>
              <GlassCard className="h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                  <capability.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{capability.text}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Prompt chips */}
        <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
            Try asking
          </span>
          {prompts.map((prompt) => (
            <span
              key={prompt}
              className="cursor-default rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-xs text-muted transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Sparkles className="mr-1 inline h-3 w-3 text-highlight" aria-hidden />
              {prompt}
            </span>
          ))}
        </Reveal>
      </section>

      {/* Guardrails */}
      <section className="border-y border-border bg-surface/30 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Built For Young Builders"
            title="An AI you can hand your kid's homework to."
            description="Generic chatbots guess. RoboMentor is tuned to our labs — so the advice works with the exact hardware on your bench."
          />
          <Stagger className="mt-14 grid gap-4 md:grid-cols-3">
            {guardrails.map((guardrail) => (
              <StaggerItem key={guardrail.title}>
                <GlassCard className="h-full p-7">
                  <ShieldCheck className="h-6 w-6 text-success" aria-hidden />
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                    {guardrail.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{guardrail.text}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Access */}
      <section className="container-x py-20 sm:py-24">
        <Reveal>
          <div className="circuit-bg relative overflow-hidden rounded-3xl border border-border bg-elevated/60 p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" aria-hidden />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <Badge className="border-highlight/30 bg-highlight/10 text-highlight">
                  <Timer className="h-3 w-3" aria-hidden />
                  Included with every program
                </Badge>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  ENROL ONCE.{" "}
                  <span className="text-gradient">MENTOR FOREVER.</span>
                </h2>
                <p className="mt-4 max-w-lg leading-relaxed text-muted">
                  RoboMentor comes bundled with every RoboSiddhi program — at the lab, at
                  home, at 11pm before your competition. Alumni keep their access too.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/programs">
                    Find Your Program <ArrowRight className="h-4 w-4" aria-hidden />
                  </ButtonLink>
                  <ButtonLink href="/contact?type=general" variant="secondary">
                    Ask Us Anything
                  </ButtonLink>
                </div>
              </div>

              <ul className="flex flex-col gap-3">
                {[
                  { k: "Response style", v: "Guided hints first, full answers second" },
                  { k: "Languages", v: "English & Hindi" },
                  { k: "Availability", v: "24×7, on any device" },
                  { k: "Escalation", v: "Human mentors during lab hours" },
                ].map((row) => (
                  <li key={row.k} className="glass flex items-start justify-between gap-4 rounded-xl px-5 py-4">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                      {row.k}
                    </span>
                    <span className="text-right text-sm font-medium">{row.v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
