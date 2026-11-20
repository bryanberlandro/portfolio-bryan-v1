import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}

/**
 * Server-rendered wrapper. The hidden/visible states are pure CSS (see .reveal in globals.css),
 * and a single <RevealObserver /> adds `is-in` when the element scrolls into view.
 * Content is fully visible when JavaScript is off or the user prefers reduced motion.
 */
export function Reveal({ children, delay = 0, y = 32, duration = 0.9, className = "" }: RevealProps) {
  const style = {
    "--reveal-y": `${y}px`,
    "--reveal-d": `${duration}s`,
    "--reveal-delay": `${delay}s`,
  } as CSSProperties;
  return (
    <div className={`reveal ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
