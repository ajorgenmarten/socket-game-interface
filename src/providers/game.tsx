import { createContext, useContext, useEffect, useState } from "react";
import { ErrorData, useSocket } from "./socket";

function useGameHook() {
  const { socket } = useSocket();
  const [playersOnline, setPlayersOnline] = useState(0);
  const [currentGameState, setCurrentGameState] = useState({
    code: null as (string | null),
    started: false,
    myNumber: null as (string | null),
    attempts: [] as string[]
  })


  function createGame(code: string) {
    socket.emit("create-game", code);
  }
  function waitTimeOut() {
    socket.emit("game-waiting-timeout", currentGameState.code);
  }
  function joinToGame(code: string) {
    socket.emit("join-game", code)
  }
  useEffect(() => {
    socket.on("online-status", function (count: number) {
      setPlayersOnline(count);
    });
    socket.on("game-created", function (gameCode: string) {
      setCurrentGameState({...currentGameState, code: gameCode});
    });
    socket.on("rival-disconnected", function () {
      setCurrentGameState({...currentGameState, code: null});
    });
    socket.on("game-waiting-timeout", function () {
      setCurrentGameState({...currentGameState, code: null});
    });
    socket.on("game-started", function () {
      setCurrentGameState({
        ...currentGameState,
        started: true,
      });
    });
    socket.on("error", function (data: ErrorData) {
      console.log(data)
    });

  }, [socket]);

  return { createGame, playersOnline, currentGameState, waitTimeOut, joinToGame };
}

const GameContext = createContext<ReturnType<typeof useGameHook>>({
  createGame: () => {},
  playersOnline: 0,
  currentGameState: {
    code: null,
    started: false,
    myNumber: "",
    attempts: []
  },
  joinToGame: () => {},
  waitTimeOut: () => {},
});

export function useGame() {
  return useContext(GameContext);
}

export function GameProvider(props: React.PropsWithChildren) {
  return (
    <GameContext.Provider value={useGameHook()}>
      {props.children}
    </GameContext.Provider>
  );
}
