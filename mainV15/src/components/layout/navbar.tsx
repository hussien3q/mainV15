"use client";

import { useEffect, useState, Fragment } from "react";
import Link from "next/link";
import { navLinks } from "@/data/site-content";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] transition-colors duration-400">
        <div className="mx-auto max-w-7xl h-20 px-6 md:px-8 flex items-center justify-between">
          {/* Logo - Personal Monogram */}
          <Link
            href="#hero"
            className="font-mono text-xl font-bold tracking-widest text-[var(--text)] uppercase select-none hover:opacity-85 transition-opacity"
            onClick={() => setMenuOpen(false)}
          >
            Hussein
          </Link>

          {/* Centered Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-5 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link, index) => (
              <Fragment key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs font-semibold uppercase tracking-wider text-[var(--text-2)] hover:text-[var(--text)] transition-colors duration-200"
                >
                  {link.label}
                </Link>
                {index < navLinks.length - 1 && (
                  <span className="text-[var(--text-3)] text-xs select-none">•</span>
                )}
              </Fragment>
            ))}
          </nav>

          {/* Right Action Area (Toggle + Mobile Menu Button) */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <button
              type="button"
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] hover:border-[var(--text)] text-[var(--text)] transition-colors cursor-pointer"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[var(--bg)] transition-all duration-300 pt-28 px-8 lg:hidden",
          menuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
        )}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-bold brand-font text-[var(--text)] hover:text-[var(--accent)] transition-colors border-b border-[var(--border)] pb-3"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
