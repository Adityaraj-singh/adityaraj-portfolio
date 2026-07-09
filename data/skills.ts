// data/skills.ts
export type SkillCategory =
  | "Languages"
  | "Frameworks/Libraries"
  | "Cloud/DevOps"
  | "Concepts";

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  Languages: [
    { name: "JavaScript", category: "Languages", logoKey: "javascript" },
    { name: "TypeScript", category: "Languages", logoKey: "typescript" },
    { name: "Python", category: "Languages", logoKey: "python" },
    { name: "Java", category: "Languages", logoKey: "java" }
  ],
  "Frameworks/Libraries": [
    { name: "React.js", category: "Frameworks/Libraries", logoKey: "react" },
    { name: "Next.js", category: "Frameworks/Libraries", logoKey: "nextjs" },
    { name: "Angular", category: "Frameworks/Libraries", logoKey: "angular" },
    { name: "Redux", category: "Frameworks/Libraries", logoKey: "redux" },
    { name: "Redux Toolkit", category: "Frameworks/Libraries", logoKey: "redux" },
    { name: "Node.js", category: "Frameworks/Libraries", logoKey: "nodejs" },
    { name: "React Native", category: "Frameworks/Libraries", logoKey: "react" },
    { name: "Tailwind CSS", category: "Frameworks/Libraries", logoKey: "tailwindcss" },
    { name: "MUI", category: "Frameworks/Libraries", logoKey: "mui" },
    { name: "Three.js", category: "Frameworks/Libraries", logoKey: "threejs" },
    { name: "Express.js", category: "Frameworks/Libraries", logoKey: "express" },
  ],
  "Cloud/DevOps": [
    { name: "AWS", category: "Cloud/DevOps", logoKey: "amazonwebservices" },
    { name: "Jenkins", category: "Cloud/DevOps", logoKey: "jenkins" },
    { name: "Git", category: "Cloud/DevOps", logoKey: "git" },
    { name: "GitHub Actions", category: "Cloud/DevOps", logoKey: "github" },
  ],
  Concepts: [
    { name: "UI/UX Development", category: "Concepts", logoKey: "github" },
    { name: "CI/CD Pipelines", category: "Concepts", logoKey: "jenkins" },
    { name: "State Management", category: "Concepts", logoKey: "redux" },
    { name: "AI-Assisted Development", category: "Concepts", logoKey: "python" },
    { name: "DSA", category: "Concepts", logoKey: "dsa" },
  ],
};
