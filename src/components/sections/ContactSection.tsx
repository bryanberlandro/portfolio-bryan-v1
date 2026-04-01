"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { personal, socials } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative px-10 py-36 text-center overflow-hidden"
      style={{ background: "#0A0A0A" }}
      data-cursor-dark
    >
      {/* Watermark */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display leading-none z-0 tracking-tight"
        style={{ fontSize: "clamp(6rem,22vw,22rem)", color: "rgba(255,255,255,0.022)", whiteSpace: "nowrap" }}
      >
        TALK
      </span>

      <div className="relative z-10">
        <Reveal><SectionLabel light>Get In Touch</SectionLabel></Reveal>

        <Reveal delay={0.1}>
          <h2
            className="font-display leading-[0.88] tracking-tight text-white mt-2 mb-6"
            style={{ fontSize: "clamp(4rem,10vw,11rem)" }}
          >
            LET&apos;S<br />
            <span className="text-outline-white-solid">TALK</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className="text-[0.9rem] leading-[1.8] max-w-[360px] mx-auto mb-4"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Have a project in mind? Let&apos;s build something extraordinary together.
          </p>
          
          <a  href={`mailto:${personal.email}`}
            className="font-mono text-[0.72rem] tracking-[0.18em] uppercase mb-10 block hover:opacity-60 transition-opacity"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {personal.email}
          </a>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href={`mailto:${personal.email}`}
              className="font-mono text-[0.68rem] tracking-[0.14em] uppercase bg-white text-[--color-ink] rounded-full px-10 py-4 hover:opacity-85 hover:scale-[0.98] transition-all duration-300"
            >
              Start a Project
            </Link>
            <Link
              href="#projects"
              className="font-mono text-[0.68rem] tracking-[0.14em] uppercase rounded-full px-10 py-4 transition-all duration-300"
              style={{ border: "1.5px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.7)" }}
            >
              View My Work
            </Link>
          </div>
        </Reveal>

        {/* ── Social links — redesigned ── */}
        <Reveal delay={0.4}>
          <div
            className="mt-16 pt-10 flex items-center justify-center gap-3 flex-wrap"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="group inline-flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.14em] uppercase px-5 py-[0.6rem] rounded-full border transition-all duration-300 hover:bg-white hover:border-white"
                style={{
                  borderColor: "rgba(255,255,255,0.18)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                <span
                  className="w-[5px] h-[5px] rounded-full shrink-0 transition-colors duration-300 group-hover:bg-ink"
                  style={{ background: "rgba(255,255,255,0.3)" }}
                />
                <span className="transition-colors duration-300 group-hover:text-ink">
                  {s.label}
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}