// data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  client?: string; // Client/Customer
  project?: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: "work" | "leadership";
  companyLogo?: string;
  clientLogo?: string;
}

export const experiences: Experience[] = [
  {
    id: "blueyonder-leadership",
    title: "UI Lead",
    type: "leadership",

    company: "Divami Design Labs",
    companyLogo: "/images/experience/Divami.webp",

    client: "BlueYonder",
    clientLogo: "/images/experience/blueyondernew.webp",

    location: "BY Office , Hyderabad/Banglore",
    startDate: "October 2024",
    endDate: "Present",

    description:
      "BlueYonder is a leading American supply chain management software company and a subsidiary of Panasonic Corporation.",

    achievements: [
      "Led frontend engineering for Blue Yonder, one of Divami Design Labs' largest enterprise clients, delivering multiple business-critical modules for global supply chain products.",
      "Owned frontend architecture, feature planning, and technical execution while collaborating directly with US-based product managers, architects, and distributed engineering teams.",
      "Mentored engineers through design discussions, code reviews, debugging sessions, and engineering best practices, improving delivery quality and development velocity.",
      "Architected high-performance dashboards and data-intensive interfaces for enterprise customers including BATA, Britannia, and Sunsteel, reducing page load times by 40%.",
      "Established reusable UI patterns and scalable component architecture adopted across multiple product modules, accelerating feature development.",
      "Led production deployments and CI/CD improvements using Jenkins and GitHub Actions, ensuring reliable enterprise releases with minimal downtime.",
    ],
  },
  {
    id: "divami-design-labs",
    title: "Software Engineer 2",
    company: "Divami Design Labs",
    companyLogo: "/images/experience/Divaminew.webp",
    location: "Hyderabad, India",
    startDate: "April 2023",
    endDate: "Present",
    description:
      "Developed major corporate portals and platforms, driving regional production releases and integrating AI business logic optimizations.",
    achievements: [
      "Lead UI/UX development for Blue Yonder's Sales Portal, collaborating with US-based Luminate Assortment teams to deliver business-critical features quarterly.",
      "Built and maintained scalable applications using React.js, Next.js, and Angular with Redux state management, integrating backend services via Node.js and AWS.",
      "Partnered with backend engineers and product owners to build interactive dashboards for Britannia and Sunsteel, cutting load times by 40%.",
      "Collaborated with a US-based client to build an online clinic platform serving 1,000+ users, developing a multi-module MedNote generation system.",
      "Utilized AI agents to detect edge cases and refactor business logic, alongside using AI prompting to build an in-house license management tool.",
    ],
    type: "work",
  },

  {
    id: "perspectai",
    title: "Software Development Engineer 1",
    company: "PerspectAI",
    companyLogo: "/images/experience/paitwo.webp",
    location: "Hyderabad, India",
    startDate: "August 2021",
    endDate: "March 2023",
    description:
      "Developed candidate assessment assets and integrated comprehensive tracking analytics platforms.",
    achievements: [
      "Developed three cognitive-ability games from scratch using React, Redux, and MUI to boost candidate engagement.",
      "Drove cross-functional integration of analytics tools (Google Analytics, Microsoft Clarity) to improve user-insight tracking by 30%.",
      "Delivered responsive UI across candidate and admin portals, reducing device-specific UI bugs by 40% through rigorous unit testing.",
    ],
    type: "work",
  },

  {
    id: "orgzit-crm",
    title: "Mobile Application Enhancements Intern",
    company: "Orgzit CRM",
    location: "India",
    startDate: "Feb 2020",
    companyLogo: "/images/experience/orgzit.webp",
    endDate: "May 2020",
    description: "Enhanced mobile workflows and cross-functional design elements.",
    achievements: [
      "Collaborated with a 10-member UI/UX team to maintain and enhance mobile applications using React Native.",
      "Engineered core business logic in the mobile app to enable one-click access to hundreds of critical workflows.",
    ],
    type: "work",
  },
];
