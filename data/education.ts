export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "juet",
    degree: "B.Tech / B.E. in Computer Science and Engineering (CSE)",
    institution: "Jaypee University of Engineering and Technology (JUET)",
    location: "Guna, India",
    startDate: "2018", // Assumed typical 4-year timeline ending in 2022
    endDate: "2022",
    gpa: "7.8/10",
  },
];
