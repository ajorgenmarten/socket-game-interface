import { Navigate } from "react-router";
import { useGame } from "../../providers/game";

export function CanStayInSetNumberScreen(props: React.PropsWithChildren) {
    const { currentGameState } = useGame()
    return currentGameState.code && currentGameState.started ? props.children : <Navigate to="/game" />
}