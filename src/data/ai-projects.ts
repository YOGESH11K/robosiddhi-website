import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  CarFront,
  Eye,
  Fingerprint,
  Gamepad2,
  HandMetal,
  Rocket,
  ScanFace,
  ScanSearch,
  ShoppingCart,
} from "lucide-react";

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
  /** Renders the project as the full-width flagship spotlight card. */
  featured?: boolean;
  /** Renders the project as the full-width closing spotlight card. */
  spotlight?: boolean;
}

/** Live browser-based AI builds from the RoboSiddhi lab. Add new projects here. */
export const aiProjects: AiProject[] = [
  {
    slug: "stem-attendance",
    index: "00",
    title: "STEM Attendance",
    url: "https://stem-attendance-six.vercel.app/",
    tagline: "AI face-recognition attendance",
    description:
      "The flagship attendance system from the RoboSiddhi lab. A face-recognition web app that signs students in with a single glance — no cards, no manual rolls. Built by Yash, it identifies faces instantly and marks attendance automatically from the browser, making every check-in contactless and instant.",
    highlights: [
      "Face-recognized check-in",
      "Zero-touch, instant sign-in",
      "Built by Yash in the RS lab",
    ],
    tech: ["Face Recognition", "Computer Vision", "Web App"],
    icon: Fingerprint,
    accent: "#ffd166",
    featured: true,
  },
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
  {
    slug: "stem-controller",
    index: "05",
    title: "STEM Controller",
    url: "https://stem-controller.vercel.app/",
    tagline: "Gesture-controlled Snake game",
    description:
      "A classic Snake game you can steer with the arrow keys — or with your index finger tracked live through your webcam. Computer-vision gesture recognition turns body motion straight into gameplay.",
    highlights: [
      "Webcam finger tracking",
      "Keyboard + gesture control",
      "Live score & high score",
    ],
    tech: ["Gesture AI", "Hand Tracking", "Real-time"],
    icon: Gamepad2,
    accent: "#ff5c7a",
  },
  {
    slug: "stem-vision-lab",
    index: "06",
    title: "Stem Vision Lab",
    url: "https://visionlab-ai.vercel.app/",
    tagline: "Interactive vision experiments",
    description:
      "An AI-powered computer vision laboratory featuring interactive vision experiments and real-time machine learning directly in the browser.",
    highlights: [
      "Interactive vision experiments",
      "Real-time ML in the browser",
      "On-device computer vision",
    ],
    tech: ["Computer Vision", "AI", "Machine Learning", "Real-time", "Vision AI"],
    icon: Eye,
    accent: "#ff8a5c",
  },
  {
    slug: "stem-shop",
    index: "07",
    title: "Stem Shop",
    url: "https://robosiddhi.shop/",
    tagline: "Robotics & STEM kits store",
    description:
      "The RoboSiddhi storefront for robotics kits, STEM education tools, 3D printers, drones and electronics parts — everything needed to build, solder and code, shipped across India.",
    highlights: [
      "Robotics & STEM kits",
      "3D printers, drones & electronics",
      "Free shipping across India",
    ],
    tech: ["Robotics", "STEM", "Electronics", "3D Printing", "Drones"],
    icon: ShoppingCart,
    accent: "#ffc94d",
  },
  {
    slug: "stem-face-mask",
    index: "08",
    title: "STEM Face Mask",
    url: "https://stemfacemask.vercel.app/",
    tagline: "Real-time face mask detection",
    description:
      "A real-time face mask detection system that uses your webcam to instantly identify whether a person is wearing a mask or not — classifying masked and unmasked faces live in the browser with no server uploads.",
    highlights: [
      "Real-time webcam detection",
      "Masked vs unmasked classification",
      "100% on-device inference",
    ],
    tech: ["Computer Vision", "TensorFlow.js", "Real-time"],
    icon: ScanFace,
    accent: "#00d4aa",
  },
  {
    slug: "stem-sign-language",
    index: "09",
    title: "STEM Sign Language",
    url: "https://stem-signlanguage.vercel.app/",
    tagline: "Real-time ASL gesture recognition",
    description:
      "A real-time American Sign Language recognition system that reads hand gestures straight from your webcam and translates them into letters and words — live in the browser with zero uploads. Built as a new frontier for accessible AI from the RoboSiddhi lab.",
    highlights: [
      "Real-time webcam hand tracking",
      "Live ASL letter recognition",
      "100% on-device inference",
      "Instant in-browser translation",
    ],
    tech: ["MediaPipe Hands", "Gesture AI", "TensorFlow.js", "Real-time"],
    icon: HandMetal,
    accent: "#e879f9",
    spotlight: true,
  },
];
