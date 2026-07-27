export interface NavItem {
  title: string;
  href: string;
  id: string;
}

export const navItems: NavItem[] = [
  { title: "Home", href: "/", id: "home" },
  { title: "About", href: "/about", id: "about" },
  { title: "Experience", href: "/experience", id: "experience" },
  { title: "Projects", href: "/projects", id: "projects" },
  { title: "Blog", href: "/blog", id: "blog" },
  { title: "Contact", href: "/contact", id: "contact" },
];
