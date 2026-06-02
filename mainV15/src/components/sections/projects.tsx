"use client";

export function Projects() {
  const projectsList = [
    {
      image: "/sleep-calculator.jpg",
      title: "Sleep Cycle Calculator",
      category: "APPLICATION",
      description: "Built with HTML5, CSS3, JavaScript, PWA (Service Worker). Optimized UI preview frame.",
    },
    {
      image: "/impacto-logo.JPG",
      title: "IMPACTO Platform",
      category: "COMMUNITY INTEL",
      description: "Founded a Telegram-based community providing verified scholarship and volunteer opportunities for 200+ active Iraqi youth. Skills: Community Management, Content Strategy.",
    },
    {
      image: "/scholar-logo.JPG",
      title: "Scholar Journey",
      category: "TRANSPARENT DOCUMENTATION",
      description: "A dedicated channel documenting the raw, real steps of applying for international scholarships from Iraq—covering exact paperwork, costs, timelines, and motivation letters.",
    },
    {
      image: "/quran-library.JPG",
      title: "Digital Educational Library (قرآن لكل المراحل الدراسية)",
      category: "AUDIO-VISUAL PRODUCTION",
      description: "Built a YouTube and Telegram library for curriculum recitations, generating 7,000+ channel views and a viral short with 40,000+ views. Skills: Video Production, Multi-Platform Distribution.",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-28 py-6">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header Block */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-2 block">
            ENGINEERING & PRODUCTS
          </span>
          <h2 className="brand-font text-3xl md:text-4xl font-extrabold text-[var(--text)]">
            What I&apos;ve Built
          </h2>
        </div>

        {/* 4-Column Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsList.map((project, index) => (
            <article
              key={index}
              className="group border border-[var(--border)] bg-[var(--bg-card)] rounded-xl p-6 flex flex-col bento-card-transition shadow-[var(--shadow)]"
            >
              {/* Top Image Frame */}
              <div className="w-full aspect-[16/10] overflow-hidden rounded-lg border border-[var(--border)] mb-5 relative bg-[var(--bg-2)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                />
              </div>

              {/* Descriptive text underneath */}
              <div className="flex-1 flex flex-col">
                <span className="text-[10px] font-bold tracking-wider text-[var(--accent)] uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="brand-font text-lg font-bold text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-2)] leading-relaxed flex-1">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
