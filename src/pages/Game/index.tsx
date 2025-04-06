import { Navbar } from "../../components/ui/Navbar";
import { Numbers } from "../../components/ui/Numbers";
import { MatchNotes } from "./MatchNotes";

export function Game() {
  return (
    <div className="drawer">
      <input type="checkbox" className="drawer-toggle" id="game-drawer" />
      <div className="drawer-content">
        <Navbar />
        <main className="min-h-[calc(100vh-64px)] p-2">
          <div className=" flex flex-col items-center justify-center pt-8">
            <Numbers />
            <label
              htmlFor="game-drawer"
              className="btn btn-secondary mt-10 max-w-full w-xs text-lg"
            >
              Consume lo que haz hecho 📑
            </label>
            <button className="btn btn-primary mt-4 max-w-full w-xs text-lg">
              Repartéate caraepin 🔪
            </button>
          </div>
        </main>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="game-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <MatchNotes />
      </div>
    </div>
  );
}
