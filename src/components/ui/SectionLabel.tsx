interface Props { children: string; light?: boolean; }

export function SectionLabel({ children, light = false }: Props) {
  return (
    <p
      className={`flex items-center gap-3 mb-3 tracking-[0.01em] text-[0.8rem] font-medium`}
      style={{
        fontFamily: "var(--font-mono)",
        color: light ? "rgba(255,255,255,0.6)" : "var(--color-muted)",
      }}
    >
      <span
        className="block h-px w-7 shrink-0"
        style={{ background: light ? "rgba(255,255,255,0.25)" : "var(--color-muted)" }}
      />
      {children}
    </p>
  );
}
