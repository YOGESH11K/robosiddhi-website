import type { Metadata } from "next";
import {
  ArrowRight,
  Battery,
  Compass,
  Feather,
  Gauge,
  RadioTower,
  ShieldAlert,
  Wind,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { ObjectStage } from "@/components/three/object-stage";

export const metadata: Metadata = {
  title: "Drones",
  description:
    "Drone technology education at RoboSiddhi — aerodynamics concepts, flight controllers, sensors, telemetry and programming. Engineering that takes flight.",
  alternates: { canonical: "/drones" },
};

const topics = [
  {
    icon: Wind,
    title: "Aerodynamics Concepts",
    text: "Thrust vs weight, torque reaction and why quadcopters need pairs of counter-rotating props — the physics of staying airborne.",
  },
  {
    icon: Compass,
    title: "Flight Controllers",
    text: "The onboard brain: gyroscopes, accelerometers and firmware constantly balancing thousands of corrections per second.",
  },
  {
    icon: Battery,
    title: "Power & Endurance",
    text: "Battery chemistry, thrust-to-weight budgets and why every extra gram costs flight time.",
  },
  {
    icon: RadioTower,
    title: "Radio & Telemetry",
    text: "Control links, signal fail-safes and live data streams back to the ground station.",
  },
  {
    icon: Gauge,
    title: "Sensors & Stabilization",
    text: "How IMU fusion keeps a drone level in gusts — a beautiful applied lesson in feedback control.",
  },
  {
    icon: Feather,
    title: "Design & Build",
    text: "Frames, motor mounting and 3D-printed parts — students assemble and repair their own aircraft.",
  },
];

function DroneFallback() {
  return (
    <div className="grid h-full place-items-center" role="img" aria-label="Illustration of a quadcopter drone">
      <svg viewBox="0 0 240 240" fill="none" className="h-full max-h-[380px] w-auto animate-float">
        <circle cx="120" cy="120" r="104" stroke="oklch(0.75 0.14 210/0.14)" strokeDasharray="4 8" />
        <rect x="88" y="102" width="64" height="36" rx="10" fill="#101a30" stroke="oklch(1 0 0/0.12)" strokeWidth="1.5" />
        <circle cx="120" cy="120" r="7" fill="#2de2ff">
          <animate attributeName="opacity" values="1;0.4;1" dur="2.4s" repeatCount="indefinite" />
        </circle>
        {[0, 90, 180, 270].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x = 120 + Math.cos(rad) * 62;
          const y = 120 + Math.sin(rad) * 62;
          return (
            <g key={deg}>
              <line x1={120 + Math.cos(rad) * 34} y1={120 + Math.sin(rad) * 34} x2={x} y2={y} stroke="#22314f" strokeWidth="7" strokeLinecap="round" />
              <circle cx={x} cy={y} r="17" stroke="#2de2ff" strokeOpacity="0.5" strokeWidth="2" fill="none" />
              <ellipse cx={x} cy={y} rx="13" ry="3" fill="#8fa3c8" opacity="0.5" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function DronesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology · Drones"
        title={
          <>
            ENGINEERING THAT
            <br />
            TAKES <span className="text-gradient">FLIGHT.</span>
          </>
        }
        description="Drones are the most exciting systems-thinking classroom there is: physics, electronics, radio and code fused into one flying machine. Our drone education covers technology, design, sensors and STEM concepts — always safely, on the ground first."
      >
        <ButtonLink href="/programs/drone-engineering-bootcamp">
          Drone Bootcamp <ArrowRight className="h-4 w-4" />
        </ButtonLink>
      </PageHero>

      {/* Hero object */}
      <section className="container-x grid items-center gap-10 pb-20 pt-4 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Why Drones?"
            title="Four motors, one masterclass."
            description="To make four spinning blades hover in place, you must understand forces, control loops, power management and radio links — all at once. That's why drone projects create such fast, deep learners."
          />
        </Reveal>
        <ObjectStage
          variant="drone"
          fallback={<DroneFallback />}
          className="mx-auto aspect-square w-full max-w-[480px]"
        />
      </section>

      {/* Topics */}
      <section className="border-y border-border bg-surface/30 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="What You'll Study"
            title="Flight science, minus the risk."
            description="Educational topics only — assembly, principles and simulation come before any propeller ever spins."
          />
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <StaggerItem key={topic.title}>
                <GlassCard className="h-full p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                    <topic.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{topic.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{topic.text}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Safety note */}
      <section className="container-x py-20 sm:py-24">
        <Reveal>
          <GlassCard hover={false} className="flex flex-col items-start gap-5 border-highlight/25 bg-highlight/[0.05] p-8 sm:flex-row sm:items-center sm:p-10">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-highlight/40 bg-highlight/15 text-highlight">
              <ShieldAlert className="h-7 w-7" />
            </span>
            <div>
              <h2 className="font-display text-xl font-semibold tracking-tight text-highlight">
                Safety is the syllabus.
              </h2>
              <p className="mt-2 max-w-3xl leading-relaxed text-muted">
                RoboSiddhi drone education focuses on technology, design, sensors, programming
                and aerodynamics concepts. Flight practice happens only in controlled
                environments with supervision and applicable local regulations respected.
              </p>
            </div>
          </GlassCard>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface/30 py-16 text-center sm:py-20">
        <div className="container-x">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Ready for <span className="text-gradient">liftoff</span>?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Join the Drone Engineering Bootcamp or bring a drone module to your school.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/programs/drone-engineering-bootcamp" size="lg">
                Bootcamp Details <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                School Enquiry
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
