"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface RadialButtonProps {
  icon: LucideIcon;
  label: string;
  href: string;
  x: number;
  y: number;
  index: number;
  isOpen: boolean;
  onNavigate: () => void;
}

export function RadialButton({
  icon: Icon,
  label,
  href,
  x,
  y,
  index,
  isOpen,
  onNavigate,
}: RadialButtonProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <motion.div
      className="absolute"
      initial={{
        x: 0,
        y: 0,
        scale: 0.2,
        opacity: 0,
      }}

      animate={{
        x: isOpen ? x : 0,
        y: isOpen ? y : 0,
        scale: isOpen ? 1 : 0.2,
        opacity: isOpen ? 1 : 0,
      }}

      transition={{
        type: "spring",
        stiffness: 220,
        damping: 15,
        mass: 0.9,
        delay: index * 0.11,
      }}
      style={{
        pointerEvents: isOpen ? "auto" : "none",
      }}
    >
      <Link href={href} onClick={onNavigate} className="flex flex-col items-center gap-1">
        <motion.div
          whileTap={{
            scale: 0.9,
            rotate: 360,
          }}
          animate={
            isOpen
              ? {
                  y: [0, -7, 0],
                }
              : {}
          }
          transition={
            isOpen
              ? {
                  y: {
                    repeat: Infinity,
                    duration: 2.0,
                    ease: "easeInOut",
                    delay: index * 0.12,
                  },
                }
              : {}
          }
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full",
            "border border-white/20",
            "backdrop-blur-xl",
            "transition-all duration-300",
            isActive
              ? "bg-primary text-primary-foreground shadow-[0_0_30px_rgba(59,130,246,0.55)]"
              : "bg-background/60 text-foreground shadow-lg hover:bg-background/80"
          )}
        >
          <Icon size={20} />
        </motion.div>

        <motion.span
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 8,
          }}
          transition={{
            delay: index * 0.05 + 0.08,
          }}
          className={cn(
            "rounded-full px-3 py-1",
            "text-[9px] font-medium backdrop-blur-md",
            "border border-white/10",
            isActive ? "bg-primary/30 text-primary" : "bg-background/50 text-muted-foreground"
          )}
        >
          {label}
        </motion.span>
      </Link>
    </motion.div>
  );
}
