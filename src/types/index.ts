export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Technology {
  slug: string;
  index: string;
  name: string;
  icon: string; // lucide icon key
  color: string; // hex accent
  difficulty: Difficulty;
  tagline: string;
  description: string;
  skills: string[];
  exampleProjects: string[];
}

export interface CurriculumModule {
  title: string;
  lessons: string[];
  project?: string;
}

export interface Program {
  slug: string;
  title: string;
  category:
    | "School Programs"
    | "Student Courses"
    | "Workshops"
    | "Summer Camps"
    | "Internships"
    | "Teacher Training"
    | "Corporate";
  audience: string;
  duration: string;
  difficulty: Difficulty;
  format: string;
  technologies: string[];
  summary: string;
  outcomes: string[];
  curriculum: CurriculumModule[];
  projectsBuilt: string[];
  prerequisites: string;
  faqs: { q: string; a: string }[];
  featured?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  difficulty: Difficulty;
  time: string;
  technologies: string[];
  components: string[];
  description: string;
  objective: string;
  howItWorks: string[];
  circuit: string[];
  codeLang: "cpp" | "python";
  code: string;
  steps: { title: string; detail: string }[];
  commonErrors: { error: string; fix: string }[];
  challenge: string;
  related: string[];
  featured?: boolean;
  labTemplate?: boolean;
}

export interface LabEvent {
  slug: string;
  title: string;
  type: "Workshop" | "Bootcamp" | "Competition" | "Camp" | "School Event";
  date: string; // ISO
  endDate?: string;
  location: string;
  duration: string;
  ageGroup: string;
  description: string;
  highlights: string[];
  seats: string; // TODO_CONFIG editable placeholder
  status: "upcoming" | "registration-open";
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  featured?: boolean;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  priceNote: string; // TODO_CONFIG — no invented prices
  difficulty: Difficulty;
  components: string[];
  projectsPossible: string[];
  description: string;
  badge?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string; // TODO_CONFIG placeholders
}
