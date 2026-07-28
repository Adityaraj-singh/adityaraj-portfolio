"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  FolderKanban,
  Mail,
  FileText,
  NotebookPen,
  Circle,
  type LucideIcon,
} from "lucide-react";

import { navItems } from "@/data/navigation";
import { RadialButton } from "./RadialButton";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const radius = 205;

const iconMap: Record<string, LucideIcon> = {
  Home,
  About: User,
  Experience: Briefcase,
  Projects: FolderKanban,
  Contact: Mail,
  Resume: FileText,
  Blog: NotebookPen,
};

export function RadialMenu({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  const menuItems = navItems.filter((item) => item.title !== "Contact");

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.15,
            }}
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Radial Menu - ALWAYS mounted */}
      <div
        className="fixed z-[95] md:hidden"
        style={{
          right: "34%",
          bottom: "12%",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        {menuItems.map((item, index) => {
          const arcAngle = Math.PI * 0.77;

          const step = (arcAngle / (menuItems.length - 1)) * 0.8;

          const angle = Math.PI - step * index;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius * -1;

          const Icon = iconMap[item.title] ?? Circle;

          return (
            <RadialButton
              key={item.id}
              x={x}
              y={y}
              index={index}
              href={item.href}
              label={item.title}
              icon={Icon}
              isOpen={isOpen}
              onNavigate={onClose}
            />
          );
        })}
      </div>
    </>
  );
}
