import type { Metadata } from "next";
import { ArrowRight, Award, FileCheck, ScanSearch, Scan } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { VerifyForm } from "@/components/certificates/verify-form";

export const metadata: Metadata = {
  title: "Verify Certificate",
  description:
    "Every RoboSiddhi certificate carries a public verification ID. Enter it here to confirm a certificate is genuine — or learn how verification works.",
  alternates: { canonical: "/certificates" },
};

const contents = [
  {
    icon: Scan,
    title: "Unique verification ID",
    text: "A RS-<year>-<ID> code printed on the certificate and registered against the student's name, program and batch.",
  },
  {
    icon: Award,
    title: "Program & level",
    text: "The exact program, level completed and total project hours logged in our labs.",
  },
  {
    icon: FileCheck,
    title: "Mentor sign-off",
    text: "Named mentors who assessed the final build — with the demo-day project listed on record.",
  },
];

const steps = [
  {
    n: "01",
    title: "Find the ID",
    text: "It's printed at the bottom of every RoboSiddhi certificate, next to the mentor signature block.",
  },
  {
    n: "02",
    title: "Enter it above",
    text: "The registry checks the ID against student name, program and issue date in seconds.",
  },
  {
    n: "03",
    title: "Share it confidently",
    text: "Schools, competitions and admissions can verify any RoboSiddhi credential independently — no phone calls needed.",
  },
];

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Certificate Registry"
        title={
          <>
            CERTIFICATES
            <br />
            THAT <span className="text-gradient">VERIFY THEMSELVES.</span>
          </>
        }
        description="Anyone can confirm a RoboSiddhi credential in seconds. No logins, no phone calls — just the verification ID printed on the certificate."
      />

      {/* Verify */}
      <section className="container-x pt-14">
        <Reveal className="mx-auto max-w-2xl">
          <VerifyForm />
        </Reveal>
      </section>

      {/* What's inside */}
      <section className="container-x py-20 sm:py-24">
        <SectionHeading
          eyebrow="Inside A Certificate"
          title="What every credential carries."
        />
        <Stagger className="mt-14 grid gap-4 md:grid-cols-3">
          {contents.map((item) => (
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

      {/* How it works */}
      <section className="border-y border-border bg-surface/30 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="How Verification Works"
            title="Three steps, ten seconds."
          />
          <Stagger className="mt-14 grid gap-4 md:grid-cols-3">
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
          <Reveal className="mx-auto mt-12 flex max-w-3xl items-start justify-center gap-2 text-center text-xs leading-relaxed text-faint">
            <ScanSearch className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            The online registry launched recently; older certificates are added as they&apos;re
            digitised. Manual verification is always available via email.
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 text-center sm:py-24">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Earn one the honest way —{" "}
            <span className="text-gradient">by building.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Every program ends with a project, a demo day and a certificate you own forever.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/programs" size="lg">
              Explore Programs <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/contact?type=general" variant="secondary" size="lg">
              Talk To Us
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
