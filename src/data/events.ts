import type { LabEvent } from "@/types";

/**
 * TODO_CONFIG: Replace with real scheduled events.
 * Dates below are editable placeholders in the future relative to launch.
 */
export const events: LabEvent[] = [
  {
    slug: "winter-robotics-bootcamp",
    title: "Winter Robotics Bootcamp",
    type: "Bootcamp",
    date: "2026-12-21T10:00:00+05:30",
    endDate: "2026-12-28T16:00:00+05:30",
    location: "RoboSiddhi Lab · Jaipur", // TODO_CONFIG
    duration: "6 days · 5 hrs/day",
    ageGroup: "10–16 years",
    description:
      "A week-long deep dive: build two robots, learn real Arduino coding and finish with a mini competition on our arena track.",
    highlights: ["2 take-home-ready builds", "Arena challenge day", "Certificate + portfolio review"],
    seats: "Limited to 20 per batch", // TODO_CONFIG
    status: "registration-open",
  },
  {
    slug: "drone-flying-workshop",
    title: "Drone Flying & Assembly Workshop",
    type: "Workshop",
    date: "2026-09-13T10:00:00+05:30",
    location: "RoboSiddhi Lab · Jaipur", // TODO_CONFIG
    duration: "1 day · 6 hrs",
    ageGroup: "13+ years",
    description:
      "Assembly, safety, simulator drills and your first assisted flights — everything you need before owning a drone.",
    highlights: ["Simulator training", "Live flight demos", "DGCA hobby rules briefing"],
    seats: "Limited to 15 participants", // TODO_CONFIG
    status: "registration-open",
  },
  {
    slug: "inter-school-robotics-league",
    title: "Inter-School Robotics League",
    type: "Competition",
    date: "2026-11-08T09:00:00+05:30",
    location: "Partner School Campus · Jaipur", // TODO_CONFIG
    duration: "Full day",
    ageGroup: "Classes 5–12",
    description:
      "School teams battle across line-follower sprints, maze solving and an innovation pitch round. Trophies, internships interviews and glory.",
    highlights: ["3 competition categories", "Industry judge panel", "Scholarship prizes"],
    seats: "Team registrations via schools", // TODO_CONFIG
    status: "upcoming",
  },
  {
    slug: "ai-explorer-weekend",
    title: "AI Explorer Weekend",
    type: "Workshop",
    date: "2026-10-04T11:00:00+05:30",
    location: "RoboSiddhi Lab · Jaipur", // TODO_CONFIG
    duration: "2 days · 4 hrs/day",
    ageGroup: "14+ years",
    description:
      "Train your first image classifier, run it live on a camera robot and understand what AI can (and can't) do.",
    highlights: ["No-code model training", "Vision robot demo", "Take-home project files"],
    seats: "Limited to 18 seats", // TODO_CONFIG
    status: "upcoming",
  },
  {
    slug: "summer-of-innovation-camp-2027",
    title: "Summer of Innovation Camp",
    type: "Camp",
    date: "2027-05-17T09:30:00+05:30",
    endDate: "2027-06-11T13:00:00+05:30",
    location: "RoboSiddhi Lab · Jaipur", // TODO_CONFIG
    duration: "4 weeks · half-day",
    ageGroup: "8–16 years (age batches)",
    description:
      "Our flagship summer experience — robotics, coding, drones and 3D printing labs in one month-long journey ending in a parent showcase.",
    highlights: ["All 4 labs included", "Parent showcase day", "Portfolio + certificate"],
    seats: "Batches of 15 · multiple slots", // TODO_CONFIG
    status: "upcoming",
  },
];

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}
