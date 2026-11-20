"use client";

import { useEffect, useState } from "react";

type CopyState = "idle" | "copied" | "error";

/** Copies the email address and confirms it to everyone, including screen reader users. */
export function CopyEmailButton({ email }: { email: string }) {
  const [state, setState] = useState<CopyState>("idle");

  useEffect(() => {
    if (state === "idle") return;
    const t = window.setTimeout(() => setState("idle"), 2200);
    return () => window.clearTimeout(t);
  }, [state]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("error");
    }
  };

  const status =
    state === "copied" ? "Email address copied" : state === "error" ? "Copy failed, please select the address manually" : "";

  return (
    <>
      <button
        type="button"
        onClick={copy}
        data-cursor-hover
        className="font-mono text-[0.8rem] tracking-[0.01em] rounded-full px-4 py-[0.55rem] border transition-colors duration-300 hover:bg-white hover:text-[--color-ink]"
        style={{ borderColor: "rgba(255,255,255,0.35)", color: "rgba(255,255,255,0.75)" }}
      >
        {state === "copied" ? "Copied" : state === "error" ? "Copy failed" : "Copy email"}
      </button>
      <span role="status" className="sr-only">
        {status}
      </span>
    </>
  );
}
