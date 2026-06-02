"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeAlt: string;
  afterAlt: string;
  beforeSrc?: string;
  afterSrc?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

function SlideImage({
  src,
  alt,
  label,
}: {
  src?: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-neutral-200 to-neutral-400 dark:from-neutral-700 dark:to-neutral-900">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-dashed border-[var(--border-2)]">
          <ImageIcon className="h-4 w-4 text-[var(--text-3)]" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-[var(--text-3)]">
          {label}
        </span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src ?? undefined}
        alt={alt}
        className={`absolute inset-0 z-20 h-full w-full object-cover transition-opacity duration-500 ${
          src ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export function BeforeAfterSlider({
  beforeAlt,
  afterAlt,
  beforeSrc,
  afterSrc,
  beforeLabel = "Year 1",
  afterLabel = "Today",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="w-full">
      <div className="relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-xl border border-[var(--border)]">
        <div className="absolute inset-0">
          <SlideImage src={afterSrc} alt={afterAlt} label={afterLabel} />
          <span className="absolute bottom-3 right-3 z-30 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur">
            {afterLabel}
          </span>
        </div>

        <div
          className="absolute inset-0 z-20 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <SlideImage src={beforeSrc} alt={beforeAlt} label={beforeLabel} />
          <span className="absolute bottom-3 left-3 z-30 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur">
            {beforeLabel}
          </span>
        </div>

        <div
          className="pointer-events-none absolute top-0 bottom-0 z-[25] w-0.5 bg-white shadow-lg"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[var(--accent)] text-xs text-white">
            ⟷
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 z-40 h-full w-full cursor-ew-resize opacity-0"
          aria-label="Compare before and after"
        />
      </div>
    </div>
  );
}
