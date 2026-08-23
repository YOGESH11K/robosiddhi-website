import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  FileText,
  HeartHandshake,
  ShieldCheck,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "For Parents",
  description:
    "Safe labs, small batches, verified mentors and visible progress — how RoboSiddhi turns your child's screen time into build time, with you informed at every step.",
  alternates: { canonical: "/parents" },
};

const assurances = [
  {
    icon: ShieldCheck,
    title: "Safety first, always",
    text: "Supervised benches, age-rated tools, low-voltage kits for younger builders and safety briefings before every session.",
  },
  {
    icon: Users,
    title: "Small, level-matched batches",
    text: "Mentors know every child by name and pace. Batches are grouped by age and experience — never one-size-fits-all.",
  },
  {
    icon: FileText,
    title: "Progress you can see",
    text: "Build portfolios, photos of finished projects and regular mentor updates — you'll never have to ask 'what did you do today?'",
  },
  {
    icon: BadgeCheck,
    title: "Credentials that count",
    text: "Programs end with verifiable certificates, competition entries and demo-day presentations your child can be proud of.",
  },
  {
    icon: CalendarClock,
    title: "Schedules that fit school",
    text: "Weekend and after-school batches, holiday intensives and flexible make-up sessions — because exams come first.",
  },
  {
    icon: HeartHandshake,
    title: "Parents as partners",
    text: "Open lab days, demo-day invitations and honest guidance on what to buy (and what not to) for practice at home.",
  },
];

const faqs = [
  {
    q: "What's the right age to start?",
    a: "Children can start as young as seven with block-based builds and snap circuits. By ten to twelve most move to real boards and code — our mentors place every child at the level where they'll succeed immediately.",
  },
  {
    q: "Do we need to buy anything?",
    a: "No. All hardware is provided at the lab during sessions. If your child wants to practise at home, we'll recommend an affordable kit matched to their current program — only when they're ready.",
  },
  {
    q: "Will this help with school?",
    a: "Yes — robotics makes abstract STEM concepts tangible. Parents consistently report better engagement in science and maths, plus competition wins and portfolio projects that strengthen admissions.",
  },
  {
    q: "Can we try before enrolling?",
    a: "That's the whole point of the free lab visit. Your child joins a live session, builds something real with a mentor, and you watch how they light up before deciding anything.",
  },
];

export default function ParentsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Parents"
        title={
          <>
            TURN SCREEN TIME
            <br />
            INTO <span className="text-gradient">BUILD TIME.</span>
          </>
        }
        description="You want your child learning real skills — not just watching videos about them. Here's exactly how RoboSiddhi works, what it costs and how you stay in the loop."
      >
        <ButtonLink href="/contact?type=lab-visit">
          Book A Free Visit <ArrowRight className="h-4 w-4" aria-hidden />
        </ButtonLink>
        <ButtonLink href="/programs" variant="secondary">
          See Programs & Ages
        </ButtonLink>
      </PageHero>

      {/* Assurances */}
      <section className="container-x py-20 sm:py-24">
        <SectionHeading
          eyebrow="Our Promise"
          title="Six things you can count on."
        />
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {assurances.map((item) => (
            <StaggerItem key={item.title}>
              <GlassCard className="h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-surface/30 py-20 sm:py-24">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Straight Answers"
              title="The questions parents actually ask."
              description="No fine print. If you have a question that isn't here, call us — we'd rather over-explain than oversell."
            />
            <ButtonLink href="/contact?type=general" variant="secondary" className="mt-8">
              Ask Us Directly
            </ButtonLink>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-col gap-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="glass group rounded-2xl px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium marker:hidden">
                    {faq.q}
                    <span
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border font-mono text-primary transition-transform duration-300 group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{faq.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 text-center sm:py-24">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Come watch your child{" "}
            <span className="text-gradient">build their first robot.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            One free lab visit. No commitment, no sales pitch — just see what they create.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact?type=lab-visit" size="lg">
              Book The Free Visit <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/students" variant="secondary" size="lg">
              What Students Experience
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
