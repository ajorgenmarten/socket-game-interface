import createImg from "../../assets/create-match.jpg";
import joinImg from "../../assets/join-match.jpg";

export function SectionCards() {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-24 px-1">
      <CreateGameCard />
      <JoinGameCard />
    </div>
  );
}

export function CreateGameCard() {
  return (
    <div className="custom-card h-[250px] group">
      <img src={createImg} alt="Crear partida" className="custom-card-img" />
      <div className="custom-card-overlay group-hover:backdrop-blur-[2px] group-hover:bg-black/70">
        <div className="flex flex-col items-center justify-between h-full w-full p-6">
          <div>
            <h2 className="card-title mb-4 font-bold">Crear partida</h2>
            <span>Crea una partida y comparte el código con ese/a amig@ que quiere que le partas las nalguitas 🍑 sin piedad.</span>
          </div>
          <button className="btn btn-primary w-2/3">Crear partida</button>
        </div>
      </div>
    </div>
  );
}

export function JoinGameCard() {
  return (
    <div className="custom-card h-[250px] group">
      <img src={joinImg} alt="Crear partida" className="custom-card-img" />
      <div className="custom-card-overlay group-hover:backdrop-blur-[2px] group-hover:bg-black/70">
        <div className="flex flex-col items-center justify-between h-full w-full p-6">
          <div>
            <h2 className="card-title mb-4 font-bold">Unirse a una partida</h2>
            <span>Dile a ese/a niñ@ rata 🐀 que te mande el código de la partida para que le partas su madre 👡</span>
          </div>
          <button className="btn bg-orange-400 w-2/3">Unirse</button>
        </div>
      </div>
    </div>
  );
}
