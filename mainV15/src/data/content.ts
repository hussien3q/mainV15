export interface ContentCard {
  title: string;
  description: string;
  imageAlt?: string;
  imageLabel?: string;
  colSpan: 4 | 6 | 12;
}

export const contentCards: ContentCard[] = [
  {
    title: "Digital Educational Library (قرآن لكل المراحل الدراسية)",
    description:
      "Built a YouTube and Telegram library for curriculum recitations, generating 7,000+ channel views and a viral short with 40,000+ views. Skills: Video Production, Multi-Platform Distribution, Graphic Design.",
    imageAlt: "Quran education channel logo",
    imageLabel: "Channel logo",
    colSpan: 12,
  },
  {
    title: "YouTube Education Channel",
    description:
      "Built a community of 3,000+ subscribers and generated 500,000+ total views delivering high-quality structured content.",
    colSpan: 4,
  },
  {
    title: "Instagram Awareness Platform",
    description:
      "Grown an audience of 1,000+ followers and achieved 778,000+ views through strategic short-form educational and viral media.",
    colSpan: 4,
  },
  {
    title: "University Content Creator Award",
    description:
      "Awarded 2nd Place in the official college-wide competition for exceptional visual storytelling, driving environmental awareness and reviving the culture of volunteerism among youth.",
    colSpan: 4,
  },
];
