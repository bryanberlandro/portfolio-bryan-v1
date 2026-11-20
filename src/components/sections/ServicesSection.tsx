"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/data/portfolio";

export function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="px-6 md:px-10 py-20 md:py-28" style={{ background: "var(--color-surface)" }}>
      <Reveal><SectionLabel>What I Do</SectionLabel></Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display leading-[0.9]" style={{ fontSize: "clamp(2.5rem,6.2vw,5.75rem)" }}>
          What I<br />offer
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-20 items-start">
        <Reveal delay={0.2}>
          <p className="text-[0.95rem] leading-[1.8]" style={{ color: "var(--color-muted)" }}>
            Design and development for the web. I can take a project from the first wireframe to a deployed site, or join at whichever stage you need.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <ul className="flex flex-col" style={{ borderTop: "1px solid rgba(10,10,10,0.1)" }}>
            {services.map((s, i) => {
              const isActive = active === i;
              return (
                <li
                  key={s.num}
                  className="svc relative"
                  data-active={isActive}
                  style={{ borderBottom: "1px solid rgba(10,10,10,0.1)" }}
                >
                  <span aria-hidden="true" className="svc-bg" />
                  <h3 className="relative z-10">
                    <button
                      type="button"
                      id={`svc-btn-${i}`}
                      aria-expanded={isActive}
                      aria-controls={`svc-panel-${i}`}
                      onClick={() => setActive(i)}
                      data-cursor-hover
                      className="svc-btn w-full text-left flex items-center justify-between gap-4 py-[1.4rem]"
                    >
                      <span className="flex items-center gap-5 min-w-0">
                        <span className="svc-num font-mono text-[0.75rem] tracking-[0.01em] w-5 shrink-0">{s.num}</span>
                        <span className="svc-name font-display text-[1.15rem] sm:text-[1.35rem]">{s.name}</span>
                      </span>
                      <span className="svc-arrow shrink-0 w-8 h-8 rounded-full border flex items-center justify-center" aria-hidden="true">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* Descriptions stay in the DOM so they are crawlable; collapsed ones are inert. */}
                  <div
                    id={`svc-panel-${i}`}
                    role="region"
                    aria-labelledby={`svc-btn-${i}`}
                    className="disclosure relative z-10"
                    data-open={isActive}
                    inert={!isActive}
                  >
                    <div className="disclosure-inner">
                      <p className="svc-desc text-[0.85rem] leading-[1.7] pb-[1.4rem] pl-10 max-w-[60ch]">{s.desc}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}