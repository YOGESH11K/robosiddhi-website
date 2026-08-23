import type { Article } from "@/types";

/**
 * Resource/article metadata. Content bodies are intentionally not stored here —
 * architecture allows swapping in a CMS or database later.
 */
export const articles: Article[] = [
  {
    slug: "arduino-vs-esp32-first-board",
    title: "Arduino or ESP32: Which board should you learn first?",
    category: "Electronics",
    readTime: "6 min",
    date: "2026-07-14",
    excerpt:
      "UNO simplicity vs ESP32 superpowers. An honest comparison for students choosing their first microcontroller — including the one thing nobody tells beginners.",
    featured: true,
  },
  {
    slug: "obstacle-robot-mistakes",
    title: "7 mistakes every student makes building their first obstacle robot",
    category: "Projects",
    readTime: "8 min",
    date: "2026-06-28",
    excerpt:
      "From powering motors off the 5V pin to forgetting common grounds — the debugging checklist that would have saved you a weekend.",
  },
  {
    slug: "what-is-mqtt",
    title: "MQTT explained like you're 12 (with robots)",
    category: "IoT",
    readTime: "5 min",
    date: "2026-06-10",
    excerpt:
      "Publishers, subscribers and brokers explained through a school corridor analogy — then wire up your first ESP32 topic.",
  },
  {
    slug: "block-to-text-coding",
    title: "The right way to move from blocks to real code",
    category: "Coding",
    readTime: "7 min",
    date: "2026-05-22",
    excerpt:
      "Block coding isn't training wheels — it's scaffolding. Here's the transition path we use with hundreds of students.",
  },
  {
    slug: "computer-vision-starter",
    title: "Computer vision for robotics: color tracking to neural nets",
    category: "AI",
    readTime: "10 min",
    date: "2026-05-05",
    excerpt:
      "HSV masks, moments, then TFLite models — a practical ladder from 'my robot sees red' to 'my robot recognizes objects'.",
  },
  {
    slug: "school-atl-lab-checklist",
    title: "Setting up a school ATL/robotics lab: the complete checklist",
    category: "STEM Education",
    readTime: "9 min",
    date: "2026-04-18",
    excerpt:
      "Space planning, kit lists, safety protocols, storage systems and budget tiers — what actually matters when starting a school lab.",
  },
  {
    slug: "drone-safety-india",
    title: "Flying drones legally in India: a student's guide",
    category: "Drones",
    readTime: "6 min",
    date: "2026-03-30",
    excerpt:
      "Nano vs micro categories, no-fly zones, DGCA digital sky — the rules every young pilot should know before takeoff.",
  },
  {
    slug: "why-hands-on-stem",
    title: "Why hands-on STEM beats textbook learning, according to research",
    category: "STEM Education",
    readTime: "7 min",
    date: "2026-03-02",
    excerpt:
      "Constructionism, spaced repetition and the prototyping effect — what learning science says about building to understand.",
  },
  {
    slug: "first-3d-printed-parts",
    title: "Designing your first 3D-printed robot parts",
    category: "Robotics",
    readTime: "8 min",
    date: "2026-02-11",
    excerpt:
      "Tolerances, layer orientation, stress points and the five printable parts every robot builder should try first.",
  },
];

export const resourceCategories = [...new Set(articles.map((a) => a.category))];
