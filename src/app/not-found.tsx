import Link from "next/link";
import { Compass, Home, SearchX } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="grid-bg relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 pt-16">
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />
      <div className="relative flex max-w-xl flex-col items-center text-center">
        <div className="relative mb-8">
          <SearchX className="h-16 w-16 text-primary" aria-hidden />
          <span className="absolute -right-2 -top-2 h-4 w-4 animate-pulse-ring rounded-full border border-danger" aria-hidden />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-faint">
          Error 404 · Path lost
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Looks like this robot lost its path.
        </h1>
        <p className="mt-4 leading-relaxed text-muted">
          The page you&apos;re looking for wandered off the track. Let&apos;s get you back to the lab.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">
            <Home className="h-4 w-4" />
            Back to Home
          </ButtonLink>
          <ButtonLink href="/robotics-lab" variant="secondary">
            <Compass className="h-4 w-4" />
            Open Robotics Lab
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
