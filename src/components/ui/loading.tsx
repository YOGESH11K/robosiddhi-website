export function Spinner({ className }: { className?: string }) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={`inline-block h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent ${className ?? ""}`}
    />
  );
}

export function LoadingState({
  label = "Loading",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex flex-col items-center justify-center gap-4 py-24 text-muted ${className ?? ""}`}
    >
      <div className="relative">
        <Spinner className="h-10 w-10 text-primary" />
        <span
          className="absolute inset-0 animate-ping rounded-full border border-primary/30"
          aria-hidden
        />
      </div>
      <p className="font-mono text-xs uppercase tracking-[0.25em]">{label}…</p>
    </div>
  );
}
