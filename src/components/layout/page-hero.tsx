import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode; // CTA row or extras
  align?: "left" | "center";
  className?: string;
}

/** Consistent page header for inner pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  align = "center",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "grid-bg relative overflow-hidden border-b border-border pb-16 pt-32 sm:pb-20 sm:pt-40",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[110px]"
        aria-hidden
      />
      <div className="container-x relative">
        <Reveal
          className={cn(
            "flex flex-col gap-5",
            align === "center" && "items-center text-center",
          )}
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow-primary" />
            {eyebrow}
          </span>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-tight text-balance sm:text-6xl">
            {title}
          </h1>
          {description ? (
            <p
              className={cn(
                "max-w-2xl text-lg leading-relaxed text-muted",
                align === "center" && "mx-auto",
              )}
            >
              {description}
            </p>
          ) : null}
          {children ? (
            <div
              className={cn(
                "mt-3 flex flex-wrap items-center gap-3",
                align === "center" && "justify-center",
              )}
            >
              {children}
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
