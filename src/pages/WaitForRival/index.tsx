import { Copy } from "../../components/icons/copy";

export function WaitForRival() {
  return <div className="h-screen pt-8">
    <WaitingCard />
  </div>;
}

export function WaitingCard() {
  return <div className="flex flex-col max-w-[320px] w-full p-6 mx-auto shadow-2xl rounded-xl border-2 border-primary">
    <h1 className="font-bold text-center text-3xl mb-6 text-base-content/70">Esperando que se una alguien...</h1>
    <div className="bg-base-300 p-4 rounded-md text-center">
      <span className="text-sm text-base-content/70">Código:</span>
      <h2 className="flex items-center justify-center gap-2 font-bold text-gradient text-4xl">CODEHERE <button className="btn btn-square size-8"><Copy className="size-4 inline text-base-content" /></button></h2>
    </div>
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <span className="text-xs text-base-content/50">Tiempo restante: 40s</span>
        <span className="text-xs text-base-content/50">Ten paciencia</span>
      </div>
      <progress className="progress progress-primary" value={65} max={100} />
    </div>
    <button className="btn btn-error w-full text-base-content mt-4">
      Cancelar
    </button>
  </div>
}