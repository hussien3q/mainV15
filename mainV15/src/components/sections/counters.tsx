"use client";

export function Counters() {
  const stats = [
    { value: "1M+", label: "Content Views" },
    { value: "200+", label: "IMPACTO Members" },
    { value: "150+", label: "Volunteer Hours" },
    { value: "3+", label: "Yrs Continuous Training" },
  ];

  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border border-[var(--border)] bg-[var(--bg-card)] rounded-xl p-6 md:p-8 flex flex-col justify-center items-center text-center bento-card-transition shadow-[var(--shadow)]"
            >
              <div className="brand-font text-4xl md:text-5xl font-black tracking-tight text-[var(--text)] select-none">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-3)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
