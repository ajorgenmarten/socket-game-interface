import { useState } from "react";
import { useGame } from "../../../providers/game";
import { Button } from "../Button";
import { Modal } from "./Modal";

export function JoinModal() {
  const { joinToGame } = useGame();
  const [gameCodeInput, setGameCodeInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    joinToGame(gameCodeInput);
  }
  return (
    <Modal id="join-match-modal">
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
        <div className="bg-gray-900 border-purple-700 text-white flex flex-col items-center p-8 w-full max-w-md overflow-hidden">
          <div className="flex flex-col gap-3 mb-4">
            <h2 className="text-2xl text-center font-bold uppercase">Unirse</h2>
            <p className="text-gray-200/80 text-center text-sm max-w-[250px]">
              Conectate con ese amigo que quiere ser perforado analmente 🍑
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-6 bg-gray-800 rounded-lg flex flex-col items-center gap-2 mb-4 w-full">
              <h2 className="text-white/80">Introduce el codigo de tu amigo</h2>
              <input
                value={gameCodeInput}
                onChange={(e) => setGameCodeInput(e.target.value.toUpperCase())}
                placeholder="codigo"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border-purple-700 text-center text-3xl font-bold tracking-wider uppercase focus:border-none focus:outline-0"
                maxLength={8}
                minLength={4}
                required
              />
            </div>
            <div className="grid grid-cols-2 w-full gap-2">
              <Button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 w-full"
              >
                Unirse
              </Button>
              <Button
                as="label"
                htmlFor="join-match-modal"
                className=" bg-gray-200/20 border-purple-700 hover:bg-white/10 w-full text-rose-400 flex items-center justify-center"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
