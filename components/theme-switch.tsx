"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

/** A compact, tactile day/night toggle inspired by a neumorphic switch. */
export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative flex h-7 w-[72px] shrink-0 items-center overflow-hidden rounded-full border border-[#f7c84c]/60 bg-[linear-gradient(120deg,#f7bd2d,#ffdd63_50%,#ef9e14)] p-[3px] shadow-[inset_2px_2px_5px_rgba(170,99,0,0.35),inset_-2px_-2px_5px_rgba(255,245,179,0.65),0_6px_10px_rgba(164,112,20,0.23)] transition-[background,box-shadow] duration-500 ease-out hover:shadow-[inset_2px_2px_5px_rgba(170,99,0,0.35),inset_-2px_-2px_5px_rgba(255,245,179,0.65),0_8px_14px_rgba(164,112,20,0.32)] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none dark:border-[#4e4382] dark:bg-[radial-gradient(circle_at_62%_65%,#2c2371_0%,#201752_45%,#17113e_100%)] dark:shadow-[inset_2px_2px_5px_rgba(11,7,37,0.8),inset_-2px_-2px_5px_rgba(79,65,133,0.35),0_8px_14px_rgba(31,20,82,0.32)]"
    >
      <span className="pointer-events-none absolute left-[6px] text-amber-50/70 transition-all duration-300 group-hover:scale-110 dark:scale-75 dark:opacity-30">
        <Sun className="h-3.5 w-3.5" strokeWidth={2.4} />
      </span>
      <span className="pointer-events-none absolute right-[8px] text-amber-700/60 transition-all duration-300 group-hover:scale-110 dark:text-white/80 dark:opacity-100">
        <Moon className="h-3 w-3" strokeWidth={2.4} />
      </span>
      <span className="pointer-events-none absolute top-[6px] right-[23px] h-px w-px rounded-full bg-white opacity-0 shadow-[0_0_4px_white] transition-opacity duration-500 dark:opacity-100" />
      <span className="pointer-events-none absolute top-[17px] right-[12px] h-px w-px rounded-full bg-white opacity-0 shadow-[0_0_4px_white] transition-opacity duration-500 delay-75 dark:opacity-80" />
      <span className="pointer-events-none absolute top-[18px] right-[30px] h-0.5 w-0.5 rounded-full bg-white opacity-0 shadow-[0_0_5px_white] transition-opacity duration-500 delay-100 dark:opacity-100" />
      <span className="pointer-events-none absolute top-[10px] right-[35px] h-px w-px rounded-full bg-white opacity-0 transition-opacity duration-500 delay-150 dark:opacity-80" />

      <motion.span
        animate={{ x: isDark ? 46 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 22, mass: 0.8 }}
        className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-[#fff7c8] text-amber-500 shadow-[1px_2px_4px_rgba(155,89,3,0.45),-1px_-1px_3px_rgba(255,249,205,0.9)] transition-[background-color,color,box-shadow] duration-300 dark:bg-[radial-gradient(circle_at_28%_25%,#ffffff_0%,#fffdfd_46%,#e8e5ec_100%)] dark:text-[#e4e0eb] dark:shadow-[1px_2px_4px_rgba(8,5,27,0.65),-1px_-1px_3px_rgba(93,81,145,0.25)]"
      >
        <span className="absolute h-1 w-1 translate-x-1 translate-y-1 rounded-full bg-[#e0dde6]/60 opacity-0 transition-opacity duration-300 dark:opacity-100" />
        <span className="absolute h-0.5 w-0.5 -translate-x-2 translate-y-2 rounded-full bg-[#e0dde6]/45 opacity-0 transition-opacity duration-300 delay-75 dark:opacity-100" />
        <span className="absolute h-px w-px -translate-x-3 -translate-y-1 rounded-full bg-[#e0dde6]/45 opacity-0 transition-opacity duration-300 delay-100 dark:opacity-100" />
        <Sun className="absolute h-3 w-3 scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:rotate-90" />
        <Moon className="absolute h-3 w-3 scale-0 -rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" />
      </motion.span>
    </button>
  );
}
