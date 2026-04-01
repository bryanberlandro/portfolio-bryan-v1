"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/portfolio";

const ease = [0.16, 1, 0.3, 1] as const;

export function ProjectsSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="projects" className="px-10 py-28" style={{ background: "var(--color-surface)" }}>
      <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
        <div>
          <Reveal><SectionLabel>Work</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display leading-[0.9] tracking-tight" style={{ fontSize: "clamp(3rem,6vw,6.5rem)" }}>
              SELECTED<br />PROJECTS
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <p className="text-[0.85rem] leading-relaxed max-w-xs" style={{ color: "var(--color-muted)" }}>
            A curated selection of client and personal work across UI/UX, web design, branding, and development.
          </p>
        </Reveal>
      </div>

      {/* Project list */}
      <Reveal>
        <div className="border-t" style={{ borderColor: "rgba(10,10,10,0.1)" }}>
          {projects.map((p, i) => (
            <div key={p.id}>
              {/* Row */}
              <button
                className="project-row w-full text-left py-7 flex items-center gap-6 group"
                onClick={() => setActive(active === p.id ? null : p.id)}
                data-cursor-hover
              >
                {/* Index */}
                <span className="font-mono text-[0.6rem] tracking-[0.15em] shrink-0 w-6" style={{ color: "var(--color-muted)" }}>
                  {p.index}
                </span>

                {/* Name */}
                <span
                  className="font-display tracking-wide flex-1 transition-all duration-300 group-hover:pl-1"
                  style={{ fontSize: "clamp(1.6rem,3.5vw,2.6rem)", color: "var(--color-ink)" }}
                >
                  {p.name}
                </span>

                {/* Tags - hidden on mobile */}
                <div className="hidden md:flex gap-2 items-center">
                  {p.tags.map((t) => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>

                {/* Year */}
                <span className="font-mono text-[0.6rem] tracking-[0.14em] shrink-0 hidden sm:block" style={{ color: "var(--color-muted)" }}>
                  {p.year}
                </span>

                {/* Expand arrow */}
                <motion.div
                  className="shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300"
                  style={{ borderColor: "rgba(10,10,10,0.12)" }}
                  animate={{ rotate: active === p.id ? 45 : 0 }}
                  transition={{ duration: 0.35, ease }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </motion.div>
              </button>

              {/* Expanded Detail Panel */}
              <AnimatePresence initial={false}>
                {active === p.id && (
                  <motion.div
                    key="detail"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.55, ease }}
                    className="overflow-hidden"
                  >
                    <div
                      className="grid grid-cols-1 lg:grid-cols-3 gap-[1.5px] mb-7"
                      style={{ background: "rgba(10,10,10,0.08)" }}
                    >
                      {/* Left: thumbnail placeholder + description */}
                      <div
                        className="lg:col-span-2 p-8 flex flex-col gap-6"
                        style={{ background: p.dark ? "#0A0A0A" : "var(--color-paper)" }}
                      >
                        {/* Mock thumbnail */}
                        <div
                          className="w-full rounded-[2px] flex items-center justify-center"
                          style={{
                            height: 200,
                            background: p.dark ? "rgba(255,255,255,0.04)" : "rgba(10,10,10,0.04)",
                          }}
                        >
                          <span
                            className="font-display tracking-widest opacity-20"
                            style={{
                              fontSize: "5rem",
                              color: p.dark ? "#fff" : "var(--color-ink)",
                            }}
                          >
                            {p.index}
                          </span>
                        </div>

                        <div>
                          <p
                            className="font-mono text-[0.6rem] tracking-[0.18em] uppercase mb-3"
                            style={{ color: p.dark ? "rgba(255,255,255,0.35)" : "var(--color-muted)" }}
                          >
                            {p.type} — {p.year}
                          </p>
                          <p
                            className="text-[0.95rem] leading-[1.8]"
                            style={{ color: p.dark ? "rgba(255,255,255,0.6)" : "var(--color-muted)" }}
                          >
                            {p.description}
                          </p>
                        </div>

                        {/* Links */}
                        <div className="flex gap-3 flex-wrap mt-auto">
                          {p.liveUrl && (
                            <Link
                              href={p.liveUrl}
                              target="_blank"
                              className="inline-flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.12em] uppercase rounded-full px-5 py-[0.5rem] transition-all duration-300"
                              style={{
                                background: p.dark ? "#fff" : "var(--color-ink)",
                                color: p.dark ? "var(--color-ink)" : "#fff",
                              }}
                            >
                              Live Site
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7M17 7H7M17 7v10" />
                              </svg>
                            </Link>
                          )}
                          {p.githubUrl && (
                            <Link
                              href={p.githubUrl}
                              target="_blank"
                              className="inline-flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.12em] uppercase rounded-full px-5 py-[0.5rem] border transition-all duration-300"
                              style={{
                                borderColor: p.dark ? "rgba(255,255,255,0.2)" : "rgba(10,10,10,0.15)",
                                color: p.dark ? "rgba(255,255,255,0.7)" : "var(--color-ink)",
                              }}
                            >
                              GitHub
                            </Link>
                          )}
                        </div>
                      </div>

                      {/* Right: meta */}
                      <div
                        className="p-8 flex flex-col gap-8"
                        style={{ background: "var(--color-surface)" }}
                      >
                        {/* Tech Stack */}
                        <div>
                          <p className="font-mono text-[0.58rem] tracking-[0.18em] uppercase mb-3" style={{ color: "var(--color-muted)" }}>
                            Tech Stack
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {p.tech.map((t) => (
                              <span key={t} className="skill-tag">{t}</span>
                            ))}
                          </div>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <p className="font-mono text-[0.58rem] tracking-[0.18em] uppercase mb-3" style={{ color: "var(--color-muted)" }}>
                            Deliverables
                          </p>
                          <ul className="flex flex-col gap-2">
                            {p.deliverables.map((d) => (
                              <li key={d} className="flex items-center gap-2 text-[0.82rem]" style={{ color: "var(--color-ink)" }}>
                                <span className="w-[4px] h-[4px] rounded-full shrink-0" style={{ background: "var(--color-muted)" }} />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Outcome */}
                        <div>
                          <p className="font-mono text-[0.58rem] tracking-[0.18em] uppercase mb-3" style={{ color: "var(--color-muted)" }}>
                            Outcome
                          </p>
                          <p className="text-[0.85rem] leading-[1.7]" style={{ color: "var(--color-ink)" }}>
                            {p.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}