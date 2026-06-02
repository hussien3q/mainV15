export const impactQuote =
  "**My core goal is to promote and institutionalize the culture of youth volunteerism in Iraq.**";

export interface ImpactCard {
  title: string;
  role: string;
  description: string;
  badges?: string[];
  imageAlt: string;
  imageLabel: string;
}

export const impactCards: ImpactCard[] = [
  {
    title: "TEDxUniversity of Technology Iraq",
    role: "SPEAKER EXPERIENCE (TIME REMINDER)",
    description:
      "Managed speaker timing to ensure seamless event flow and strict adherence to the TEDx global schedule. Coordinated with the Speaker Experience team for 45+ days on event logistics and professional communication. Produced viral digital content documenting the experience, achieving over 60,000 total views across multiple platforms to promote volunteer culture.",
    badges: ["+60K Views", "Speaker Experience Team"],
    imageAlt: "TEDx event documentation",
    imageLabel: "Event documentation",
  },
  {
    title: "Tigris River Cleanup Campaign (Al-Shawaka)",
    role: "FIELD VOLUNTEER & DIGITAL ADVOCATE",
    description:
      "Executed field cleanup operations along the Tigris River banks in collaboration with Baghdad Municipality, Environmental Police, and the Ministry of Interior. Aligned campaign activities with UN Sustainable Development Goals (SDGs 3, 6, 11, 13, and 17) to promote environmental literacy. Produced 3 awareness-driven Reels that garnered over 280,000 views across 4 platforms, successfully mobilizing youth toward environmental action.",
    badges: ["+280K Views", "Field Cleanup"],
    imageAlt: "Tigris River cleanup field documentation",
    imageLabel: "Field documentation",
  },
  {
    title: "Baghdad International Book Fair (2025 - 2026)",
    role: "PROMOTION & LOGISTICS",
    description:
      "Contributed to strategic promotional outreach, logistics, and digital media coverage to expand the international book fair's reach. Assisted in crowd management and ensuring an optimal visitor experience on-site.",
    badges: ["800K Visitors"],
    imageAlt: "Baghdad International Book Fair promotion",
    imageLabel: "Fair promotion",
  },
];
