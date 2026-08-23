/**
 * About-page content. Historical dates are intentionally omitted —
 * timeline entries are editable placeholders (TODO_CONFIG).
 */

export interface TimelineEntry {
  era: string; // phase label, not a fabricated date
  title: string;
  description: string;
  icon: string; // lucide icon key
}

export const timeline: TimelineEntry[] = [
  {
    era: "PHASE 01",
    title: "The Question",
    description:
      "TODO_CONFIG — replace with the verified founding story of RoboSiddhi: why it started and the first spark of curiosity it followed.",
    icon: "Lightbulb",
  },
  {
    era: "PHASE 02",
    title: "First Lab Bench",
    description:
      "TODO_CONFIG — describe how the first physical lab / workspace came together and the earliest student batches.",
    icon: "Wrench",
  },
  {
    era: "PHASE 03",
    title: "Into Schools",
    description:
      "TODO_CONFIG — describe the expansion into partner schools, lab setups and teacher enablement.",
    icon: "School",
  },
  {
    era: "PHASE 04",
    title: "Beyond Robotics",
    description:
      "TODO_CONFIG — describe how programs grew to include AI, IoT, drones, 3D printing and space technology.",
    icon: "Rocket",
  },
  {
    era: "TODAY",
    title: "A Builder Community",
    description:
      "TODO_CONFIG — describe RoboSiddhi today: students, schools, alumni and the community that keeps building.",
    icon: "Users",
  },
];

export const values = [
  {
    title: "Learning by Building",
    description:
      "Concepts stick when your hands make them real. Every session ends with something that blinks, moves or responds.",
    icon: "Hammer",
  },
  {
    title: "Curiosity First",
    description:
      "Questions matter more than answers. We protect a student's 'what if…' and turn it into an experiment.",
    icon: "Telescope",
  },
  {
    title: "Engineering Honesty",
    description:
      "Real components fail. We teach systematic debugging, safe practice and respect for tools — the habits of real engineers.",
    icon: "ShieldCheck",
  },
  {
    title: "Share What You Make",
    description:
      "Builders present their work — at demo days, fairs and competitions. Explaining is the final layer of mastery.",
    icon: "Megaphone",
  },
];

export const teachingApproach = [
  {
    step: "01",
    title: "Spark",
    description:
      "A demonstration or challenge that makes students ask 'how does that work?' before any theory begins.",
  },
  {
    step: "02",
    title: "Build",
    description:
      "Guided hands-on construction — circuits wired, code written, parts printed — in small mentored groups.",
  },
  {
    step: "03",
    title: "Break & Debug",
    description:
      "Deliberate failure hunting. Students learn to isolate problems with multimeters, serial logs and logic.",
  },
  {
    step: "04",
    title: "Extend",
    description:
      "Once the base project works, students remix it — new sensors, new behaviors, entirely their own version.",
  },
  {
    step: "05",
    title: "Present",
    description:
      "Every build gets explained publicly. Communication turns a hobby project into an engineering achievement.",
  },
];
