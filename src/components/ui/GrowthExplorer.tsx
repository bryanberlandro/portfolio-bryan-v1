"use client";

import { useMemo, useRef, useState, type KeyboardEvent } from "react";
import type { GrowthTrack, TimelineItem } from "@/data/growth";

interface Props {
  tracks: GrowthTrack[];
  timeline: TimelineItem[];
  years: string[];
  projectTotal: number;
}

/**
 * Interactive capabilities explorer: pick an area, open a skill, and see where it shows up in the
 * projects and roles on this site. The timeline dims everything unrelated to the open skill.
 * All data is derived from existing portfolio content (see data/growth.ts).
 */
export function GrowthExplorer({ tracks, timeline, years, projectTotal }: Props) {
  const [trackId, setTrackId] = useState(tracks[0].id);
  const [openSkill, setOpenSkill] = useState<string | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const track = tracks.find((t) => t.id === trackId) ?? tracks[0];
  const skill = track.skills.find((s) => s.name === openSkill) ?? null;
  const related = useMemo(() => new Set(skill?.relatedIds ?? []), [skill]);
  const highlighting = skill !== null && related.size > 0;

  const selectTrack = (id: string) => {
    setTrackId(id);
    setOpenSkill(null);
  };

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = tracks.length - 1;
    let next = index;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    selectTrack(tracks[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Areas */}
        <div className="lg:col-span-5">
          <div role="tablist" aria-label="Capability areas" className="grid grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-1">
            {tracks.map((t, i) => {
              const selected = t.id === trackId;
              return (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  type="button"
                  id={`growth-tab-${t.id}`}
                  aria-selected={selected}
                  aria-controls={`growth-panel-${t.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectTrack(t.id)}
                  onKeyDown={(e) => onTabKey(e, i)}
                  data-cursor-hover
                  className="growth-tab text-left py-3 lg:py-4"
                  data-selected={selected}
                >
                  <span className="block font-mono text-[0.8rem] mb-1 lg:mb-2">
                    {String(i + 1).padStart(2, "0")} · {t.skills.length} skills
                  </span>
                  <span className="block font-display leading-[0.95]" style={{ fontSize: "clamp(1.6rem,4.4vw,4rem)" }}>
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="hidden lg:block mt-8 text-[0.95rem] leading-[1.7] max-w-[36ch]" style={{ color: "rgba(255,255,255,0.6)" }}>
            {track.blurb}
          </p>
        </div>

        {/* Skills */}
        <div
          role="tabpanel"
          id={`growth-panel-${track.id}`}
          aria-labelledby={`growth-tab-${track.id}`}
          className="lg:col-span-7"
        >
          <p className="lg:hidden mb-6 text-[0.95rem] leading-[1.7]" style={{ color: "rgba(255,255,255,0.6)" }}>
            {track.blurb}
          </p>
          <ul className="border-t" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
            {track.skills.map((s) => {
              const open = openSkill === s.name;
              const count = s.projects.length;
              const panelId = `growth-skill-${track.id}-${s.name.replace(/[^a-z0-9]/gi, "")}`;
              return (
                <li key={s.name} className="border-b" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenSkill(open ? null : s.name)}
                      data-cursor-hover
                      data-cursor-label={open ? "Close" : "Open"}
                      className="growth-skill w-full text-left flex items-center gap-4 py-5"
                    >
                      <span className="flex-1 min-w-0 font-display" style={{ fontSize: "clamp(1.15rem,2.2vw,1.6rem)", letterSpacing: "-0.02em" }}>
                        {s.name}
                      </span>
                      {count > 0 ? (
                        <span className="flex items-center gap-3 shrink-0">
                          <span className="hidden sm:inline font-mono text-[0.8rem]" style={{ color: "rgba(255,255,255,0.6)" }}>
                            {count} of {projectTotal} projects
                          </span>
                          <span className="meter" aria-hidden="true">
                            {Array.from({ length: projectTotal }, (_, i) => (
                              <span key={i} className="meter-seg" data-on={i < count} style={{ ["--i" as string]: i }} />
                            ))}
                          </span>
                          <span className="sr-only sm:hidden">{count} of {projectTotal} projects</span>
                        </span>
                      ) : (
                        <span className="shrink-0 font-mono text-[0.8rem]" style={{ color: "rgba(255,255,255,0.6)" }}>
                          In my stack
                        </span>
                      )}
                      <span className="growth-plus shrink-0 w-8 h-8 rounded-full border flex items-center justify-center" aria-hidden="true">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div id={panelId} role="region" aria-label={`${s.name} details`} className="disclosure" data-open={open} inert={!open}>
                    <div className="disclosure-inner">
                      <div className="pb-6 flex flex-col gap-5 max-w-[62ch]">
                        {s.summary && (
                          <p className="text-[0.95rem] leading-[1.7]" style={{ color: "rgba(255,255,255,0.7)" }}>
                            {s.summary}
                          </p>
                        )}
                        {s.projects.length > 0 && (
                          <div>
                            <p className="font-mono text-[0.8rem] mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                              Seen in projects
                            </p>
                            <ul className="flex flex-wrap gap-2">
                              {s.projects.map((p) => (
                                <li key={p.id}>
                                  <a href="#projects" className="growth-chip">
                                    {p.name} <span style={{ opacity: 0.6 }}>{p.year}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {s.work.length > 0 && (
                          <div>
                            <p className="font-mono text-[0.8rem] mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                              Seen in work
                            </p>
                            <ul className="flex flex-col gap-1.5">
                              {s.work.map((w) => (
                                <li key={w.id} className="text-[0.9rem] leading-[1.5]">
                                  <a href="#experience" className="growth-link">
                                    {w.company}
                                  </a>
                                  <span style={{ color: "rgba(255,255,255,0.6)" }}> · {w.role}, {w.period}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {s.projects.length === 0 && s.work.length === 0 && (
                          <p className="text-[0.9rem] leading-[1.6]" style={{ color: "rgba(255,255,255,0.6)" }}>
                            Part of my confirmed stack. It is not tied to a specific project listed on this site.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-20 md:mt-28">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
          <h3 className="font-display" style={{ fontSize: "clamp(1.4rem,2.6vw,2.2rem)" }}>
            Timeline
          </h3>
          <p role="status" aria-live="polite" className="font-mono text-[0.8rem]" style={{ color: "rgba(255,255,255,0.6)" }}>
            {highlighting
              ? `Highlighting where ${skill!.name} appears`
              : skill
                ? `${skill.name} is not tied to a dated entry`
                : "Open a skill to see where it appears"}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
          {years.map((year) => (
            <div key={year}>
              <p className="font-display mb-4 pb-4 border-b" style={{ fontSize: "clamp(2rem,3.4vw,3rem)", fontWeight: 300, borderColor: "rgba(255,255,255,0.14)" }}>
                {year}
              </p>
              <ol className="flex flex-col gap-4">
                {timeline
                  .filter((t) => t.year === year)
                  .map((t) => (
                    <li key={t.id} className="timeline-item" data-dim={highlighting && !related.has(t.id)} data-hit={highlighting && related.has(t.id)}>
                      <a href={t.href} className="block">
                        <span className="block font-mono text-[0.8rem]" style={{ color: "rgba(255,255,255,0.6)" }}>
                          {t.kind}
                          {t.current ? " · Present" : ""}
                        </span>
                        <span className="block font-display text-[1.1rem] leading-[1.25] mt-0.5" style={{ letterSpacing: "-0.015em" }}>
                          {t.title}
                        </span>
                        <span className="block text-[0.85rem] leading-[1.45] mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                          {t.meta}
                        </span>
                      </a>
                    </li>
                  ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
