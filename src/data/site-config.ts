/**
 * ─────────────────────────────────────────────────────────────
 *  ROBOSIDDHI — CENTRAL SITE CONFIGURATION
 *  Single source of truth for business data.
 *  Values marked TODO_CONFIG are editable placeholders —
 *  replace them with verified real information.
 * ─────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  name: "RoboSiddhi",
  fullName: "RoboSiddhi Jaipur",
  tagline: "Build the future. Don't just watch it.",
  description:
    "RoboSiddhi is a robotics, AI, IoT and STEM innovation lab in Jaipur. Students learn by building real robots, drones, smart devices and AI projects — from curiosity to creation to mastery.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://robosiddhi.example.com",

  // TODO_CONFIG: Replace with verified contact details
  contact: {
    email: "admin@robosiddhi.com",
    phone: "+91 93514 69616",
    address: "Jaipur, Rajasthan, India", // TODO_CONFIG
    hours: "Mon – Sat · 10:00 AM – 7:00 PM",
  },

  socials: [
    { name: "Instagram", href: "#", icon: "instagram" }, // TODO_CONFIG
    { name: "YouTube", href: "#", icon: "youtube" }, // TODO_CONFIG
    { name: "LinkedIn", href: "#", icon: "linkedin" }, // TODO_CONFIG
    { name: "GitHub", href: "#", icon: "github" }, // TODO_CONFIG
  ],

  /**
   * Impact numbers — EDITABLE PLACEHOLDERS (TODO_CONFIG).
   * Do not publish as real figures until verified.
   */
  stats: {
    students: { value: 10000, suffix: "+" }, // TODO_CONFIG
    projects: { value: 100, suffix: "+" }, // TODO_CONFIG
    schools: { value: 50, suffix: "+" }, // TODO_CONFIG
    programs: { value: 25, suffix: "+" }, // TODO_CONFIG
  },

  learningJourney: [
    {
      stage: "Jigyasa",
      meaning: "Curiosity",
      description:
        "Every builder starts with a question — 'how does this work?' We turn that spark into hands-on exploration with real circuits, code and machines.",
    },
    {
      stage: "Sadhana",
      meaning: "Practice",
      description:
        "Structured practice: guided builds, experiments, debugging and iteration. Skill is compounded one project at a time in our labs.",
    },
    {
      stage: "Siddhi",
      meaning: "Mastery",
      description:
        "Students design, build and present original innovations — competing, certifying and mentoring the next generation of builders.",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
