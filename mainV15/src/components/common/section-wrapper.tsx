interface SectionWrapperProps {
  id: string;
  label?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({
  id,
  label,
  title,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`scroll-mt-28 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {(label || title) && (
          <header className="mb-8 md:mb-10">
            {label && <p className="section-label mb-2">{label}</p>}
            {title && (
              <h2 className="section-title brand-font">{title}</h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
