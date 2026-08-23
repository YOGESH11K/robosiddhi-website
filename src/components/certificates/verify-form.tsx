"use client";

import { useState } from "react";
import { CircleAlert, IdCard, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

type Status = "idle" | "checking" | "not-found";

export function VerifyForm() {
  const [certId, setCertId] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("checking");
    window.setTimeout(() => setStatus("not-found"), 700);
  }

  return (
    <div className="glass-strong rounded-2xl p-7 sm:p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="certificate-id" className="block font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
          Certificate ID
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <IdCard
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
              aria-hidden
            />
            <input
              id="certificate-id"
              type="text"
              required
              placeholder="RS-0000-XXXXX"
              autoComplete="off"
              spellCheck={false}
              value={certId}
              onChange={(e) => {
                setCertId(e.target.value.toUpperCase());
                if (status !== "idle") setStatus("idle");
              }}
              className="w-full rounded-xl border border-border bg-white/[0.03] py-3 pl-11 pr-4 font-mono text-sm tracking-wider text-foreground uppercase placeholder:text-faint focus:border-primary/50 focus:bg-white/[0.05] focus:outline-none"
            />
          </div>
          <Button type="submit" size="lg" disabled={status === "checking"}>
            {status === "checking" ? (
              <>
                <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden />
                Verifying…
              </>
            ) : (
              "Verify"
            )}
          </Button>
        </div>
        <p className="font-mono text-[11px] text-faint">
          Format: RS-&lt;year&gt;-&lt;ID&gt; — printed at the bottom of every RoboSiddhi
          certificate.
        </p>
      </form>

      {status === "not-found" && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-3 rounded-xl border border-highlight/30 bg-highlight/10 px-4 py-4"
        >
          <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-highlight" aria-hidden />
          <p className="text-sm leading-relaxed text-muted">
            We couldn&apos;t find <span className="font-mono text-highlight">{certId}</span>{" "}
            in the registry yet — certificates issued before the online registry are still
            being digitised. Email{" "}
            <a
              href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
                `Manual certificate verification — ${certId}`,
              )}`}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {siteConfig.contact.email}
            </a>{" "}
            with a photo of your certificate and we&apos;ll verify it within one working day.
          </p>
        </div>
      )}
    </div>
  );
}
