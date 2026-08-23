"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Compass } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const HeroScene = dynamic(() => import("./hero-scene"), { ssr: false });

function useShowCanvas() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const wide = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () =>
      setEnabled(fine.matches && wide.matches && !reduced.matches);
    update();
    fine.addEventListener("change", update);
    wide.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      wide.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}

/** Static SVG robot shown before mount, on touch devices, small screens and for reduced motion. */
function RobotFallback() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[420px] lg:max-w-none"
      role="img"
      aria-label="Illustration of a friendly robot"
    >
      <div className="absolute inset-[8%] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute inset-[16%] rounded-full bg-accent/10 blur-3xl" />
      <svg viewBox="0 0 320 320" fill="none" className="relative h-full w-full drop-shadow-[0_24px_60px_oklch(0.75_0.14_210/0.25)]">
        <circle cx="160" cy="160" r="140" stroke="oklch(0.75 0.14 210 / 0.16)" strokeWidth="1" />
        <circle cx="160" cy="160" r="112" stroke="oklch(0.62 0.19 285 / 0.18)" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="300" cy="118" r="5" fill="#7c6cff" opacity="0.9" />
        <circle cx="34" cy="212" r="4" fill="#2de2ff" opacity="0.9" />
        {/* antenna */}
        <line x1="196" y1="86" x2="206" y2="58" stroke="#22314f" strokeWidth="6" strokeLinecap="round" />
        <circle cx="208" cy="52" r="9" fill="#7c6cff" className="animate-blink" />
        {/* head */}
        <rect x="80" y="88" width="160" height="122" rx="26" fill="#101a30" stroke="oklch(1 0 0 / 0.12)" strokeWidth="1.5" />
        <rect x="100" y="108" width="120" height="82" rx="18" fill="#060b18" />
        {/* eyes */}
        <circle cx="136" cy="142" r="11" fill="#2de2ff">
          <animate attributeName="opacity" values="1;1;0.35;1" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="184" cy="142" r="11" fill="#2de2ff">
          <animate attributeName="opacity" values="1;1;0.35;1" dur="3.2s" repeatCount="indefinite" />
        </circle>
        {/* mouth */}
        <rect x="144" y="168" width="32" height="6" rx="3" fill="#7c6cff" />
        {/* ears */}
        <rect x="62" y="128" width="14" height="42" rx="7" fill="#22314f" />
        <rect x="244" y="128" width="14" height="42" rx="7" fill="#22314f" />
        {/* neck */}
        <rect x="146" y="210" width="28" height="20" rx="6" fill="#16233d" />
        {/* collar / chest */}
        <rect x="104" y="230" width="112" height="46" rx="18" fill="#0d1730" stroke="oklch(1 0 0 / 0.12)" strokeWidth="1.5" />
        <circle cx="160" cy="253" r="10" fill="none" stroke="#2de2ff" strokeWidth="3" />
        <circle cx="160" cy="253" r="3.5" fill="#2de2ff" />
      </svg>
      <span className="glass absolute -left-2 top-[18%] flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-primary animate-float">
        <Compass className="h-3.5 w-3.5" /> Arduino C++
      </span>
      <span className="glass absolute -right-2 top-[46%] rounded-xl px-3 py-2 text-xs font-medium text-accent animate-float-slow">
        AI Vision
      </span>
      <span className="glass absolute bottom-[10%] left-[16%] rounded-xl px-3 py-2 text-xs font-medium text-highlight animate-float [animation-delay:-3s]">
        IoT · ESP32
      </span>
    </div>
  );
}

const headline = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
const line = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

export function Hero() {
  const showCanvas = useShowCanvas();
  const reduced = useReducedMotion();

  return (
    <section
      aria-label="RoboSiddhi introduction"
      className="relative flex min-h-svh items-center overflow-hidden pb-14 pt-28 sm:pt-36"
    >
      {/* backdrop */}
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-accent/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-8%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-[130px]" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-6">
        <motion.div variants={headline} initial="hidden" animate="visible">
          <motion.p
            variants={line}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white/[0.03] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-pulse-ring" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Robotics · AI · IoT · STEM · Jaipur
          </motion.p>

          <motion.h1
            variants={line}
            className="mt-6 font-display text-[clamp(2.75rem,8vw,5.25rem)] font-bold leading-[0.98] tracking-tight"
          >
            BUILD THE FUTURE.
            <br />
            <span className="text-gradient">DON&apos;T JUST WATCH IT.</span>
          </motion.h1>

          <motion.p
            variants={line}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Learn robotics, AI, IoT, coding and emerging technologies by building
            real-world projects — circuits you wire, robots you code, machines
            that work.
          </motion.p>

          <motion.div variants={line} className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href="/robotics-lab" size="lg">
              Start Building
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="/programs" variant="secondary" size="lg">
              Explore Programs
            </ButtonLink>
          </motion.div>

          <motion.p
            variants={line}
            className="mt-8 font-mono text-xs tracking-wide text-faint"
          >
            AGES 8+ · NO EXPERIENCE NEEDED · CERTIFICATION INCLUDED
          </motion.p>
        </motion.div>

        <div className={cn("relative", !showCanvas && "pb-6")}>
          {showCanvas ? (
            <div className="aspect-square max-h-[640px] w-full">
              <HeroScene />
            </div>
          ) : (
            <RobotFallback />
          )}
        </div>
      </div>

      {!reduced && (
        <a
          href="#impact"
          aria-label="Scroll to see our impact"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-faint transition-colors hover:text-primary sm:block"
        >
          <ChevronDown className="h-5 w-5 animate-float" />
        </a>
      )}
    </section>
  );
}
