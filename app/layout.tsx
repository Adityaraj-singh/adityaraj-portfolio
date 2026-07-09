import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Raj Singh | Software Engineer",
  description:
    "Full Stack Software Engineer with 5+ years of experience building scalable applications using React.js, Next.js, Angular, Node.js, and TypeScript. Passionate about delivering high-performance solutions for supply chain and demand planning products, driving business impact through scalable architecture, performance optimization, and intuitive user experiences",
  metadataBase: new URL("https://achyutkatiyar.com"),

  // Basic metadata
  applicationName: "Aditya Raj Singh Protfolio",
  authors: [{ name: "Aditya Raj Singh" }],
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Blockchain",
    "Web3",
    "Next.js",
    "React",
    "TypeScript",
    "Northeastern University",
    "MIT Bitcoin Expo",
  ],

  openGraph: {
    type: "website",
    url: "https://achyutkatiyar.com",
    title: "Aditya Raj Singh | Software Engineer",
    description:
      "Software Engineer building full-stack applications and decentralized systems. MS CS at Northeastern. Co-Chair of MIT Bitcoin Expo.",
    siteName: "Aditya Raj Singh",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aditya Raj Singh - Portfolio",
      },
    ],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: { url: "/apple-touch-icon.png" },
  },

  alternates: {
    canonical: "https://achyutkatiyar.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
