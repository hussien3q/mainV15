import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

interface SectionShellProps {
  id: string;
  label: string;
  title: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  altBg?: boolean;
}

export function SectionShell({
  id,
  label,
  title,
  children,
  className,
  altBg = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 md:py-28",
        altBg && "border-t border-[var(--border)] bg-[var(--bg-2)]",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="section-label mb-3">{label}</div>
          <h2 className="section-title">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
