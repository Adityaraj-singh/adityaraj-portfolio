export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  // ── Featured Projects ──────────────────────────────────────────────
  {
    id: "mit-bitcoin-expo",
    title: "MIT Bitcoin Expo 2026",
    description:
      "Official website for the 13th Annual MIT Bitcoin Expo — a two-day conference and 36-hour hackathon hosted at MIT.",
    longDescription:
      "Designed and built the official website for the longest-running university-hosted Bitcoin event in the world. The site features a 3D star-field background, countdown timer, speaker showcase, hackathon details, and team page. Built with Next.js 15, Tailwind CSS v4, Three.js, and deployed on Vercel with analytics. Co-developed with Shivam Kumar.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Three.js",
      "React Three Fiber",
      "Framer Motion",
      "Vercel",
    ],
    achievements: [
      "Built the official site for the 13th Annual MIT Bitcoin Expo, the longest-running university Bitcoin event",
      "Implemented 3D star-field background and interactive animations with React Three Fiber and Framer Motion",
      "Delivered a fully responsive, SEO-optimized site with Vercel Analytics and sitemap generation",
      "Coordinated speakers, hackathon logistics, and sponsor pages as Co-Chair of Hackathon and Marketing",
    ],
    image: "/images/projects/mit-bitcoin-expo/mit-bitcoin-expo.webp",
    liveUrl: "https://mitbitcoinexpo.org",
    featured: true,
  },
  {
    id: "skillbridge-ai",
    title: "SkillBridge AI",
    description:
      "A voice-enabled AI professional development platform with real-time market insights, learning paths, and neural glassmorphism UI.",
    longDescription:
      "Built for the Dream AI Hackathon 2025, SkillBridge AI is a full-stack PWA that combines GPT-4-powered career coaching with ElevenLabs voice synthesis, real-time job market data, and a drag-and-drop learning path builder. Features 70+ React components, 14 API endpoints, Google OAuth, and a custom neural glassmorphism design system. WCAG 2.1 AA accessible.",
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI GPT-4",
      "ElevenLabs",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn/ui",
      "NextAuth.js",
      "PWA",
      "Zustand",
    ],
    achievements: [
      "Built a production-ready PWA with 70+ components, 14 API endpoints, and 18,000+ lines of code",
      "Integrated ElevenLabs voice synthesis with 9 professional voices and real-time waveform visualization",
      "Developed a drag-and-drop learning path builder with AI-powered skill assessment and progress tracking",
      "Implemented real-time job market analytics and salary benchmarking via Uclone MCP integration",
    ],
    image: "/images/projects/skillbridge-ai/skillbridge-ai.webp",
    featured: true,
  },
];
