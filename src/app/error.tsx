"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw, Wrench } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="grid-bg relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 pt-16">
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-danger/10 blur-[120px]"
        aria-hidden
      />
      <div className="relative flex max-w-xl flex-col items-center text-center">
        <div className="relative mb-8">
          <AlertTriangle className="h-16 w-16 text-highlight" aria-hidden />
          <Wrench className="absolute -right-3 bottom-0 h-6 w-6 text-danger" aria-hidden />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-faint">
          System fault · 500
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          A servo came loose somewhere.
        </h1>
        <p className="mt-4 leading-relaxed text-muted">
          Something broke on our side — our engineers are on it. Try again, or head back to safety.
        </p>
        {error.digest ? (
          <p className="mt-4 font-mono text-xs text-faint">Ref: {error.digest}</p>
        ) : null}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button onClick={reset}>
            <RotateCcw className="h-4 w-4" />
            Retry
          </Button>
          <ButtonLink href="/" variant="secondary">
            Back to Home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
