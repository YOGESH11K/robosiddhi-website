import type { Metadata } from "next";
import {
  ArrowRight,
  Blocks,
  CircuitBoard,
  FlaskConical,
  GraduationCap,
  MousePointer2,
  Play,
  ShieldCheck,
  Sparkles,
  Wifi,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Robotics Lab",
  description:
    "Drag components onto a virtual breadboard, program with blocks or real Arduino C++, and simulate circuits safely — the RoboSiddhi Robotics Lab runs in your browser and on our lab benches.",
  alternates: { canonical: "/robotics-lab" },
};

const features = [
  {
    icon: MousePointer2,
    title: "Drag & drop circuits",
    text: "Place LEDs, sensors, motors and boards on a live breadboard. Wiring snaps to real pins with real colour codes.",
  },
  {
    icon: Blocks,
    title: "Block → code bridge",
    text: "Snap blocks together and watch them compile to Arduino C++. When you're ready, switch to writing the code yourself.",
  },
  {
    icon: FlaskConical,
    title: "Safe simulation",
    text: "Run your circuit before you wire it. Test loops, read sensor values and debug logic — no burnt LEDs, ever.",
  },
  {
    icon: CircuitBoard,
    title: "Real kit mapping",
    text: "Every virtual component matches the hardware in RoboSiddhi kits, so what you simulate is exactly what you unbox.",
  },
];

const steps = [
  {
    n: "01",
    title: "Pick a mission",
    text: "Start from guided missions — blink an LED, read a distance, drive a bot — matched to your level.",
  },
  {
    n: "02",
    title: "Build & wire",
    text: "Drag parts onto the breadboard and connect them. The simulator checks your wiring like a mentor would.",
  },
  {
    n: "03",
    title: "Program it",
    text: "Use blocks or write C++. Hit run and watch current flow, values update and outputs respond in real time.",
  },
  {
    n: "04",
    title: "Rebuild for real",
    text: "Simulated it? Now build it on a bench at the lab or with your home kit — same parts, same code, working robot.",
  },
];

const audiences = [
  {
    icon: Sparkles,
    title: "First-time builders",
    text: "No kit, no risk — explore electronics and code from any browser before touching a screwdriver.",
  },
  {
    icon: GraduationCap,
    title: "Enrolled students",
    text: "Practice at home between sessions. Your missions mirror exactly what's happening in class.",
  },
  {
    icon: ShieldCheck,
    title: "Schools",
    text: "A zero-setup computer-lab activity that prepares students for physical ATL builds.",
  },
];

export default function RoboticsLabPage() {
  return (
    <>
      <PageHero
        eyebrow="Learning Simulation"
        title={
          <>
            A LABORATORY
            <br />
            IN YOUR <span className="text-gradient">BROWSER.</span>
          </>
        }
        description="The RoboSiddhi Robotics Lab lets you drag components onto a virtual breadboard, program them with blocks or real C++, and simulate circuits safely — then rebuild everything for real on our lab benches."
      >
        <ButtonLink href="/contact?type=lab-visit" size="lg">
          Get Lab Access <Play className="h-4 w-4" aria-hidden />
        </ButtonLink>
        <ButtonLink href="/programs" variant="secondary" size="lg">
          Explore Programs
        </ButtonLink>
      </PageHero>

      {/* Features */}
      <section className="container-x py-20 sm:py-24">
        <SectionHeading
          eyebrow="Inside The Lab"
          title="Everything a workbench teaches. None of the burnt fingers."
          description="Built around the same kits we teach with — the bridge between curiosity and a soldering iron."
        />
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <GlassCard className="h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.text}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-surface/30 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="How It Works"
            title="From screen to solder in four steps."
          />
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <StaggerItem key={step.n}>
                <GlassCard className="relative h-full overflow-hidden p-7">
                  <span
                    className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl font-bold text-white/[0.04]"
                    aria-hidden
                  >
                    {step.n}
                  </span>
                  <p className="font-mono text-xs text-primary">{step.n}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Simulator strip */}
          <Reveal className="mt-14">
            <div className="circuit-bg relative overflow-hidden rounded-2xl border border-border p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <Badge className="w-fit border-success/30 bg-success/10 text-success">
                    <Wifi className="h-3 w-3" aria-hidden />
                    Simulator preview
                  </Badge>
                  <p className="max-w-xl leading-relaxed text-muted">
                    Missions open alongside your program — free preview missions are available
                    during every lab visit, and enrolled students keep practising at home.
                  </p>
                </div>
                <ButtonLink href="/contact?type=lab-visit">
                  Try It At The Lab <ArrowRight className="h-4 w-4" aria-hidden />
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who it's for */}
      <section className="container-x py-20 sm:py-24">
        <SectionHeading
          eyebrow="Who It's For"
          title="One lab, three ways to use it."
        />
        <Stagger className="mt-14 grid gap-4 md:grid-cols-3">
          {audiences.map((audience) => (
            <StaggerItem key={audience.title}>
              <GlassCard className="flex h-full flex-col p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                  <audience.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                  {audience.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {audience.text}
                </p>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* CTA */}
      <section className="container-x pb-24 text-center sm:pb-28">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Make something blink{" "}
            <span className="text-gradient">in the next five minutes.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Book a free visit and we&apos;ll walk you through your first simulated build.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact?type=lab-visit" size="lg">
              Book A Free Visit <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/shop" variant="secondary" size="lg">
              See The Kits We Teach With
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
