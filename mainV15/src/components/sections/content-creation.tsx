"use client";

export function ContentCreation() {
  return (
    <section id="content" className="scroll-mt-28 py-6">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header Block */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-2 block">
            CREATIVE & MEDIA
          </span>
          <h2 className="brand-font text-3xl md:text-4xl font-extrabold text-[var(--text)]">
            Content Creation
          </h2>
        </div>

        {/* Custom Bento Grid Layout */}
        <div className="space-y-6">
          {/* TOP ROW: Full Width Card (🏆 University Content Creator Award) */}
          <div className="border border-[var(--border)] bg-[var(--bg-card)] rounded-xl overflow-hidden shadow-[var(--shadow)] bento-card-transition">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Frame */}
              <div className="aspect-[16/10] lg:aspect-auto relative group overflow-hidden border-b lg:border-b-0 lg:border-r border-[var(--border)] bg-[var(--bg-2)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/creater.jpg"
                  alt="University Content Creator Award"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                />
              </div>

              {/* Text Area */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-[10px] font-bold tracking-wider text-[var(--accent)] uppercase mb-3 block">
                  ACHIEVEMENT
                </span>
                <h3 className="brand-font text-2xl md:text-3xl font-extrabold text-[var(--text)] mb-4">
                  🏆 University Content Creator Award
                </h3>
                <p className="text-sm md:text-base text-[var(--text-2)] leading-relaxed">
                  Awarded 2nd Place in the official college-wide competition for exceptional visual storytelling and high engagement video content.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW: 2-Column Symmetrical Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 2: YouTube Channel */}
            <article className="border border-[var(--border)] bg-[var(--bg-card)] rounded-xl p-8 flex flex-col justify-center bento-card-transition shadow-[var(--shadow)]">
              <span className="text-[10px] font-bold tracking-wider text-[var(--accent)] uppercase mb-3 block">
                VIDEO PLATFORM
              </span>
              <h3 className="brand-font text-xl font-bold text-[var(--text)] mb-4 flex items-center gap-2">
                🎥 YouTube Education Channel
              </h3>
              <p className="text-sm text-[var(--text-2)] leading-relaxed">
                Built a community of 3,000+ subscribers and generated 500,000+ total views delivering structured computer science and scholarship content.
              </p>
            </article>

            {/* Box 3: Instagram platform */}
            <article className="border border-[var(--border)] bg-[var(--bg-card)] rounded-xl p-8 flex flex-col justify-center bento-card-transition shadow-[var(--shadow)]">
              <span className="text-[10px] font-bold tracking-wider text-[var(--accent)] uppercase mb-3 block">
                SHORT-FORM MEDIA
              </span>
              <h3 className="brand-font text-xl font-bold text-[var(--text)] mb-4 flex items-center gap-2">
                📸 Instagram Awareness Platform
              </h3>
              <p className="text-sm text-[var(--text-2)] leading-relaxed">
                Grown an audience of 1,000+ followers and achieved 778,000+ views through short-form reels to promote volunteering culture and discipline in Baghdad.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
