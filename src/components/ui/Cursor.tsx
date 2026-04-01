"use client";

import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [dark, setDark] = useState(false);
  const pos      = useRef({ x: -100, y: -100 });
  const follower = useRef({ x: -100, y: -100 });
  const rafId    = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top  = `${e.clientY}px`;
      }
      // Check if over dark bg
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      setDark(!!el?.closest("[data-cursor-dark]"));
    };

    const loop = () => {
      follower.current.x += (pos.current.x - follower.current.x) * 0.1;
      follower.current.y += (pos.current.y - follower.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = `${follower.current.x}px`;
        ringRef.current.style.top  = `${follower.current.y}px`;
      }
      rafId.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    rafId.current = requestAnimationFrame(loop);

    const on  = () => setHovering(true);
    const off = () => setHovering(false);

    const update = () => {
      document.querySelectorAll("a,button,[data-cursor-hover]").forEach((el) => {
        el.addEventListener("mouseenter", on);
        el.addEventListener("mouseleave", off);
      });
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
    };
  }, []);

  const dotClass  = `cursor-dot  ${hovering ? "is-hovering" : ""} ${dark ? "is-dark" : ""}`;
  const ringClass = `cursor-ring ${hovering ? "is-hovering" : ""} ${dark ? "is-dark" : ""}`;

  return (
    <>
      <div ref={dotRef}  className={dotClass}  />
      <div ref={ringRef} className={ringClass} />
    </>
  );
}
