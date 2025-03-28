import { Navigate } from "react-router";
import { useGame } from "../providers/game";

export function IsNotPlaying(props: React.PropsWithChildren) {
  const { currentGameCode } = useGame();

  return currentGameCode ? <Navigate to="/game" /> : props.children;
}
