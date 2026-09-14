"use client";

import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/** Futuristic HUD targeting brackets. Position with `className` (e.g. `inset-3`). Inherits `color`. */
export function HudBrackets({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-10 select-none",
        className
      )}
      style={style}
    >
      <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-current" />
      <span className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-current" />
      <span className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-current" />
      <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-current" />
    </span>
  );
}

/** Rotating radar sweep marker for HUD status strips. */
export function HudRadar({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "relative grid h-5 w-5 shrink-0 place-items-center",
        className
      )}
    >
      <span className="absolute inset-0 rounded-full border border-primary/45" />
      <span className="absolute inset-1 rounded-full border border-primary/20" />
      <span className="absolute inset-x-[3px] top-1/2 h-px bg-primary/25" />
      <span className="absolute inset-y-[3px] left-1/2 w-px bg-primary/25" />
      <span
        className="absolute inset-0 animate-radar rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(45,226,255,0.9) 72deg, transparent 128deg)",
        }}
      />
    </span>
  );
}