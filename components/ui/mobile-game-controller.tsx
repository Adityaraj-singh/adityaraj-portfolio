"use client";

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Circle } from "lucide-react";
import { motion } from "framer-motion";

export type GameInputAction = "up" | "down" | "left" | "right" | "space";

type MobileGameControllerProps = Readonly<{
  visible: boolean;
  onInput: (action: GameInputAction, pressed: boolean) => void;
}>;

const directions: ReadonlyArray<
  Readonly<{
    action: Exclude<GameInputAction, "space">;
    label: string;
    icon: typeof ArrowUp;
    className: string;
  }>
> = [
  { action: "up", label: "Move up", icon: ArrowUp, className: "col-start-2 row-start-1" },
  { action: "left", label: "Move left", icon: ArrowLeft, className: "col-start-1 row-start-2" },
  { action: "down", label: "Move down", icon: ArrowDown, className: "col-start-2 row-start-2" },
  { action: "right", label: "Move right", icon: ArrowRight, className: "col-start-3 row-start-2" },
];

export function MobileGameController({ visible, onInput }: MobileGameControllerProps) {
  const bindInput = (action: GameInputAction) => ({
    onPointerDown: (event: React.PointerEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      onInput(action, true);
    },
    onPointerUp: () => onInput(action, false),
    onPointerCancel: () => onInput(action, false),
    onPointerLeave: () => onInput(action, false),
  });

  return (
    <motion.div
      aria-hidden={!visible}
      initial={{ opacity: 0, y: 140 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 140 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="relative mx-auto mt-1 w-[292px] touch-none md:hidden"
    >
      <div className="mx-auto h-10 w-1 rounded-full bg-gradient-to-b from-cyan-300 via-cyan-400/60 to-transparent shadow-[0_0_14px_rgba(34,211,238,0.75)]" />
      <div className="flex items-center justify-between rounded-3xl border border-cyan-300/25 bg-zinc-950/95 px-5 py-4 shadow-[0_0_34px_rgba(34,211,238,0.24)] backdrop-blur">
        <div className="grid grid-cols-3 grid-rows-2 gap-1.5">
          {directions.map(({ action, label, icon: Icon, className }) => (
            <button
              key={action}
              type="button"
              aria-label={label}
              className={`${className} flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-zinc-800 text-cyan-200 shadow-inner transition-colors active:bg-cyan-400 active:text-zinc-950`}
              {...bindInput(action)}
            >
              <Icon className="h-5 w-5" />
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label="Jump or action"
          className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-fuchsia-300/35 bg-fuchsia-500/25 text-fuchsia-100 shadow-[0_0_22px_rgba(217,70,239,0.4)] transition-colors active:bg-fuchsia-300 active:text-zinc-950"
          {...bindInput("space")}
        >
          <Circle className="h-7 w-7 fill-current" />
          <span className="sr-only">Action</span>
        </button>
      </div>
    </motion.div>
  );
}
