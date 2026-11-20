import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 md:px-10 py-20 md:py-28" style={{ background: "var(--color-paper)" }}>
      <Reveal><SectionLabel>Experience</SectionLabel></Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display leading-[0.9]" style={{ fontSize: "clamp(2.5rem,6.2vw,5.75rem)" }}>
          Work<br />history
        </h2>
      </Reveal>

      <div className="mt-16 flex flex-col gap-[1.5px]" style={{ background: "rgba(10,10,10,0.08)" }}>
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={0.1 + i * 0.1}>
            <div
              className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-0 group"
              style={{ background: "var(--color-surface)" }}
            >
              <div
                className="px-8 py-10 border-r flex flex-col justify-between"
                style={{ borderColor: "rgba(10,10,10,0.08)" }}
              >
                <div>
                  <p className="font-mono text-[0.75rem] tracking-[0.01em] mb-2" style={{ color: "var(--color-muted)" }}>
                    {exp.period}
                  </p>
                  <h3 className="font-display text-[1.35rem] leading-[1.1]" style={{ color: "var(--color-ink)" }}>
                    {exp.company}
                  </h3>
                </div>
                <p className="font-mono text-[0.75rem] tracking-[0.01em] mt-6" style={{ color: "var(--color-muted)" }}>
                  {exp.location}
                </p>
              </div>

              <div className="px-8 py-10">
                <p
                  className="font-mono text-[0.78rem] tracking-[0.01em] mb-4"
                  style={{ color: "var(--color-ink)" }}
                >
                  {exp.role}
                </p>
                <p className="text-[0.92rem] leading-[1.8] mb-6" style={{ color: "var(--color-muted)" }}>
                  {exp.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-[0.82rem]" style={{ color: "var(--color-ink)" }}>
                      <span
                        className="mt-[6px] w-[4px] h-[4px] rounded-full shrink-0"
                        style={{ background: "var(--color-muted)" }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}