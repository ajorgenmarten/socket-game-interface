import { FormEvent } from "react";
import { useGame } from "../providers/GameProvider";
import { SetNumberInput } from "./SetNumberInput";

export function Game() {
    const { testNumber, notes, rivalNotes, isMyTurn, gameCode } = useGame();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        testNumber(e);
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
            
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="animate-float absolute w-32 h-32 bg-blue-500/30 rounded-full blur-xl top-1/4 left-1/4"></div>
                <div className="animate-float-delayed absolute w-40 h-40 bg-indigo-500/30 rounded-full blur-xl top-3/4 right-1/4"></div>
                <div className="animate-float-slow absolute w-36 h-36 bg-purple-500/30 rounded-full blur-xl top-1/2 left-1/2"></div>
            </div>

            <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] w-[90%] max-w-[600px] border border-white/20 transform hover:scale-[1.01] transition-all duration-500 ease-out">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">Código de Partida: {gameCode}</h2>
                    <p className="text-white/80 text-lg">
                        { isMyTurn && <span className="font-bold animate-pulse text-emerald-500">Es tu turno</span>}
                        { !isMyTurn && <span className="font-bold animate-pulse text-rose-500">Turno del rival</span>}
                    </p>
                </div>

                <form onSubmit={onSubmit} className="mb-8">
                    <div className="mb-4">
                        <SetNumberInput name="number"/>
                    </div>
                    <button
                        type="submit"
                        disabled={!isMyTurn}
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-indigo-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Adivinar
                    </button>
                </form>

                <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4">
                    <div className="bg-white/5 p-4 rounded-xl">
                        <h3 className="text-xl font-bold text-white mb-3">Tus Intentos</h3>
                        <div className="space-y-2">
                            {notes.map((note, index) => <DrawAttempts key={index} number={note[0]} asserts={note[1]} />)}
                        </div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl">
                        <h3 className="text-xl font-bold text-white mb-3">Intentos Rival</h3>
                        <div className="space-y-2">
                            {rivalNotes.map((note, index) => <DrawAttempts key={index} number={note[0]} asserts={note[1]} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DrawAttempts(props: DrawAttemptsProps) {
    const numbersArray = props.number.split('')
    const assertEmoji = props.asserts == 0 ? '❌' : '✅'
    const sqareClass: HTMLDivElement['className'] = "size-6 flex items-center justify-center border border-white/20 rounded-md"
    return <div className="bg-white/10 p-2 rounded-md flex justify-between items-center">
        <span className="text-white font-medium flex gap-1 items-center">
            {numbersArray.map((number, index) => <div key={index} className={sqareClass}>{number}</div>)}
        </span>
        <span className="text-emerald-500 font-bold">{props.asserts}{assertEmoji}</span>
    </div>
}

interface DrawAttemptsProps {
    asserts: number;
    number: string;
}