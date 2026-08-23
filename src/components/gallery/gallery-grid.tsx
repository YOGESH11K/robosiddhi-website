"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, ImageOff, X } from "lucide-react";
import { EASE } from "@/lib/motion";
import { TechIcon } from "@/components/icons/tech-icon";
import { galleryCategories, galleryItems, type GalleryItem } from "@/data/gallery";

/**
 * Masonry-style gallery. Real photos aren't available yet — each tile renders
 * an original generated visual and clearly labels itself as a placeholder.
 */
export function GalleryGrid() {
  const [category, setCategory] = useState<string>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);

  const visible = useMemo(
    () =>
      category === "All"
        ? galleryItems
        : galleryItems.filter((g) => g.category === category),
    [category],
  );

  // Lock scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <div>
      {/* Filters */}
      <div role="tablist" aria-label="Filter gallery" className="flex flex-wrap gap-2">
        {galleryCategories.map((c) => {
          const isActive = c === category;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={isActive}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-300 ${
                isActive
                  ? "border-primary/50 bg-primary/12 text-primary"
                  : "border-border bg-white/[0.03] text-muted hover:border-primary/25 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Masonry-ish grid */}
      <motion.div layout className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        <AnimatePresence mode="popLayout">
          {visible.map((item, i) => (
            <motion.div
              key={item.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: EASE, delay: (i % 3) * 0.05 }}
            >
              <button
                onClick={() => setActive(item)}
                aria-label={`View ${item.title}`}
                className="group relative block w-full overflow-hidden rounded-2xl border border-border text-left transition-all duration-300 hover:border-primary/40 hover:shadow-glow-primary"
                style={{ aspectRatio: i % 3 === 1 ? "4 / 3" : "1 / 1" }}
              >
                {/* Generated abstract art (no fabricated photography) */}
                <span
                  aria-hidden
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.05]"
                  style={{
                    background: `radial-gradient(120% 120% at 20% 15%, ${item.art.from} 0%, ${item.art.to} 100%)`,
                  }}
                />
                <svg
                  aria-hidden
                  viewBox="0 0 200 200"
                  className="absolute inset-0 h-full w-full opacity-[0.14]"
                >
                  <defs>
                    <pattern id={`g-${item.slug}`} width="26" height="26" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.2" fill="#e7edfa" />
                    </pattern>
                  </defs>
                  <rect width="200" height="200" fill={`url(#g-${item.slug})`} />
                  <path d="M0 160 L60 110 L110 150 L200 70" stroke="#e7edfa" strokeWidth="1.5" fill="none" strokeDasharray="6 6" />
                </svg>

                <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-black/30 text-white backdrop-blur-sm">
                  <TechIcon name={item.art.glyph} className="h-5 w-5" />
                </span>

                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 pt-12">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "#8fd8ea" }}>
                    {item.category}
                  </span>
                  <span className="mt-1 block font-display text-lg font-semibold text-white">
                    {item.title}
                  </span>
                </span>

                <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                  <ImageOff className="h-3 w-3" aria-hidden /> Placeholder
                </span>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[120] grid place-items-center bg-background/90 p-4 backdrop-blur-md sm:p-8"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <motion.figure
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 16 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative aspect-video"
                style={{
                  background: `radial-gradient(120% 130% at 25% 10%, ${active.art.from} 0%, ${active.art.to} 100%)`,
                }}
              >
                <TechIcon
                  name={active.art.glyph}
                  className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 text-white/25"
                />
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close image viewer"
                  className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition-colors hover:bg-black/70"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <figcaption className="bg-surface p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                  {active.category}
                </p>
                <h2 className="mt-1.5 font-display text-2xl font-semibold tracking-tight">
                  {active.title}
                </h2>
                <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-muted">
                  <Camera className="mt-0.5 h-4 w-4 shrink-0 text-faint" aria-hidden />
                  {active.caption}
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
