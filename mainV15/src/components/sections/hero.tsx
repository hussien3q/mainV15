"use client";

import { useFadeBlurRoles } from "@/hooks/use-fade-blur-roles";
import { heroContent } from "@/data/hero";

export function Hero() {
  const { role, visible } = useFadeBlurRoles(heroContent.roles);

  return (
    <section id="hero" className="scroll-mt-28 pt-28 pb-6">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="border border-[var(--border)] bg-[var(--bg-card)] rounded-xl p-8 md:p-16 bento-card-transition shadow-[var(--shadow)]">
          {/* Subtitle tag with blue dot */}
          <div className="flex items-center gap-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Baghdad, Iraq — Building Publicly
            </span>
          </div>

          {/* Curiosity Hook Headline */}
          <h1 className="brand-font text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-tight tracking-tight text-[var(--text)] mb-6">
            {heroContent.headline}
          </h1>

          {/* Dynamic Shifting Roles Cycle */}
          <div className="min-h-[4rem] flex items-center">
            <p className="text-lg md:text-2xl font-medium text-[var(--text-2)] leading-relaxed">
              I&apos;m Hussein, a{" "}
              <span
                className={`role-reveal font-bold text-[var(--text)] border-b border-[var(--accent)] pb-0.5 ${
                  visible ? "role-reveal--visible" : "role-reveal--hidden"
                }`}
              >
                {role}
              </span>
            </p>
          </div>

          {/* Action Links (No capsules or pill borders, simple elegant links) */}
          <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-[var(--border)]">
            <a
              href="#projects"
              className="text-xs font-bold uppercase tracking-wider text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="text-xs font-bold uppercase tracking-wider text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              Get In Touch &nbsp;✉
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
