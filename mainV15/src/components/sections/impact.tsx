"use client";

export function Impact() {
  const volunteeringCards = [
    {
      image: "/Tedxu.jpg",
      title: "TEDxUniversity of Technology Iraq",
      role: "SPEAKER EXPERIENCE (TIME REMINDER)",
      description: "Managed speaker timing to ensure seamless event flow and strict adherence to the TEDx global schedule. Coordinated with the Speaker Experience team for 45+ days.",
      badges: ["+60K Views"],
      link: {
        text: "🔗 Watch Event Documentation Video",
        href: "https://www.instagram.com/p/DX1gW9Lsol0/",
      },
    },
    {
      image: "/riv.jpg",
      title: "Tigris River Cleanup Campaign (Al-Shawaka)",
      role: "FIELD VOLUNTEER & DIGITAL ADVOCATE",
      description: "Executed field cleanup operations along the Tigris River banks. Aligned campaign activities with UN Sustainable Development Goals (SDGs 3, 6, 11, 13, and 17).",
      badges: ["+280K Views"],
      link: {
        text: "🔗 Watch Campaign Impact Video",
        href: "https://www.instagram.com/p/DYCs75vMof9/",
      },
    },
    {
      image: "/book.jpg",
      title: "Baghdad International Book Fair (2025 - 2026)",
      role: "PROMOTION & LOGISTICS",
      description: "Contributed to strategic promotional outreach, logistics, and digital media coverage to expand the book fair's reach.",
      badges: ["800K Visitors"],
      link: null,
    },
    {
      image: "/him.jpg",
      title: "Himma Volunteer Team - University of Technology",
      role: "Event Organizer & Content Creator",
      description: "Logistics: Organized the CS graduation ceremony, managing seating, crowd flow, and event activities. Produced a video and student interviews, hitting 170,000+ combined views on social media.",
      badges: [],
      link: {
        text: "🔗 Watch Graduation Coverage Video",
        href: "https://www.instagram.com/p/DXIL5LnAGew/",
      },
    },
  ];

  return (
    <section id="impact" className="scroll-mt-28 py-6">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header Block */}
        <div className="mb-8">
          <h2 className="brand-font text-3xl md:text-4xl font-extrabold text-[var(--text)]">
            Impact & Leadership
          </h2>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {volunteeringCards.map((card, index) => (
            <article
              key={index}
              className="group border border-[var(--border)] bg-[var(--bg-card)] rounded-xl p-6 flex flex-col bento-card-transition shadow-[var(--shadow)]"
            >
              {/* Top Image Frame */}
              <div className="w-full aspect-[16/10] overflow-hidden rounded-lg border border-[var(--border)] mb-5 relative bg-[var(--bg-2)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                />
              </div>

              {/* Text content in the middle */}
              <div className="flex-1 flex flex-col">
                <h3 className="brand-font text-2xl font-bold text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-200">
                  {card.title}
                </h3>
                <span className="text-xs font-semibold tracking-[0.2em] text-[var(--accent)] uppercase mb-4 block">
                  {card.role}
                </span>
                <p className="text-sm text-[var(--text-2)] leading-relaxed mb-4">
                  {card.description}
                </p>

                {/* Flat, Clean Badges (No pill shape, clean borders/rectangles) */}
                {card.badges.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-4">
                    {card.badges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="inline-flex items-center justify-center text-xs md:text-sm font-bold uppercase tracking-[0.15em] bg-[var(--bg-2)] border border-[var(--border)] text-[var(--text-2)] px-5 py-2.5 md:px-6 md:py-3 rounded-xl hover:bg-[var(--accent)]/10 hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/10 cursor-default"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Explicit Video Link underneath */}
              {card.link && (
                <div className="mt-auto pt-4 border-t border-[var(--border)]">
                  <a
                    href={card.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    {card.link.text}
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
