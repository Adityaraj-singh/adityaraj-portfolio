export interface Achievement {
  id: string;
  title: string;
  icon: string;
  colorClass: string;
}

export const achievements: Achievement[] = [
  {
    id: "internal-hackathon",
    title: "Internal Hackathon Winner (Asset Management Web App using AI)",
    icon: "trophy",
    colorClass: "text-yellow-600 dark:text-yellow-400",
  },
  {
    id: "star-performer",
    title: "Star Performer of the Month Award",
    icon: "award",
    colorClass: "text-green-600 dark:text-green-400",
  },
];

export const achievementTags = ["Hackathon Winner", "Corporate Excellence", "AI Development"];