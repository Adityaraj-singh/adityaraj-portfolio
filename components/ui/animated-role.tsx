"use client";

import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";

const displayedSkills = [
  "Software Engineer",
  "Full Stack Developer",
  "Backend Developer",
  "Automation Engineer",
];

export const AnimatedRole = memo(function AnimatedRole() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % displayedSkills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
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
            className={`absolute transition-all duration-500 ${
              index === currentSkillIndex ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-2xl font-semibold text-primary sm:text-3xl">{skill}</h2>
          </div>
        ))}
      </div>
    </motion.div>
  );
});
