const items = [
  "UI/UX Design","Web Design","Frontend Development","Fullstack Development","Responsive Web Development",
  "UI/UX Design","Web Design","Frontend Development","Fullstack Development","Responsive Web Development",
];

export function MarqueeStrip() {
  return (
    <div
      className="overflow-hidden whitespace-nowrap select-none py-[13px]"
      style={{ background: "var(--color-ink)" }}
    >
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="font-display tracking-[0.04em] mx-10 opacity-70"
              style={{ fontSize: "0.95rem", color: "#fff" }}
            >
              {item}
            </span>
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "1.2rem", fontFamily: "var(--font-display)" }}>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
