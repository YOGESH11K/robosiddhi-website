import type { Technology } from "@/types";

export const technologies: Technology[] = [
  {
    slug: "robotics",
    index: "01",
    name: "Robotics",
    icon: "Bot",
    color: "#2de2ff",
    difficulty: "Beginner",
    tagline: "Machines that move, sense and react",
    description:
      "Design and build real robots — wheeled, walking, robotic arms and competition bots. Learn mechanics, electronics and control as one connected system.",
    skills: ["Chassis & drivetrain design", "Motor control", "Sensors & feedback", "Autonomous navigation"],
    exampleProjects: ["Obstacle avoiding robot", "Line follower", "Robotic arm", "Bluetooth car"],
  },
  {
    slug: "artificial-intelligence",
    index: "02",
    name: "Artificial Intelligence",
    icon: "BrainCircuit",
    color: "#7c6cff",
    difficulty: "Advanced",
    tagline: "Teach machines to see, decide and learn",
    description:
      "From your first neural network to computer-vision robots — train models, run them on edge devices and give machines the ability to perceive.",
    skills: ["Python + ML basics", "Computer vision", "Edge AI (ESP32-CAM, Raspberry Pi)", "Data collection & training"],
    exampleProjects: ["AI vision robot", "Gesture recognition", "Face-tracking turret", "Smart sorting machine"],
  },
  {
    slug: "iot",
    index: "03",
    name: "IoT",
    icon: "Network",
    color: "#35e39b",
    difficulty: "Intermediate",
    tagline: "Connect everything. Control anything.",
    description:
      "Build connected devices that sense the physical world and talk to the cloud — dashboards, automations and smart environments you control from anywhere.",
    skills: ["WiFi/BLE connectivity", "MQTT & APIs", "Cloud dashboards", "Home automation"],
    exampleProjects: ["Smart home system", "Weather station", "Plant monitor", "IoT security system"],
  },
  {
    slug: "coding",
    index: "04",
    name: "Coding",
    icon: "Code2",
    color: "#ffb547",
    difficulty: "Beginner",
    tagline: "Your superpower for every technology",
    description:
      "Start with visual block coding, graduate to Python and C++. Code is the thread that ties robots, AI and IoT together — we make it second nature.",
    skills: ["Block → text transition", "Arduino C++", "Python", "Problem solving & logic"],
    exampleProjects: ["LED games", "Sensor dashboards", "Mini apps", "Robot firmware"],
  },
  {
    slug: "drones",
    index: "05",
    name: "Drones",
    icon: "Plane",
    color: "#ff5c7a",
    difficulty: "Intermediate",
    tagline: "Engineering that takes flight",
    description:
      "Aerodynamics, flight controllers, telemetry and mission planning. Build, calibrate and fly drones safely — then automate them.",
    skills: ["Flight physics", "FC configuration", "Radio & telemetry", "Autonomous missions"],
    exampleProjects: ["Quadcopter build", "Racing drone", "Delivery prototype", "Mapping mission"],
  },
  {
    slug: "space-technology",
    index: "06",
    name: "Space Technology",
    icon: "Rocket",
    color: "#9db9ff",
    difficulty: "Advanced",
    tagline: "Reach beyond the classroom",
    description:
      "Model satellites, build CanSat-style payloads, track weather balloons and decode real satellite signals — space science made hands-on.",
    skills: ["Telemetry & ground stations", "Payload design", "Orbit basics", "Sensor logging"],
    exampleProjects: ["CanSat mission", "Weather balloon", "Satellite tracker", "Rocket telemetry kit"],
  },
  {
    slug: "3d-printing",
    index: "07",
    name: "3D Printing",
    icon: "Boxes",
    color: "#f472b6",
    difficulty: "Beginner",
    tagline: "Turn imagination into hardware",
    description:
      "CAD modeling, slicing, printing and post-processing. Every robot needs a body — here students manufacture their own parts.",
    skills: ["CAD (Tinkercad → Fusion)", "Slicing & materials", "Printer calibration", "Design for assembly"],
    exampleProjects: ["Custom robot chassis", "Enclosures", "Prosthetic hand prototype", "Drone frame"],
  },
];

export function getTechnology(slug: string) {
  return technologies.find((t) => t.slug === slug);
}
