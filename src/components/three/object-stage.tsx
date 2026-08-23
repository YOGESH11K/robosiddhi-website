"use client";

import dynamic from "next/dynamic";
import { useShowCanvas } from "@/lib/use-show-canvas";

export type SceneVariant = "arm" | "drone" | "code" | "stem" | "network";

const scenes: Record<SceneVariant, React.ComponentType> = {
  arm: dynamic(() => import("./robot-arm-scene"), { ssr: false }),
  drone: dynamic(() => import("./drone-scene"), { ssr: false }),
  code: dynamic(() => import("./code-scene"), { ssr: false }),
  stem: dynamic(() => import("./stem-scene"), { ssr: false }),
  network: dynamic(() => import("./network-scene"), { ssr: false }),
};

interface ObjectStageProps {
  variant: SceneVariant;
  /** Static visual shown on touch devices, small screens and reduced motion. */
  fallback: React.ReactNode;
  className?: string;
}

/**
 * Renders a lazy, desktop-only 3D scene or an accessible static fallback.
 * All technology pages go through this so WebGL never loads unnecessarily.
 */
export function ObjectStage({ variant, fallback, className }: ObjectStageProps) {
  const show = useShowCanvas();

  if (!show) return <div className={className}>{fallback}</div>;

  const Scene = scenes[variant];
  return (
    <div className={className}>
      <Scene />
    </div>
  );
}
