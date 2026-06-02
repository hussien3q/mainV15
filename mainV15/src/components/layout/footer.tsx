import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-8 bg-[var(--bg)] transition-colors duration-400">
      <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm font-bold tracking-widest text-[var(--text)] uppercase">
          Hussein
        </p>
        <p className="text-xs text-[var(--text-3)] text-center sm:text-left">
          © {year} — Building in public from Baghdad
        </p>
        <Link
          href="#hero"
          className="text-xs font-semibold text-[var(--text-2)] hover:text-[var(--text)] transition-colors duration-200"
        >
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
