import { Blocks, FlaskConical, MousePointer2, Play } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";

const features = [
  {
    icon: MousePointer2,
    title: "Drag & drop circuits",
    note: "Place LEDs, sensors and motors on a live breadboard.",
  },
  {
    icon: Blocks,
    title: "Block → code bridge",
    note: "Snap blocks together, watch them become Arduino C++.",
  },
  {
    icon: FlaskConical,
    title: "Safe simulation",
    note: "Test before you wire — no burnt LEDs, ever.",
  },
];

function LabMock() {
  return (
    <div className="glass-strong relative overflow-hidden rounded-2xl" aria-hidden>
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-white/[0.02] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-highlight/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        <span className="ml-3 font-mono text-[11px] text-faint">
          robolab://simulations/blinky-bot
        </span>
      </div>

      <div className="grid-bg relative p-4 sm:p-6">
        {/* toolbar */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {["LED", "BUTTON", "SENSOR", "LOOP"].map((part) => (
            <span
              key={part}
              className="rounded-md border border-primary/25 bg-primary/10 px-2 py-1 font-mono text-[10px] tracking-wider text-primary"
            >
              {part}
            </span>
          ))}
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-success/30 bg-success/10 px-2 py-1 font-mono text-[10px] tracking-wider text-success">
            <Play className="h-3 w-3" /> RUNNING
          </span>
        </div>

        {/* canvas */}
        <div className="dot-bg relative h-56 rounded-xl border border-border bg-background/60 sm:h-64">
          <svg viewBox="0 0 400 220" fill="none" className="absolute inset-0 h-full w-full">
            <path
              d="M60 60 H160 V110 H240"
              stroke="#2de2ff"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="animate-dash-flow"
            />
            <path
              d="M60 150 H130 V180 H300 V110 H240"
              stroke="#7c6cff"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="animate-dash-flow [animation-delay:-0.6s]"
            />
          </svg>

          {/* LED node */}
          <div className="absolute left-[9%] top-[18%] flex flex-col items-center gap-1.5">
            <span className="relative grid h-12 w-12 place-items-center rounded-xl border border-primary/40 bg-surface shadow-glow-primary">
              <span className="h-3.5 w-3.5 rounded-full bg-primary animate-pulse-ring absolute inset-0 m-auto" />
              <span className="h-3.5 w-3.5 rounded-full bg-primary" />
            </span>
            <span className="rounded bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-faint">
              LED · D13
            </span>
          </div>

          {/* sensor node */}
          <div className="absolute left-[52%] top-[38%] flex flex-col items-center gap-1.5">
            <span className="grid h-14 w-14 place-items-center rounded-xl border border-accent/40 bg-surface shadow-glow-accent">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="2.4" fill="currentColor" stroke="none" />
                <path d="M5 12a7 7 0 0 1 14 0M8 12a4 4 0 0 1 8 0" strokeLinecap="round" />
              </svg>
            </span>
            <span className="rounded bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-faint">
              HC-SR04 · D9
            </span>
          </div>

          {/* block code stack */}
          <div className="absolute bottom-4 right-4 hidden select-none flex-col gap-1 sm:flex">
            {[
              { label: "when loop starts", color: "border-highlight/30 bg-highlight/10 text-highlight" },
              { label: "read distance (cm)", color: "border-accent/30 bg-accent/10 text-accent" },
              { label: "set LED to ON", color: "border-primary/30 bg-primary/10 text-primary" },
            ].map((block) => (
              <span
                key={block.label}
                className={`w-fit rounded-md border px-2.5 py-1 font-mono text-[10px] ${block.color}`}
              >
                {block.label}
              </span>
            ))}
          </div>

          <MousePointer2 className="absolute left-[24%] top-[46%] h-5 w-5 text-white/70" />
        </div>

        {/* console */}
        <div className="mt-4 rounded-lg border border-border bg-black/30 px-3 py-2 font-mono text-[11px] leading-relaxed text-success/90">
          <span className="text-faint">[sim]</span> distance = 42cm → LED ON · loop 1284 ok
          <span className="ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-success animate-blink" />
        </div>
      </div>
    </div>
  );
}

export function LabPreview() {
  return (
    <section aria-label="Robotics Lab preview" className="container-x mt-28 sm:mt-40">
      <Reveal>
        <div className="circuit-bg relative overflow-hidden rounded-3xl border border-border bg-elevated/60 p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <Badge className="border-primary/30 bg-primary/10 text-primary">
                Learning simulation
              </Badge>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                A LABORATORY IN{" "}
                <span className="text-gradient">YOUR BROWSER.</span>
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-muted">
                The RoboSiddhi Robotics Lab lets students drag components onto a
                virtual breadboard, program them with blocks or real C++, and
                simulate circuits safely — then rebuild everything for real on
                our lab benches.
              </p>

              <ul className="mt-8 flex flex-col gap-4">
                {features.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                      <feature.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block font-medium">{feature.title}</span>
                      <span className="block text-sm text-muted">{feature.note}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <ButtonLink href="/robotics-lab" size="lg" className="mt-9">
                Launch Robotics Lab
                <Play className="h-4 w-4" aria-hidden />
              </ButtonLink>
            </div>

            <LabMock />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
