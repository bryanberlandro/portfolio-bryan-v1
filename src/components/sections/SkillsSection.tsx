"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { toolCategories } from "@/data/portfolio";

const ease = [0.16, 1, 0.3, 1] as const;

const sizeMap: Record<string, string> = {
  Design:      "text-[1.05rem]",
  Development: "text-[1.2rem]",
  Platform:    "text-[0.95rem]",
  Other:       "text-[0.88rem]",
};

const hoverBg: Record<string, string> = {
  Design:      "hover:bg-[#0A0A0A]",
  Development: "hover:bg-[#0A0A0A]",
  Platform:    "hover:bg-[#0A0A0A]",
  Other:       "hover:bg-[#0A0A0A]",
};

type Tool = { name: string; category: string };

const allTools: Tool[] = toolCategories.flatMap((cat) =>
  cat.tools.map((name) => ({ name, category: cat.category }))
);

const categories = ["All", ...toolCategories.map((c) => c.category)];

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hovered, setHovered] = useState<string | null>(null);

  const visible = activeFilter === "All"
    ? allTools
    : allTools.filter((t) => t.category === activeFilter);

  return (
    <section
      id="skills"
      className="px-10 py-28"
      style={{ background: "var(--color-paper)" }}
    >
      <Reveal>
        <SectionLabel>Skills &amp; Tools</SectionLabel>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            className="font-display leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3rem,6vw,6.5rem)" }}
          >
            WHAT I<br />WORK WITH
          </h2>
          <p
            className="text-[0.85rem] leading-relaxed max-w-xs pb-1"
            style={{ color: "var(--color-muted)" }}
          >
            {visible.length} tools across design, development, platform &amp; workflow.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-12 flex items-center gap-2 flex-wrap">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                data-cursor-hover
                className="font-mono text-[0.6rem] tracking-[0.14em] uppercase rounded-full px-4 py-[0.45rem] border transition-all duration-300"
                style={{
                  background:     isActive ? "var(--color-ink)" : "transparent",
                  color:          isActive ? "#fff" : "var(--color-muted)",
                  borderColor:    isActive ? "var(--color-ink)" : "rgba(10,10,10,0.14)",
                }}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-[6px] opacity-50">
                    {toolCategories.find((c) => c.category === cat)?.tools.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Tag cloud */}
      <Reveal delay={0.25}>
        <div
          className="mt-10 pt-10"
          style={{ borderTop: "1px solid rgba(10,10,10,0.08)" }}
        >
          <div className="flex flex-wrap gap-3">
            {visible.map((tool, i) => {
              const isHovered    = hovered === tool.name;
              const isNeighbour  = hovered !== null && !isHovered;
              const size         = sizeMap[tool.category];

              return (
                <motion.span
                  key={`${tool.category}-${tool.name}`}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.4, delay: i * 0.03, ease }}
                  onMouseEnter={() => setHovered(tool.name)}
                  onMouseLeave={() => setHovered(null)}
                  data-cursor-hover
                  className={`
                    inline-flex items-center gap-2
                    font-mono tracking-[0.1em] uppercase
                    border rounded-full px-5 py-[0.55rem]
                    transition-all duration-300 cursor-none
                    ${size}
                    ${hoverBg[tool.category]}
                  `}
                  style={{
                    borderColor: isHovered
                      ? "var(--color-ink)"
                      : "rgba(10,10,10,0.12)",
                    color: isHovered
                      ? "#fff"
                      : isNeighbour
                      ? "rgba(10,10,10,0.25)"
                      : "var(--color-ink)",
                    background: isHovered ? "var(--color-ink)" : "transparent",
                    transform: isHovered ? "scale(1.06)" : "scale(1)",
                  }}
                >
                  {/* Category dot */}
                  <span
                    className="w-[5px] h-[5px] rounded-full shrink-0 transition-colors duration-300"
                    style={{
                      background: isHovered ? "rgba(255,255,255,0.4)" : "rgba(10,10,10,0.2)",
                    }}
                  />
                  {tool.name}
                </motion.span>
              );
            })}
          </div>

          {/* Legend */}
          <div
            className="mt-12 pt-8 flex items-center gap-6 flex-wrap"
            style={{ borderTop: "1px solid rgba(10,10,10,0.06)" }}
          >
            {toolCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveFilter(
                  activeFilter === cat.category ? "All" : cat.category
                )}
                data-cursor-hover
                className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-60"
              >
                <span
                  className="w-[5px] h-[5px] rounded-full"
                  style={{ background: "var(--color-ink)" }}
                />
                <span
                  className="font-mono text-[0.56rem] tracking-[0.16em] uppercase"
                  style={{ color: "var(--color-muted)" }}
                >
                  {cat.category} ({cat.tools.length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}