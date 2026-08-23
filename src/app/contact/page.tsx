import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Book a free lab visit, ask about programs, workshops or school partnerships — talk to the ${siteConfig.fullName} team in Jaipur.`,
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: Mail,
    label: "Email us",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    note: "We reply within one working day.",
  },
  {
    icon: Phone,
    label: "Call or WhatsApp",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`,
    note: "Fastest way to plan a visit.",
  },
  {
    icon: MapPin,
    label: "Visit the lab",
    value: siteConfig.contact.address,
    note: "Walk-ins welcome during lab hours.",
  },
  {
    icon: Clock,
    label: "Lab hours",
    value: siteConfig.contact.hours,
    note: "Sunday demos by appointment.",
  },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const type = typeof params.type === "string" ? params.type : undefined;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            LET&apos;S BUILD
            <br />
            SOMETHING <span className="text-gradient">TOGETHER.</span>
          </>
        }
        description="Questions about programs, kits, workshops or school partnerships? Want to see the lab before deciding? Send a message — a real mentor replies, not a bot."
      />

      {/* Channels */}
      <section className="container-x pt-14">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => (
            <StaggerItem key={channel.label}>
              <GlassCard className="h-full p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <channel.icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
                  {channel.label}
                </p>
                {channel.href ? (
                  <a
                    href={channel.href}
                    className="mt-1 block font-medium leading-snug transition-colors hover:text-primary"
                  >
                    {channel.value}
                  </a>
                ) : (
                  <p className="mt-1 font-medium leading-snug">{channel.value}</p>
                )}
                <p className="mt-2 text-sm text-muted">{channel.note}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Form + side info */}
      <section className="container-x py-16 sm:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <ContactForm defaultTopic={type} />
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col gap-5">
            <SectionHeading
              align="left"
              eyebrow="What Happens Next"
              title="A mentor, not a sales script."
            />
            <ol className="flex flex-col gap-3">
              {[
                {
                  n: "01",
                  t: "We read your message",
                  d: "Every enquiry goes straight to our mentoring team — no call-centre queues.",
                },
                {
                  n: "02",
                  t: "We suggest a fit",
                  d: "Based on age, experience and goals, we recommend the right starting point — even if it's not our most expensive program.",
                },
                {
                  n: "03",
                  t: "You visit the lab",
                  d: "Come see a live session, meet mentors and try a build before you commit. It's free.",
                },
              ].map((step) => (
                <li key={step.n} className="glass flex items-start gap-4 rounded-xl px-6 py-4">
                  <span className="font-mono text-sm text-primary">{step.n}</span>
                  <div>
                    <p className="font-medium">{step.t}</p>
                    <p className="mt-1 text-sm text-muted">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <GlassCard className="p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                For schools & partners
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Setting up an ATL lab, planning a teacher upskilling drive or organising a
                workshop series? Mention your student count and timeline — we&apos;ll come
                back with a structured proposal.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
