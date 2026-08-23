"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  Cloud,
  Cpu,
  Radar,
  ScanEye,
  Workflow,
} from "lucide-react";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const STAGES = [
  {
    id: "sense",
    icon: Radar,
    name: "SENSOR",
    text: "Temperature, distance, light, motion — sensors digitize the physical world into data a controller can read.",
    example: "DHT22 reads 27°C and 64% humidity every second",
  },
  {
    id: "controller",
    icon: Cpu,
    name: "ESP32 / CONTROLLER",
    text: "A microcontroller collects readings, filters noise, packages data and decides what needs to happen next.",
    example: "ESP32 checks: humidity below threshold?",
  },
  {
    id: "network",
    icon: Cloud,
    name: "NETWORK",
    text: "WiFi, Bluetooth or MQTT carries the data beyond the device — to dashboards, storage or other machines.",
    example: "Reading published to topic home/livingroom",
  },
  {
    id: "intelligence",
    icon: ScanEye,
    name: "AI / LOGIC",
    text: "Rules or trained models interpret the stream — detecting patterns, classifying images and predicting what to do.",
    example: "Model spots 'plant needs water' pattern",
  },
  {
    id: "act",
    icon: Workflow,
    name: "ACTION",
    text: "The loop closes in the real world: pumps switch on, notifications fire, robots change course.",
    example: "Water pump ON for 5 seconds · dashboard updated",
  },
];

/** Animated IoT/AI data-flow pipeline — click any stage for detail. */
export function DataFlow() {
  const [activeId, setActiveId] = useState("controller");
  const activeIndex = STAGES.findIndex((s) => s.id === activeId);
  const active = STAGES[activeIndex];

  return (
    <div className="flex flex-col items-center gap-2">
      {STAGES.map((stage, i) => {
        const isActive = stage.id === activeId;
        return (
          <div key={stage.id} className="flex w-full max-w-xl flex-col items-center">
            <button
              onClick={() => setActiveId(stage.id)}
              aria-expanded={isActive}
              className={cn(
                "group flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all duration-300",
                isActive
                  ? "border-primary/50 bg-primary/10 shadow-glow-primary"
                  : "glass hover:border-primary/25",
              )}
            >
              <span
                className={cn(
                  "grid h-10 w-10 shrink-0 place-items-center rounded-lg border transition-colors",
                  isActive
                    ? "border-primary/50 bg-primary/15 text-primary"
                    : "border-border bg-white/[0.03] text-muted group-hover:text-foreground",
                )}
              >
                <stage.icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span
                  className={cn(
                    "block font-mono text-sm font-semibold tracking-[0.18em]",
                    isActive ? "text-primary" : "text-foreground",
                  )}
                >
                  {stage.name}
                </span>
              </span>
              <span className="ml-auto font-mono text-[10px] tracking-[0.22em] text-faint">
                STAGE {i + 1}
              </span>
            </button>

            {/* Detail panel */}
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  key="detail"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="w-full overflow-hidden"
                >
                  <div className="mt-3 rounded-xl border border-accent/25 bg-accent/[0.06] p-5">
                    <p className="leading-relaxed text-muted">{stage.text}</p>
                    <p className="mt-3 font-mono text-xs leading-relaxed text-success">
                      ▸ e.g. {stage.example}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Connector with flowing dashes */}
            {i < STAGES.length - 1 && (
              <div className="relative my-1 h-8" aria-hidden>
                <svg width="24" height="32" viewBox="0 0 24 32" className={cn(
                  "transition-opacity duration-300",
                  i === activeIndex || i === activeIndex - 1 ? "opacity-100" : "opacity-40",
                )}>
                  <line x1="12" y1="0" x2="12" y2="32" stroke="oklch(1 0 0/0.14)" strokeWidth="2" />
                  <line
                    x1="12" y1="0" x2="12" y2="32"
                    stroke="#2de2ff" strokeWidth="2"
                    strokeDasharray="4 12"
                    className="animate-dash-flow"
                  />
                  <path d="M7 26 L12 31 L17 26" fill="none" stroke="#2de2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        );
      })}

      <p className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
        <ArrowDown className="h-3.5 w-3.5 animate-bounce text-primary" aria-hidden />
        The loop repeats forever — that&apos;s an intelligent environment
      </p>
    </div>
  );
}
