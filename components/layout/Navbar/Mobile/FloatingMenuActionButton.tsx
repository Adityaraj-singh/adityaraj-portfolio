"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingMenuActionButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function FloatingMenuActionButton({ isOpen, onClick }: FloatingMenuActionButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      aria-label={isOpen ? "Close navigation" : "Open navigation"}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      whileTap={{
        scale: 0.94,
      }}
      animate={{
        scale: isOpen ? 1.08 : [1, 1.05, 1],
        y: isOpen ? 0 : [0, -2, 0],
      }}
      transition={{
        scale: isOpen
          ? { type: "spring", stiffness: 300, damping: 24, mass: 0.6 }
          : { duration: 0.7, ease: "easeInOut", repeat: Infinity, repeatDelay: 4 },
        y: { duration: 0.7, ease: "easeInOut", repeat: isOpen ? 0 : Infinity, repeatDelay: 4 },
      }}
      className={cn(
        "fixed right-6 bottom-[calc(env(safe-area-inset-bottom)+24px)] z-[100]",
        "flex h-14 w-14 items-center justify-center rounded-full border border-white/20",
        "bg-background/70 shadow-[0_8px_28px_rgba(0,0,0,0.3)] backdrop-blur-md",
        "transition-colors hover:border-primary/60 hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none",
        "dark:border-white/15 dark:bg-[#17113e]/85"
      )}
    >
      <motion.span
        aria-hidden="true"
        animate={isOpen ? { opacity: 0, scale: 1 } : { opacity: [0, 0.55, 0], scale: [1, 1.35, 1.5] }}
        transition={{ duration: 1.2, ease: "easeOut", repeat: isOpen ? 0 : Infinity, repeatDelay: 3.5 }}
        className="pointer-events-none absolute inset-1 rounded-full border border-primary/60"
      />
      {/* Glow */}
      <motion.div
        animate={{
          opacity: isOpen ? 0.35 : 0,
          scale: isOpen ? 1.35 : 1,
        }}
        transition={{
          duration: 0.12,
        }}
        className="absolute inset-0 rounded-full bg-primary blur-2xl"
      />

      <div className="relative z-10 h-10 w-10">
        {/* Closed burger */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: isOpen ? 0 : 1,
            scale: isOpen ? 0.9 : 1,
          }}
          transition={{
            duration: 0.12,
          }}
        >
          <Image
            src="/icons/closed.svg"
            alt="Open menu"
            fill
            className="pointer-events-none select-none"
            priority
          />
        </motion.div>

        {/* Open burger */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: isOpen ? 1 : 0,
            scale: isOpen ? 1 : 0.9,
          }}
          transition={{
            duration: 0.12,
          }}
        >
          <Image
            src="/icons/open.svg"
            alt="Close menu"
            fill
            className="pointer-events-none select-none"
            priority
          />
        </motion.div>
      </div>
    </motion.button>
  );
}
