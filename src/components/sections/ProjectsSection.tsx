"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/portfolio";
import { ImageLightbox } from "@/components/ui/ImageLightbox";

export function ProjectsSection() {
  const [active, setActive] = useState<string | null>(null);
  // Screenshots mount on first hover/focus/open so collapsed rows never download images.
  const [seen, setSeen] = useState<Set<string>>(() => new Set());
  const markSeen = (id: string) =>
    setSeen((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));

  return (
    <section id="projects" className="px-6 md:px-10 py-20 md:py-28" style={{ background: "var(--color-surface)" }}>
      <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
        <div>
          <Reveal><SectionLabel>Work</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display leading-[0.9]" style={{ fontSize: "clamp(2.5rem,6.2vw,5.75rem)" }}>
              Selected<br />projects
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <p className="text-[0.85rem] leading-relaxed max-w-xs" style={{ color: "var(--color-muted)" }}>
            A selection of websites and web apps I designed and built, from company sites to a community platform.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="border-t" style={{ borderColor: "rgba(10,10,10,0.1)" }}>
          {projects.map((p) => {
            const isOpen = active === p.id;
            const muted = p.dark ? "rgba(255,255,255,0.6)" : "var(--color-muted)";
            return (
              <article key={p.id} aria-label={`${p.name}, ${p.type}`}>
                <h3>
                  <button
                    type="button"
                    className="project-row w-full text-left py-6 md:py-7 flex items-center gap-4 md:gap-6 group"
                    onClick={() => {
                      markSeen(p.id);
                      setActive(isOpen ? null : p.id);
                    }}
                    onPointerEnter={() => markSeen(p.id)}
                    onFocus={() => markSeen(p.id)}
                    aria-expanded={isOpen}
                    aria-controls={`project-${p.id}`}
                    data-cursor-hover
                    data-cursor-label={isOpen ? "Close" : "Open"}
                  >
                    <span className="font-mono text-[0.78rem] tracking-[0.01em] shrink-0 w-6" style={{ color: "var(--color-muted)" }}>
                      {p.index}
                    </span>

                    <span className="flex-1 min-w-0 flex flex-col gap-1">
                      <span
                        className="font-display transition-all duration-300 group-hover:pl-1"
                        style={{ fontSize: "clamp(1.2rem,2.8vw,2.1rem)", lineHeight: 1.15, color: "var(--color-ink)" }}
                      >
                        {p.name}
                      </span>
                      <span className="md:hidden font-mono text-[0.75rem] tracking-[0.01em]" style={{ color: "var(--color-muted)" }}>
                        {p.type} · {p.year}
                      </span>
                    </span>

                    <span className="hidden md:flex gap-2 items-center">
                      {p.tags.map((t) => (
                        <span key={t} className="skill-tag">{t}</span>
                      ))}
                    </span>

                    <span className="font-mono text-[0.78rem] tracking-[0.01em] shrink-0 hidden md:block" style={{ color: "var(--color-muted)" }}>
                      {p.year}
                    </span>

                    <span className="project-toggle shrink-0 w-9 h-9 rounded-full border flex items-center justify-center" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                </h3>

                {/* Details stay in the DOM (and server HTML) so crawlers can read them; collapsed panels are inert. */}
                <div id={`project-${p.id}`} className="disclosure" data-open={isOpen} inert={!isOpen}>
                  <div className="disclosure-inner">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1.5px] mb-7" style={{ background: "rgba(10,10,10,0.08)" }}>
                      <div
                        className="lg:col-span-2 p-5 sm:p-8 flex flex-col gap-6"
                        {...(p.dark ? { "data-cursor-dark": "" } : {})}
                        style={{ background: p.dark ? "#0A0A0A" : "var(--color-paper)" }}
                      >
                        <ImageLightbox
                          src={p.img}
                          alt={`${p.name} website screenshot`}
                          label={p.name}
                          dark={p.dark}
                          load={seen.has(p.id)}
                        />

                        <div>
                          <p className="font-mono text-[0.78rem] tracking-[0.01em] mb-3" style={{ color: muted }}>
                            {p.type} · {p.year}
                          </p>
                          <p className="text-[0.95rem] leading-[1.8] max-w-[62ch]" style={{ color: muted }}>
                            {p.description}
                          </p>
                        </div>

                        <div className="flex gap-3 flex-wrap mt-auto">
                          {p.liveUrl && (
                            <Link
                              href={p.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Visit the ${p.name} live site (opens in a new tab)`}
                              className="inline-flex items-center gap-2 font-mono text-[0.8rem] tracking-[0.01em] rounded-full px-5 py-[0.6rem] transition-opacity duration-300 hover:opacity-80"
                              style={{
                                background: p.dark ? "#fff" : "var(--color-ink)",
                                color: p.dark ? "var(--color-ink)" : "#fff",
                              }}
                            >
                              Live Site
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M7 17L17 7M17 7H7M17 7v10" />
                              </svg>
                            </Link>
                          )}
                          {p.githubUrl && (
                            <Link
                              href={p.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${p.name} on GitHub (opens in a new tab)`}
                              className="inline-flex items-center gap-2 font-mono text-[0.8rem] tracking-[0.01em] rounded-full px-5 py-[0.6rem] border transition-opacity duration-300 hover:opacity-70"
                              style={{
                                borderColor: p.dark ? "rgba(255,255,255,0.3)" : "rgba(10,10,10,0.2)",
                                color: p.dark ? "rgba(255,255,255,0.8)" : "var(--color-ink)",
                              }}
                            >
                              GitHub
                            </Link>
                          )}
                        </div>
                      </div>

                      <div className="p-5 sm:p-8 flex flex-col gap-8" style={{ background: "var(--color-surface)" }}>
                        <div>
                          <h4 className="font-mono text-[0.75rem] tracking-[0.01em] mb-3 font-normal" style={{ color: "var(--color-muted)" }}>
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {p.tech.map((t) => (
                              <span key={t} className="skill-tag">{t}</span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-mono text-[0.75rem] tracking-[0.01em] mb-3 font-normal" style={{ color: "var(--color-muted)" }}>
                            My Contribution
                          </h4>
                          <ul className="flex flex-col gap-2">
                            {p.deliverables.map((d) => (
                              <li key={d} className="flex items-start gap-2 text-[0.82rem] leading-[1.5]" style={{ color: "var(--color-ink)" }}>
                                <span className="mt-[0.5em] w-[4px] h-[4px] rounded-full shrink-0" style={{ background: "var(--color-muted)" }} />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-mono text-[0.75rem] tracking-[0.01em] mb-3 font-normal" style={{ color: "var(--color-muted)" }}>
                            Outcome
                          </h4>
                          <p className="text-[0.85rem] leading-[1.7]" style={{ color: "var(--color-ink)" }}>
                            {p.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
