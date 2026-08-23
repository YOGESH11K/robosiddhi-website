import type { Metadata } from "next";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Upcoming RoboSiddhi workshops and bootcamps — robotics, drones and AI intensives in Jaipur. Dates, duration, audience and registration details.",
  alternates: { canonical: "/workshops" },
};

const WORKSHOP_TYPES = new Set(["Workshop", "Bootcamp", "Camp"]);

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function WorkshopsPage() {
  const workshops = events
    .filter((e) => WORKSHOP_TYPES.has(e.type))
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <>
      <PageHero
        eyebrow="Workshops & Bootcamps"
        title={
          <>
            ONE DAY. ONE MACHINE.
            <br />
            <span className="text-gradient">ZERO BORING THEORY.</span>
          </>
        }
        description="Intensive hands-on sessions where you walk in curious and walk out holding something that works. Kits provided — just bring yourself."
      >
        <ButtonLink href="/contact">
          Register for a Workshop <CalendarDays className="h-4 w-4" />
        </ButtonLink>
      </PageHero>

      <section className="container-x py-16 sm:py-20">
        <Stagger className="grid gap-6 lg:grid-cols-2">
          {workshops.map((event) => (
            <StaggerItem key={event.slug}>
              <GlassCard className="flex h-full flex-col p-8">
                <div className="flex flex-wrap items-center gap-2.5">
                  <Badge>
                    <span className="h-1.5 rounded-full bg-primary" aria-hidden />
                    {event.type}
                  </Badge>
                  {event.status === "registration-open" && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-success">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute h-full w-full animate-pulse-ring rounded-full bg-success" />
                        <span className="relative h-1.5 w-1.5 rounded-full bg-success" />
                      </span>
                      Registration open
                    </span>
                  )}
                </div>

                <h2 className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight">
                  {event.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{event.description}</p>

                <dl className="mt-6 grid gap-x-6 gap-y-2.5 border-t border-border pt-6 text-sm sm:grid-cols-2">
                  <div className="flex items-center gap-2.5">
                    <CalendarDays className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <dt className="sr-only">Date</dt>
                    <dd className="text-muted">{formatDate(event.date)}</dd>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                    <dt className="sr-only">Duration</dt>
                    <dd className="text-muted">{event.duration}</dd>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Users className="h-4 w-4 shrink-0 text-highlight" aria-hidden />
                    <dt className="sr-only">Audience</dt>
                    <dd className="text-muted">{event.ageGroup}</dd>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 shrink-0 text-danger" aria-hidden />
                    <dt className="sr-only">Location</dt>
                    <dd className="text-muted">{event.location}</dd>
                  </div>
                </dl>

                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Highlights">
                  {event.highlights.slice(0, 3).map((h) => (
                    <li
                      key={h}
                      className="rounded-lg border border-border bg-white/[0.03] px-3 py-1.5 text-xs text-muted"
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between gap-4 pt-7">
                  <ButtonLink href={`/events#${event.slug}`} variant="secondary" size="sm">
                    Details
                  </ButtonLink>
                  <ButtonLink href="/contact" size="sm">
                    Register Interest
                  </ButtonLink>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-14 text-center">
          <SectionHeading
            eyebrow="Custom Workshops"
            title="Want one at your school or for your team?"
            description="We design private workshops on request — robotics, drone theory, AI basics and more."
          />
          <ButtonLink href="/contact" size="lg" className="mt-8">
            Plan a Private Workshop
          </ButtonLink>
        </Reveal>
      </section>
    </>
  );
}
