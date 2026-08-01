/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Square, X, TerminalSquare, MousePointer2 } from "lucide-react";
import { Geist_Mono } from "next/font/google";
import { useGame } from "@/app/context/GameContext";
import { MobileGameController, type GameInputAction } from "./mobile-game-controller";
const geistMono = Geist_Mono({
  subsets: ["latin"],
});

const GAME_URL = process.env.NEXT_PUBLIC_GAME_URL?.trim();

const description =
  "Full Stack Software Developer with 5+ years of experience building scalable, high-performance applications using React, Angular, Node.js, Next.js, and AWS.";

function Typewriter({
  text,
  speed = 30,
  delay = 0,
}: Readonly<{
  text: string;
  speed?: number;
  delay?: number;
}>) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = window.setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => window.clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started || displayedText.length >= text.length) return;

    const timer = window.setTimeout(() => {
      setDisplayedText(text.slice(0, displayedText.length + 1));
    }, speed);

    return () => window.clearTimeout(timer);
  }, [started, displayedText, text, speed]);

  return (
    <>
      {displayedText}

      <motion.span
        className="ml-1 inline-block h-[14px] w-[7px] bg-zinc-300 align-middle"
        animate={{
          opacity: [1, 1, 0, 0],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          times: [0, 0.5, 0.5, 1],
        }}
      />
    </>
  );
}

