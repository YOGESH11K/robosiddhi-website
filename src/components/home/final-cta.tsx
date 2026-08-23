import { ArrowRight, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <section aria-label="Get started" className="container-x mt-28 sm:mt-40">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/60 px-6 py-20 text-center sm:py-28">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
            style={{
              background:
                "radial-gradient(circle, oklch(0.62 0.19 285 / 0.35), oklch(0.75 0.14 210 / 0.18) 55%, transparent 75%)",
            }}
            aria-hidden
          />
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" aria-hidden />

          <div className="relative">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
              Your first robot is waiting
            </p>
            <h2 className="mx-auto mt-5 font-display text-[clamp(3rem,9vw,6.5rem)] font-bold leading-[0.95] tracking-tight">
              READY TO <span className="text-gradient">BUILD?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Book a free lab visit in Jaipur — meet the mentors, touch the
              machines and watch what you can make.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink href="/robotics-lab" size="lg">
                Start Building
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                <MessageCircle className="h-4 w-4" aria-hidden />
                Talk to Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
