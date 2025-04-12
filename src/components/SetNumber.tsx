import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { SetNumber as SetNumberSocket } from '../Test';
import joinMatchBg from '../assets/join-match.jpg';

export function SetNumber() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [number, setNumber] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isValidNumber(number)) {
            alert('El número debe tener 4 dígitos diferentes y no puede comenzar con 0');
            return;
        }
        setIsLoading(true);
        try {
            await SetNumberSocket("", number);
        } finally {
            setIsLoading(false);
        }
    };

    const isValidNumber = (num: string) => {
        if (num.length !== 4) return false;
        if (num[0] === '0') return false;
        const digits = new Set(num.split(''));
        return digits.size === 4;
    };

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 4);
        setNumber(value);
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"
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
                    <span>Volver</span>
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
                        <input
                            type="text"
                            id="number"
                            value={number}
                            onChange={handleNumberChange}
                            required
                            pattern="[0-9]*"
                            inputMode="numeric"
                            className="w-full px-6 py-4 text-2xl font-semibold bg-white/5 border-2 border-white/10 rounded-2xl focus:outline-none focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300 hover:border-white/20 text-white placeholder:text-white/30 tracking-widest text-center"
                            placeholder="1234"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading || !isValidNumber(number)}
                        className={`w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-5 px-8 rounded-2xl font-bold text-xl hover:from-purple-600 hover:to-indigo-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 ${(isLoading || !isValidNumber(number)) ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Configurando...</span>
                            </>
                        ) : 'Establecer Número'}
                    </button>
                </form>
            </div>
        </div>
    );
}