export function WindowsDescription() {
  const [expanded, setExpanded] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [activeLoadingStep, setActiveLoadingStep] = useState<string | null>(null);
  const [loadingSequenceComplete, setLoadingSequenceComplete] = useState(false);
  const [isGameFrameReady, setGameFrameReady] = useState(false);
  const [shouldMountGameFrame, setShouldMountGameFrame] = useState(false);
  const [gameLaunchId, setGameLaunchId] = useState(0);
  const gameFrameRef = useRef<HTMLIFrameElement>(null);
  const { terminalMode, setTerminalMode } = useGame();

  const gameOrigin = useMemo(() => {
    if (!GAME_URL) return null;

    try {
      return new URL(GAME_URL).origin;
    } catch {
      return null;
    }
  }, []);

  const loadingSteps = ["launch GamePlay", "Loading assets...", "Launching game..."];

  const sendGameInput = useCallback(
    (action: GameInputAction, pressed: boolean) => {
      const gameWindow = gameFrameRef.current?.contentWindow;
      if (!gameWindow || !gameOrigin) return;

      gameWindow.postMessage(
        { source: "portfolio", type: "game-input", action, pressed },
        gameOrigin
      );
    },
    [gameOrigin]
  );

  useEffect(() => {
    if (terminalMode === "description") {
      setActiveLoadingStep(null);
      return;
    }
    if (terminalMode !== "loading") return;

    let index = 0;
    setGameFrameReady(false);
    setShouldMountGameFrame(false);
    setGameLaunchId((current) => current + 1);
    setActiveLoadingStep(loadingSteps[index] ?? null);

    const interval = window.setInterval(() => {
      index++;

      if (index >= loadingSteps.length) {
        window.clearInterval(interval);
        launchTimer = window.setTimeout(() => setTerminalMode("game"), 700);
        return;
      }

      setActiveLoadingStep(loadingSteps[index] ?? null);
    }, 1050);
    let launchTimer: number | undefined;

    return () => {
      window.clearInterval(interval);
      if (launchTimer) window.clearTimeout(launchTimer);
    };
  }, [terminalMode, setTerminalMode]);

  useEffect(() => {
    if (terminalMode !== "game") return;

    const iframeTimer = window.setTimeout(() => setShouldMountGameFrame(true), 2000);
    return () => window.clearTimeout(iframeTimer);
  }, [terminalMode]);

  useEffect(() => {
    const handleGameMessage = (event: MessageEvent) => {
      if (event.origin !== gameOrigin || event.data?.source !== "island-escape") return;
      if (event.data?.type === "game-ready") setGameFrameReady(true);
    };

    window.addEventListener("message", handleGameMessage);
    return () => window.removeEventListener("message", handleGameMessage);
  }, [gameOrigin]);

  useEffect(() => {
    if (terminalMode !== "game") return;

    const keyToAction: Record<string, GameInputAction> = {
      ArrowUp: "up",
      ArrowDown: "down",
      ArrowLeft: "left",
      ArrowRight: "right",
      Space: "space",
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      const action = keyToAction[event.code];
      if (!action || event.repeat) return;
      event.preventDefault();
      sendGameInput(action, true);
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      const action = keyToAction[event.code];
      if (!action) return;
      event.preventDefault();
      sendGameInput(action, false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [sendGameInput, terminalMode]);

  useEffect(() => {
    // Cursor reaches the maximize button and clicks.
    const clickTimer = window.setTimeout(() => {
      setClicked(true);
    }, 1400);

    // Terminal expands immediately after the click.
    const expandTimer = window.setTimeout(() => {
      setExpanded(true);
    }, 1550);

    // Start typing after expansion.
    const typingTimer = window.setTimeout(() => {
      setStartTyping(true);
    }, 2100);

    return () => {
      window.clearTimeout(clickTimer);
      window.clearTimeout(expandTimer);
      window.clearTimeout(typingTimer);
    };
  }, []);

  return (
    <div className="relative">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
          scaleX: 0.55,
          scaleY: 0.85,
        }}
        animate={{
          opacity: 0.75,
          y: 0,
          scaleX: expanded ? 1 : 0.55,
          scaleY: expanded ? 1 : 0.85,
        }}
        transition={{
          opacity: {
            duration: 0.6,
            ease: "easeOut",
          },
          y: {
            duration: 0.6,
            ease: "easeOut",
          },
          scaleX: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          },
          scaleY: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        style={{
          transformOrigin: "left center",
        }}
        className={` ${geistMono.className} relative w-[360px] max-w-[92vw] overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0c] shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:w-[650px] sm:max-w-none`}
      >
        {/* Windows Terminal Header */}
        <div className="relative flex h-10 items-center justify-between bg-[#202020]">
          {/* Left side */}
          <div className="flex h-full items-center">
            {/* Active Tab */}
            <div className="ml-2 flex h-[34px] min-w-[145px] items-center gap-2 rounded-t-lg bg-[#0c0c0c] px-3">
              <TerminalSquare className="h-4 w-4 text-blue-400" />

              <span className="text-xs font-semibold text-white">portfolio</span>

              <X className="ml-auto h-3.5 w-3.5 text-zinc-400" />
            </div>

            {/* New Tab */}
            <button
              type="button"
              aria-label="New tab"
              className="ml-2 flex h-5 w-5 items-center justify-center rounded text-zinc-300 hover:bg-white/10"
            >
              <Plus className="h-4 w-4" />
            </button>

            <div className="mx-1 h-5 w-px bg-white/10" />
          </div>

          {/* Windows Controls */}
          <div className="flex h-full items-center">
            {/* Minimize */}
            <button
              type="button"
              aria-label="Minimize"
              className="flex h-full w-8 items-center justify-center text-zinc-300 hover:bg-white/10"
            >
              <Minus className="h-4 w-4" />
            </button>

            {/* Maximize */}
            <motion.button
              type="button"
              aria-label="Maximize"
              animate={
                clicked
                  ? {
                      backgroundColor: [
                        "rgba(255,255,255,0)",
                        "rgba(255,255,255,0.18)",
                        "rgba(255,255,255,0)",
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 0.3,
              }}
              className="relative flex h-full w-8 items-center justify-center text-zinc-300"
            >
              <motion.div
                animate={
                  clicked
                    ? {
                        scale: [1, 0.72, 1],
                      }
                    : {
                        scale: 1,
                      }
                }
                transition={{
                  duration: 0.25,
                }}
              >
                <Square className="h-3.5 w-3.5" />
              </motion.div>
            </motion.button>

            {/* Close */}
            <button
              type="button"
              aria-label="Close"
              className="flex h-full w-11 items-center justify-center text-zinc-300 hover:bg-red-600 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Animated Mouse Cursor */}
        <AnimatePresence>
          {!expanded && (
            <motion.div
              initial={{
                x: -120,
                y: 85,
                opacity: 0,
                scale: 1,
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
                scale: clicked ? 0.8 : 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              transition={{
                x: {
                  delay: 0.55,
                  duration: 0.8,
                  ease: "easeInOut",
                },
                y: {
                  delay: 0.55,
                  duration: 0.8,
                  ease: "easeInOut",
                },
                opacity: {
                  delay: 0.4,
                  duration: 0.2,
                },
                scale: {
                  duration: 0.15,
                },
              }}
              className="pointer-events-none absolute top-[14px] right-[50px] z-50"
            >
              <MousePointer2 className="h-6 w-6 fill-white text-black drop-shadow-lg" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Terminal Body */}
        <motion.div
          layout
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className={`relative bg-[#0c0c0c] text-[13px] leading-6 text-zinc-300 sm:text-sm ${
            terminalMode === "game"
              ? "h-[360px] overflow-hidden sm:h-[440px]"
              : "min-h-[180px] px-4 py-4"
          }`}
        >
          {terminalMode !== "game" && (
            <div>
              <span className="text-blue-400">PS</span>{" "}
              <span className="text-zinc-400">C:\Users\Aditya\Portfolio&gt;</span>
            </div>
          )}

          {terminalMode === "description" && (
            <p className="mt-4 max-w-[590px] text-zinc-300">
              {startTyping && <Typewriter text={description} speed={25} />}
            </p>
          )}

          {terminalMode === "loading" && (
            <div className="mt-4 h-6 overflow-hidden text-green-400">
              <AnimatePresence mode="wait" initial={false}>
                {activeLoadingStep && (
                  <motion.div
                    key={activeLoadingStep}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                  >
                    {">"} {activeLoadingStep}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {terminalMode === "game" && GAME_URL && (!shouldMountGameFrame || !isGameFrameReady) && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#0c0c0c] text-green-400">
              {">"} {activeLoadingStep ?? loadingSteps[loadingSteps.length - 1]}
            </div>
          )}

          {terminalMode === "game" && shouldMountGameFrame && GAME_URL && (
            <iframe
              key={gameLaunchId}
              ref={gameFrameRef}
              src={GAME_URL}
              title="Island Escape game"
              onLoad={() => setGameFrameReady(true)}
              allow="fullscreen"
              className="absolute inset-0 h-full w-full border-0"
            />
          )}

          {terminalMode === "game" && !GAME_URL && (
            <div className="flex h-full items-center justify-center px-6 text-center text-sm text-red-300">
              Set NEXT_PUBLIC_GAME_URL to the hosted game URL.
            </div>
          )}
        </motion.div>
      </motion.div>

      <MobileGameController
        visible={terminalMode === "loading" || terminalMode === "game"}
        onInput={sendGameInput}
      />
    </div>
  );
}
