import { Gamepad } from "../../icons/gamepad";
import { PlayersStatus } from "./PlayersStatus";

export function Navbar() {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold flex items-center gap-1">
          <Gamepad className="size-8 text-orange-300 " />
          <span className="hidden md:inline text-gradient">
            NUMERITOS "EL JUEGO"
          </span>
        </h1>
        <PlayersStatus />
      </div>
    </div>
  );
}
