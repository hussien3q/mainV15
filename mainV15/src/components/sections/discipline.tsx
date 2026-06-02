"use client";

import { BeforeAfterSlider } from "@/components/common/before-after-slider";
import { disciplineContent } from "@/data/discipline";

export function Discipline() {
  return (
    <section id="discipline" className="scroll-mt-28 py-6">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header Block */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-2 block">
            DISCIPLINE & SHARPNESS
          </span>
          <h2 className="brand-font text-3xl md:text-4xl font-extrabold text-[var(--text)]">
            Discipline & Hybrid Training
          </h2>
        </div>

        {/* Symmetrical Row: 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column: Narrative Copy */}
          <div className="border border-[var(--border)] bg-[var(--bg-card)] rounded-xl p-8 flex flex-col justify-center bento-card-transition shadow-[var(--shadow)]">
            <h3 className="brand-font text-2xl md:text-3xl font-extrabold text-[var(--text)] mb-3">
              {disciplineContent.headline}
            </h3>
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-6">
              Boxing. Calisthenics. Weights.
            </p>

            <ul className="space-y-5">
              {disciplineContent.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 text-sm md:text-base text-[var(--text-2)] leading-relaxed"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Interactive Before/After Slider */}
          <div className="border border-[var(--border)] bg-[var(--bg-card)] rounded-xl p-6 flex flex-col justify-center bento-card-transition shadow-[var(--shadow)]">
            <BeforeAfterSlider
              beforeAlt={disciplineContent.beforeAlt}
              afterAlt={disciplineContent.afterAlt}
              beforeLabel={disciplineContent.beforeLabel}
              afterLabel={disciplineContent.afterLabel}
              beforeSrc="/befor.jpg"
              afterSrc="/after.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
