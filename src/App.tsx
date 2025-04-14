import { Link } from "react-router";

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      {/* Fondo con efecto de desenfoque */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
      
      {/* Partículas animadas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-float absolute w-32 h-32 bg-purple-500/20 rounded-full blur-xl top-1/4 left-1/4"></div>
        <div className="animate-float-delayed absolute w-40 h-40 bg-pink-500/20 rounded-full blur-xl top-3/4 right-1/4"></div>
        <div className="animate-float-slow absolute w-36 h-36 bg-indigo-500/20 rounded-full blur-xl top-1/2 left-1/2"></div>
      </div>

      {/* Banner de bienvenida */}
      <div className="relative py-20 mb-8">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-gradient animate-pulse drop-shadow-lg">¡Bienvenido al Juego!</span>
          </h1>
          <p className="text-gray-100 text-xl md:text-2xl max-w-2xl mx-auto font-medium">Prepárate para una experiencia única de juego multijugador</p>
        </div>
      </div>

      {/* Contenedor de tarjetas */}
      <div className="relative flex-grow flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
          <Link
            to="/create"
            className="group relative overflow-hidden rounded-3xl hover:scale-105 transition-all duration-500 hover:shadow-2xl shadow-lg transform hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm group-hover:bg-black/30 transition-all duration-300"></div>
            <img
              src="/create.jpg"
              alt="Crear partida"
              className="w-full h-80 object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 group-hover:backdrop-blur-xl transition duration-300">
              <h2 className="text-white text-4xl font-bold text-center mb-4 drop-shadow-lg bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text group-hover:text-transparent">
                Crear Partida
              </h2>
              <p className="text-gray-200 text-center text-lg mb-6 max-w-md">
                Genera un nuevo código de juego y compártelo con tu oponente para comenzar una partida emocionante
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
          </Link>

          <Link
            to="/join"
            className="group relative overflow-hidden rounded-3xl hover:scale-105 transition-all duration-500 hover:shadow-2xl shadow-lg transform hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 to-teal-600/30 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm group-hover:bg-black/30 transition-all duration-300"></div>
            <img
              src="/join.jpg"
              alt="Unirse a partida"
              className="w-full h-80 object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 group-hover:backdrop-blur-xl transition duration-300">
              <h2 className="text-white text-4xl font-bold text-center mb-4 drop-shadow-lg bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text group-hover:text-transparent">
                Unirse a Partida
              </h2>
              <p className="text-gray-200 text-center text-lg mb-6 max-w-md">
                Ingresa el código de juego proporcionado por tu amigo para unirte a una partida existente
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
