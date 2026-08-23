"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock, Search } from "lucide-react";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { articles, resourceCategories } from "@/data/resources";

/** Searchable knowledge-hub grid. CMS-ready: data comes from src/data/resources.ts */
export function ResourcesExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      const catOk = category === "All" || a.category === category;
      const qOk =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [query, category]);

  return (
    <div>
      {/* Search */}
      <div className="relative max-w-md">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search guides, topics, categories…"
          aria-label="Search resources"
          className="w-full rounded-full border border-border bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-faint focus:border-primary/40"
        />
      </div>

      {/* Category chips */}
      <div role="tablist" aria-label="Filter by category" className="mt-5 flex flex-wrap gap-2">
        {["All", ...resourceCategories].map((c) => {
          const active = c === category;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={active}
              onClick={() => setCategory(c)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-all duration-300",
                active
                  ? "border-primary/50 bg-primary/12 text-primary"
                  : "border-border bg-white/[0.03] text-muted hover:border-primary/25 hover:text-foreground",
              )}
            >
              {c}
            </button>
          );
        })}
      </div>

      <p className="mt-8 font-mono text-xs tracking-wide text-faint" aria-live="polite">
        {visible.length} article{visible.length === 1 ? "" : "s"}
      </p>

      {/* Grid */}
      <motion.div layout className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((article) => (
            <motion.div
              key={article.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.32, ease: EASE }}
            >
              <Link href={`/resources#${article.slug}`} className="group block h-full">
                <article className="glass card-hover flex h-full flex-col rounded-2xl p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] tracking-wide text-faint">
                      <Clock className="h-3 w-3" aria-hidden /> {article.readTime}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Read guide
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </article>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <div className="glass mt-8 rounded-2xl p-12 text-center text-muted">
          Nothing matches “{query}”. Try another term or clear the filters.
        </div>
      )}
    </div>
  );
}
