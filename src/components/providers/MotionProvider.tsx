"use client";

import { LazyMotion, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Feature bundle is loaded on demand, after first paint. No component uses layout animations,
// so the smaller domAnimation set is enough. Components use the lightweight `m` element.
const loadFeatures = () => import("./motionFeatures").then((mod) => mod.default);

/** Lazy-loads Framer Motion features and respects the OS "reduce motion" setting. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
