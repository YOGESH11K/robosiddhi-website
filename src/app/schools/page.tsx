import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpenCheck,
  Bot,
  BrainCircuit,
  ClipboardList,
  Cpu,
  GraduationCap,
  Network,
  School,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "For Schools",
  description:
    "Bring future technology into the classroom — RoboSiddhi sets up robotics labs, AI & IoT labs and STEM programs in schools with curriculum, kits and teacher training.",
  alternates: { canonical: "/schools" },
};

const solutions = [
  {
    icon: Bot,
    title: "Robotics Labs",
    text: "Complete lab design — workbenches, class kits, safety gear and a year-long curriculum mapped to your timetable.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Coding Labs",
    text: "Age-appropriate AI literacy plus block-to-text coding progression that grows with your students.",
  },
  {
    icon: Network,
    title: "IoT Programs",
    text: "Connected-device projects for senior classes: ESP32 nodes, dashboards and automation mini-labs.",
  },
  {
    icon: Cpu,
    title: "STEM Integration",
    text: "NEP-aligned experiential modules woven into science and math periods — assessment through builds.",
  },
];

const engagementModel = [
  {
    icon: ClipboardList,
    step: "01 · Discover",
    title: "Lab Audit",
    text: "We assess your space, student numbers, goals and existing ATL infrastructure — then propose the right setup, honestly sized.",
  },
  {
    icon: School,
    step: "02 · Setup",
    title: "Lab Launch",
    text: "Equipment installed, kits configured, curriculum calendar aligned with your academic year.",
  },
  {
    icon: Users,
    step: "03 · Enable",
    title: "Teacher Training",
    text: "Your teachers get certified training, lesson plans and ongoing mentor support so the lab runs independently.",
  },
  {
    icon: GraduationCap,
    step: "04 · Grow",
    title: "Student Programs",
    text: "Regular sessions, innovation fairs and competition prep — measurable outcomes every term.",
  },
];

export default function SchoolsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Schools"
        title={
          <>
            BRING FUTURE TECHNOLOGY
            <br />
            INTO THE <span className="text-gradient">CLASSROOM.</span>
          </>
        }
        description="RoboSiddhi partners with schools to run robotics, AI, IoT and STEM programs end-to-end — lab setup, curriculum, teacher training and student programs under one roof."
      >
        <ButtonLink href="/contact">
          Request School Deck <ArrowRight className="h-4 w-4" />
        </ButtonLink>
        <ButtonLink href="/programs/young-innovators-robotics" variant="secondary">
          See Sample Curriculum
        </ButtonLink>
      </PageHero>

      {/* Solutions */}
      <section className="container-x py-20 sm:py-24">
        <SectionHeading
          eyebrow="What We Set Up"
          title="Four ways to transform your school."
        />
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2">
          {solutions.map((s) => (
            <StaggerItem key={s.title}>
              <GlassCard className="flex h-full items-start gap-5 p-8">
                <span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl border border-primary/25 bg-primary/10 p-3 text-primary">
                  <s.icon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Engagement model */}
      <section className="border-y border-border bg-surface/30 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="How Partnership Works"
            title="From first call to innovation fair."
          />
          <Stagger className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {engagementModel.map((phase) => (
              <StaggerItem key={phase.step}>
                <GlassCard className="relative h-full overflow-hidden p-7">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                    {phase.step}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{phase.text}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* What's included */}
      <section className="container-x py-20 sm:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <SectionHeading align="left" eyebrow="Included" title="Everything but the headache." />
            <ul className="mt-8 flex flex-col gap-3">
              {[
                "Curriculum designed for Indian school calendars (NEP 2020 aligned)",
                "Class kits, spares management and annual maintenance guidance",
                "Teacher certification + refresher workshops each term",
                "Student assessment rubrics based on real builds",
                "Annual innovation fair planning and judging support",
                "Competition coaching (ATL Marathon, national events)",
              ].map((item) => (
                <li key={item} className="glass flex items-start gap-3 rounded-xl px-5 py-3.5 leading-relaxed text-muted">
                  <BookOpenCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-success" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <GlassCard hover={false} className="p-9">
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                School enquiry
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                Tell us about your school — student strength, grades you want to cover and
                whether you have an existing lab. We&apos;ll respond within two working days.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <ButtonLink href="/contact" size="lg">
                  Start the Conversation <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="/programs/school-teacher-upskilling" variant="ghost">
                  Or explore teacher upskilling →
                </ButtonLink>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
