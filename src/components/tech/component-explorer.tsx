"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface PartInfo {
  id: string;
  name: string;
  role: string;
  how: string[];
  tryIt: string;
  glyph: string; // simple svg path drawn in a 48x48 box
}

const PARTS: PartInfo[] = [
  {
    id: "led",
    name: "LED",
    role: "The robot's simplest output — a light you control with code.",
    how: [
      "An LED has two legs: the long one (anode) goes toward positive, the short one (cathode) toward ground.",
      "A resistor in series protects it from too much current.",
      "Your microcontroller switches it on and off by setting a pin HIGH or LOW.",
    ],
    tryIt: "Blink the onboard LED — the 'Hello World' of hardware.",
    glyph: "M24 8 L24 20 M18 40 h12 M21 36 h6 M16 28 a8 8 0 0 1 16 0 l-2 8 h-12 z",
  },
  {
    id: "sensor",
    name: "Ultrasonic Sensor",
    role: "Gives your robot 'hearing' — distance measured with sound.",
    how: [
      "It fires an ultrasonic pulse and listens for the echo.",
      "Time-of-flight ÷ speed of sound = distance to the obstacle.",
      "Robots use this to stop, turn away or navigate around objects.",
    ],
    tryIt: "Build an obstacle-avoiding robot that never bumps into walls.",
    glyph: "M14 34 a10 10 0 0 1 20 0 M19 30 a5 5 0 0 1 10 0 M24 26 v14 M8 38 a17 17 0 0 1 32 0",
  },
  {
    id: "motor",
    name: "DC Motor",
    role: "Converts electric current into rotation — wheels spin.",
    how: [
      "Current through coils creates magnetic fields that spin the shaft.",
      "Direction reverses when you flip the polarity.",
      "A motor driver module lets the microcontroller handle higher currents safely.",
    ],
    tryIt: "Drive a two-wheeled robot forward, backward and in circles.",
    glyph: "M16 24 h-8 M40 24 h-8 M24 16 v-8 M18 18 l-5 -5 M30 18 l5 -5 M24 24 m-7 0 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0",
  },
  {
    id: "servo",
    name: "Servo Motor",
    role: "Rotation with precision — moves to an exact angle on command.",
    how: [
      "Inside there's a motor, gearbox and position sensor working together.",
      "A pulse-width signal tells it which angle to hold (usually 0–180°).",
      "Perfect for robotic arms, steering and pointing sensors.",
    ],
    tryIt: "Sweep a robotic arm gripper open and closed like a hand.",
    glyph: "M12 36 h24 M24 36 v-6 M24 30 m-4 -6 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 M24 24 l8 -10 M32 14 l4 2 -3 3 z",
  },
  {
    id: "micro",
    name: "Microcontroller",
    role: "The brain — reads sensors, runs your code, drives outputs.",
    how: [
      "Boards like Arduino and ESP32 pack a CPU, memory and GPIO pins.",
      "You write code on a computer, upload it over USB, and it runs forever.",
      "ESP32 adds WiFi and Bluetooth so projects can live on the network.",
    ],
    tryIt: "Open the Robotics Lab and program a virtual circuit right now.",
    glyph: "M14 14 h20 v20 h-20 z M14 20 h-6 M14 28 h-6 M34 20 h6 M34 28 h6 M20 14 v-6 M28 14 v-6 M20 34 v6 M28 34 v6",
  },
];

/** Interactive educational panel for core robotics components. */
export function ComponentExplorer() {
  const [activeId, setActiveId] = useState<string>("micro");
  const active = PARTS.find((p) => p.id === activeId)!;

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      {/* Palette */}
      <div role="tablist" aria-label="Robotics components" className="flex flex-col gap-2.5">
        {PARTS.map((part) => {
          const isActive = part.id === activeId;
          return (
            <button
              key={part.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(part.id)}
              className={cn(
                "group flex items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300",
                isActive
                  ? "border-primary/50 bg-primary/10 shadow-glow-primary"
                  : "glass hover:border-primary/25",
              )}
            >
              <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" fill="none" aria-hidden>
                <path
                  d={part.glyph}
                  stroke={isActive ? "#2de2ff" : "#8d97b0"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-colors duration-300"
                />
              </svg>
              <span>
                <span className={cn("block font-medium transition-colors", isActive ? "text-primary" : "text-foreground")}>
                  {part.name}
                </span>
                <span className="mt-0.5 block text-xs text-faint">
                  Click to learn what it does
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Info panel */}
      <div className="relative min-h-[320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="glass-strong flex h-full flex-col rounded-2xl p-7 sm:p-9"
            aria-live="polite"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-faint">
              Component · {String(PARTS.findIndex((p) => p.id === active.id) + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-gradient">
              {active.name}
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-foreground/90">{active.role}</p>

            <ul className="mt-6 flex flex-col gap-3">
              {active.how.map((line, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-md border border-primary/30 bg-primary/10 font-mono text-[10px] text-primary">
                    {i + 1}
                  </span>
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-7">
              <p className="inline-flex items-start gap-2 rounded-xl border border-highlight/25 bg-highlight/[0.08] px-4 py-3 text-sm text-highlight">
                <X className="mt-0.5 hidden" aria-hidden />
                <span>
                  <span className="font-medium">Try it:</span> {active.tryIt}
                </span>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
