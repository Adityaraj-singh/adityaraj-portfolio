"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AppLoaderProps {
  children: React.ReactNode;
}

export function AppLoader({ children }: AppLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  // Wait for browser resources
  useEffect(() => {
    const handleLoad = () => {
      setPageLoaded(true);
    };

    if (document.readyState === "complete") {
      setPageLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // Progress animation
  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 95) {
          return 95;
        }

        const increment = current < 30 ? 1.5 : current < 60 ? 1 : current < 80 ? 0.6 : 0.3;

        return Math.min(current + increment, 95);
      });
    }, 60);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  // Complete after page load
  useEffect(() => {
    if (!pageLoaded) return;

    const completeTimer = window.setTimeout(() => {
      setProgress(100);
    }, 700);

    const exitTimer = window.setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    return () => {
      window.clearTimeout(completeTimer);
      window.clearTimeout(exitTimer);
    };
  }, [pageLoaded]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.04,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#080611]"
          >
            {/* Background glow */}
            <motion.div
              className="absolute h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[120px]"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative flex w-full flex-col items-center px-8">
              {/* LOADING */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: -15,
                  letterSpacing: "0.15em",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  letterSpacing: "0.08em",
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="font-display mb-8 text-4xl font-bold text-white drop-shadow-[0_4px_12px_rgba(139,92,246,0.45)] sm:text-5xl"
              >
                LOADING
              </motion.h1>

              {/* Outer progress container */}
              <div className="relative h-[76px] w-full max-w-[520px] rounded-full border border-white/10 bg-white/10 p-[10px] shadow-[0_15px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:h-[90px] sm:p-[12px]">
                {/* Inner track */}
                <div className="relative h-full w-full overflow-visible rounded-full bg-black/30 shadow-inner">
                  {/* Progress fill */}
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-violet-500 via-purple-400 to-violet-300 shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                    animate={{
                      width: `${progress}%`,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                  />

                  {/* Percentage bubble */}
                  <motion.div
                    animate={{
                      left: `${progress}%`,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className="absolute top-1/2 z-20 flex h-[58px] w-[78px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-violet-400 font-mono text-lg font-bold text-[#100b1e] shadow-[0_8px_25px_rgba(139,92,246,0.45)] sm:h-[68px] sm:w-[92px] sm:text-xl"
                    style={{
                      // Prevent bubble from overflowing too much
                      marginLeft: progress < 10 ? "25px" : progress > 90 ? "-25px" : "0px",
                    }}
                  >
                    {progress}%
                  </motion.div>
                </div>
              </div>

              {/* Bottom status */}
              <motion.p
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-6 font-mono text-xs tracking-[0.25em] text-violet-200/60"
              >
                {progress > 90 ? "READY" : "GETTING INFO..."}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mount application only after loader */}
      {!showLoader && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.995,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
