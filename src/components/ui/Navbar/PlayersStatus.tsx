import { useGame } from "../../../providers/game";
import { Users } from "../../icons/users";

export function PlayersStatus() {
  const { playersOnline } = useGame();
  return (
    <div className="badge badge-outline border-orange-400 py-4 px-4 border-2 select-none bg-gray-950/30">
      <Users className="size-4 inline" /> {playersOnline} Online 🟢
    </div>
  );
}
