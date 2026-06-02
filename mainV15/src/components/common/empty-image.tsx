import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type AspectRatio = "4/3" | "16/9" | "1/1" | "3/4";

const aspectMap: Record<AspectRatio, string> = {
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
};

interface EmptyImageProps {
  alt: string;
  label?: string;
  aspect?: AspectRatio;
  className?: string;
  portrait?: boolean;
}

export function EmptyImage({
  alt,
  label,
  aspect = "4/3",
  className,
  portrait = false,
}: EmptyImageProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl", aspectMap[aspect], className)}>
      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900"
        aria-hidden
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-dashed border-[var(--border-2)] bg-[var(--bg-card)]/50">
          <ImageIcon className="h-5 w-5 text-[var(--text-3)]" strokeWidth={1.5} />
        </div>
        {label && (
          <span className="text-[10px] uppercase tracking-widest text-[var(--text-3)] px-3 text-center">
            {label}
          </span>
        )}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src=""
        alt={alt}
        className={cn(
          "absolute inset-0 z-20 h-full w-full object-cover opacity-0",
          portrait && "grayscale hover:grayscale-0 transition-all duration-500"
        )}
      />
    </div>
  );
}
