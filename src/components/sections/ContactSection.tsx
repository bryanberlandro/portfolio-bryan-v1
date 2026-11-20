import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { personal, socials } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-10 py-24 md:py-36 text-center overflow-hidden"
      style={{ background: "#0A0A0A" }}
      data-cursor-dark
    >

      <div className="relative z-10">
        <Reveal><SectionLabel light>Get In Touch</SectionLabel></Reveal>

        <Reveal delay={0.1}>
          <h2
            className="font-display leading-[0.88] text-white mt-2 mb-6"
            style={{ fontSize: "clamp(3rem,9vw,9rem)" }}
          >
            Let&apos;s<br />
            <span style={{ fontWeight: 300 }}>talk</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className="text-[0.9rem] leading-[1.8] max-w-[360px] mx-auto mb-4"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Have a project in mind? Send me a message and tell me what you need.
          </p>
          
          <div className="mb-10 flex items-center justify-center gap-3 flex-wrap">
            <a
              href={`mailto:${personal.email}`}
              className="font-mono text-[0.86rem] tracking-[0.01em] hover:opacity-60 transition-opacity break-all"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {personal.email}
            </a>
            <CopyEmailButton email={personal.email} />
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Magnetic>
            <Link
              href={`mailto:${personal.email}`}
              className="font-mono text-[0.82rem] tracking-[0.01em] bg-white text-[--color-ink] rounded-full px-10 py-4 hover:opacity-85 hover:scale-[0.98] transition-all duration-300"
            >
              Start a Project
            </Link>
            </Magnetic>
            <Link
              href="#projects"
              className="font-mono text-[0.82rem] tracking-[0.01em] rounded-full px-10 py-4 transition-all duration-300"
              style={{ border: "1.5px solid rgba(255,255,255,0.6)", color: "rgba(255,255,255,0.7)" }}
            >
              View My Work
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div
            className="mt-16 pt-10 flex items-center justify-center gap-3 flex-wrap"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {socials.map((s) => {
              const cls =
                "group inline-flex items-center gap-2 font-mono text-[0.8rem] tracking-[0.01em]  px-5 py-[0.6rem] rounded-full border transition-all duration-300";
              const style = { borderColor: "rgba(255,255,255,0.6)", color: "rgba(255,255,255,0.6)" };
              const dot = (
                <span
                  className="w-[5px] h-[5px] rounded-full shrink-0 transition-colors duration-300 group-hover:bg-ink"
                  style={{ background: "rgba(255,255,255,0.3)" }}
                />
              );
              if (!s.href) {
                // Placeholder: no verified profile URL yet. Visible but not a link.
                return (
                  <span
                    key={s.label}
                    aria-disabled="true"
                    title={`${s.label} profile coming soon`}
                    className={`${cls} opacity-40 cursor-default`}
                    style={style}
                  >
                    {dot}
                    <span>{s.label}</span>
                  </span>
                );
              }
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Bryan Berlandro on ${s.label} (opens in a new tab)`}
                  data-cursor-hover
                  className={`${cls} hover:bg-white hover:border-white`}
                  style={style}
                >
                  {dot}
                  <span className="transition-colors duration-300 group-hover:text-ink">{s.label}</span>
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}