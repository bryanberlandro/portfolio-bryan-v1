"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "About",       href: "#about" },
  { label: "Work",        href: "#projects" },
  { label: "Experience",  href: "#experience" },
  { label: "Services",    href: "#services" },
  { label: "Contact",     href: "#contact" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeSection, setActive]  = useState("");

  // ── Scroll detection ──
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Active section via IntersectionObserver ──
  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Lock body scroll when menu open ──
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease }}
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
        style={{
          background:   scrolled ? "rgba(255,255,255,0.98)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(10,10,10,0.08)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        <div className="flex items-center justify-between px-10 h-16">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setMenuOpen(false)}
          >
            {/* Logo mark */}
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-[--color-ink]"
              style={{ border: "1.5px solid var(--color-ink)" }}
            >
              <span
                className="font-display text-[0.7rem] leading-none transition-colors duration-300 group-hover:text-white"
                style={{ color: "var(--color-ink)" }}
              >
                B
              </span>
            </div>
            <span
              className="font-mono text-[0.68rem] tracking-[0.18em] uppercase hidden sm:block"
              style={{ color: "var(--color-ink)" }}
            >
              Bryan Berlandro
            </span>
          </Link>

          {/* ── Desktop nav links ── */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const isActive = activeSection === l.href.replace("#", "");
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="relative px-4 py-2 font-mono text-[0.62rem] tracking-[0.14em] uppercase transition-colors duration-200"
                  style={{ color: isActive ? "var(--color-ink)" : "var(--color-muted)" }}
                >
                  {l.label}
                  {/* Active dot */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-[4px] h-[4px] rounded-full"
                      style={{ background: "var(--color-ink)" }}
                      transition={{ duration: 0.4, ease }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Right side ── */}
          <div className="flex items-center gap-3">
            {/* Hire Me — desktop only */}
            <Link
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.14em] uppercase rounded-full px-5 py-[0.5rem] border transition-all duration-300 hover:bg-[--color-ink] hover:text-white hover:border-[--color-ink]"
              style={{
                borderColor: "rgba(10,10,10,0.2)",
                color: "var(--color-ink)",
              }}
            >
              Hire Me
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              data-cursor-hover
              aria-label="Toggle menu"
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-full border transition-colors duration-300"
              style={{
                borderColor: menuOpen ? "var(--color-ink)" : "rgba(10,10,10,0.15)",
                background: menuOpen ? "var(--color-ink)" : "transparent",
              }}
            >
              <motion.span
                className="block h-[1.5px] w-4 origin-center"
                style={{ background: menuOpen ? "#fff" : "var(--color-ink)" }}
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6.5 : 0 }}
                transition={{ duration: 0.35, ease }}
              />
              <motion.span
                className="block h-[1.5px] w-4"
                style={{ background: menuOpen ? "#fff" : "var(--color-ink)" }}
                animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.25, ease }}
              />
              <motion.span
                className="block h-[1.5px] w-4 origin-center"
                style={{ background: menuOpen ? "#fff" : "var(--color-ink)" }}
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6.5 : 0 }}
                transition={{ duration: 0.35, ease }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile fullscreen menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40"
              style={{ background: "rgba(10,10,10,0.4)", backdropFilter: "blur(4px)" }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.55, ease }}
              className="fixed top-0 right-0 bottom-0 z-50 flex flex-col"
              style={{
                width: "min(360px, 85vw)",
                background: "var(--color-paper)",
                borderLeft: "1px solid rgba(10,10,10,0.08)",
              }}
            >
              {/* Panel header */}
              <div
                className="flex items-center justify-between px-8 h-16 shrink-0"
                style={{ borderBottom: "1px solid rgba(10,10,10,0.06)" }}
              >
                <span
                  className="font-mono text-[0.6rem] tracking-[0.18em] uppercase"
                  style={{ color: "var(--color-muted)" }}
                >
                  Navigation
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  data-cursor-hover
                  className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 hover:bg-[--color-ink] hover:border-[--color-ink] group"
                  style={{ borderColor: "rgba(10,10,10,0.15)" }}
                >
                  <svg
                    width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="group-hover:stroke-white transition-colors"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex flex-col flex-1 px-8 py-10 gap-1">
                {links.map((l, i) => {
                  const isActive = activeSection === l.href.replace("#", "");
                  return (
                    <motion.button
                      key={l.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, delay: 0.05 + i * 0.06, ease }}
                      onClick={() => handleNav(l.href)}
                      data-cursor-hover
                      className="group flex items-center justify-between py-4 text-left border-b transition-all duration-200"
                      style={{ borderColor: "rgba(10,10,10,0.06)" }}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className="font-mono text-[0.52rem] tracking-[0.14em]"
                          style={{ color: "var(--color-muted)" }}
                        >
                          0{i + 1}
                        </span>
                        <span
                          className="font-display text-[2rem] tracking-wide leading-none transition-colors duration-200"
                          style={{ color: isActive ? "var(--color-ink)" : "rgba(10,10,10,0.35)" }}
                        >
                          {l.label}
                        </span>
                      </div>
                      <motion.div
                        className="w-8 h-8 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ borderColor: "rgba(10,10,10,0.12)" }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="1.5"
                          strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </motion.button>
                  );
                })}
              </nav>

              {/* Panel footer */}
              <div
                className="px-8 py-8 shrink-0"
                style={{ borderTop: "1px solid rgba(10,10,10,0.06)" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease }}
                >
                  <Link
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full font-mono text-[0.65rem] tracking-[0.14em] uppercase rounded-full py-4 transition-all duration-300 hover:opacity-80"
                    style={{ background: "var(--color-ink)", color: "#fff" }}
                  >
                    Start a Project
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <p
                    className="font-mono text-[0.55rem] tracking-[0.14em] uppercase text-center mt-4"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Bryan Berlandro · Jakarta, ID
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}