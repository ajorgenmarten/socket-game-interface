import { Navigate } from "react-router"
import { useGame } from "../../providers/game"

export function CanStayInWaitScreen(props: React.PropsWithChildren) {
    const { currentGameState } = useGame()
    return currentGameState.code ? props.children : <Navigate to="/" />
}