import { useState, useEffect } from 'react';

interface WaitingRoomProps {
    code: string;
    onCancel: () => void;
}

export function WaitingRoom({ code, onCancel }: WaitingRoomProps) {
    const [dots, setDots] = useState('.');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => prev.length >= 3 ? '.' : prev + '.');
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
            
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="animate-float absolute w-20 h-20 bg-emerald-500/20 rounded-full blur-xl top-1/4 left-1/4"></div>
                <div className="animate-float-delayed absolute w-32 h-32 bg-teal-500/20 rounded-full blur-xl top-3/4 right-1/4"></div>
                <div className="animate-float-slow absolute w-24 h-24 bg-cyan-500/20 rounded-full blur-xl top-1/2 left-1/2"></div>
            </div>

            <div className="relative bg-white/10 backdrop-blur-xl p-12 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] w-[450px] border border-white/20">
                <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent drop-shadow-sm">
                    Esperando Oponente{dots}
                </h2>

                <div className="mb-8 text-center">
                    <p className="text-white/80 mb-4">Código de la partida:</p>
                    <div className="bg-white/5 py-4 px-6 rounded-xl border border-white/10 mb-2">
                        <span className="text-3xl font-mono font-bold text-emerald-400">{code}</span>
                    </div>
                    <p className="text-white/60 text-sm">Comparte este código con tu oponente</p>
                </div>

                <div className="flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 animate-spin-slow">
                            <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-emerald-500/30"></div>
                        </div>
                        <div className="absolute inset-0 animate-spin-slow-reverse">
                            <div className="h-16 w-16 rounded-full border-l-4 border-r-4 border-teal-500/30"></div>
                        </div>
                        <div className="h-16 w-16 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm"></div>
                    </div>
                </div>

                <button
                    onClick={onCancel}
                    className="mt-8 w-full bg-white/10 hover:bg-white/15 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 border border-white/10 hover:border-white/20"
                >
                    Cancelar Espera
                </button>
            </div>
        </div>
    );
}