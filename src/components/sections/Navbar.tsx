"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "About",    href: "#about" },
  { label: "Work",     href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact",  href: "#contact" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-10 py-5"
      style={{ mixBlendMode: "multiply" }}
    >
      <Link
        href="/"
        className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-[--color-ink] hover:opacity-50 transition-opacity"
      >
        Bryan Berlandro
      </Link>

      <ul className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="font-mono text-[0.65rem] tracking-[0.14em] uppercase opacity-55 hover:opacity-100 transition-opacity"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#contact"
        className="font-mono text-[0.65rem] tracking-[0.14em] uppercase border border-[--color-ink] rounded-full px-5 py-[0.45rem] hover:bg-[--color-ink] hover:text-[--color-paper] transition-all duration-300"
      >
        Hire Me
      </Link>
    </motion.nav>
  );
}
