"use client";

import { useEffect, useState } from "react";

/**
 * Decides whether a WebGL canvas should mount at all.
 * Desktop-class devices with fine pointers and motion enabled get full 3D;
 * everyone else gets an elegant static fallback.
 */
export function useShowCanvas(): boolean {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const wide = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () =>
      setEnabled(fine.matches && wide.matches && !reduced.matches);
    update();
    fine.addEventListener("change", update);
    wide.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      wide.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}
