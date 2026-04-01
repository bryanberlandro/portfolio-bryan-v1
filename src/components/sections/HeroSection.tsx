"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { personal, skills } from "@/data/portfolio";

const ease = [0.16, 1, 0.3, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  };
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-paper grid grid-cols-2 max-md:grid-cols-1 px-10 overflow-hidden"
    >
      {/* Background index number */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-10 -translate-y-1/2 font-display select-none z-0 leading-none tracking-tighter"
        style={{ fontSize: "clamp(10rem,22vw,24rem)", color: "var(--color-surface)" }}
      >
        01
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute left-10 bottom-0 md:hidden md:right-10 -translate-y-1/2 font-display select-none z-0 leading-none tracking-tighter"
        style={{ fontSize: "clamp(5rem,12vw,24rem)", color: "var(--color-surface)" }}
      >
        BRYAN BERLANDRO
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute hidden md:flex bottom-0 md:right-10 -translate-y-1/2 font-display select-none z-0 leading-none tracking-tighter"
        style={{ fontSize: "clamp(5rem,12vw,24rem)", color: "var(--color-surface)" }}
      >
        BRYAN BERLANDRO
      </span>

      {/* ── Left ── */}
      <div className="relative z-10 flex flex-col justify-end pb-20 pt-20">
        <div className="w-32 z-10 h-full absolute left-0 top-0 bg-linear-to-r from-paper/50 via-transparent"></div>
        <div className="w-32 z-20 h-full absolute right-0 top-0 bg-linear-to-l from-paper/50 via-transparent"></div>
        <motion.p
          {...fadeUp(0.15)}
          className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-[--color-muted] mb-6"
        >
          {personal.role} — {personal.established}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 56 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.28, ease }}
          className="font-display leading-[0.88] tracking-tight"
          style={{ fontSize: "clamp(4.5rem,10vw,10.5rem)" }}
        >
          <span className="block">EXPLORE</span>
          <span className="block text-outline">MY</span>
          <span className="block">PORTFOLIO</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.55)}
          className="mt-8 text-sm leading-relaxed text-[--color-muted] max-w-[280px]"
        >
          Passionate about creating digital experiences that stand out — where
          aesthetics meet function.
        </motion.p>

        <motion.div {...fadeUp(0.7)} className="mt-10 flex items-center gap-4">
          <Link
            href="#about"
            aria-label="Scroll down"
            className="group w-[52px] h-[52px] border border-[--color-ink] rounded-full flex items-center justify-center hover:bg-[--color-ink] transition-all duration-300"
          >
            <svg
              className="w-5 h-5 stroke-[--color-ink] group-hover:stroke-white transition-colors"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </Link>
          <span className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-[--color-muted]">
            Scroll to explore
          </span>
        </motion.div>
      </div>

      {/* ── Right ── */}
      <div className="relative z-10 flex md:flex-col justify-end items-end">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.38, ease }}
          className="absolute bottom-10 md:left-1/2 -translate-x-1/2 z-10"
          style={{ width: "70%", maxWidth: 3000 }}
        >
          <Image
            src="/images/potrait.png"
            alt="Portrait"
            width={3000}
            height={3000}
            className="w-full h-auto object-contain object-bottom grayscale"
            priority
          />
        </motion.div>

        {/* Skill list */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease }}
          className="relative z-20 flex flex-col items-end gap-[7px] mb-20"
        >
          {skills.map((s) => (
            <span
              key={s}
              className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-[--color-muted] flex items-center gap-2"
            >
              {s}
              <span className="w-[5px] h-[5px] rounded-full bg-[--color-ink] opacity-25 inline-block" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
