"use client";

import { useEffect, useRef } from "react";

type CursorMode = "default" | "link" | "button" | "explore";

/**
 * Subtle desktop-only cursor companion.
 * Keeps the native pointer visible; adds a glowing dot + trailing ring
 * that reacts to interactive elements and 3D zones (data-cursor="explore").
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    let raf = 0;
    let visible = false;
    let mode: CursorMode = "default";
    const pos = { x: -100, y: -100 };
    const ringPos = { ...pos };

    const applyMode = () => {
      const size = mode === "explore" ? 72 : mode === "default" ? 36 : 52;
      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;
      ring.style.borderColor =
        mode === "explore"
          ? "oklch(0.75 0.14 210 / 0.55)"
          : "oklch(1 0 0 / 0.22)";
      label.textContent = mode === "explore" ? "EXPLORE" : "";
      label.style.opacity = mode === "explore" ? "1" : "0";
      dot.style.backgroundColor =
        mode === "default" ? "var(--color-primary)" : "transparent";
      dot.style.transform = `translate(-50%, -50%) scale(${mode === "default" ? 1 : 0.45})`;
    };

    const onMove = (e: PointerEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const explicit = target.closest<HTMLElement>("[data-cursor]");
      if (explicit?.dataset.cursor === "explore") {
        mode = "explore";
      } else if (target.closest("a, button, [role='button'], input, textarea, select, label")) {
        mode = "button";
      } else {
        mode = "default";
      }
      applyMode();
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const tick = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.16;
      ringPos.y += (pos.y - ringPos.y) * 0.16;
      dot.style.left = `${pos.x}px`;
      dot.style.top = `${pos.y}px`;
      ring.style.left = `${ringPos.x}px`;
      ring.style.top = `${ringPos.y}px`;
      raf = requestAnimationFrame(tick);
    };

    applyMode();
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-0 shadow-glow-primary transition-[opacity,width] duration-200 md:block"
        style={{ transitionProperty: "opacity" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[89] hidden grid place-items-center rounded-full border border-white/20 opacity-0 backdrop-blur-[1px] transition-[width,height,border-color] duration-300 md:grid"
      >
        <span
          ref={labelRef}
          className="font-mono text-[9px] font-medium tracking-[0.2em] text-primary opacity-0 transition-opacity duration-200"
        />
      </div>
    </>
  );
}
