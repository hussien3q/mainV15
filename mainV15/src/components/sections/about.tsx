"use client";

export function About() {
  return (
    <section id="about" className="scroll-mt-28 py-6">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT SIDE: The Raw Narrative Text */}
          <div className="border border-[var(--border)] bg-[var(--bg-card)] rounded-xl p-8 md:p-10 flex flex-col justify-center bento-card-transition shadow-[var(--shadow)]">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-3 block">
              ABOUT ME
            </span>
            <h2 className="brand-font text-3xl md:text-4xl font-extrabold text-[var(--text)] mb-6">
              The story so far.
            </h2>
            <div className="text-sm md:text-base text-[var(--text-2)] leading-relaxed space-y-4">
              <p>
                After graduating high school, I realized I had built nothing for myself — no real skills, no direction, and no proof of who I wanted to become. But I knew one thing clearly: I wanted a future bigger than my environment, and earning an international scholarship became the reason I started changing everything.
              </p>
              <p>
                Instead of staying stuck in excuses, I began rebuilding myself publicly. I stepped into volunteering to overcome social anxiety, started learning programming from zero, entered content creation, and committed myself to calisthenics and boxing to build discipline beyond motivation.
              </p>
              <p className="font-semibold text-[var(--text)]">
                Today, I’m not chasing motivation anymore. I’m building proof — through action, consistency, and execution.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: The Visual Frame */}
          <div className="border border-[var(--border)] bg-[var(--bg-card)] rounded-xl overflow-hidden aspect-square relative group shadow-[var(--shadow)] bento-card-transition">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hreosec.png"
              alt="Hussein portrait"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
              onError={(e) => {
                // Fallback to jpg if png fails to load
                (e.target as HTMLImageElement).src = "/hreosec.jpg";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
