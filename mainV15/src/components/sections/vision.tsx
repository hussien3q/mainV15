"use client";

import { visionCards } from "@/data/vision";
import { Compass } from "lucide-react";

export function Vision() {
  return (
    <section id="vision" className="scroll-mt-28 py-6">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header Block */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-2 block">
            FUTURE ROADMAP
          </span>
          <h2 className="brand-font text-3xl md:text-4xl font-extrabold text-[var(--text)]">
            The Vision
          </h2>
        </div>

        {/* Balanced 4-Column Grid Row of Square Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionCards.map((card, index) => (
            <article
              key={index}
              className="group border border-[var(--border)] bg-[var(--bg-card)] rounded-xl p-8 aspect-square flex flex-col justify-center bento-card-transition shadow-[var(--shadow)]"
            >
              <div className="mb-5 text-[var(--accent)]">
                <Compass className="h-6 w-6 group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <h3 className="brand-font text-lg font-bold text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-200">
                {card.title}
              </h3>
              <p className="text-sm text-[var(--text-2)] leading-relaxed">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
