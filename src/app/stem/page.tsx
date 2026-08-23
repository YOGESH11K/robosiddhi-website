import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Atom,
  Boxes,
  Calculator,
  Cog,
  FlaskConical,
  Microscope,
  Ruler,
  SquareCode,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { ObjectStage } from "@/components/three/object-stage";

export const metadata: Metadata = {
  title: "STEM",
  description:
    "Science, Technology, Engineering and Mathematics come alive at RoboSiddhi — abstract concepts become circuits, structures and experiments you can touch.",
  alternates: { canonical: "/stem" },
};

const stemCategories = [
  {
    letter: "S",
    name: "Science",
    icon: FlaskConical,
    color: "#2de2ff",
    text: "Electricity, forces, waves and energy — discovered by measuring real circuits instead of memorizing diagrams.",
    examples: ["Ohm's law on a live circuit", "Sound waves via buzzers", "Light sensing with LDRs"],
  },
  {
    letter: "T",
    name: "Technology",
    icon: SquareCode,
    color: "#7c6cff",
    text: "Boards, code and networks — the tools of the modern world, mastered by building with them early.",
    examples: ["Microcontroller programming", "WiFi data links", "Sensor dashboards"],
  },
  {
    letter: "E",
    name: "Engineering",
    icon: Cog,
    color: "#ffb547",
    text: "Design, build, test, iterate. Chassis that carry weight and mechanisms that survive contact with reality.",
    examples: ["Gear ratios & torque", "3D-printed parts", "Structural prototyping"],
  },
  {
    letter: "M",
    name: "Mathematics",
    icon: Calculator,
    color: "#35e39b",
    text: "Angles steer servos, ratios set speeds, graphs reveal sensor truth — math stops being abstract the moment it moves a motor.",
    examples: ["Distance = speed × time", "PID control basics", "Live data plotting"],
  },
];

function StemFallback() {
  return (
    <div className="grid h-full place-items-center" role="img" aria-label="Illustration of STEM elements orbiting a core">
      <svg viewBox="0 0 240 240" fill="none" className="h-full max-h-[380px] w-auto animate-float">
        <circle cx="120" cy="120" r="96" stroke="oklch(0.75 0.14 210/0.14)" strokeDasharray="4 8" />
        <rect x="98" y="98" width="44" height="44" rx="10" fill="#101a30" stroke="#2de2ff" strokeWidth="2" transform="rotate(45 120 120)" />
        {[
          { x: 120, y: 24, c: "#2de2ff", l: "S" },
          { x: 216, y: 120, c: "#7c6cff", l: "T" },
          { x: 120, y: 216, c: "#ffb547", l: "E" },
          { x: 24, y: 120, c: "#35e39b", l: "M" },
        ].map((n) => (
          <g key={n.l}>
            <line x1="120" y1="120" x2={n.x} y2={n.y} stroke="oklch(1 0 0/0.1)" strokeWidth="1.5" />
            <circle cx={n.x} cy={n.y} r="15" fill="#0b1226" stroke={n.c} strokeWidth="1.8" />
            <text x={n.x} y={n.y + 5} textAnchor="middle" fill={n.c} fontSize="14" fontWeight="700">{n.l}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function StemPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology · STEM"
        title={
          <>
            FOUR LETTERS.
            <br />
            ONE <span className="text-gradient">SUPERPOWER.</span>
          </>
        }
        description="Science, Technology, Engineering, Mathematics — taught separately they feel like school subjects. Taught through robots, they become one integrated superpower."
      >
        <ButtonLink href="/programs/young-innovators-robotics">
          STEM for Schools <ArrowRight className="h-4 w-4" />
        </ButtonLink>
        <ButtonLink href="/schools" variant="secondary">
          For School Leaders
        </ButtonLink>
      </PageHero>

      {/* Hero object */}
      <section className="container-x grid items-center gap-10 pb-20 pt-4 lg:grid-cols-2">
        <ObjectStage
          variant="stem"
          fallback={<StemFallback />}
          className="order-2 mx-auto aspect-square w-full max-w-[480px] lg:order-1"
        />
        <Reveal className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Integrated Learning"
            title="One project, four disciplines."
            description="Build a line-following robot and you've done it all: physics of light reflection (S), sensor programming (T), chassis design (E) and calibration math (M). That integration is what makes STEM stick."
          />
          <ul className="mt-8 flex flex-col gap-3">
            {[
              "NEP 2020-aligned experiential learning",
              "ATL-lab compatible activities",
              "Assessment through builds, not just quizzes",
            ].map((line) => (
              <li key={line} className="glass flex items-center gap-3 rounded-xl px-5 py-3 text-sm text-muted">
                <Atom className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Four disciplines */}
      <section className="border-y border-border bg-surface/30 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="The Four Disciplines"
            title="Meet S · T · E · M."
          />
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stemCategories.map((cat) => (
              <StaggerItem key={cat.letter}>
                <GlassCard className="relative h-full overflow-hidden p-7">
                  <span
                    className="pointer-events-none absolute -right-3 -top-6 font-display text-8xl font-bold opacity-[0.07]"
                    style={{ color: cat.color }}
                    aria-hidden
                  >
                    {cat.letter}
                  </span>
                  <span
                    className="grid h-12 w-12 place-items-center rounded-xl border"
                    style={{ color: cat.color, borderColor: `${cat.color}40`, backgroundColor: `${cat.color}12` }}
                  >
                    <cat.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{cat.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{cat.text}</p>
                  <ul className="mt-4 flex flex-col gap-1.5 border-t border-border pt-4">
                    {cat.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2 font-mono text-[11px] leading-relaxed tracking-wide text-faint">
                        <Ruler className="mt-0.5 h-3 w-3 shrink-0" style={{ color: cat.color }} aria-hidden />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Extras */}
      <section className="container-x py-20 sm:py-24">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Microscope, title: "Inquiry Habit", text: "Every activity begins with a question students must answer by experiment." },
            { icon: Boxes, title: "Maker Confidence", text: "Students leave believing 'I can build this' — the mindset behind every future engineer." },
            { icon: Calculator, title: "Math in Motion", text: "Numbers gain meaning when they make wheels turn faster or servos aim straighter." },
          ].map((item) => (
            <Reveal key={item.title}>
              <GlassCard className="flex h-full items-start gap-5 p-7">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-faint">Keep exploring</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link href="/robotics" className="glass card-hover rounded-full px-5 py-2.5 text-sm">Robotics</Link>
            <Link href="/coding" className="glass card-hover rounded-full px-5 py-2.5 text-sm">Coding</Link>
            <Link href="/programs" className="glass card-hover rounded-full px-5 py-2.5 text-sm">All Programs</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
