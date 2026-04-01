"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stats } from "@/data/portfolio";

const ease = [0.16, 1, 0.3, 1] as const;

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax on portrait
  const portraitY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="px-10 py-28 overflow-hidden"
      style={{ background: "var(--color-surface)" }}
    >
      {/* ── Row 1: Label + availability ── */}
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
            <span className="font-mono text-[0.58rem] tracking-[0.16em] uppercase" style={{ color: "var(--color-ink)" }}>
              Available for projects
            </span>
          </div>
        </Reveal>
      </div>

      {/* ── Row 2: The main horizontal stack ── */}
      <div className="flex flex-col lg:flex-row items-stretch gap-[1.5px]" style={{ background: "rgba(10,10,10,0.08)" }}>

        {/* ── Col A: Name + bio (left) ── */}
        <Reveal delay={0.15} className="flex-1">
          <div
            className="flex flex-col justify-between h-full p-10 gap-10"
            style={{ background: "var(--color-paper)" }}
          >
            {/* Role badge */}
            <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase" style={{ color: "var(--color-muted)" }}>
              Designer &amp; Developer · Depok, ID
            </p>

            {/* Name — medium size, not overwhelming */}
            <div>
              <h2
                className="font-display leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.4rem,4.5vw,4.8rem)", color: "var(--color-ink)" }}
              >
                Bryan<br />
                <span className="text-outline" style={{ fontSize: "clamp(2.4rem,4.5vw,4.8rem)" }}>
                  Berlandro
                </span><br />
                Godlive
              </h2>

              {/* Thin divider */}
              <div className="flex items-center gap-4 mt-6">
                <span className="block h-px flex-1" style={{ background: "rgba(10,10,10,0.1)" }} />
                <span className="font-mono text-[0.55rem] tracking-[0.18em] uppercase" style={{ color: "var(--color-muted)" }}>
                  Est. 2020
                </span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-[0.92rem] leading-[1.85]" style={{ color: "var(--color-muted)" }}>
              Passionate about creating digital experiences that stand out — where{" "}
              <strong className="font-medium" style={{ color: "var(--color-ink)" }}>
                aesthetics meet function
              </strong>
              . I design and build products that feel as good as they look.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-3 flex-wrap">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.14em] uppercase rounded-full px-5 py-[0.55rem] transition-all duration-300 hover:opacity-75"
                style={{ background: "var(--color-ink)", color: "#fff" }}
              >
                Hire Me
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              
              <a  href="/cv-bryan-sibuea.pdf"
                download
                className="inline-flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.14em] uppercase rounded-full px-5 py-[0.55rem] border transition-all duration-300 hover:bg-[--color-ink] hover:text-white hover:border-[--color-ink]"
                style={{ borderColor: "rgba(10,10,10,0.15)", color: "var(--color-ink)" }}
              >
                Download CV
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>

        {/* ── Col B: Portrait — the wow factor ── */}
        <motion.div
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
          <motion.div
            style={{ y: portraitY }}
            className="absolute inset-0 scale-110"
          >
            <Image
              src="/images/potrait2.jpeg"
              alt="Bryan Berlandro Godlive Sibuea"
              fill
              className="object-cover object-top grayscale"
              style={{ filter: "grayscale(1) contrast(1.08)" }}
            />
          </motion.div>

          {/* Overlay gradient bottom */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 z-10"
            style={{ background: "linear-gradient(to top, #0A0A0A, transparent)" }}
          />

          {/* Name overlay on photo */}
          <div className="absolute bottom-6 left-6 z-20">
            <p
              className="font-display text-white leading-none tracking-wide"
              style={{ fontSize: "1.1rem", opacity: 0.5 }}
            >
              Bryan Berlandro
            </p>
          </div>
        </motion.div>

        {/* ── Col C: Stats stacked vertically (right) ── */}
        <Reveal delay={0.3} className="shrink-0">
          <div
            className="flex flex-row lg:flex-col h-full gap-[1.5px]"
            style={{ background: "rgba(10,10,10,0.08)" }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="group flex flex-col justify-between px-8 py-8 flex-1 transition-colors duration-300 cursor-none"
                style={{ background: "var(--color-surface)", minWidth: 160 }}
                whileHover={{ backgroundColor: "#0A0A0A" }}
              >
                <p
                  className="font-display leading-none transition-colors duration-300 group-hover:text-white"
                  style={{ fontSize: "2.8rem", color: "var(--color-ink)" }}
                >
                  {s.number}
                </p>
                <div>
                  <p
                    className="font-mono text-[0.56rem] tracking-[0.16em] uppercase mt-2 transition-colors duration-300 group-hover:text-white/40"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {s.label}
                  </p>
                  {/* Progress bar — visual flair */}
                  <div
                    className="mt-3 h-px w-full overflow-hidden"
                    style={{ background: "rgba(10,10,10,0.08)" }}
                  >
                    <motion.div
                      className="h-full group-hover:bg-white/30 transition-colors duration-300"
                      style={{ background: "var(--color-ink)" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${[88, 72, 95, 98][i]}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

      </div>

      {/* ── Row 3: Horizontal marquee-style info strip ── */}
      <Reveal delay={0.4}>
        <div
          className="mt-[1.5px] flex items-center justify-between px-8 py-5 flex-wrap gap-4"
          style={{ background: "var(--color-paper)" }}
        >
          {[
            { label: "Based in",     value: "Jakarta, Indonesia" },
            { label: "Available",    value: "Full-time & Freelance" },
            { label: "Speaks",       value: "Indonesian, English" },
            { label: "Response",     value: "Within 24 hours" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="w-[4px] h-[4px] rounded-full shrink-0" style={{ background: "var(--color-muted)" }} />
              <span className="font-mono text-[0.56rem] tracking-[0.14em] uppercase" style={{ color: "var(--color-muted)" }}>
                {item.label}
              </span>
              <span className="font-mono text-[0.6rem] tracking-[0.1em] uppercase" style={{ color: "var(--color-ink)" }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}