import { useEffect, useState } from "react";
import { ArrowRight } from "../icons/arrow-right";
import { Plus } from "../icons/plus";
import { Button } from "./Button";
import { Copy } from "../icons/copy";
import { useGame } from "../providers/game";

export function HomeCard() {
  const [createGameModal, setCreateGameModal] = useState(false);
  const [joinGameModal, setJoinGameModal] = useState(false);

  const toggleCreateGameModal = () => setCreateGameModal(!createGameModal);
  const toggleJoinGameModal = () => setJoinGameModal(!joinGameModal);
  const closeModals = () => {
    setCreateGameModal(false);
    setJoinGameModal(false);
  };

  return (
    <div className="mx-auto max-w-5xl grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 items-center">
      <div
        onClick={toggleCreateGameModal}
        className="group w-full h-full hover:shadow-xl
        hover:shadow-purple-500/20 transition-all
        duration-300 shadow-md border
        border-purple-800/50 rounded-xl
        p-8 flex flex-col gap-4 items-center
        bg-gradient-to-br from-purple-900/80
        to-gray-900/90 backdrop-blur-sm
        overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300" />
        <div
          className="h-24 w-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 
                  shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300
                  group-hover:scale-110"
        >
          <Plus className="size-14 text-white" />
        </div>
        <div className="relative flex flex-col gap-2 items-center">
          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-200 transition-colors">
            Crear partida
          </h3>
          <p className="text-purple-200/70 mb-6 group-hover:text-purple-100/90 transition-colors text-center">
            Crea una nueva partida y comparte el código con un amigo para
            empezar a jugar, y que gane el más afortunado
          </p>
          <Button
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 
                  border-none shadow-lg shadow-purple-700/30 group-hover:shadow-purple-700/50 transition-all duration-300 text-white font-semibold"
          >
            Crear la partida
          </Button>
        </div>
      </div>
      <div
        onClick={toggleJoinGameModal}
        className="group w-full h-full hover:shadow-xl
        hover:shadow-purple-500/20 transition-all
        duration-300 shadow-md border
        border-purple-800/50 rounded-xl
        p-8 flex flex-col gap-4 items-center
        bg-gradient-to-br from-purple-900/80
        to-gray-900/90 backdrop-blur-sm
        overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300" />
        <div
          className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6 
                  shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300
                  group-hover:scale-110"
        >
          <ArrowRight className="size-14 text-white" />
        </div>
        <div className="relative flex flex-col gap-2 items-center">
          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-200 transition-colors">
            Unirse a partida
          </h3>
          <p className="text-purple-200/70 mb-6 group-hover:text-purple-100/90 transition-colors text-center">
            Utiliza el codigo de una partida generado por tu amigo para unirte y
            machacarlo como ajo.
          </p>
          <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 
                  border-none shadow-lg shadow-blue-700/30 group-hover:shadow-blue-700/50 transition-all duration-300"
          >
            Unirse a la partida
          </Button>
        </div>
      </div>
      {createGameModal || joinGameModal ? (
        <div className="fixed backdrop-blur-sm h-full w-full top-0 left-0 z-[99]">
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            {createGameModal && <CreateGameModal closeModals={closeModals} />}
            {joinGameModal && <JoinGameModal closeModals={closeModals} />}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function CreateGameModal(props: ModalsProps) {
  const [loading, setLoading] = useState(false);
  const [randomCode, setRandomCode] = useState("");
  const { createGame } = useGame();

  const genRandomCode = () => {
    const code = Math.random().toString(36).substring(2, 7).toUpperCase();
    setRandomCode(code);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    createGame(randomCode);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(randomCode);
  };

  useEffect(() => {
    genRandomCode();
  }, []);

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
      <div className="bg-gray-900 border-purple-700 text-white flex flex-col items-center p-8 w-full max-w-md overflow-hidden">
        <div className="flex flex-col gap-3 mb-4">
          <h2 className="text-2xl text-center font-bold uppercase">
            Crear partida
          </h2>
          <p className="text-gray-200/80 text-center text-sm max-w-[250px]">
            Envia este codigo a un amigo para que puedan empezar a partirse la
            madre 🥋
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-6 bg-gray-800 rounded-lg flex flex-col items-center gap-2 mb-4 w-full">
            <h2 className="text-white/80">Tu codigo de partida</h2>
            <input
              value={randomCode}
              onChange={(e) => setRandomCode(e.target.value.toUpperCase())}
              placeholder="codigo"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border-purple-700 text-center text-3xl font-bold tracking-wider uppercase focus:border-none focus:outline-0"
              maxLength={8}
              minLength={4}
              required
            />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 w-full gap-2">
            <Button
              disabled={loading}
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 w-full col-span-2 md:col-span-1 disabled:opacity-50"
            >
              Crear
            </Button>
            <Button
              onClick={() => props.closeModals()}
              className=" bg-gray-200/20 border-purple-700 hover:bg-white/10 w-full text-rose-400"
            >
              Cancel
            </Button>
            <Button
              className="hover:bg-white/10 bg-gray-200/20 text-gray-100/80"
              onClick={handleCopy}
            >
              <Copy className="inline size-4 mr-2 " />
              Copiar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function JoinGameModal(props: ModalsProps) {
  const [gameCodeInput, setGameCodeInput] = useState("");
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
      <div className="bg-gray-900 border-purple-700 text-white flex flex-col items-center p-8 w-full max-w-md overflow-hidden">
        <div className="flex flex-col gap-3 mb-4">
          <h2 className="text-2xl text-center font-bold uppercase">Unirse</h2>
          <p className="text-gray-200/80 text-center text-sm max-w-[250px]">
            Conectate con ese amigo que quiere ser perforado analmente 🍑
          </p>
        </div>
        <form>
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
              onClick={() => props.closeModals()}
              className=" bg-gray-200/20 border-purple-700 hover:bg-white/10 w-full text-rose-400"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

interface ModalsProps {
  closeModals: () => void;
}
