// components/home/hero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { socialAnimations, socialLinks } from "@/data/social";
import { StarHeader } from "@/components/shared/star-header";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip/tooltip";
import { ArrowRight, Download } from "lucide-react";
import { WindowsDescription } from "../ui/windows-description";
import { AnimatedSocialIcon } from "../ui/animated-social-icons";
const displayedSkills = [
  "Software Engineer",
  "Full Stack Developer",
  "Backend Developer",
  "Automation Engineer",
];

export function Hero() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 40]);
  const y2 = useTransform(scrollY, [0, 800], [0, 60]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % displayedSkills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StarHeader>
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <motion.div className="flex flex-col justify-center space-y-4" style={{ y: y1 }}>
              <div className="space-y-2">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                 <h1 className="text-3xl font-bold tracking-tighter sm:text-2xl xl:text-5xl/none">
  <span className="md:hidden">
    Hi, I&apos;m a
  </span>

  <span className="hidden md:inline">
    Hi, I&apos;m Aditya Raj Singh
  </span>
</h1>
                </motion.div>

                {/* Changing Role */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="h-12"
                >
                  <div className="relative flex h-full items-center overflow-hidden">
                    {displayedSkills.map((skill, index) => (
                      <div
                        key={skill}
                        className={`absolute transform transition-all duration-500 ${
                          index === currentSkillIndex
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                        }`}
                      >
                        <h2 className="text-2xl font-semibold text-primary sm:text-3xl">{skill}</h2>
                      </div>
                    ))}
                  </div>
                </motion.div>
                Contact Me
 {/* Social Links - Added here from navbar */}
              <TooltipProvider>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="flex gap-8 pt-2 z-50"
                >
                {socialLinks.map((social, index) => (
  <motion.div
    key={social.id}
    initial={{
      opacity: 0,
      y: 25,
      scale: 0.8,
    }}
    animate={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    transition={{
      duration: 0.4,
      delay: 0.9 + index * 0.2,
      ease: "easeOut",
    }}
    whileHover={{
      y: -3,
      scale: 1.1,
    }}
    whileTap={{
      scale: 0.9,
    }}
  >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            className="rounded-full p-1.5 bg-muted/100 hover:bg-primary/100 z-60"
                          >
                            <a
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={social.name}
                            >
                              <AnimatedSocialIcon
                                src={socialAnimations[social.id]}
                                className="h-10 w-10"
                              />
                            </a>
                          </Button>
                        </TooltipTrigger>

                        <TooltipContent>{social.name}</TooltipContent>
                      </Tooltip>
                    </motion.div>
                  ))}
                </motion.div>
              </TooltipProvider>
                {/* Windows Terminal */}
                <WindowsDescription />
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <Button asChild size="lg" className="group">
                  <Link href="/#projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="/resume.pdf"
                    download="Resume_Aditya_Raj.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </motion.div>

            
            </motion.div>

            <motion.div
              className="flex items-center justify-center"
              style={{ y: y2 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.14 }}
            >
              <div className="relative aspect-square w-full max-w-md">
                {/* Outer Glow */}
                <div className="absolute inset-0 scale-110 rounded-full bg-violet-500/15 blur-[60px]" />

                {/* Glass Ring */}
                <div className="absolute inset-0 rounded-full border border-white/15 bg-white/5 shadow-[0_0_40px_rgba(139,92,246,0.15)] backdrop-blur-md" />

                {/* Location Pin */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: 1,
                    y: [-10, -38, -10], // float up then back down
                  }}
                  whileHover={{
                    y: -9,
                    rotate: -5,
                    scale: 1.33,
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.8 },
                    y: {
                      duration: 1.9,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    },
                  }}
                  className="absolute top-[30%] left-[43%] z-20"
                >
                  <div className="flex flex-col items-center rounded-2xl px-4 py-3">
                    {/* Location */}
                    <div className="flex flex-row items-center gap-2 rounded-2xl border bg-black px-2 shadow-xl backdrop-blur-xl">
                      <div className="relative flex h-3 w-3 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                      </div>
                      <span className="text-white">Hyderabad</span>
                    </div>

                    <div className="mt-1 flex items-center gap-1 text-muted-foreground">
                      <Image src="./images/locationpin.svg" alt="Location" width={35} height={35} />
                    </div>
                  </div>
                </motion.div>
                <div className="relative h-full w-full overflow-hidden rounded-full p-[6px]">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src="/images/profile.webp"
                      alt="Aditya Raj Singh"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </StarHeader>
  );
}
