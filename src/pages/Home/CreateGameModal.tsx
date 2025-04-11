import { useState } from "react";
import { Copy } from "../../components/icons/copy";
import { Plus } from "../../components/icons/plus";
import { Modal } from "../../components/ui/Modal";
import { useGame } from "../../providers/game";

const genRandomCode = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};

export function CreateGameModal() {
  const { createGame } = useGame();
  const [loading, setLoading] = useState(false);

  const [randomCode, setRandomCode] = useState(genRandomCode());
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRandomCode(e.target.value.toUpperCase().trim());
  };
  const regenerate = () => {
    setRandomCode(genRandomCode());
  };
  const close = () =>
    (
      document.getElementById("create-game-modal") as HTMLDialogElement
    )?.close();
  const copy = () => {
    navigator.clipboard.writeText(randomCode);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log("llamando el crear juego");
    createGame(randomCode);
    setLoading(false);
  };
  return (
    <Modal id="create-game-modal">
      <h2 className="flex items-center gap-2 text-xl mb-5 text-base-content/50">
        <Plus className="size-5 inline transform translate-y-[.5px]" /> Crear
        partida
      </h2>
      <form onSubmit={onSubmit}>
        <div className="bg-base-300 p-4 rounded-xl">
          <label
            htmlFor="match-code"
            className="block text-center text-base-content/50"
          >
            Codigo de la partida
          </label>
          <div className="flex items-center gap-2 justify-center p-4">
            <input
              type="text"
              id="match-code"
              className="w-full caret-base-content outline-none text-center text-gradient text-3xl font-bold"
              autoCorrect="off"
              value={randomCode}
              onChange={onChange}
              minLength={4}
              maxLength={6}
              required
            />
            <Copy className="text-base-content/50 size-5" onClick={copy} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 my-4">
          <button className="btn btn-primary" disabled={loading}>
            {loading && (
              <span className="loading loading-spinner loading-xs"></span>
            )}
            Crear
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={regenerate}
          >
            Regenerar
          </button>
          <button className="btn btn-error" type="button" onClick={close}>
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  );
}
