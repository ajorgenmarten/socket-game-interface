import { useGame } from "../providers/GameProvider";

export function Navbar() {
  const { activePlayers } = useGame()

  return (
    <nav className="sticky w-full top-0 left-0 z-50 backdrop-blur-md bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Numeritos
            </h1>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/15">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-white/90 font-medium text-xs">{activePlayers} usuarios activos</span>
          </div>
        </div>
      </div>
    </nav>
  );
}