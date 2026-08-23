import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { EventTimeline } from "@/components/events/event-timeline";

export const metadata: Metadata = {
  title: "Events",
  description:
    "The RoboSiddhi event timeline — workshops, bootcamps, camps, competitions and school events. Browse what's coming up in the lab.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Event Timeline"
        title={
          <>
            WHAT&apos;S HAPPENING
            <br />
            IN THE <span className="text-gradient">LAB.</span>
          </>
        }
        description="Workshops, camps, competitions and school events — scroll through the season. Filter by category to find your kind of day."
      />
      <section className="container-x py-16 sm:py-20">
        <EventTimeline />
      </section>
    </>
  );
}
