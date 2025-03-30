import { useState } from "react";
import { BtnAllProps, Button } from "../Button";
import { Modal } from "./Modal";
import { useGame } from "../../../providers/game";
import { Copy } from "../../icons/copy";
import { Refresh } from "../../icons/refresh";
import { Check } from "../../icons/check";

export function CreateModal() {
  const [loading, setLoading] = useState(false);
  const [randomCode, setRandomCode] = useState(
    Math.random().toString(36).substring(2, 7).toUpperCase()
  );
  const { createGame } = useGame();

  const genRandomCode = () => {
    const code = Math.random().toString(36).substring(2, 7).toUpperCase();
    setRandomCode(code);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createGame(randomCode);
    setLoading(true);
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(randomCode);
  };

  return (
    <Modal id="create-match-modal">
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
              <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                <input
                  value={randomCode}
                  onChange={(e) => setRandomCode(e.target.value.toUpperCase())}
                  placeholder="codigo"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border-purple-700 text-center text-3xl font-bold tracking-wider uppercase focus:border-none focus:outline-0"
                  maxLength={8}
                  minLength={4}
                  required
                />
                <div
                  onClick={genRandomCode}
                  className="hover:bg-white/10 flex items-center justify-center w-8 h-8 rounded-sm"
                >
                  <Refresh className="size-5 text-white inline" />
                </div>
              </div>
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
                as="label"
                htmlFor="create-match-modal"
                className="bg-gray-200/20 border-purple-700 hover:bg-white/10 w-full text-rose-400 flex items-center justify-center"
              >
                Cancelar
              </Button>
              <CopyButton onClick={handleCopy} />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

function CopyButton({
  onClick,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [copy, setCopy] = useState(false);
  const handleClick: React.MouseEventHandler = (e) => {
    onClick?.(e as React.MouseEvent<HTMLButtonElement>);
    setCopy(true);
    setTimeout(() => setCopy(false), 1000);
  };
  return (
    <Button
      as="button"
      type="button"
      onClick={handleClick}
      className="hover:bg-white/10 bg-gray-200/20 text-gray-100/80"
      {...(props as BtnAllProps)}
    >
      { copy ? (
        <span className="copy-animation">
          <Check className="inline size-4 mr-2 text-green-300" />
          Copiado
        </span>
      ) : (
        <span>
          <Copy className="inline size-4 mr-2" />
          Copiar
        </span>
      )}
    </Button>
  );
}
