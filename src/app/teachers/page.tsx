import type { Metadata } from "next";
import {
  ArrowRight,
  BookMarked,
  CalendarDays,
  ClipboardList,
  GraduationCap,
  Layers,
  Presentation,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "For Teachers",
  description:
    "Teacher training, curriculum support, classroom resources and technology guides — everything educators need to teach robotics and STEM with confidence.",
  alternates: { canonical: "/teachers" },
};

const supportAreas = [
  {
    icon: GraduationCap,
    title: "Teacher Training",
    text: "Hands-on certification programs — from first circuit to running a full robotics period. No prior tech background needed.",
    href: "/programs/school-teacher-upskilling",
  },
  {
    icon: BookMarked,
    title: "Teaching Resources",
    text: "Lesson plans, activity sheets, assessment rubrics and project guides you can walk into class with.",
    href: "/resources",
  },
  {
    icon: Layers,
    title: "Curriculum Support",
    text: "We map our modules to your syllabus and calendar, including ATL objectives where applicable.",
    href: "/schools",
  },
  {
    icon: Wrench,
    title: "Project Bank",
    text: "Classroom-tested builds with components lists, wiring steps, code and common pitfalls documented.",
    href: "/projects",
  },
  {
    icon: CalendarDays,
    title: "Workshops",
    text: "Short-format upskilling workshops at your school or our lab — half-day to multi-day.",
    href: "/workshops",
  },
  {
    icon: Presentation,
    title: "Technology Guides",
    text: "Plain-language explainers for Arduino, ESP32, sensors and AI concepts — stay ahead of your students.",
    href: "/ai-mentor",
  },
];

export default function TeachersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Teachers"
        title={
          <>
            TEACH TECHNOLOGY
            <br />
            WITH <span className="text-gradient">CONFIDENCE.</span>
          </>
        }
        description="You don't need an engineering degree to run an inspiring robotics class. RoboSiddhi trains, equips and supports teachers every step of the way."
      >
        <ButtonLink href="/programs/school-teacher-upskilling">
          Teacher Training Program <ArrowRight className="h-4 w-4" />
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Connect With RoboSiddhi
        </ButtonLink>
      </PageHero>

      {/* Support areas */}
      <section className="container-x py-20 sm:py-24">
        <SectionHeading
          eyebrow="How We Support You"
          title="Six ways we've got your back."
        />
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {supportAreas.map((area) => (
            <StaggerItem key={area.title}>
              <GlassCard className="group flex h-full flex-col p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <area.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                  {area.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{area.text}</p>
                <a
                  href={area.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                  aria-label={`${area.title} — learn more`}
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Why it works */}
      <section className="border-y border-border bg-surface/30 py-20 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Training Philosophy"
              title="We teach the way you'll teach."
              description="Every training session mirrors a real classroom session: you build the same projects your students will, hit the same snags, and learn the debugging rhythm firsthand. By certification day, teaching it feels natural."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-col gap-3">
              {[
                { n: "01", t: "Learn by building", d: "Complete every project yourself before teaching it." },
                { n: "02", t: "Lesson-plan walkthroughs", d: "Each module ships with timing, materials and talking points." },
                { n: "03", t: "Practice teaching", d: "Micro-teaching rounds with feedback from RoboSiddhi mentors." },
                { n: "04", t: "Ongoing mentorship", d: "A direct line to our team through your first term." },
              ].map((row) => (
                <div key={row.n} className="glass flex items-start gap-4 rounded-xl px-6 py-4">
                  <span className="font-mono text-sm text-primary">{row.n}</span>
                  <div>
                    <p className="font-medium">{row.t}</p>
                    <p className="mt-1 text-sm text-muted">{row.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 text-center sm:py-24">
        <Reveal>
          <ClipboardList className="mx-auto h-8 w-8 text-accent" aria-hidden />
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Bring a colleague. Leave with a semester plan.
          </h2>
          <ButtonLink href="/contact" size="lg" className="mt-8">
            Connect With RoboSiddhi <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </Reveal>
      </section>
    </>
  );
}
