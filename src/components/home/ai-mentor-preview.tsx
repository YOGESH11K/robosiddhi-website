"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { EASE } from "@/lib/motion";

const messages = [
  {
    role: "user" as const,
    text: "How does an ultrasonic sensor measure distance?",
  },
  {
    role: "mentor" as const,
    text: "It shouts a sound pulse and listens for the echo. Time × speed of sound ÷ 2 = distance. Want to try it in code?",
  },
];

const prompts = [
  "Explain PWM like I'm 12",
  "Project idea for a smart garden",
  "Why is my servo jittering?",
];

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1 py-1" aria-label="RoboMentor is typing">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-accent/80 animate-blink"
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
    </span>
  );
}

export function AiMentorPreview() {
  const reduced = useReducedMotion();

  return (
    <section aria-label="AI mentor preview" className="container-x mt-28 sm:mt-40">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* chat visual */}
        <div className="order-last lg:order-first">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="glass-strong relative mx-auto max-w-md rounded-3xl p-6"
            role="img"
            aria-label="Sample conversation with the RoboMentor AI"
          >
            <div className="pointer-events-none absolute -inset-x-8 -top-10 h-32 bg-accent/15 blur-3xl" />

            <header className="relative flex items-center gap-3 border-b border-border pb-4">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                <MessageCircle className="h-4.5 w-4.5" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-semibold">RoboMentor</p>
                <p className="flex items-center gap-1.5 font-mono text-[11px] text-success">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  online · trained on our curriculum
                </p>
              </div>
            </header>

            <div className="relative flex flex-col gap-3 pt-5">
              {messages.map((message, i) => (
                <motion.div
                  key={i}
                  initial={reduced ? false : { opacity: 0, y: 14, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease: EASE, delay: 0.35 + i * 0.75 }}
                  className={
                    message.role === "user"
                      ? "max-w-[85%] self-end rounded-2xl rounded-br-md border border-primary/25 bg-primary/10 px-4 py-2.5 text-sm"
                      : "max-w-[85%] self-start rounded-2xl rounded-bl-md border border-border bg-white/[0.04] px-4 py-2.5 text-sm leading-relaxed text-muted"
                  }
                >
                  {message.text}
                </motion.div>
              ))}

              <motion.div
                initial={reduced ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.35 + messages.length * 0.75 }}
                className="glass flex w-fit items-center gap-2 self-start rounded-2xl rounded-bl-md px-4 py-2.5"
              >
                <TypingDots />
              </motion.div>
            </div>

            <div className="relative mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
              {prompts.map((prompt) => (
                <span
                  key={prompt}
                  className="cursor-default rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-xs text-muted transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Sparkles className="mr-1 inline h-3 w-3 text-highlight" aria-hidden />
                  {prompt}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* copy */}
        <div>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent"
          >
            Your 24×7 lab assistant
          </motion.p>
          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
          >
            STUCK ON A CIRCUIT?{" "}
            <span className="text-gradient">ASK ROBOMENTOR.</span>
          </motion.h2>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
            className="mt-5 max-w-lg text-lg leading-relaxed text-muted"
          >
            Ask RoboMentor anything — sensors, code, project ideas. It knows
            every kit we teach with, explains concepts at your level and never
            gets tired of &ldquo;why&rdquo;.
          </motion.p>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.24 }}
            className="mt-8"
          >
            <ButtonLink href="/ai-mentor" variant="secondary" size="lg">
              Meet RoboMentor
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
