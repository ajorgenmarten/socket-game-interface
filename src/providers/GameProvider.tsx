import { createContext, useContext } from "react";
import { useGameProviderHook } from "../hooks/GameProviderHook";

const GameContext = createContext<ReturnType<typeof useGameProviderHook>>({
    gameCode: "",
    gameFull: false,
    activePlayers: "0",
    numberIsSetted: false,
    myNumber: "",
    gameIsReady: false,
    isMyTurn: false,
    notes: [],
    rivalNotes: [],
    createGame: () => {},
    joinGame: () => {},
    setNumber: () => {},
    testNumber: () => {},
    finishGame: () => {}
})

export const useGame = () => useContext(GameContext)

export function GameProvider({ children }: GameProviderProps) {
    return <GameContext.Provider value={useGameProviderHook()}>{children}</GameContext.Provider>
}

interface GameProviderProps {
    children?: React.ReactNode
}