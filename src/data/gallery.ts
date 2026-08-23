/**
 * Gallery data.
 * No real RoboSiddhi photos are available yet — every entry renders an
 * original abstract visual instead of a fabricated photograph.
 * Replace `art` with real image paths once verified media exists (TODO_CONFIG).
 */

export interface GalleryItem {
  slug: string;
  title: string;
  category:
    | "Lab Life"
    | "Workshops"
    | "Competitions"
    | "Student Builds"
    | "School Programs";
  caption: string;
  /** Two hex colors used to compose the original abstract tile */
  art: { from: string; to: string; glyph: string }; // glyph = lucide icon key
}

export const galleryCategories = [
  "All",
  "Lab Life",
  "Workshops",
  "Competitions",
  "Student Builds",
  "School Programs",
] as const;

export const galleryItems: GalleryItem[] = [
  {
    slug: "innovation-lab-floor",
    title: "Innovation Lab Floor",
    category: "Lab Life",
    caption:
      "TODO_CONFIG: photo of the main RoboSiddhi lab floor — build benches, tool wall and project shelves.",
    art: { from: "#0b1430", to: "#123a52", glyph: "Bot" },
  },
  {
    slug: "robot-car-build-session",
    title: "Robot Car Build Session",
    category: "Workshops",
    caption:
      "TODO_CONFIG: photo from a weekend robot-car workshop — students wiring chassis and motor drivers.",
    art: { from: "#101828", to: "#3b2f63", glyph: "Cpu" },
  },
  {
    slug: "drone-day",
    title: "Drone Day",
    category: "Workshops",
    caption:
      "TODO_CONFIG: photo of the drone assembly and flight-line session.",
    art: { from: "#1a1030", to: "#523052", glyph: "Plane" },
  },
  {
    slug: "line-follower-race",
    title: "Line Follower Race",
    category: "Competitions",
    caption:
      "TODO_CONFIG: photo of students racing line-follower robots on the track mat.",
    art: { from: "#301620", to: "#5c2e2e", glyph: "Flag" },
  },
  {
    slug: "first-place-build",
    title: "Capstone Showcase",
    category: "Student Builds",
    caption:
      "TODO_CONFIG: photo of a student presenting a capstone build at demo day.",
    art: { from: "#0d2438", to: "#1d4a44", glyph: "Trophy" },
  },
  {
    slug: "school-atl-lab",
    title: "Partner School Lab",
    category: "School Programs",
    caption:
      "TODO_CONFIG: photo of a robotics lab set up inside a partner school.",
    art: { from: "#141c33", to: "#274067", glyph: "School" },
  },
  {
    slug: "soldering-station",
    title: "Soldering Station",
    category: "Lab Life",
    caption:
      "TODO_CONFIG: close-up photo of supervised soldering practice at the electronics bench.",
    art: { from: "#26170e", to: "#4d3413", glyph: "Flame" },
  },
  {
    slug: "ai-vision-demo",
    title: "AI Vision Demo",
    category: "Student Builds",
    caption:
      "TODO_CONFIG: photo of an edge-AI vision robot tracking objects during a demo.",
    art: { from: "#170f2e", to: "#33255e", glyph: "ScanEye" },
  },
  {
    slug: "young-innovators-fair",
    title: "Young Innovators Fair",
    category: "School Programs",
    caption:
      "TODO_CONFIG: photo of the end-of-year innovation fair with student project stalls.",
    art: { from: "#0e2230", to: "#155a56", glyph: "Sparkles" },
  },
];

export function getGalleryItem(slug: string) {
  return galleryItems.find((g) => g.slug === slug);
}
