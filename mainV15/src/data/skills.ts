export interface SkillGroup {
  title: string;
  chips: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Stack",
    chips: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "DOM Manipulation",
      "PWA Basics",
    ],
  },
  {
    title: "Tools & Workflow",
    chips: ["Git", "GitHub", "OS Deployment", "Laptop Hardware Repair"],
  },
  {
    title: "Media & Creation",
    chips: [
      "Video Editing",
      "Content Strategy",
      "Multi-Platform Distribution",
      "Visual Storytelling",
    ],
  },
  {
    title: "Core & Soft Skills",
    chips: [
      "Leadership",
      "Critical Thinking",
      "Teamwork",
      "Problem Solving",
      "Proactive Initiative",
      "Community Management",
      "Event Coordination",
      "Time Management",
    ],
  },
];
