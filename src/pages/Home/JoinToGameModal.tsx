import { useState } from "react";
import { ArrowRight } from "../../components/icons/arrow-right";
import { Modal } from "../../components/ui/Modal";
import { Copy } from "../../components/icons/copy";

export function JoinToGameModal() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value.toUpperCase().trim());
  };
  const copy = () => navigator.clipboard.writeText(code);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  };
  const close = () => (document.getElementById("join-game-modal") as HTMLDialogElement)?.close();
  return (
    <Modal id="join-game-modal">
      <h2 className="flex items-center gap-2 text-xl mb-5 text-base-content/50">
        <ArrowRight className="size-5 inline transform translate-y-[.5px]" /> Unirse a una partida
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
              value={code}
              onChange={onChange}
              minLength={4}
              maxLength={6}
              autoComplete="off"
              required
            />
            <Copy className="text-base-content/50 size-5" onClick={copy} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 my-4">
          <button className="btn btn-primary" disabled={loading}>
            {loading && (
              <span className="loading loading-spinner loading-xs"></span>
            )}
            Crear
          </button>
          <button className="btn btn-error" type="button" onClick={close}>
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  );
}
