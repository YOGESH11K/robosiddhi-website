import {
  Bot,
  Boxes,
  BrainCircuit,
  Bug,
  Car,
  Code2,
  CloudUpload,
  Cpu,
  Flag,
  Flame,
  Hammer,
  HeartHandshake,
  Lightbulb,
  Megaphone,
  Network,
  Plane,
  Radar,
  Rocket,
  ScanEye,
  School,
  ShieldCheck,
  Sparkles,
  Telescope,
  Trophy,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Data files reference icons by string key so business data stays
 * serializable (CMS-ready). Map them to Lucide components here.
 * Add new entries when data grows.
 */
const iconMap: Record<string, LucideIcon> = {
  Bot,
  BrainCircuit,
  Network,
  Code2,
  Plane,
  Rocket,
  Boxes,
  Lightbulb,
  Wrench,
  School,
  Users,
  Hammer,
  Telescope,
  ShieldCheck,
  Megaphone,
  Zap,
  Bug,
  Car,
  Radar,
  CloudUpload,
  ScanEye,
  HeartHandshake,
  Trophy,
  Flag,
  Flame,
  Sparkles,
  Cpu,
};

export function TechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Bot;
  return <Icon className={className} aria-hidden />;
}
