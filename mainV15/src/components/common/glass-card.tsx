import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl overflow-hidden",
        hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]",
        className
      )}
    >
      {children}
    </div>
  );
}
