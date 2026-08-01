"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type TerminalMode = "description" | "loading" | "game";

type GameContextType = {
  gameStarted: boolean;
  setGameStarted: React.Dispatch<React.SetStateAction<boolean>>;

  terminalMode: TerminalMode;
  setTerminalMode: React.Dispatch<React.SetStateAction<TerminalMode>>;
};

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [gameStarted, setGameStarted] = useState(false);
  const [terminalMode, setTerminalMode] =
    useState<TerminalMode>("description");

  const value = useMemo(
    () => ({
      gameStarted,
      setGameStarted,

      terminalMode,
      setTerminalMode,
    }),
    [gameStarted, terminalMode]
  );

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used inside GameProvider");
  }

  return context;
}