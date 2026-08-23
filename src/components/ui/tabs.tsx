"use client";

import { createContext, useContext, useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

/* ── Tabs ─────────────────────────────────────────────────────── */

interface TabsContextValue {
  value: string;
  setValue: (v: string) => void;
  baseId: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

export function Tabs({
  defaultValue,
  children,
  className,
}: {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [value, setValue] = useState(defaultValue);
  const baseId = useId();
  return (
    <TabsContext.Provider value={{ value, setValue, baseId }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({
  items,
  className,
}: {
  items: { value: string; label: React.ReactNode }[];
  className?: string;
}) {
  const ctx = useContext(TabsContext)!;
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex flex-wrap items-center gap-1 rounded-full border border-border bg-white/[0.03] p-1",
        className,
      )}
    >
      {items.map((item) => {
        const active = ctx.value === item.value;
        return (
          <button
            key={item.value}
            role="tab"
            aria-selected={active}
            id={`${ctx.baseId}-tab-${item.value}`}
            aria-controls={`${ctx.baseId}-panel-${item.value}`}
            onClick={() => ctx.setValue(item.value)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300",
              active
                ? "bg-primary/15 text-primary shadow-[inset_0_0_0_1px_oklch(0.75_0.14_210/0.35)]"
                : "text-muted hover:text-foreground",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export function TabPanel({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = useContext(TabsContext)!;
  if (ctx.value !== value) return null;
  return (
    <div
      role="tabpanel"
      id={`${ctx.baseId}-panel-${value}`}
      aria-labelledby={`${ctx.baseId}-tab-${value}`}
      className={className}
    >
      {children}
    </div>
  );
}

/* ── Accordion ────────────────────────────────────────────────── */

export function Accordion({
  items,
  className,
}: {
  items: { q: string; a: string }[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={item.q} delay={i * 0.05}>
            <div
              className={cn(
                "glass overflow-hidden rounded-xl transition-colors",
                isOpen && "border-primary/25",
              )}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium transition-colors hover:text-primary sm:px-6"
              >
                {item.q}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-muted transition-transform duration-300",
                    isOpen && "rotate-180 text-primary",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 leading-relaxed text-muted sm:px-6">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
