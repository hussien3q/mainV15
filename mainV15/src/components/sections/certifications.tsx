"use client";

import { Award } from "lucide-react";

export function Certifications() {
  const certs = [
    {
      image: "/cs50.jpg",
      title: "CS50: Introduction to Computer Science",
      issuer: "Harvard University",
      status: "completed",
    },
    {
      image: "/laptop-repair.jpg",
      title: "Laptop Maintenance & Repair Training",
      issuer: "Caritas Czech Republic",
      status: "completed",
    },
    {
      image: "/claude-101.jpg",
      title: "Claude 101: Prompt Engineering Foundations",
      issuer: "Anthropic",
      status: "completed",
    },
    {
      image: "",
      alt: "Forward Program In Progress",
      title: "Forward Program",
      issuer: "McKinsey & Company",
      status: "ongoing",
    },
  ];

  return (
    <section id="certifications" className="scroll-mt-28 py-6">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header Block */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-2 block">
            CREDENTIALS & TRAINING
          </span>
          <h2 className="brand-font text-3xl md:text-4xl font-extrabold text-[var(--text)]">
            Certifications & Training
          </h2>
        </div>

        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, index) => (
            <article
              key={index}
              className="group border border-[var(--border)] bg-[var(--bg-card)] rounded-xl p-6 flex flex-col bento-card-transition shadow-[var(--shadow)]"
            >
              {/* Top Image / Placeholder Container */}
              <div className="w-full aspect-[4/3] overflow-hidden rounded-lg border border-[var(--border)] mb-5 relative bg-[var(--bg-2)] flex items-center justify-center">
                {cert.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                  />
                ) : (
                  /* Ongoing Placeholder Frame */
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-2)] select-none text-center">
                    <Award className="h-8 w-8 text-[var(--accent)] mb-2 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)]">
                      {cert.alt}
                    </span>
                  </div>
                )}
              </div>

              {/* Text content below */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="brand-font text-base font-bold text-[var(--text)] mb-2 leading-snug group-hover:text-[var(--accent)] transition-colors duration-200">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[var(--text-2)] font-medium">
                    {cert.issuer}
                  </p>
                </div>

                {cert.status === "ongoing" && (
                  <div className="mt-4 pt-3 border-t border-[var(--border)]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-1 rounded-md inline-block">
                      [In Progress / Ongoing Training]
                    </span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
