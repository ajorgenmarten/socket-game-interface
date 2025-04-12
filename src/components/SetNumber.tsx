import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import joinMatchBg from '../assets/join-match.jpg';
import { SetNumberInput } from './SetNumberInput';
import { useGame } from '../providers/GameProvider';

export function SetNumber() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [isValid, setIsValid] = useState(false)
    const { setNumber } = useGame()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        setNumber(e)
    };

    const handleOnchange = (number: string) => {
        setIsValid(() => number.length == 4)
    }

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-4"
             style={{
                backgroundImage: `url(${joinMatchBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'soft-light'
             }}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
            
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="animate-float absolute w-20 h-20 bg-purple-500/20 rounded-full blur-xl top-1/4 left-1/4"></div>
                <div className="animate-float-delayed absolute w-32 h-32 bg-indigo-500/20 rounded-full blur-xl top-3/4 right-1/4"></div>
                <div className="animate-float-slow absolute w-24 h-24 bg-blue-500/20 rounded-full blur-xl top-1/2 left-1/2"></div>
            </div>

            <div className="relative bg-white/10 backdrop-blur-xl p-12 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] w-[450px] border border-white/20 transform hover:scale-[1.02] transition-all duration-500 ease-out">
                <button
                    onClick={() => navigate('/')}
                    className="group absolute left-6 top-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2.5 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-indigo-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
                >
                    <span className="text-xl transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
                    <span>Salir</span>
                </button>

                <h2 className="mt-12 text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-sm">Número Secreto</h2>
                
                <p className="text-white/80 text-center mb-8">
                    Establece un número secreto de 4 dígitos diferentes.
                    No puede comenzar con 0.
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-4">
                        <label htmlFor="number" className="block text-lg font-medium text-white/90">
                            Tu Número Secreto
                        </label>
                        <SetNumberInput name='number' onChange={handleOnchange} />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading || !isValid}
                        className={`w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-5 px-8 rounded-2xl font-bold text-xl hover:from-purple-600 hover:to-indigo-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 ${(isLoading || !isValid) ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Esperando por rival...</span>
                            </>
                        ) : 'Establecer Número'}
                    </button>
                </form>
            </div>
        </div>
    );
}