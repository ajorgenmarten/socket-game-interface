import { Gamepad } from "../icons/gamepad";
import { Users } from "../icons/users";
import { useGame } from "../providers/game";

export function Navbar() {
  const { playersOnline } = useGame();
  return (
    <nav className="h-[72px] border-b border-purple-800/50 flex items-center justify-between sticky top-0 px-8 backdrop-blur-sm z-50">
      <h1 className="text-3xl text-white flex gap-2">
        <div className="relative">
          <div className="absolute top-1 -right-1 h-3 w-3 bg-green-500 rounded-full animate-pulse" />
          <Gamepad className="inline size-9 text-violet-300/90" />
        </div>
        <p className="hidden md:inline font-bold uppercase text-gradient">
          Juego épico de los numeritos
        </p>
      </h1>
      <div className="flex items-center gap-1 rounded-full bg-gray-700 border border-violet-600/80 px-4 py-1 text-violet-400 font-semibold">
        <Users className="inline size-4" />
        <span>{playersOnline}</span>
        <span className="text-white font-bold">Online</span>
      </div>
    </nav>
  );
}
