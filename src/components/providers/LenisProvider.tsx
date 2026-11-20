"use client";

import { useEffect, type ReactNode } from "react";

/**
 * Smooth scrolling is an enhancement for mouse/trackpad desktops only.
 * Touch devices and users who prefer reduced motion keep native scrolling, and the Lenis
 * module is not even downloaded for them (dynamic import).
 */
export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: { destroy: () => void } | null = null;
    let cancelled = false;

    const sync = async () => {
      const want = fine.matches && !reduced.matches;
      if (want && !lenis) {
        const { default: Lenis } = await import("lenis");
        if (cancelled || lenis) return;
        lenis = new Lenis({
          duration: 1.25,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          smoothWheel: true,
          autoRaf: true,
        });
      } else if (!want && lenis) {
        lenis.destroy();
        lenis = null;
      }
    };

    sync();
    fine.addEventListener("change", sync);
    reduced.addEventListener("change", sync);
    return () => {
      cancelled = true;
      fine.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return <>{children}</>;
}
