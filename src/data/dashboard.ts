/**
 * Student dashboard demo data.
 * This is a DEMO PREVIEW profile — no real student accounts exist yet.
 * TODO_CONFIG: replace with authenticated user data once accounts ship.
 */

import type { Difficulty } from "@/types";

export interface DemoProfile {
  name: string;
  handle: string;
  joinedLabel: string;
  levelName: string;
  xp: number;
  xpToNext: number;
}

export interface SkillMapEntry {
  key: "ROBOTICS" | "CODING" | "AI" | "IOT" | "ELECTRONICS" | "STEM";
  label: string;
  progress: number; // 0–100
  note: string;
}

export interface DemoBadge {
  name: string;
  description: string;
  icon: string; // lucide icon key
  earned: boolean;
}

export interface DashboardProject {
  title: string;
  status: "Completed" | "In Progress" | "Planned";
  difficulty: Difficulty;
  tech: string[];
  href?: string;
}

export interface ActivityItem {
  action: string;
  target: string;
  when: string;
}

export const demoProfile: DemoProfile = {
  name: "Future Builder",
  handle: "@demo-builder",
  joinedLabel: "Demo preview account",
  levelName: "Circuit Apprentice",
  xp: 640,
  xpToNext: 1000,
};

export const skillMap: SkillMapEntry[] = [
  { key: "ROBOTICS", label: "Robotics", progress: 72, note: "Motors, chassis, control" },
  { key: "CODING", label: "Coding", progress: 58, note: "Blocks → Arduino C++" },
  { key: "ELECTRONICS", label: "Electronics", progress: 66, note: "Circuits & sensors" },
  { key: "IOT", label: "IoT", progress: 34, note: "ESP32 · MQTT basics" },
  { key: "AI", label: "AI", progress: 21, note: "Vision experiments" },
  { key: "STEM", label: "STEM", progress: 61, note: "Science of motion & energy" },
];

export const demoBadges: DemoBadge[] = [
  { name: "First Circuit", description: "Lit your first LED", icon: "Zap", earned: true },
  { name: "Bug Hunter", description: "Fixed 10 debug challenges", icon: "Bug", earned: true },
  { name: "Wheeled Wonder", description: "Built a moving robot", icon: "Car", earned: true },
  { name: "Sensor Sensei", description: "Used 8 different sensors", icon: "Radar", earned: true },
  { name: "Cloud Connector", description: "Streamed data over WiFi", icon: "CloudUpload", earned: false },
  { name: "Flight Ready", description: "Completed drone workshop", icon: "Plane", earned: false },
  { name: "Visionary", description: "Trained a vision model", icon: "ScanEye", earned: false },
  { name: "Mentor", description: "Helped a younger builder", icon: "HeartHandshake", earned: false },
];

export const dashboardProjects: DashboardProject[] = [
  {
    title: "Obstacle Avoiding Robot",
    status: "Completed",
    difficulty: "Beginner",
    tech: ["Arduino", "HC-SR04"],
    href: "/projects/obstacle-avoiding-robot",
  },
  {
    title: "Smart Plant Monitor",
    status: "In Progress",
    difficulty: "Intermediate",
    tech: ["ESP32", "Soil sensor"],
  },
  {
    title: "Line Follower v2",
    status: "In Progress",
    difficulty: "Beginner",
    tech: ["IR array", "PID"],
  },
  {
    title: "Voice-Controlled LED Room",
    status: "Planned",
    difficulty: "Intermediate",
    tech: ["Bluetooth", "Relay"],
  },
];

export const recentActivity: ActivityItem[] = [
  { action: "Completed build step", target: "Obstacle Avoiding Robot · wiring", when: "Today" },
  { action: "Earned badge", target: "Wheeled Wonder", when: "Yesterday" },
  { action: "Finished quiz", target: "Ultrasonic sensing basics", when: "2 days ago" },
  { action: "Saved project", target: "Smart Plant Monitor", when: "3 days ago" },
  { action: "Attended session", target: "Weekend Robotics Lab", when: "Last week" },
];
