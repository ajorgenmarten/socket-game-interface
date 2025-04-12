import { useNavigate } from 'react-router';

export function GameWin() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-yellow-600 via-amber-600 to-orange-600">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
            
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="animate-float absolute w-32 h-32 bg-yellow-500/30 rounded-full blur-xl top-1/4 left-1/4"></div>
                <div className="animate-float-delayed absolute w-40 h-40 bg-amber-500/30 rounded-full blur-xl top-3/4 right-1/4"></div>
                <div className="animate-float-slow absolute w-36 h-36 bg-orange-500/30 rounded-full blur-xl top-1/2 left-1/2"></div>
                
                {/* Victory particles */}
                <div className="animate-confetti-1 absolute w-2 h-2 bg-yellow-300 rounded-full top-0 left-[10%]"></div>
                <div className="animate-confetti-2 absolute w-2 h-2 bg-amber-300 rounded-full top-0 left-[20%]"></div>
                <div className="animate-confetti-3 absolute w-2 h-2 bg-orange-300 rounded-full top-0 left-[30%]"></div>
                <div className="animate-confetti-4 absolute w-2 h-2 bg-yellow-300 rounded-full top-0 left-[40%]"></div>
                <div className="animate-confetti-5 absolute w-2 h-2 bg-amber-300 rounded-full top-0 left-[50%]"></div>
                <div className="animate-confetti-6 absolute w-2 h-2 bg-orange-300 rounded-full top-0 left-[60%]"></div>
                <div className="animate-confetti-7 absolute w-2 h-2 bg-yellow-300 rounded-full top-0 left-[70%]"></div>
                <div className="animate-confetti-8 absolute w-2 h-2 bg-amber-300 rounded-full top-0 left-[80%]"></div>
            </div>

            <div className="relative bg-white/10 backdrop-blur-xl p-12 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] w-[450px] border border-white/20 transform hover:scale-[1.02] transition-all duration-500 ease-out">
                <h2 className="text-6xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent drop-shadow-sm animate-bounce-slow">
                    ¡Victoria!
                </h2>

                <div className="mb-8 text-center">
                    <p className="text-white text-xl mb-4">¡Felicitaciones! Has ganado la partida</p>
                    <div className="w-full h-1 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full my-6"></div>
                </div>

                <button
                    onClick={() => navigate('/')}
                    className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-white py-4 px-8 rounded-xl font-bold text-xl hover:from-yellow-600 hover:to-amber-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    Volver al Inicio
                </button>
            </div>
        </div>
    );
}