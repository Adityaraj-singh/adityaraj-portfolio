"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AppLoaderProps {
  children: React.ReactNode;
}

export function AppLoader({ children }: AppLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [minimumDurationComplete, setMinimumDurationComplete] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const handleLoad = () => setPageLoaded(true);
    if (document.readyState === "complete") setPageLoaded(true);
    else window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setMinimumDurationComplete(true), 6000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 95) return 95;
        return Math.min(current + 0.8, 95);
      });
    }, 50);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!pageLoaded || !minimumDurationComplete) return;
    setProgress(100);
    const exitTimer = window.setTimeout(() => setShowLoader(false), 1000);
    return () => {
      window.clearTimeout(exitTimer);
    };
  }, [minimumDurationComplete, pageLoaded]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#DADEDE] text-zinc-900"
          >
            <div className="relative w-full max-w-3xl px-8 sm:px-12">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="mb-4 text-center font-mono text-[10px] font-semibold tracking-[0.55em] text-zinc-400 sm:text-xs"
              >
                PREPARING THE JOURNEY
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.65, ease: "backOut" }}
                className="font-display mb-16 text-center text-4xl font-black tracking-[0.08em] text-zinc-900 sm:text-6xl"
              >
                LET&apos;S GO
              </motion.h1>

              <div className="relative mx-auto w-full max-w-[680px]">
                <div className="relative h-[26px] rounded-full border-2 border-zinc-900 bg-white p-[3px] shadow-[0_5px_16px_rgba(0,0,0,.12)]">
                  <div className="relative h-full overflow-hidden rounded-full bg-zinc-100 shadow-[inset_0_1px_4px_rgba(0,0,0,.12)]">
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full bg-zinc-900"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[1px]"
                        animate={{ left: ["-45%", "125%"] }}
                        transition={{ duration: 1.1, repeat: Infinity, ease: "linear", repeatDelay: 0.35 }}
                      />
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="pointer-events-none absolute top-1/2 z-10 h-[72px] w-[168px] -translate-x-[37%] -translate-y-[89%] bg-contain bg-center bg-no-repeat sm:h-[90px] sm:w-[210px]"
                  style={{ backgroundImage: "url('/images/transparent_jeep_no_line.gif')" }}
                  animate={{
                    left: `${progress}%`,
                    y: progress >= 95 ? [-2, -2, 35, 225] : -2,
                    rotate: progress >= 95 ? [0, 0, 95] : 0,
                    opacity: progress >= 95 ? [1, 1, 1, 0] : 1,
                  }}
                  transition={{
                    left: { duration: 0.25, ease: "easeOut" },
                    y: { duration: 0.85, times: [0, 0.16, 0.42, 1], ease: "easeIn" },
                    rotate: { duration: 0.85, times: [0, 0.16, 1], ease: "easeIn" },
                    opacity: { duration: 0.85, times: [0, 0.16, 0.72, 1], ease: "easeIn" },
                  }}
                />
              </div>

              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
                className="mt-8 flex items-center justify-center gap-3 font-mono text-[10px] tracking-[0.32em] text-zinc-500 sm:text-xs"
              >
                <span className="h-2 w-2 rounded-full bg-zinc-900" />
                {progress === 100 ? "READY" : `LOADING · ${Math.round(progress)}%`}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showLoader && (
        <motion.div initial={{ opacity: 0, scale: 0.995 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          {children}
        </motion.div>
      )}
    </>
  );
}
