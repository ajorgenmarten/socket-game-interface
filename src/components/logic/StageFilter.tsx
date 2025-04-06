/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, useLocation } from "react-router";
import { useGame } from "../../providers/game";

export function StageFilter(props: StageFilterProps) {
    const { playingStage, waitingStage, setNumberStage} = useGame();
    const thisPath = useLocation().pathname;
    const getStage = () => {
        if (playingStage) return "playing";
        if (waitingStage) return "waiting";
        if (setNumberStage) return "set-number";
        return "home";
    }
    const paths = new Map<string, any>([
        ["home", "/"],
        ["playing", "/game"],
        ["waiting", "/wait-room"],
        ["set-number", "/set-number"]
    ])
    const stage = getStage();
    return stage == "home" && thisPath == "/"
        ? props.children
        : stage == "playing" && thisPath == "/game"
        ? props.children
        : stage == "waiting" && thisPath == "/game"
        ? props.children
        : stage == "set-number" && thisPath == "/game"
        ? props.children
        : <Navigate to={paths.get(stage)} />
    
}

interface StageFilterProps {
    children: React.ReactNode;
}