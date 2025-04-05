import { Gamepad } from "../../icons/gamepad";
import { PlayersStatus } from "./PlayersStatus";

export function Navbar() {
  return (
    <div className="navbar border-b-[1px] border-gray-300/50 text-primary-content">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold flex items-center gap-1">
          <Gamepad className="size-8 text-violet-200 " />
          <span className="hidden md:inline text-gradient">
            NUMERITOS "EL JUEGO"
          </span>
        </h1>
        <PlayersStatus />
      </div>
    </div>
  );
}
