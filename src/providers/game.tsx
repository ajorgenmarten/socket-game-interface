import { createContext, useContext, useEffect, useState } from "react";
import { ErrorData, useSocket } from "./socket";

function useGameHook() {
  const { socket } = useSocket();
  const [playersOnline, setPlayersOnline] = useState(0);
  const [currentGameCode, setCurrentGameCode] = useState<string | null>(null);

  function createGame(code: string) {
    socket.emit("create-game", code);
  }
  function waitTimeOut() {
    socket.emit("game-waiting-timeout", currentGameCode);
  }
  useEffect(() => {
    socket.on("online-status", function (count: number) {
      setPlayersOnline(count);
    });
    socket.on("game-created", function (gameCode: string) {
      setCurrentGameCode(gameCode);
    });
    socket.on("rival-disconnected", function () {
      setCurrentGameCode(null);
    });
    socket.on("game-waiting-timeout", function () {
      setCurrentGameCode(null);
    });
    socket.on("error", function (data: ErrorData) {
      if (data.in === "create-game") {
        console.log(data);
      }
      if (data.in == "join-game") {
        console.log(data);
      }
    });
  }, [socket]);

  return { createGame, playersOnline, currentGameCode, waitTimeOut };
}

const GameContext = createContext<ReturnType<typeof useGameHook>>({
  createGame: () => {},
  playersOnline: 0,
  currentGameCode: null,
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
