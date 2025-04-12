import { useNavigate } from 'react-router';

export function GameLose() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
            
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="animate-float absolute w-32 h-32 bg-slate-500/20 rounded-full blur-xl top-1/4 left-1/4"></div>
                <div className="animate-float-delayed absolute w-40 h-40 bg-gray-500/20 rounded-full blur-xl top-3/4 right-1/4"></div>
                <div className="animate-float-slow absolute w-36 h-36 bg-zinc-500/20 rounded-full blur-xl top-1/2 left-1/2"></div>
            </div>

            <div className="relative bg-white/5 backdrop-blur-xl p-12 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] w-[450px] border border-white/10 transform hover:scale-[1.02] transition-all duration-500 ease-out">
                <h2 className="text-6xl font-bold mb-8 text-center bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent drop-shadow-sm">
                    Derrota
                </h2>

                <div className="mb-8 text-center">
                    <p className="text-white/80 text-xl mb-4">¡Mejor suerte la próxima vez!</p>
                    <div className="w-full h-0.5 bg-gradient-to-r from-slate-600 to-gray-600 rounded-full my-6 opacity-30"></div>
                </div>

                <button
                    onClick={() => navigate('/')}
                    className="w-full bg-white/5 hover:bg-white/10 text-white py-4 px-8 rounded-xl font-bold text-xl transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/10 hover:border-white/20"
                >
                    Volver al Inicio
                </button>
            </div>
        </div>
    );
}