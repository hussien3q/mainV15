export interface Certification {
  title: string;
  issuer: string;
  status?: "ongoing";
}

export const certifications: Certification[] = [
  {
    title: "Introduction to Computer Science",
    issuer: "Harvard University (CS50)",
  },
  {
    title: "Laptop Maintenance & Repair Training",
    issuer: "Caritas Czech Republic in Iraq",
  },
  {
    title: "Claude 101: Prompt Engineering Foundations",
    issuer: "Anthropic",
  },
  {
    title: "Forward Program",
    issuer: "McKinsey & Company",
    status: "ongoing",
  },
  {
    title: "Core Web Development Fundamentals",
    issuer: "Self-Paced — HTML5, CSS3, JS, Git, GitHub",
  },
];
