import { useState } from "react";
import { Numbers } from "../../components/ui/Numbers";

export function SetSecretNumber() {
  return (
    <div className="min-h-screen pt-8 px-2">
      <div className="flex flex-col justify-center items-center p-4 py-8 max-w-full w-sm mx-auto rounded-xl bg-base-200 border-2 border-primary/50">
        <div className="text-center mb-5">
          <h1 className="text-3xl font-bold text-gradient mb-2">
            Codigo secreto
          </h1>
          <p className="text-base-content/70">Establece tu número secreto</p>
        </div>
        <SetSquares />
      </div>
    </div>
  );
}

function SetSquares() {
  const [number, setNumber] = useState("");
  const length = number.length;
  const canStart = length == 4;
  const onChange = (value: string) => {
    setNumber(value)
  }

  return (
    <>
      <Numbers onChange={onChange}/>
      <button disabled={!canStart} className="btn btn-primary w-xs mt-4">Guardar</button>
    </>
  );
}
