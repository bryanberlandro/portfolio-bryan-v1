"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonials } from "@/data/portfolio";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-10 py-28" style={{ background: "var(--color-paper)" }}>
      <Reveal><SectionLabel>Client Reviews</SectionLabel></Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display leading-[0.9] tracking-tight" style={{ fontSize: "clamp(3rem,6vw,6.5rem)" }}>
          WHAT CLIENTS<br /><span className="text-outline">SAY</span>
        </h2>
      </Reveal>

      <div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-[1.5px]"
        style={{ background: "rgba(10,10,10,0.08)" }}
      >
        {testimonials.map((t, i) => (
          <Reveal key={t.author} delay={0.1 + i * 0.1}>
            <div
              className="flex flex-col justify-between p-10 h-full group transition-colors duration-300 hover:bg-[--color-surface]"
              style={{ background: "var(--color-paper)" }}
            >
              {/* Quote mark */}
              <span
                className="font-display leading-none mb-6 block"
                style={{ fontSize: "4rem", color: "rgba(10,10,10,0.08)" }}
                aria-hidden
              >
                &ldquo;
              </span>

              <blockquote
                className="text-[0.95rem] leading-[1.85] flex-1"
                style={{ color: "var(--color-ink)" }}
              >
                {t.quote}
              </blockquote>

              <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(10,10,10,0.08)" }}>
                <p className="font-medium text-[0.9rem]" style={{ color: "var(--color-ink)" }}>
                  {t.author}
                </p>
                <p className="font-mono text-[0.58rem] tracking-[0.14em] uppercase mt-1" style={{ color: "var(--color-muted)" }}>
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}