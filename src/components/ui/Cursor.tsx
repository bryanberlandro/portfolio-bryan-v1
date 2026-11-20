"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a,button,[data-cursor-hover],[role='button'],summary,input,textarea,select,label";

/**
 * Desktop-only enhancement. Enabled only for (hover: hover) and (pointer: fine) and when the user
 * has not asked for reduced motion. Otherwise the native cursor is left untouched.
 * No React state: classes and transforms are updated directly, and the follow loop only runs
 * while the ring is catching up with the pointer.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    let raf = 0;
    let tx = -100, ty = -100, rx = -100, ry = -100;
    let enabled = false;

    const place = (el: HTMLElement, x: number, y: number) => {
      el.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
    };
    const loop = () => {
      rx += (tx - rx) * 0.1;
      ry += (ty - ry) * 0.1;
      place(ring, rx, ry);
      raf = Math.abs(tx - rx) > 0.1 || Math.abs(ty - ry) > 0.1 ? requestAnimationFrame(loop) : 0;
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      tx = e.clientX;
      ty = e.clientY;
      place(dot, tx, ty);
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const onOver = (e: PointerEvent) => {
      const t = e.target as Element | null;
      if (!t || !t.closest) return;
      const hover = !!t.closest(INTERACTIVE);
      const dark = !!t.closest("[data-cursor-dark]");
      const text = t.closest("[data-cursor-label]")?.getAttribute("data-cursor-label") ?? "";
      label.textContent = text;
      for (const el of [dot, ring]) {
        el.classList.toggle("is-hovering", hover);
        el.classList.toggle("is-dark", dark);
        el.classList.toggle("has-label", text !== "");
      }
    };
    const onLeave = () => root.classList.add("cursor-hidden");
    const onEnter = () => root.classList.remove("cursor-hidden");

    const enable = () => {
      if (enabled) return;
      enabled = true;
      root.classList.add("has-cursor");
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerover", onOver, { passive: true });
      root.addEventListener("mouseleave", onLeave);
      root.addEventListener("mouseenter", onEnter);
    };
    const disable = () => {
      if (!enabled) return;
      enabled = false;
      root.classList.remove("has-cursor", "cursor-hidden");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      root.removeEventListener("mouseleave", onLeave);
      root.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const sync = () => (fine.matches && !reduced.matches ? enable() : disable());

    sync();
    fine.addEventListener("change", sync);
    reduced.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
      disable();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span ref={labelRef} className="cursor-label" />
      </div>
    </>
  );
}
