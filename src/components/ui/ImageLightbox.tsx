"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface ImageLightboxProps {
  src: string;
  /** Alt text for the screenshot. */
  alt: string;
  /** Short name used in accessible labels, e.g. the project name. */
  label: string;
  dark?: boolean;
  /** Mount the thumbnail image (used to load images on demand). */
  load: boolean;
}

/**
 * Project screenshot preview with a full-size viewer built on the native <dialog> element:
 * focus is trapped and restored, Escape closes it, and no extra dependency is needed.
 * The full-size image only mounts while the viewer is open.
 */
export function ImageLightbox({ src, alt, label, dark = false, load }: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const show = () => {
    setOpen(true);
    dialogRef.current?.showModal();
  };

  return (
    <>
      <div
        className="relative w-full rounded-[2px] overflow-hidden aspect-video"
        style={{ background: dark ? "#161616" : "var(--color-surface-2)" }}
      >
        {load && (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 58vw, calc(100vw - 112px)"
            className="object-contain"
          />
        )}
        <button
          type="button"
          onClick={show}
          aria-haspopup="dialog"
          aria-label={`View ${label} screenshot full size`}
          data-cursor-hover
          data-cursor-label="View"
          className="lightbox-trigger absolute inset-0 w-full h-full"
        >
          <span className="lightbox-hint" aria-hidden="true">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
            Full size
          </span>
        </button>
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={`${label} screenshot`}
        data-lenis-prevent
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialogRef.current?.close();
        }}
      >
        <form method="dialog">
          <button type="submit" className="lightbox-close" aria-label="Close image viewer">
            Close
          </button>
        </form>
        <div className="lightbox-scroll">
          <div className="lightbox-frame">
            {open && (
              <Image src={src} alt={alt} fill sizes="(max-width: 640px) 900px, 100vw" className="object-contain" />
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
