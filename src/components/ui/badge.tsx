import type { Difficulty } from "@/types";
import { cn } from "@/lib/utils";

const difficultyStyles: Record<Difficulty, string> = {
  Beginner: "text-success border-success/30 bg-success/10",
  Intermediate: "text-highlight border-highlight/30 bg-highlight/10",
  Advanced: "text-danger border-danger/30 bg-danger/10",
};

export function DifficultyBadge({
  level,
  className,
}: {
  level: Difficulty;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider",
        difficultyStyles[level],
        className,
      )}
    >
      <span className="h-1 w-1 rounded-full bg-current" />
      {level}
    </span>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-white/[0.04] px-2.5 py-0.5 text-xs text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
