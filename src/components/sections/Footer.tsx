import { personal } from "@/data/portfolio";

export function Footer() {
  return (
    <footer
      className="px-6 md:px-10 py-5 flex items-center justify-between flex-wrap gap-3"
      style={{ background: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <span className="font-mono text-[0.75rem] tracking-[0.01em]" style={{ color: "rgba(255,255,255,0.6)" }}>
        © {new Date().getFullYear()} {personal.name}. All Rights Reserved.
      </span>
      <span className="font-mono text-[0.75rem] tracking-[0.01em]" style={{ color: "rgba(255,255,255,0.6)" }}>
        {personal.location} · Designed with precision.
      </span>
    </footer>
  );
}