import { cn } from "@/lib/utils";

type ColSpan = 4 | 6 | 8 | 12;

const spanMap: Record<ColSpan, string> = {
  4: "col-span-4 md:col-span-4 lg:col-span-4",
  6: "col-span-4 md:col-span-4 lg:col-span-6",
  8: "col-span-4 md:col-span-8 lg:col-span-8",
  12: "col-span-4 md:col-span-8 lg:col-span-12",
};

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: ColSpan;
  glow?: boolean;
}

export function BentoCard({
  children,
  className,
  colSpan = 12,
  glow = false,
}: BentoCardProps) {
  return (
    <article
      className={cn(
        "bg-[var(--bg-card)] border border-[var(--border)] rounded-sm p-6 transition-all duration-300",
        spanMap[colSpan],
        glow && "hover:border-[var(--text)] hover:scale-[1.01]",
        className
      )}
    >
      {children}
    </article>
  );
}
