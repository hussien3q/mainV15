import Link from "next/link";
import { cn } from "@/lib/utils";

interface CustomButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

export function CustomButton({
  href,
  onClick,
  variant = "primary",
  children,
  className,
  type = "button",
}: CustomButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-[var(--accent)] text-white accent-glow hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "border border-[var(--border)] bg-transparent text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
