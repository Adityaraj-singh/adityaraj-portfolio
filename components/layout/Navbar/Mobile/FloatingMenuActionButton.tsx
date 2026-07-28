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
      whileTap={{
        scale: 0.94,
      }}
      animate={{
        scale: isOpen ? 1.08 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 24,
        mass: 0.6,
      }}
      className={cn(
        "fixed right-6 bottom-[calc(env(safe-area-inset-bottom)+24px)] z-[100]",
        "flex h-16 w-16 items-center justify-center rounded-full",
        "dark:border-white/10"
      )}
    >
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

      <div className="relative z-10 h-12 w-12">
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
