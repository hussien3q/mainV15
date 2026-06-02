export interface ProjectCard {
  title: string;
  tag: string;
  description: string;
  tech?: string;
  imageAlt: string;
  imageLabel: string;
  colSpan: 4 | 6 | 8 | 12;
}

export const projects: ProjectCard[] = [
  {
    title: "Sleep Cycle Calculator",
    tag: "APPLICATION",
    description:
      "Built with HTML5, CSS3, Vanilla JavaScript, PWA (Service Worker).",
    tech: "HTML5, CSS3, Vanilla JavaScript, PWA (Service Worker)",
    imageAlt: "Sleep calculator UI preview",
    imageLabel: "UI preview",
    colSpan: 6,
  },
  {
    title: "IMPACTO Platform",
    tag: "COMMUNITY INTEL",
    description:
      "Founded a Telegram-based community providing verified scholarship and volunteer opportunities for 200+ active Iraqi youth.",
    tech: "Skills: Community Management, Content Strategy",
    imageAlt: "IMPACTO platform logo",
    imageLabel: "Logo",
    colSpan: 6,
  },
  {
    title: "Scholar Journey",
    tag: "TRANSPARENT DOCUMENTATION",
    description:
      "A dedicated channel documenting the raw, real steps of applying for international scholarships from Iraq—covering exact paperwork, costs, timelines, and motivation letters.",
    tech: "Skills: Personal Branding, Resource Curation",
    imageAlt: "Scholar Journey channel branding",
    imageLabel: "Branding",
    colSpan: 12,
  },
];
