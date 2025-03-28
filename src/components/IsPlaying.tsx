import { Navigate } from "react-router";
import { useGame } from "../providers/game";

export function IsPlaying(props: React.PropsWithChildren) {
  const { currentGameCode } = useGame();

  return currentGameCode ? props.children : <Navigate to="/" />;
}
