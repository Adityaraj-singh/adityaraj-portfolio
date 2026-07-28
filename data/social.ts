export type SocialId = "linkedin" | "github" | "email" | "phone";

export interface SocialLink {
  id: SocialId;
  name: string;
  url: string;
  icon: string;
}

// export const socialLinks: SocialLink[] = [
//   {
//     id: "linkedin",
//     name: "LinkedIn",
//     url: "https://www.linkedin.com/in/aditya-3a85651a5/",
//     icon: "linkedin",
//   },
//   {
//     id: "github",
//     name: "GitHub",
//     url: "https://github.com/Adityaraj-singh",
//     icon: "github",
//   },
//   {
//     id: "leetcode",
//     name: "LeetCode",
//     url: "https://leetcode.com/u/Adityaraj0070/",
//     icon: "leetcode",
//   },
//   {
//     id: "email",
//     name: "Email",
//     url: "mailto:adityarsingh24@gmail.com",
//     icon: "mail",
//   },
//   {
//     id: "phone",
//     name: "Phone",
//     url: "tel:+918309631359",
//     icon: "phone",
//   },
// ];

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aditya-3a85651a5/",
    icon: "linkedin",
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/Adityaraj-singh",
    icon: "github",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:adityarsingh24@gmail.com",
    icon: "mail",
  },
  {
    id: "phone",
    name: "Phone",
    url: "tel:+918309631359",
    icon: "phone",
  },
];

export const socialAnimations: Record<SocialId, string> = {
  linkedin: "/icons/Linkedin.json",
  github: "/icons/Git.json",
  email: "/icons/email.json",
  phone: "/icons/Phone.json",
};
