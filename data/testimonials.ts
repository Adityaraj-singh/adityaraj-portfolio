export interface Testimonial {
  id: string;
  name: string;
  position: string;
  image?: string;
  relation: string;
  date: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "anil",
    name: "Praveen Padala ",
    position: "UI Lead At PerspecAi",
    relation: "Mentor",
    date: "July 1, 2024",
    quote:
      "Aditya has consistently demonstrated a strong work ethic, technical proficiency, and exceptional leadership skills throughout his tenure. As a student council member, Aditya played a pivotal role in organizing and executing various student events.",
  },
  {
    id: "gopal",
    name: "Mahesh Chavan",
    position: "Sr. Software Engineer at Blueyonder",
    relation: "Teammate",
    date: "May 23, 2025",
    quote:
      "Working with Aditya over the past two years has been a great experience. He is an understanding and approachable leader who listens to his team, values different perspectives, and is open to acknowledging when something can be improved. He creates a fun, collaborative environment while keeping everyone focused on delivering great work.",
  },
];
