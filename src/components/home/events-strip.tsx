import Link from "next/link";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { events } from "@/data/events";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

const nextEvents = events.slice(0, 3);

const statusStyles: Record<string, string> = {
  "registration-open": "border-success/30 bg-success/10 text-success",
  upcoming: "border-border bg-white/[0.04] text-muted",
};

export function EventsStrip() {
  return (
    <section aria-label="Upcoming events and workshops" className="container-x mt-28 sm:mt-40">
      <SectionHeading
        align="left"
        eyebrow="What's On"
        title={
          <>
            UPCOMING AT THE LAB<span className="text-gradient">.</span>
          </>
        }
        description="Workshops, bootcamps and competitions — seats are limited, energy is not."
      />

      <ul className="mt-12 flex flex-col gap-3.5">
        {nextEvents.map((event) => (
          <li key={event.slug}>
            <article className="glass card-hover grid gap-4 rounded-2xl p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center">
              <div className="flex h-fit w-fit flex-col items-center rounded-xl border border-border bg-white/[0.03] px-4 py-2.5 text-center">
                <span className="font-display text-2xl font-bold leading-none text-primary">
                  {new Date(event.date).getDate()}
                </span>
                <span className="mt-1 font-mono text-[11px] uppercase tracking-widest text-faint">
                  {new Date(event.date).toLocaleDateString("en-IN", { month: "short" })}
                </span>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <Badge>{event.type}</Badge>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${statusStyles[event.status]}`}
                  >
                    {event.status === "registration-open" ? "Registration open" : "Upcoming"}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
                  {event.title}
                </h3>
                <p className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-faint" aria-hidden />
                    {formatDate(event.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-faint" aria-hidden />
                    {event.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-faint" aria-hidden />
                    {event.location}
                  </span>
                </p>
              </div>

              <Link
                href="/contact?type=workshop"
                className="glow-line inline-flex w-fit items-center gap-1.5 whitespace-nowrap text-sm font-medium text-primary transition-colors hover:text-accent"
                aria-label={`Register interest for ${event.title}`}
              >
                Register interest
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link
          href="/events"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
        >
          View all events
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
