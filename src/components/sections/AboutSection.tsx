"use client";

import Link from "next/link";
import Image from "next/image";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { personal, stats } from "@/data/portfolio";

const ease = [0.16, 1, 0.3, 1] as const;

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const reduceMotion = useReducedMotion();
  const parallax = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const portraitY = reduceMotion ? 0 : parallax;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="px-6 md:px-10 py-20 md:py-28 overflow-hidden"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="flex items-center justify-between mb-16 flex-wrap gap-4">
        <Reveal>
          <SectionLabel>About Me</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-[7px]"
            style={{
              border: "1px solid rgba(10,10,10,0.1)",
              background: "var(--color-paper)",
            }}
          >
            <span className="relative flex h-[7px] w-[7px]">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50"
                style={{ background: "#22c55e" }}
              />
              <span
                className="relative inline-flex h-[7px] w-[7px] rounded-full"
                style={{ background: "#22c55e" }}
              />
            </span>
            <span className="font-mono text-[0.75rem] tracking-[0.01em]" style={{ color: "var(--color-ink)" }}>
              Available for projects
            </span>
          </div>
        </Reveal>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-[1.5px]" style={{ background: "rgba(10,10,10,0.08)" }}>

        <Reveal delay={0.15} className="flex-1">
          <div
            className="flex flex-col justify-between h-full p-10 gap-10"
            style={{ background: "var(--color-paper)" }}
          >
            <p className="font-mono text-[0.78rem] tracking-[0.01em]" style={{ color: "var(--color-muted)" }}>
              UI/UX Designer &amp; Fullstack Developer · Depok, Indonesia
            </p>

            <div>
              <h2
                className="font-display leading-[0.95]"
                style={{ fontSize: "clamp(2.4rem,4.6vw,4.6rem)", color: "var(--color-ink)" }}
              >
                Bryan<br />
                Berlandro<br />
                <span style={{ fontWeight: 300 }}>Godlive</span>
              </h2>

              <div className="flex items-center gap-4 mt-6">
                <span className="block h-px flex-1" style={{ background: "rgba(10,10,10,0.1)" }} />
                <span className="font-mono text-[0.78rem] tracking-[0.01em]" style={{ color: "var(--color-muted)" }}>
                  {personal.experience}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {personal.bio.map((para, i) => (
                <p
                  key={i}
                  className="text-[0.92rem] leading-[1.8]"
                  style={{ color: i === 0 ? "var(--color-ink)" : "var(--color-muted)" }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 flex-wrap">
              <Magnetic>
              <Link
                href="#contact"
                aria-label="Hire Bryan Berlandro, go to the contact section"
                className="inline-flex items-center gap-2 font-mono text-[0.8rem] tracking-[0.01em] rounded-full px-5 py-[0.55rem] transition-all duration-300 hover:opacity-75"
                style={{ background: "var(--color-ink)", color: "#fff" }}
              >
                Hire Me
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              </Magnetic>
              
              <a  href="/bryan-berlandro-cv.pdf"
                download
                className="inline-flex items-center gap-2 font-mono text-[0.8rem] tracking-[0.01em] rounded-full px-5 py-[0.55rem] border transition-all duration-300 hover:bg-[--color-ink] hover:text-white hover:border-[--color-ink]"
                style={{ borderColor: "rgba(10,10,10,0.15)", color: "var(--color-ink)" }}
              >
                Download CV (PDF)
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>

        <m.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.2, ease }}
          className="relative overflow-hidden shrink-0"
          style={{
            width: "clamp(310px, 28vw, 400px)",
            minHeight: 440,
            background: "#0A0A0A",
          }}
        >
          <m.div
            style={{ y: portraitY }}
            className="absolute inset-0 scale-110"
          >
            <Image
              src="/images/bryan-berlandro-portrait-about.jpeg"
              alt="Bryan Berlandro Godlive"
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover object-top grayscale"
              style={{ filter: "grayscale(1) contrast(1.08)" }}
            />
          </m.div>

          <div
            className="absolute inset-x-0 bottom-0 h-32 z-10"
            style={{ background: "linear-gradient(to top, #0A0A0A, transparent)" }}
          />

          <div className="absolute bottom-6 left-6 z-20">
            <p
              className="font-display text-white leading-none"
              style={{ fontSize: "1.1rem", opacity: 0.5 }}
            >
              Bryan Berlandro
            </p>
          </div>
        </m.div>

        <Reveal delay={0.3} className="shrink-0">
          <div
            className="grid grid-cols-3 lg:grid-cols-1 h-full gap-[1.5px]"
            style={{ background: "rgba(10,10,10,0.08)" }}
          >
            {stats.map((s, i) => (
              <m.div
                key={s.label}
                className="group flex flex-col justify-between gap-6 px-4 py-6 sm:px-8 sm:py-8 lg:min-w-[160px] transition-colors duration-300 hover:bg-[#0A0A0A]"
                style={{ background: "var(--color-surface)" }}
              >
                <p
                  className="font-display leading-none transition-colors duration-300 group-hover:text-white"
                  style={{ fontSize: "2.8rem", color: "var(--color-ink)" }}
                >
                  {s.number}
                </p>
                <div>
                  <p
                    className="font-mono text-[0.75rem] tracking-[0.01em] mt-2 transition-colors duration-300 group-hover:text-white/60"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {s.label}
                  </p>
                  <div
                    className="mt-3 h-px w-full overflow-hidden"
                    style={{ background: "rgba(10,10,10,0.08)" }}
                  >
                    <m.div
                      className="h-full group-hover:bg-white/30 transition-colors duration-300"
                      style={{ background: "var(--color-ink)", transformOrigin: "left" }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease }}
                    />
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </Reveal>

      </div>

      <Reveal delay={0.4}>
        <div
          className="mt-[1.5px] flex items-center justify-between px-8 py-5 flex-wrap gap-4"
          style={{ background: "var(--color-paper)" }}
        >
          {[
            { label: "Based in",   value: "Depok, Indonesia" },
            { label: "Role",       value: "UI/UX Designer & Fullstack Developer" },
            { label: "Experience", value: "3 Years" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="w-[4px] h-[4px] rounded-full shrink-0" style={{ background: "var(--color-muted)" }} />
              <span className="font-mono text-[0.75rem] tracking-[0.01em]" style={{ color: "var(--color-muted)" }}>
                {item.label}
              </span>
              <span className="font-mono text-[0.78rem] tracking-[0.01em]" style={{ color: "var(--color-ink)" }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}