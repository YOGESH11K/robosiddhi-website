"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

const BOOT_KEY = "rs-booted";
const STEPS = ["INITIALIZING...", "ROBO SIDDHI", "READY TO BUILD"];

/**
 * First-visit boot experience: a small robot assembles the wordmark,
 * then hands over to the site. Shows once per browser session.
 */
export function BootScreen() {
  const reduced = useReducedMotion();
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduced) return;
    try {
      if (sessionStorage.getItem(BOOT_KEY)) return;
    } catch {
      return;
    }
    setShow(true);
    document.body.style.overflow = "hidden";

    const stepTimers = [
      window.setTimeout(() => setStep(1), 700),
      window.setTimeout(() => setStep(2), 1400),
    ];
    const done = window.setTimeout(() => {
      try {
        sessionStorage.setItem(BOOT_KEY, "1");
      } catch {
        /* private mode — boot screen simply replays */
      }
      setShow(false);
      document.body.style.overflow = "";
    }, 2100);

    return () => {
      stepTimers.forEach(clearTimeout);
      clearTimeout(done);
      document.body.style.overflow = "";
    };
  }, [reduced]);

  const letters = "ROBOSIDDHI".split("");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: EASE } }}
          className="fixed inset-0 z-[200] grid place-items-center bg-background"
          role="status"
          aria-label="Loading RoboSiddhi"
        >
          <div className="dot-bg pointer-events-none absolute inset-0 opacity-50" aria-hidden />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]"
            aria-hidden
          />

          <div className="relative flex flex-col items-center gap-8">
            {/* Robot head drawing itself */}
            <svg viewBox="0 0 120 96" className="h-24 w-32" fill="none" aria-hidden>
              <motion.rect
                x="22" y="30" width="76" height="52" rx="14"
                stroke="#2de2ff" strokeWidth="2.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.7, ease: EASE }}
              />
              <motion.circle cx="44" cy="56" r="6" fill="#7c6cff"
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ delay: 0.55, duration: 0.3, ease: EASE }}
              />
              <motion.circle cx="76" cy="56" r="6" fill="#7c6cff"
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ delay: 0.65, duration: 0.3, ease: EASE }}
              />
              <motion.line x1="60" y1="30" x2="60" y2="16" stroke="#2de2ff" strokeWidth="2.5" strokeLinecap="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ delay: 0.35, duration: 0.25 }}
              />
              <motion.circle cx="60" cy="12" r="4.5" fill="#ffb547"
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ delay: 0.75, duration: 0.3, ease: EASE }}
              />
            </svg>

            {/* Assembling wordmark */}
            <div className="flex overflow-hidden font-display text-2xl font-bold tracking-[0.3em]" aria-hidden>
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 26, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.055, duration: 0.45, ease: EASE }}
                  className={i >= 4 ? "text-gradient" : "text-foreground"}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Status line */}
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-faint">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-primary" aria-hidden />
              <AnimatePresence mode="wait">
                <motion.span
                  key={step}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className={step === 1 ? "text-primary" : undefined}
                >
                  {STEPS[step]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Progress hairline */}
            <div className="h-px w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.9, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
