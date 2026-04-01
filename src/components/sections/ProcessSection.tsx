"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { process } from "@/data/portfolio";

export function ProcessSection() {
  return (
    <section id="process" className="px-10 py-28" style={{ background: "#0A0A0A" }} data-cursor-dark>
      <Reveal><SectionLabel light>How I Work</SectionLabel></Reveal>
      <Reveal delay={0.1}>
        <h2
          className="font-display leading-[0.9] tracking-tight text-white"
          style={{ fontSize: "clamp(3rem,6vw,6.5rem)" }}
        >
          MY<br /><span className="text-outline-white">PROCESS</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[1.5px]" style={{ background: "rgba(255,255,255,0.06)" }}>
        {process.map((step, i) => (
          <Reveal key={step.num} delay={0.08 + i * 0.07}>
            <div
              className="relative p-8 h-full overflow-hidden group transition-colors duration-400 hover:bg-white/[0.04]"
              style={{ background: "#111111" }}
            >
              <span className="process-num">{step.num}</span>
              <p className="font-mono text-[0.58rem] tracking-[0.18em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
                Step {step.num}
              </p>
              <p className="font-display text-[1.8rem] tracking-wide leading-none text-white mb-4">
                {step.title}
              </p>
              <p className="text-[0.85rem] leading-[1.75]" style={{ color: "rgba(255,255,255,0.45)" }}>
                {step.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}