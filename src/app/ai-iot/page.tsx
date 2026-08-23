import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Database,
  Network,
  Radio,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { ObjectStage } from "@/components/three/object-stage";
import { DataFlow } from "@/components/tech/data-flow";

export const metadata: Metadata = {
  title: "AI & IoT",
  description:
    "From sensors to smart decisions — learn how RoboSiddhi students build connected devices with ESP32, stream data over networks and apply AI to make machines think.",
  alternates: { canonical: "/ai-iot" },
};

const concepts = [
  {
    icon: Radio,
    title: "Connected Devices",
    text: "ESP32 boards join WiFi and Bluetooth networks, turning any sensor into a node that reports in real time.",
  },
  {
    icon: Cloud,
    title: "Cloud & Dashboards",
    text: "Sensor streams land in dashboards you design — charts, alerts and controls accessible from anywhere.",
  },
  {
    icon: Database,
    title: "Data Pipelines",
    text: "Readings become history: logged, charted and cleaned — the raw material every intelligent system needs.",
  },
  {
    icon: BrainCircuit,
    title: "AI Processing",
    text: "Rules first, then models: students graduate from thresholds to computer vision running on edge hardware.",
  },
  {
    icon: Network,
    title: "Automation",
    text: "Decisions flow back to actuators — pumps, relays and motors respond automatically without a human.",
  },
  {
    icon: ShieldCheck,
    title: "Safe by Design",
    text: "We teach privacy-aware, safety-first IoT: local control, sensible permissions and no invented infrastructure claims.",
  },
];

function NetworkFallback() {
  return (
    <div className="grid h-full place-items-center" role="img" aria-label="Illustration of a connected network">
      <svg viewBox="0 0 240 240" fill="none" className="h-full max-h-[380px] w-auto">
        <circle cx="120" cy="120" r="34" fill="#101a30" stroke="#7c6cff" strokeWidth="2" />
        <circle cx="120" cy="120" r="8" fill="#7c6cff" />
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x = 120 + Math.cos(rad) * 86;
          const y = 120 + Math.sin(rad) * 86;
          return (
            <g key={deg}>
              <line x1="120" y1="120" x2={x} y2={y} stroke="oklch(1 0 0/0.14)" strokeWidth="1.5" />
              <rect x={x - 9} y={y - 9} width="18" height="18" rx="5" fill="#0b1226" stroke="#2de2ff" strokeWidth="1.5" />
            </g>
          );
        })}
        <circle cx="120" cy="34" r="110" stroke="oklch(0.75 0.14 210/0.12)" strokeDasharray="4 8" />
      </svg>
    </div>
  );
}

const aiProjects = [
  { slug: "iot-plant-monitor", title: "IoT Plant Monitor", desc: "Soil moisture streamed to a live dashboard with automatic watering." },
  { slug: "smart-home-hub", title: "Smart Home Hub", desc: "An ESP32 command center for lights, climate and security automations." },
  { slug: "ai-vision-robot", title: "AI Vision Robot", desc: "A robot that sees — camera + trained model driving autonomous behavior." },
];

export default function AiIotPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology · AI & IoT"
        title={
          <>
            DEVICES THAT SENSE.
            <br />
            SYSTEMS THAT <span className="text-gradient">THINK.</span>
          </>
        }
        description="IoT gives machines senses and a voice; AI gives them judgment. RoboSiddhi students build both sides of that story — connected hardware streaming data into intelligent decisions."
      >
        <ButtonLink href="/programs/ai-and-iot-explorer">
          AI &amp; IoT Explorer Program <ArrowRight className="h-4 w-4" />
        </ButtonLink>
      </PageHero>

      {/* Hero object */}
      <section className="container-x grid items-center gap-10 pb-20 pt-4 lg:grid-cols-2">
        <ObjectStage
          variant="network"
          fallback={<NetworkFallback />}
          className="order-2 mx-auto aspect-square w-full max-w-[480px] lg:order-1"
        />
        <Reveal className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="The Big Picture"
            title="One loop, endless applications."
            description="Smart farms, home automation, health monitors, vision robots — underneath every impressive demo is the same five-stage pipeline. Learn the pipeline once, then invent."
          />
          <div className="mt-8 grid grid-cols-2 gap-3 font-mono text-xs uppercase tracking-[0.14em]">
            {["Sensors", "ESP32", "MQTT", "Dashboards", "Python", "Edge Vision"].map((chip) => (
              <span key={chip} className="glass rounded-lg px-4 py-2.5 text-muted">{chip}</span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Data flow */}
      <section className="border-y border-border bg-surface/30 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="How Data Flows"
            title="Follow a reading around the loop."
            description="Click each stage to see what happens inside. This is the exact architecture students build in our AI & IoT Explorer program."
          />
          <div className="mt-14 flex justify-center">
            <DataFlow />
          </div>
        </div>
      </section>

      {/* Concepts */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="Core Concepts"
          title="Six ideas that unlock everything."
        />
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((c) => (
            <StaggerItem key={c.title}>
              <GlassCard className="h-full p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Projects + CTA */}
      <section className="border-t border-border bg-surface/30 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Build These" title="Connected projects from our labs." />
          <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
            {aiProjects.map((p) => (
              <StaggerItem key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="block h-full">
                  <GlassCard className="group h-full p-6">
                    <h3 className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary">
                      Open build guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </GlassCard>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-16 text-center">
            <ButtonLink href="/programs/ai-and-iot-explorer" size="lg">
              Start the AI &amp; IoT Path <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
