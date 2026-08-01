"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip/tooltip";
import { socialAnimations, socialLinks } from "@/data/social";
import { AnimatedSocialIcon } from "../ui/animated-social-icons";
import  {useGame}  from "@/app/context/GameContext";
export const HeroSocialLinks = memo(function HeroSocialLinks() {
  const { setGameStarted, setTerminalMode } = useGame();
  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="z-50 flex gap-8 pt-2"
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
  {social.id === "game" ? (
    <Button
      variant="ghost"
      size="icon"
     onClick={() => {
  setGameStarted(true);
  setTerminalMode("loading");
}}
      className="rounded-full bg-muted/100 p-1.5 hover:bg-primary/100"
    >
      <AnimatedSocialIcon
        src={socialAnimations[social.id]}
        className="h-10 w-10"
      />
    </Button>
  ) : (
    <Button
      variant="ghost"
      size="icon"
      asChild
      className="rounded-full bg-muted/100 p-1.5 hover:bg-primary/100"
    >
      <a
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AnimatedSocialIcon
          src={socialAnimations[social.id]}
          className="h-10 w-10"
        />
      </a>
    </Button>
  )}
</TooltipTrigger>

              <TooltipContent>{social.name}</TooltipContent>
            </Tooltip>
          </motion.div>
        ))}
      </motion.div>
    </TooltipProvider>
  );
});
