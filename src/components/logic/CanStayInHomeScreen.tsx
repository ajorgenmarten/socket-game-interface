import { Navigate } from "react-router";
import { useGame } from "../../providers/game";

export function CanStayInHomeScreen(props: React.PropsWithChildren) {
    const { currentGameState } = useGame()
    return currentGameState.code == null && currentGameState.started == false ? props.children : <Navigate to="/set-number" />
}