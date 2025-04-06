import { useState } from "react";

export function SetSecretNumber() {
  return (
    <div className="min-h-screen pt-8">
      <div className="flex flex-col justify-center items-center p-4 py-8 max-w-full w-sm mx-auto rounded-lg bg-base-200 border-2 border-primary/50">
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
  const [focused, setFocused] = useState(false);
  const nArray = number.split("");
  const length = nArray.length;
  const canStart = length == 4;
  const validateNumber = (n: string) => {
    if (n.length > 4) return false;
    if (n.startsWith("0")) return false;
    if (new Set(n).size != n.length) return false;
    return /^[0-9]*$/.test(n);
  };
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (!validateNumber(e.target.value)) e.preventDefault();
    else setNumber(e.target.value);
  };

  return (
    <>
      <label
        htmlFor="number"
        className="grid grid-cols-4 gap-1 mx-auto max-w-full w-xs"
      >
        <input
          id="number"
          type="text"
          value={number}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className="opacity-0 absolute"
        />
        <div className="w-full aspect-square rounded-md border-2 border-primary/70 bg-white/5 text-5xl font-bold flex items-center justify-center">
          {nArray[0] && nArray[0]}{" "}
          {(length == 0 && focused) && (
            <div className="h-[70%] w-[3px] animate-pulse bg-white"></div>
          )}
        </div>
        <div className="w-full aspect-square rounded-md border-2 border-primary/70 bg-white/5 text-5xl font-bold flex items-center justify-center">
          {nArray[1] && nArray[1]}{" "}
          {(length == 1 && focused) && (
            <div className="h-[70%] w-[3px] animate-pulse bg-white"></div>
          )}
        </div>
        <div className="w-full aspect-square rounded-md border-2 border-primary/70 bg-white/5 text-5xl font-bold flex items-center justify-center">
          {nArray[2] && nArray[2]}{" "}
          {(length == 2 && focused) && (
            <div className="h-[70%] w-[3px] animate-pulse bg-white"></div>
          )}
        </div>
        <div className="w-full aspect-square rounded-md border-2 border-primary/70 bg-white/5 text-5xl font-bold flex items-center justify-center">
          {nArray[3] && nArray[3]}{" "}
          {(length == 3 && focused) && (
            <div className="h-[70%] w-[3px] animate-pulse bg-white"></div>
          )}
        </div>
      </label>
      <button disabled={!canStart} className="btn btn-primary w-xs mt-4">Guardar</button>
    </>
  );
}
