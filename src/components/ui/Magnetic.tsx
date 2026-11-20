"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** How far the element follows the pointer, as a fraction of the offset from its center. */
  strength?: number;
}

/**
 * Desktop-only pull toward the mouse for a primary call to action. It does nothing for touch,
 * pen, keyboard, or when the user prefers reduced motion, and it never changes layout.
 * No animation loop: the transform is updated on pointer events and eased with a CSS transition.
 */
export function Magnetic({ children, className = "", strength = 0.28 }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: PointerEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * strength;
    const dy = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <span ref={ref} className={`magnetic ${className}`.trim()} onPointerMove={onMove} onPointerLeave={reset} onPointerCancel={reset}>
      {children}
    </span>
  );
}
