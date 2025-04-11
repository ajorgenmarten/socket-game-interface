import { createContext, useContext, useEffect, useState } from "react";
import { useSocket } from "./socket";

function useGameHook() {
  const { socket } = useSocket();
  const [playersOnline, setPlayersOnline] = useState(0);
  const [gameCode, setGameCode] = useState<null | string>(null);
  const [setNumberStage, setSetNumberStage] = useState(false);
  const [rivalIsReady, setRivalIsReady] = useState(false);
  const [waitingStage, setWaitingStage] = useState(false);
  const [playingStage, setPlayingStage] = useState(false);
  const [secretNumber, setSecretNubmer] = useState<string | null>(null);
  const [isMyTurn, setMyTurn] = useState(false);
  const [rivalIsThinking, setRivalIsThinking] = useState(false);
  const [matchNotes, setMatchNotes] = useState<Note[]>([ ["1635", 2] ]);

  const setStage = (exclude?: "set-number" | "waiting" | "playing") => {
    setPlayingStage(exclude == "playing" ? true : false);
    setWaitingStage(exclude == "waiting" ? true : false);
    setSetNumberStage(exclude == "set-number" ? true : false);
  };
  const disconnect = () => {
    setRivalIsReady(false);
    setSecretNubmer(null);
    setGameCode(null);
    setMyTurn(false);
    setRivalIsThinking(false);
    setMatchNotes([]);
    setStage();
  };

  const createGame = (code: string) => {
    socket.emit("create-game", code);
  };
  const joinToGame = (code: string) => {
    socket.emit("join-game", code);
  };
  const sendSecretNumber = (number: string, gameCode: string) => {
    socket.emit("set-secret-number", number, gameCode);
  };
  const waitTimeOut = () => {
    socket.emit("wait-timeout");
    disconnect();
  };

  useEffect(() => {
    socket.on("game-created", (game: IGame) => {
      console.log("game created", game);
      setGameCode(game.code);
      setStage("waiting");
    });
    socket.on("joined-to-game", (game: IGame) => {
      console.log("joined to game", game);
      setGameCode(game.code);
      setStage("set-number");
    });
    socket.on("online-status", (count: number) => {
      setPlayersOnline(count);
    });
    socket.on("number-setted", (number: string) => {
      setSecretNubmer(number);
    });
    socket.on("rival-is-ready", () => {
      setRivalIsReady(true);
    });
    socket.on("game-started", (turn: boolean) => {
      setMyTurn(turn);
      setStage("playing");
    });
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return {
    rivalIsReady,
    secretNumber,
    playersOnline,
    gameCode,
    playingStage,
    setNumberStage,
    waitingStage,
    isMyTurn,
    rivalIsThinking,
    matchNotes,
    createGame,
    joinToGame,
    sendSecretNumber,
    waitTimeOut,
  };
}

const GameContext = createContext<ReturnType<typeof useGameHook>>({
  rivalIsReady: false,
  secretNumber: null,
  playersOnline: 0,
  gameCode: null,
  playingStage: false,
  setNumberStage: false,
  waitingStage: false,
  isMyTurn: false,
  rivalIsThinking: false,
  matchNotes: [],
  createGame: () => {},
  joinToGame: () => {},
  sendSecretNumber: () => {},
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

interface IGame {
  code: string;
  ownerSocketId: string;
  joinedSocketId: string | null;
}

/**
 * @type {string} Numbero para adivinar el del rival
 */
type Value = string;
/**
 * @type {number} Cantidad de aciertos
 */
type Asserts = number;
type Note = [Value, Asserts];
