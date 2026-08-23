import type { Program } from "@/types";

export const programs: Program[] = [
  {
    slug: "young-innovators-robotics",
    title: "Young Innovators Robotics",
    category: "School Programs",
    audience: "Classes 4–7",
    duration: "Full academic year · weekly sessions",
    difficulty: "Beginner",
    format: "On-campus / RoboSiddhi lab",
    technologies: ["Block Coding", "Arduino", "Electronics", "3D Printing"],
    summary:
      "A year-long school program where young students discover robotics through story-driven builds — from first LED to a working robot they designed themselves.",
    outcomes: [
      "Understand circuits, sensors and motors by building with them",
      "Write first programs using visual block coding, then Arduino C++ basics",
      "Design and 3D-print simple robot parts",
      "Present projects at an end-of-year innovation fair",
    ],
    curriculum: [
      {
        title: "Module 1 · Electricity & Circuits",
        lessons: ["What is a circuit?", "LEDs, resistors & switches", "Breadboard skills", "Series vs parallel"],
        project: "Traffic light model",
      },
      {
        title: "Module 2 · Code Your First Board",
        lessons: ["Meet the microcontroller", "Blocks → blink", "Buttons & buzzers", "Sensing light"],
        project: "Reactive night lamp",
      },
      {
        title: "Module 3 · Machines That Move",
        lessons: ["DC motors & gears", "Motor drivers", "Chassis assembly", "Remote control basics"],
        project: "Build your first robot car",
      },
      {
        title: "Module 4 · Innovation Fair Prep",
        lessons: ["Design thinking sprint", "Prototype & test", "3D printed upgrades", "Pitch like an engineer"],
        project: "Student-choice innovation project",
      },
    ],
    projectsBuilt: ["Traffic light model", "Night lamp", "Robot car", "Innovation fair project"],
    prerequisites: "None. Curiosity required.",
    faqs: [
      { q: "Do students need their own kit?", a: "No. Kits are provided during sessions; schools can also purchase class kits for continued practice." },
      { q: "Is this aligned with NEP/STEM goals?", a: "Yes — the curriculum maps to NEP 2020 experiential learning and ATL objectives." },
    ],
    featured: true,
  },
  {
    slug: "arduino-mastery",
    title: "Arduino Mastery",
    category: "Student Courses",
    audience: "Age 12+ · beginners welcome",
    duration: "12 weeks · 24 guided builds",
    difficulty: "Beginner",
    format: "Lab + online support",
    technologies: ["Arduino", "C++", "Sensors", "Motors"],
    summary:
      "The definitive starting point for hardware coding. From blinking an LED to building sensor-driven systems — you'll finish with robots you built and coded end-to-end.",
    outcomes: [
      "Write confident Arduino C++ (digital, analog, interrupts, serial)",
      "Interface 15+ sensors and modules",
      "Control DC, servo and stepper motors",
      "Debug systematically with a multimeter and serial monitor",
    ],
    curriculum: [
      {
        title: "Phase 1 · Foundations",
        lessons: ["Board anatomy & IDE", "Blink, PWM & fades", "Reading buttons", "Serial debugging"],
        project: "Interactive LED console",
      },
      {
        title: "Phase 2 · Sensing the World",
        lessons: ["Ultrasonic distance", "IR & LDR", "Temperature/humidity", "Building sensor dashboards"],
        project: "Room environment monitor",
      },
      {
        title: "Phase 3 · Motion & Power",
        lessons: ["Servo mechanics", "H-bridge motor control", "Power budgets", "Wireless control"],
        project: "Gesture-controlled robot",
      },
      {
        title: "Phase 4 · Capstone",
        lessons: ["System design", "Enclosure & 3D printing", "Testing matrix", "Demo day"],
        project: "Self-directed capstone robot",
      },
    ],
    projectsBuilt: ["LED console", "Environment monitor", "Gesture robot", "Capstone build"],
    prerequisites: "No experience needed. A laptop helps for home practice.",
    faqs: [
      { q: "Which board do we use?", a: "We start on Arduino UNO R3-compatible boards and introduce ESP32 in advanced weeks." },
      { q: "Will I keep the kit?", a: "Take-home kits are available; ask at registration." },
    ],
    featured: true,
  },
  {
    slug: "ai-and-iot-explorer",
    title: "AI & IoT Explorer",
    category: "Student Courses",
    audience: "Age 14+ · basic coding helpful",
    duration: "16 weeks",
    difficulty: "Intermediate",
    format: "Hybrid",
    technologies: ["ESP32", "Python", "MQTT", "Computer Vision"],
    summary:
      "Connect devices to the cloud, stream sensor data, automate environments and put computer vision on edge hardware — the full connected-stack experience.",
    outcomes: [
      "Build WiFi-connected ESP32 devices with MQTT telemetry",
      "Create live dashboards and automations",
      "Train and deploy simple vision models on edge devices",
      "Complete a smart-environment capstone",
    ],
    curriculum: [
      {
        title: "Unit 1 · Connected Devices",
        lessons: ["ESP32 deep dive", "WiFi & MQTT", "Sensor streaming", "OTA updates"],
        project: "Cloud weather node",
      },
      {
        title: "Unit 2 · Automation",
        lessons: ["Relays & appliances safety", "Dashboard design", "Rules engine", "Voice interfaces"],
        project: "Smart room controller",
      },
      {
        title: "Unit 3 · Edge AI",
        lessons: ["Image capture (ESP32-CAM)", "Training with Teachable Machine", "Deploying models", "Vision + action"],
        project: "Vision security cam",
      },
      {
        title: "Unit 4 · Capstone",
        lessons: ["Architecture planning", "Integration testing", "Failure modes", "Showcase"],
        project: "Smart environment system",
      },
    ],
    projectsBuilt: ["Weather node", "Smart room", "Vision cam", "Capstone system"],
    prerequisites: "Arduino Mastery or basic C++/Python comfort.",
    faqs: [{ q: "Do I need my own ESP32?", a: "Labs provide hardware; take-home bundles are optional." }],
    featured: true,
  },
  {
    slug: "drone-engineering-bootcamp",
    title: "Drone Engineering Bootcamp",
    category: "Workshops",
    audience: "Age 13+",
    duration: "5 days · intensive",
    difficulty: "Intermediate",
    format: "In-person lab",
    technologies: ["Flight Controllers", "Radio Systems", "Aerodynamics", "Simulation"],
    summary:
      "Five intense days from flight physics to a flying quadcopter you assembled, calibrated and test-flew — plus simulator training and safe-flying certification.",
    outcomes: [
      "Explain thrust, lift and stability trade-offs",
      "Assemble & wire a complete quadcopter",
      "Configure Betaflight and pass safety checks",
      "Fly assisted missions and log flight data",
    ],
    curriculum: [
      { title: "Day 1 · Flight Science", lessons: ["Forces & frames", "Components overview", "Simulator training"] },
      { title: "Day 2 · Build Day", lessons: ["Frame & power distribution", "Motors & ESCs", "FC wiring"] },
      { title: "Day 3 · Configuration", lessons: ["Betaflight setup", "Calibration", "Failsafes"] },
      { title: "Day 4–5 · Flight School", lessons: ["Line-of-sight drills", "Assisted modes", "Mission challenge"] },
    ],
    projectsBuilt: ["Personal quadcopter", "Flight log portfolio"],
    prerequisites: "Comfort with basic tools. Age 13+.",
    faqs: [{ q: "Is flying legal here?", a: "We fly indoors/on approved grounds following DGCA hobby guidelines; the program includes a safety module." }],
    featured: true,
  },
  {
    slug: "summer-of-innovation",
    title: "Summer of Innovation Camp",
    category: "Summer Camps",
    audience: "Age 8–16 · age-batched",
    duration: "3–4 weeks · half-day",
    difficulty: "Beginner",
    format: "In-person lab",
    technologies: ["Robotics", "Coding", "Drones", "3D Printing"],
    summary:
      "A high-energy summer sprint where campers rotate through robotics, coding, drones and 3D printing labs, finishing with a showcase for parents.",
    outcomes: [
      "Build 6+ take-home-ready projects",
      "Try every RoboSiddhi lab technology",
      "Develop teamwork via team challenges",
      "Graduate with a portfolio + certificate",
    ],
    curriculum: [
      { title: "Week 1 · Robotics & Circuits", lessons: ["Circuit basics", "First robots", "Sensor games"] },
      { title: "Week 2 · Coding Universe", lessons: ["Block coding", "Game logic", "Microcontroller projects"] },
      { title: "Week 3 · Flight & Fabrication", lessons: ["Drone sims", "CAD modeling", "3D printing lab"] },
      { title: "Week 4 · Showcase Sprint", lessons: ["Team capstone", "Rehearsals", "Parent showcase day"] },
    ],
    projectsBuilt: ["6+ weekly builds", "Team capstone"],
    prerequisites: "None.",
    faqs: [{ q: "What are batch sizes?", a: "Max 15 campers per mentor for hands-on attention." }],
  },
  {
    slug: "school-teacher-upskilling",
    title: "Teacher Upskilling Program",
    category: "Teacher Training",
    audience: "School STEM/ATL teachers",
    duration: "6 weekends",
    difficulty: "Intermediate",
    format: "Hybrid · onsite + online",
    technologies: ["Arduino", "IoT", "Curriculum Design", "Assessment"],
    summary:
      "Equip your teachers to run robotics classes independently — hardware confidence, lesson planning, classroom management for maker spaces and assessment frameworks.",
    outcomes: [
      "Confidently teach Arduino/ESP32 fundamentals",
      "Run 30+ ready-made classroom activities",
      "Design rubrics for project-based assessment",
      "Maintain and troubleshoot a school lab",
    ],
    curriculum: [
      { title: "Weekend 1–2 · Hardware Confidence", lessons: ["Electronics refresher", "Arduino teaching kit", "Common student bugs"] },
      { title: "Weekend 3–4 · Pedagogy", lessons: ["Lesson design", "Differentiation", "Safety protocols"] },
      { title: "Weekend 5–6 · Lab Leadership", lessons: ["Lab ops", "Assessment design", "Annual planning"] },
    ],
    projectsBuilt: ["Teaching portfolio", "Year-long curriculum plan"],
    prerequisites: "Teaching role at partner institution.",
    faqs: [],
  },
  {
    slug: "industry-innovation-sprint",
    title: "Industry Innovation Sprint",
    category: "Corporate",
    audience: "Companies · R&D & L&D teams",
    duration: "Custom (1–10 days)",
    difficulty: "Advanced",
    format: "Onsite / offsite",
    technologies: ["Prototyping", "IoT", "Automation", "Design Thinking"],
    summary:
      "Hands-on prototyping sprints for corporate teams — rapid hardware skills, innovation culture and working proof-of-concepts built around your real problems.",
    outcomes: [
      "Team prototyping fluency (sensors, controllers, cloud)",
      "Working PoC addressing a real business use-case",
      "Innovation process playbook for internal reuse",
    ],
    curriculum: [
      { title: "Sprint Flow", lessons: ["Problem framing", "Tech crash-course", "Build cycles", "Executive demo"] },
    ],
    projectsBuilt: ["Business PoC prototype"],
    prerequisites: "Scoping call required.",
    faqs: [],
  },
  {
    slug: "research-internship",
    title: "Research & Innovation Internship",
    category: "Internships",
    audience: "College students",
    duration: "8–12 weeks",
    difficulty: "Advanced",
    format: "Mentored · lab access",
    technologies: ["Embedded Systems", "AI", "PCB Design", "Research Methods"],
    summary:
      "Work alongside RoboSiddhi engineers on real products and research — embedded systems, PCBs, edge AI — and ship something real with your name on it.",
    outcomes: [
      "Own a feature/research problem end-to-end",
      "Learn professional toolchains (Git, CI, review)",
      "Co-author documentation or a paper/blog",
      "Receive a verified internship certificate",
    ],
    curriculum: [
      { title: "Phase 1 · Onboarding", lessons: ["Codebase & lab tour", "Toolchain setup", "Problem assignment"] },
      { title: "Phase 2 · Deep Work", lessons: ["Weekly mentor reviews", "Prototyping sprints", "Documentation discipline"] },
      { title: "Phase 3 · Ship", lessons: ["Testing & hardening", "Final report", "Public demo"] },
    ],
    projectsBuilt: ["Shipped product feature or research artifact"],
    prerequisites: "Selection via application + technical interview.",
    faqs: [],
  },
];

export function getProgram(slug: string) {
  return programs.find((p) => p.slug === slug);
}

export const programCategories = [...new Set(programs.map((p) => p.category))];
