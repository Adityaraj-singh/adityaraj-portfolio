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
    name: "Anil Nigam",
    position: "Strategic professional with strong business acumen",
    relation: "Mentor",
    date: "July 1, 2024",
    quote:
      "Aditya has consistently demonstrated a strong work ethic, technical proficiency, and exceptional leadership skills throughout his tenure. As a student council member, Achyut played a pivotal role in organizing and executing various student events.",
  },
  {
    id: "gopal",
    name: "V.R. Gopal",
    position: "Delivery Manager at Divami Design Labs",
    relation: "Manager",
    date: "May 23, 2024",
    quote:
      "I am pleased to recommend Adi for his exceptional technical and leadership skills. As a Technical Executive, he oversaw technical operations using advanced methodologies to achieve project milestones and foster innovation.",
  },
];
