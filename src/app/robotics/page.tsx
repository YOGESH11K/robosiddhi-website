import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Atom,
  Bot,
  BrainCircuit,
  Cpu,
  Gauge,
  Lightbulb,
  Radar,
  Route,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { ObjectStage } from "@/components/three/object-stage";
import { ComponentExplorer } from "@/components/tech/component-explorer";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Robotics",
  description:
    "Learn robotics the hands-on way at RoboSiddhi — components, sensors, motors, microcontrollers and automation explained by building real robots in Jaipur.",
  alternates: { canonical: "/robotics" },
};

const areas = [
  {
    icon: Wrench,
    title: "Mechanics & Chassis",
    text: "Frames, drivetrains, gears and linkages — how physical structure becomes motion.",
  },
  {
    icon: Radar,
    title: "Sensors & Perception",
    text: "Ultrasonic, IR, light and temperature sensing — giving machines awareness of the world.",
  },
  {
    icon: Cpu,
    title: "Control & Code",
    text: "Microcontrollers running your logic — decisions made thousands of times per second.",
  },
  {
    icon: Gauge,
    title: "Automation",
    text: "From remote control to full autonomy — line following, obstacle avoidance and beyond.",
  },
];

const roboticsProjects = projects.filter((p) =>
  p.technologies.some((t) => /arduino|robotics/i.test(t)),
).slice(0, 3);

function ArmFallback() {
  return (
    <div className="grid h-full place-items-center" role="img" aria-label="Illustration of a robotic arm">
      <svg viewBox="0 0 240 240" fill="none" className="h-full max-h-[380px] w-auto">
        <circle cx="120" cy="120" r="110" stroke="oklch(0.75 0.14 210/0.14)" strokeDasharray="4 8" />
        <rect x="86" y="196" width="68" height="18" rx="6" fill="#101a30" stroke="oklch(1 0 0/0.12)" />
        <line x1="120" y1="196" x2="96" y2="120" stroke="#22314f" strokeWidth="14" strokeLinecap="round" />
        <line x1="96" y1="120" x2="150" y2="70" stroke="#16233d" strokeWidth="12" strokeLinecap="round" />
        <circle cx="120" cy="196" r="12" fill="#22314f" />
        <circle cx="96" cy="120" r="10" fill="#2de2ff" opacity="0.9" />
        <circle cx="150" cy="70" r="8" fill="#7c6cff" opacity="0.9" />
        <path d="M150 70 l16 -8 m-16 8 l14 10" stroke="#8fa3c8" strokeWidth="5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function RoboticsPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology · Robotics"
        title={
          <>
            MACHINES THAT SENSE,
            <br />
            THINK &amp; <span className="text-gradient">MOVE.</span>
          </>
        }
        description="Robotics is where physics, electronics and code meet. At RoboSiddhi you don't read about it — you bolt it together, wire it up and watch it come alive."
      >
        <ButtonLink href="/programs">
          Robotics Programs <ArrowRight className="h-4 w-4" />
        </ButtonLink>
        <ButtonLink href="/robotics-lab" variant="secondary">
          Open Robotics Lab
        </ButtonLink>
      </PageHero>

      {/* Hero object */}
      <section className="container-x grid items-center gap-10 pb-20 pt-4 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="What is Robotics?"
            title="A robot is a loop."
            description="Sense → think → act. Every robot ever built follows this loop: sensors gather information, a controller makes decisions, and motors and LEDs act on them. Master the loop and you can build anything from a line follower to a robotic arm."
          />
          <ul className="mt-8 flex flex-col gap-3">
            {[
              "SENSE — sensors measure distance, light, touch and motion",
              "THINK — your code turns measurements into decisions",
              "ACT — motors, servos and lights change the world",
            ].map((step) => (
              <li key={step} className="glass rounded-xl px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                {step}
              </li>
            ))}
          </ul>
        </Reveal>
        <ObjectStage
          variant="arm"
          fallback={<ArmFallback />}
          className="mx-auto aspect-square w-full max-w-[480px]"
        />
      </section>

      {/* Learning areas */}
      <section className="border-y border-border bg-surface/30 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Learning Areas"
            title="Four pillars of every robot."
          />
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <StaggerItem key={area.title}>
                <GlassCard className="h-full p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                    <area.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{area.text}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Component explorer */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="Component Lab"
          title="Meet the parts."
          description="Tap any component to see what it does and where you'll use it. These five appear in almost every project you'll build."
        />
        <div className="mt-14">
          <ComponentExplorer />
        </div>
      </section>

      {/* Projects strip */}
      <section className="border-t border-border bg-surface/30 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Build These"
            title="Classic robots, real skills."
          />
          <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
            {roboticsProjects.map((project) => (
              <StaggerItem key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <GlassCard className="group h-full p-6">
                    <Bot className="h-6 w-6 text-primary" aria-hidden />
                    <h3 className="mt-4 font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted">{project.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary">
                      Open build guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </GlassCard>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Journey + CTA */}
      <section className="container-x py-20 text-center sm:py-24">
        <Reveal>
          <Route className="mx-auto h-8 w-8 text-accent" aria-hidden />
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Your robotics journey starts with one <span className="text-gradient">LED</span>.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Every RoboSiddhi robotics path ends with a robot you designed, built and coded yourself.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/programs" size="lg">
              Find Your Program <Lightbulb className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/ai-iot" variant="secondary" size="lg">
              Next: AI &amp; IoT <BrainCircuit className="h-4 w-4" />
            </ButtonLink>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
            <Atom className="h-3.5 w-3.5 text-primary" /> Part of the RoboSiddhi technology universe
          </p>
        </Reveal>
      </section>
    </>
  );
}
