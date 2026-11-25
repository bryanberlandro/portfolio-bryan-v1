/**
 * Personal emblem: a "B" built as a classical column (stem with capital and plinth)
 * and two stacked bowls, each holding one square pixel. Architecture plus a single unit of code.
 * Pure SVG, strokes follow currentColor, the two pixels use the bronze token.
 */
interface Props {
  size?: number;
  className?: string;
  strokeWidth?: number;
  pixels?: boolean;
}

export function Emblem({ size = 28, className, strokeWidth = 2.5, pixels = true }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="miter"
      strokeLinecap="butt"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {/* capital, shaft, plinth */}
      <path d="M10 6h16v5H10z" />
      <path d="M13 11v42h10V11" />
      <path d="M10 53h16v5H10z" />
      {/* bowls */}
      <path d="M23 11h13a10 10 0 0 1 0 19H23" />
      <path d="M23 30h15a11.5 11.5 0 0 1 0 23H23" />
      {pixels && (
        <>
          <rect x="31" y="18" width="4.5" height="4.5" fill="var(--color-bronze)" stroke="none" />
          <rect x="31.5" y="38.5" width="5.5" height="5.5" fill="var(--color-bronze)" stroke="none" />
        </>
      )}
    </svg>
  );
}
