// components/home/hero.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { StarHeader } from "@/components/shared/star-header";
import { ArrowRight, Download } from "lucide-react";
import { AnimatedRole } from "../ui/animated-role";
import { HeroSocialLinks } from "../ui/hero-animated-social-icons";
import { WindowsDescription } from "../ui/windows-description";
export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 40]);
  const y2 = useTransform(scrollY, [0, 800], [0, 60]);

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
                    <span className="md:hidden">Hi, I&apos;m a</span>

                    <span className="hidden md:inline">Hi, I&apos;m Aditya Raj Singh</span>
                  </h1>
                </motion.div>
                {/* Changing Role */}
                <AnimatedRole />
                @Divami Design Labs
                {/* Social Links - Added here from navbar */}
                <HeroSocialLinks />
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
                <div className="relative aspect-square w-full max-w-md">

  <div className="absolute inset-0 scale-110 rounded-full bg-violet-500/20 blur-[90px]" />

  <Image
    src="/images/profile.webp"
    alt="Aditya Raj Singh"
    fill
    priority
    className="rounded-full object-cover"
  />

  <div
    className="
      absolute
      inset-0
      rounded-full
      pointer-events-none
      shadow-[inset_0_0_60px_20px_rgba(10,8,22,0.35)]
    "
  />
</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </StarHeader>
  );
}
