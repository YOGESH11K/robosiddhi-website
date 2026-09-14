import type { LucideIcon } from "lucide-react";
import { BrainCircuit, CarFront, Rocket, ScanSearch } from "lucide-react";

export interface AiProject {
  slug: string;
  index: string;
  title: string;
  url: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  icon: LucideIcon;
  /** Accent hex — matches the global color palette. */
  accent: string;
}

/** Live browser-based AI builds from the RoboSiddhi lab. Add new projects here. */
export const aiProjects: AiProject[] = [
  {
    slug: "stem-emotion",
    index: "01",
    title: "STEM Emotion",
    url: "https://stem-emotion.vercel.app/",
    tagline: "Live face-emotion reading",
    description:
      "An emotion-recognition AI built on eNet-B0 / AffectNet that reads your expression straight from the camera — neutral, happy, surprised and more — all in real time.",
    highlights: [
      "Real-time camera inference",
      "Trained vision model",
      "Live confidence reading",
    ],
    tech: ["Computer Vision", "AI Model", "On-Device"],
    icon: BrainCircuit,
    accent: "#2de2ff",
  },
  {
    slug: "stem-detection",
    index: "02",
    title: "STEM Detection",
    url: "https://stem-detection.vercel.app/",
    tagline: "Cat · Dog · Human classifier",
    description:
      "A real-time classifier that watches your camera and instantly identifies whether it sees a cat, a dog or a person — labeling subjects the moment they enter frame.",
    highlights: [
      "Multi-class detection",
      "Automatic live labeling",
      "Models run in the browser",
    ],
    tech: ["Object Detection", "TensorFlow.js", "Real-time"],
    icon: ScanSearch,
    accent: "#7c6cff",
  },
  {
    slug: "stem-driver",
    index: "03",
    title: "STEM Driver",
    url: "https://stem-driver.vercel.app/",
    tagline: "Smart driver safety monitor",
    description:
      "A driver monitoring system that watches for yawns, drowsiness and phone use via MediaPipe + COCO-SSD — scoring safety live from the browser with no frames uploaded.",
    highlights: [
      "Drowsiness & yawn alerts",
      "Phone-use detection",
      "100% on-device inference",
    ],
    tech: ["MediaPipe", "COCO-SSD", "Edge AI"],
    icon: CarFront,
    accent: "#ffb547",
  },
  {
    slug: "empireai",
    index: "04",
    title: "EmpireAI",
    url: "https://empireai-three.vercel.app/",
    tagline: "All-in-one AI workspace",
    description:
      "A full AI workspace that combines multi-model chat, real-time web search and deep research with citations, document intelligence, coding, agents and long-term memory — a complete AI lab in one app.",
    highlights: [
      "Multi-model AI chat",
      "Cited live web searches",
      "Deep research + agents",
    ],
    tech: ["Multi-Model", "RAG", "Agents"],
    icon: Rocket,
    accent: "#35e39b",
  },
];