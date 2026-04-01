"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-10 py-28" style={{ background: "var(--color-paper)" }}>
      <Reveal><SectionLabel>Experience</SectionLabel></Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display leading-[0.9] tracking-tight" style={{ fontSize: "clamp(3rem,6vw,6.5rem)" }}>
          WORK<br />HISTORY
        </h2>
      </Reveal>

      <div className="mt-16 flex flex-col gap-[1.5px]" style={{ background: "rgba(10,10,10,0.08)" }}>
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={0.1 + i * 0.1}>
            <div
              className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-0 group"
              style={{ background: "var(--color-surface)" }}
            >
              {/* Left: meta */}
              <div
                className="px-8 py-10 border-r flex flex-col justify-between"
                style={{ borderColor: "rgba(10,10,10,0.08)" }}
              >
                <div>
                  <p className="font-mono text-[0.58rem] tracking-[0.18em] uppercase mb-2" style={{ color: "var(--color-muted)" }}>
                    {exp.period}
                  </p>
                  <p className="font-display text-[1.6rem] tracking-wide leading-none" style={{ color: "var(--color-ink)" }}>
                    {exp.company}
                  </p>
                </div>
                <p className="font-mono text-[0.58rem] tracking-[0.14em] uppercase mt-6" style={{ color: "var(--color-muted)" }}>
                  {exp.location}
                </p>
              </div>

              {/* Right: detail */}
              <div className="px-8 py-10">
                <p
                  className="font-mono text-[0.6rem] tracking-[0.14em] uppercase mb-4"
                  style={{ color: "var(--color-ink)" }}
                >
                  {exp.role}
                </p>
                <p className="text-[0.92rem] leading-[1.8] mb-6" style={{ color: "var(--color-muted)" }}>
                  {exp.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-[0.82rem]" style={{ color: "var(--color-ink)" }}>
                      <span
                        className="mt-[6px] w-[4px] h-[4px] rounded-full shrink-0"
                        style={{ background: "var(--color-muted)" }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}