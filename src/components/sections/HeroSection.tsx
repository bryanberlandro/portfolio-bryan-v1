import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { personal, skills } from "@/data/portfolio";
import { ArrowDown } from "lucide-react";

/** CSS-only entrance (see .rise in globals.css): renders in the first paint and needs no hydration. */
const rise = (delay: number, y = 32, duration = 0.9, x = 0) =>
  ({
    "--rise-delay": `${delay}s`,
    "--rise-y": `${y}px`,
    "--rise-x": `${x}px`,
    "--rise-d": `${duration}s`,
  }) as CSSProperties;

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-paper grid grid-cols-2 max-md:grid-cols-1 px-6 md:px-10 overflow-hidden"
    >
      <div className="relative z-10 flex flex-col justify-end pb-20 pt-20">
        <p
          style={rise(0.15)}
          className="rise font-mono text-[0.8rem] tracking-[0.01em] text-[--color-muted] mb-6"
        >
          {personal.role} · {personal.location}
        </p>

        <h1
          className="rise font-display leading-[0.9]"
          style={{ ...rise(0.28, 56, 1.05), fontSize: "clamp(3.3rem,8.6vw,8.75rem)", letterSpacing: "-0.045em" }}
        >
          <span className="block">Bryan</span>
          <span className="block">Berlandro</span>
          <span className="block md:pl-[0.55em]" style={{ fontWeight: 300 }}>Godlive</span>
          <span className="sr-only">, {personal.role} based in {personal.location}</span>
        </h1>

        <p
          style={rise(0.55)}
          className="rise mt-8 text-sm leading-relaxed text-[--color-muted] max-w-[320px]"
        >
          {personal.heroIntro}
        </p>

        <div style={rise(0.7)} className="rise mt-10 flex items-center gap-4">
          <Link
            href="#about"
            aria-label="Scroll down to the About section"
            className="group w-[52px] h-[52px] border border-ink rounded-full flex items-center justify-center hover:bg-ink transition-all duration-300"
          >
            <ArrowDown />
          </Link>
          <span className="font-mono text-[0.78rem] tracking-[0.01em] text-muted">
            Scroll to explore
          </span>
        </div>
      </div>

      <div className="relative z-10 flex md:flex-col justify-end items-end">
        <div
          className="rise absolute bottom-10 md:left-[15%] max-md:-translate-x-1/2 z-10"
          style={{ ...rise(0.38, 48, 1.3), width: "70%", maxWidth: 3000 }}
        >
          <Image
            src="/images/bryan-berlandro-portrait.png"
            alt="Portrait of Bryan Berlandro Godlive"
            width={502}
            height={497}
            sizes="(min-width: 768px) 35vw, 70vw"
            className="w-full h-auto object-contain object-bottom grayscale"
            priority
          />
        </div>

        <div
          style={rise(0.9, 0, 0.9, 16)}
          className="rise relative z-20 flex flex-col items-end gap-[7px] mb-20"
        >
          {skills.map((s) => (
            <span
              key={s}
              className="font-mono text-[0.8rem] tracking-[0.01em] text-[--color-muted] flex items-center gap-2"
            >
              {s}
              <span className="w-[5px] h-[5px] rounded-full bg-[--color-ink] opacity-25 inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
