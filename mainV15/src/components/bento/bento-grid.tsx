import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function BentoGrid({ children, className, id }: BentoGridProps) {
  return (
    <div
      id={id}
      className={cn(
        "bento-grid grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3 md:gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}
