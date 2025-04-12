import { FormEvent, useState } from 'react';
import { CreateGame as CreateGameSocket } from '../Test';
import createMatchBg from '../assets/create-match.jpg';
import { useNavigate } from 'react-router';

export function CreateGame() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [code, setCode] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await CreateGameSocket(code);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
             style={{
                backgroundImage: `url(${createMatchBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'soft-light'
             }}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
            
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="animate-float absolute w-20 h-20 bg-purple-500/20 rounded-full blur-xl top-1/4 left-1/4"></div>
                <div className="animate-float-delayed absolute w-32 h-32 bg-pink-500/20 rounded-full blur-xl top-3/4 right-1/4"></div>
                <div className="animate-float-slow absolute w-24 h-24 bg-indigo-500/20 rounded-full blur-xl top-1/2 left-1/2"></div>
            </div>

            <div className="relative bg-white/10 backdrop-blur-xl p-12 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] w-[450px] border border-white/20 transform hover:scale-[1.02] transition-all duration-500 ease-out">
                <button
                    onClick={() => navigate('/')}
                    className="group absolute left-6 top-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2.5 px-6 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
                >
                    <span className="text-xl transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
                    <span>Volver</span>
                </button>

                <h2 className="mt-12 text-5xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent drop-shadow-sm">Crear Partida</h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-4">
                        <label htmlFor="code" className="block text-lg font-medium text-white/90">
                            Código de Partida
                        </label>
                        <input
                            type="text"
                            id="code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            required
                            className="w-full px-6 py-4 text-2xl font-semibold bg-white/5 border-2 border-white/10 rounded-2xl focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 hover:border-white/20 text-white placeholder:text-white/30"
                            placeholder="Ingresa un código único"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-5 px-8 rounded-2xl font-bold text-xl hover:from-indigo-600 hover:to-purple-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Creando...</span>
                            </>
                        ) : 'Crear Partida'}
                    </button>
                </form>
            </div>
        </div>
    );
}