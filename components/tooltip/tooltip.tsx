"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

export function TooltipProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <TooltipPrimitive.Provider delayDuration={150}>
            {children}
        </TooltipPrimitive.Provider>
    );
}

export const Tooltip = TooltipPrimitive.Root;

export const TooltipTrigger = TooltipPrimitive.Trigger;

export function TooltipContent({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content
                side="top"
                sideOffset={10}
                className="
          z-50
          rounded-lg
          bg-black
          px-3
          py-1.5
          text-sm
          text-white
          shadow-xl
          animate-in
          fade-in
          zoom-in-95
        "
            >
                {children}

                <TooltipPrimitive.Arrow className="fill-black" />
            </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
    );
}