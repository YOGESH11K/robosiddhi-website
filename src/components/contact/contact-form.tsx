"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

const topics = [
  { value: "general", label: "General enquiry" },
  { value: "program", label: "Program enrolment" },
  { value: "lab-visit", label: "Book a free lab visit" },
  { value: "workshop", label: "Workshop registration" },
  { value: "school", label: "School & bulk quote" },
  { value: "kits", label: "Kits & shop order" },
];

const inputClasses =
  "w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-faint transition-colors focus:border-primary/50 focus:bg-white/[0.05] focus:outline-none";

const labelClasses =
  "mb-2 block font-mono text-[11px] uppercase tracking-[0.22em] text-faint";

export function ContactForm({ defaultTopic = "general" }: { defaultTopic?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState(
    topics.some((t) => t.value === defaultTopic) ? defaultTopic : "general",
  );
  const [message, setMessage] = useState("");
  const [draftReady, setDraftReady] = useState(false);

  const topicLabel = topics.find((t) => t.value === topic)?.label ?? "General enquiry";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`[RoboSiddhi] ${topicLabel} — ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        `Topic: ${topicLabel}`,
        "",
        message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    );
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setDraftReady(true);
  }

  return (
    <form onSubmit={handleSubmit} className="glass-strong flex flex-col gap-5 rounded-2xl p-7 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClasses}>
            Name *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClasses}>
            Email *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className={labelClasses}>
            Phone (optional)
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 …"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-topic" className={labelClasses}>
            I&apos;m here about
          </label>
          <select
            id="contact-topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className={`${inputClasses} appearance-none`}
          >
            {topics.map((t) => (
              <option key={t.value} value={t.value} className="bg-surface text-foreground">
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClasses}>
          Message *
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          placeholder={
            topic === "workshop"
              ? "Tell us which workshop interests you, your school/organisation and preferred dates…"
              : "Tell us about the builder — age, experience level and what they'd love to make…"
          }
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClasses} resize-y`}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg">
          Send Message
          <Send className="h-4 w-4" aria-hidden />
        </Button>
        <p className="text-xs leading-relaxed text-faint" role="status">
          {draftReady
            ? "Your email draft is ready — just hit send in your mail app."
            : "Submitting opens your email app with everything pre-filled."}
        </p>
      </div>
    </form>
  );
}
