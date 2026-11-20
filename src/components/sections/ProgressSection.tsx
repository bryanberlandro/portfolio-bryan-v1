import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GrowthExplorer } from "@/components/ui/GrowthExplorer";
import { process as steps } from "@/data/portfolio";
import { projectTotal, timeline, timelineYears, tracks } from "@/data/growth";

export function ProgressSection() {
  return (
    <section id="progress" className="px-6 md:px-10 py-20 md:py-28" style={{ background: "#0A0A0A", color: "#fff" }} data-cursor-dark>
      <Reveal>
        <SectionLabel light>Growth &amp; Capabilities</SectionLabel>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display leading-[0.9] text-white" style={{ fontSize: "clamp(2.5rem,6.2vw,5.75rem)" }}>
          My <span style={{ fontWeight: 300 }}>progress</span>
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-6 mb-14 md:mb-20 max-w-[58ch] text-[1rem] leading-[1.7]" style={{ color: "rgba(255,255,255,0.6)" }}>
          Where my skills show up in real work. Open a skill to see the projects and roles it appears in. Everything here comes
          from the projects and experience listed on this site.
        </p>
      </Reveal>

      <GrowthExplorer tracks={tracks} timeline={timeline} years={timelineYears} projectTotal={projectTotal} />

      <div className="mt-20 md:mt-28 pt-10 border-t" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
        <h3 className="font-display mb-8" style={{ fontSize: "clamp(1.4rem,2.6vw,2.2rem)" }}>
          How I work
        </h3>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-8">
          {steps.map((step) => (
            <li key={step.num}>
              <p className="font-mono text-[0.8rem] mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                {step.num}
              </p>
              <h4 className="font-display text-[1.25rem] mb-2" style={{ letterSpacing: "-0.02em" }}>
                {step.title}
              </h4>
              <p className="text-[0.9rem] leading-[1.65]" style={{ color: "rgba(255,255,255,0.6)" }}>
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
