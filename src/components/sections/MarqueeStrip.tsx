const items = [
  "UI / UX Design","Web Development","Landing Pages","Figma Expert",
  "Webflow","Brand Identity","Motion Design","Mobile App",
  "UI / UX Design","Web Development","Landing Pages","Figma Expert",
  "Webflow","Brand Identity","Motion Design","Mobile App",
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
              className="font-display tracking-[0.18em] mx-10 opacity-70"
              style={{ fontSize: "1rem", color: "#fff" }}
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
