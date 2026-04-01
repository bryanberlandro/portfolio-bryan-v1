"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/data/portfolio";

export function ServicesSection() {
  const [active, setActive] = useState(2);

  return (
    <section id="services" className="px-10 py-28" style={{ background: "var(--color-surface)" }}>
      <Reveal><SectionLabel>What I Do</SectionLabel></Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display leading-[0.9] tracking-tight" style={{ fontSize: "clamp(3rem,6vw,6.5rem)" }}>
          THE SERVICES<br />I PROVIDE
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-20 items-start">
        <Reveal delay={0.2}>
          <p className="text-[0.95rem] leading-[1.8]" style={{ color: "var(--color-muted)" }}>
            End-to-end design and development services tailored to your goals — from early strategy
            through to polished, production-ready delivery.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col" style={{ borderTop: "1px solid rgba(10,10,10,0.1)" }}>
            {services.map((s, i) => {
              const isActive = active === i;
              return (
                <motion.button
                  key={s.num}
                  onClick={() => setActive(i)}
                  data-cursor-hover
                  className="w-full text-left flex flex-col gap-0 transition-all duration-350"
                  style={{
                    borderBottom: "1px solid rgba(10,10,10,0.1)",
                    background: isActive ? "var(--color-ink)" : "transparent",
                    padding: isActive ? "1.4rem 1.5rem" : "1.4rem 0",
                    marginLeft: isActive ? "-1.5rem" : "0",
                    marginRight: isActive ? "-1.5rem" : "0",
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-5">
                      <span
                        className="font-mono text-[0.58rem] tracking-[0.15em] w-5 shrink-0"
                        style={{ color: isActive ? "rgba(255,255,255,0.35)" : "var(--color-muted)" }}
                      >
                        {s.num}
                      </span>
                      <span
                        className="font-display text-[1.35rem] tracking-wider transition-colors duration-300"
                        style={{ color: isActive ? "#fff" : "var(--color-ink)" }}
                      >
                        {s.name}
                      </span>
                    </div>
                    <div
                      className="shrink-0 w-8 h-8 rounded-full border flex items-center justify-center"
                      style={{ borderColor: isActive ? "rgba(255,255,255,0.18)" : "rgba(10,10,10,0.12)" }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                        stroke={isActive ? "white" : "currentColor"} strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
                      className="text-[0.85rem] leading-[1.7] mt-3 ml-10"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {s.desc}
                    </motion.p>
                  )}
                </motion.button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}