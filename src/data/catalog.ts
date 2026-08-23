import type { Product, Testimonial } from "@/types";

/**
 * Shop catalog. Prices intentionally omitted — show "price on request"
 * until verified pricing is configured (TODO_CONFIG).
 */
export const products: Product[] = [
  {
    slug: "explorer-starter-kit",
    name: "Explorer Starter Kit",
    category: "Beginner Kits",
    priceNote: "Price on request", // TODO_CONFIG
    difficulty: "Beginner",
    components: ["Arduino UNO-compatible board", "Breadboard + jumper set", "LED/resistor assortment", "Buzzer, LDR, buttons"],
    projectsPossible: ["15+ circuit experiments", "Night lamp", "Reaction game"],
    description:
      "The perfect first electronics kit — everything needed for the Explorer course path and dozens of home experiments.",
    badge: "Best for beginners",
  },
  {
    slug: "robot-builder-kit",
    name: "Robot Builder Kit",
    category: "Robotics Kits",
    priceNote: "Price on request", // TODO_CONFIG
    difficulty: "Beginner",
    components: ["Chassis + 2 drive wheels + caster", "Arduino UNO-compatible", "L298N driver", "HC-SR04 + IR sensors"],
    projectsPossible: ["Obstacle avoiding robot", "Line follower", "Bluetooth car (add-on)"],
    description:
      "Chassis-to-code robotics in one box. Build three classic robots by recombining the same core parts.",
    badge: "3 robots in 1 box",
  },
  {
    slug: "iot-innovator-kit",
    name: "IoT Innovator Kit",
    category: "IoT Kits",
    priceNote: "Price on request", // TODO_CONFIG
    difficulty: "Intermediate",
    components: ["ESP32 dev board", "DHT22 + soil sensor", "Relay module", "OLED display"],
    projectsPossible: ["Cloud weather node", "Plant monitor", "Smart switch"],
    description:
      "WiFi-connected sensing and control — the exact hardware used in our AI & IoT Explorer curriculum.",
  },
  {
    slug: "sensor-mega-pack",
    name: "Sensor Mega Pack",
    category: "Components",
    priceNote: "Price on request", // TODO_CONFIG
    difficulty: "Intermediate",
    components: ["37 sensor modules", "Sensor shield", "Organizer case", "Wiring guide booklet"],
    projectsPossible: ["Environment stations", "Security systems", "Custom inventions"],
    description:
      "A full palette of sensors for serious builders — temperature, motion, sound, gas, touch and more.",
  },
  {
    slug: "vision-lab-kit",
    name: "Vision & AI Lab Kit",
    category: "AI Kits",
    priceNote: "Price on request", // TODO_CONFIG
    difficulty: "Advanced",
    components: ["Raspberry Pi 4/5 (specify RAM)", "Camera module", "Motor HAT", "Prepped SD image"],
    projectsPossible: ["AI vision robot", "Face tracking mount", "Object counter"],
    description:
      "Everything for edge-AI robotics: compute, camera and motor control with our tuned software image.",
  },
  {
    slug: "classroom-bundle-10",
    name: "Classroom Bundle (10 students)",
    category: "School Bundles",
    priceNote: "Price on request", // TODO_CONFIG
    difficulty: "Beginner",
    components: ["10× Explorer kits", "Teacher master kit", "Curriculum access", "Storage trolley"],
    projectsPossible: ["Full-year school program", "Club activities", "Assessment builds"],
    description:
      "Deploy a complete hands-on class set with teacher resources — used across our partner schools.",
    badge: "For schools",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "My daughter went from asking 'what is a robot' to explaining sensors at the dinner table within two months. The showcase day was unforgettable.",
    name: "Parent name", // TODO_CONFIG
    role: "Parent · Young Innovators program",
  },
  {
    quote:
      "The teacher training changed how our whole STEM department teaches. We now run robotics periods ourselves with total confidence.",
    name: "Educator name", // TODO_CONFIG
    role: "STEM Coordinator · Partner School",
  },
  {
    quote:
      "I joined for the drones and stayed for everything else. Built my first AI vision robot here and it got me into my dream engineering college.",
    name: "Student name", // TODO_CONFIG
    role: "Alumnus · Research Internship",
  },
];

export const homepageFaqs = [
  {
    q: "What age is right to start robotics?",
    a: "Children can start as young as 8 with our block-coding and circuit programs. There is no upper limit — we teach school students, college students and working professionals.",
  },
  {
    q: "Does my child need prior coding experience?",
    a: "No. Every beginner path starts from zero with visual tools and guided builds, transitioning gradually to text coding when ready.",
  },
  {
    q: "Do students keep the kits they build?",
    a: "Lab kits stay at RoboSiddhi for classroom use; take-home kits are available for purchase and many courses include home-practice options.",
  },
  {
    q: "Can RoboSiddhi set up a lab in our school?",
    a: "Yes — that is one of our core offerings. We handle lab design, equipment, curriculum, teacher training and ongoing support. See the For Schools page.",
  },
  {
    q: "Are certificates provided?",
    a: "Yes. Every program includes a verifiable certificate with a unique ID that anyone can verify online on our certificate verification page.",
  },
  {
    q: "How do I know which program fits my child?",
    a: "Book a free lab visit. We assess interests hands-on and recommend a path — no pressure, no generic placements.",
  },
];
