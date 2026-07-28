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
      initial={false}
      animate={{
        x: isOpen ? x : 0,
        y: isOpen ? y : 0,
        scale: isOpen ? 1 : 0.3,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 28,
        mass: 0.6,

        // Small stagger while spreading into the arc
        delay: isOpen ? index * 0.12 : 0,
      }}
      style={{
        pointerEvents: isOpen ? "auto" : "none",
        willChange: "transform, opacity",
      }}
    >
      <Link href={href} onClick={onNavigate} className="flex flex-col items-center gap-1">
        {/* Icon */}
        <motion.div
          animate={
            isOpen
              ? {
                  y: [0, -14, 0],
                }
              : {
                  y: 0,
                }
          }
          transition={
            isOpen
              ? {
                  y: {
                    delay: 0.35 + index * 0.05,
                    duration: 1.54,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
              : {
                  duration: 0.1,
                }
          }
          whileTap={{
            scale: 0.9,
          }}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full",
            "border border-white/20",
            "backdrop-blur-xl",
            "transition-colors duration-200",
            isActive
              ? "bg-primary text-primary-foreground shadow-[0_0_30px_rgba(59,130,246,0.55)]"
              : "bg-background/60 text-foreground shadow-lg hover:bg-background/80"
          )}
        >
          <Icon size={20} />
        </motion.div>

        {/* Label */}
        <motion.span
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 5,
          }}
          transition={{
            duration: 0.15,
            delay: isOpen ? index * 0.02 : 0,
          }}
          className={cn(
            "rounded-full px-3 py-1",
            "text-[11px] font-medium",
            "border border-white/10",
            isActive ? "bg-primary/20 text-primary" : "bg-background/50 text-muted-foreground"
          )}
        >
          {label}
        </motion.span>
      </Link>
    </motion.div>
  );
}
