import createImg from "../../assets/create-match.jpg";
import joinImg from "../../assets/join-match.jpg";
import { ArrowRight } from "../../components/icons/arrow-right";
import { Plus } from "../../components/icons/plus";

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
    <div className="custom-card h-[250px] group border-2 border-primary/50">
      <img src={createImg} alt="Crear partida" className="custom-card-img" />
      <div className="transition duration-500 bg-black/50 h-full w-full backdrop-blur-[.6px] group-hover:backdrop-blur-[2px] group-hover:bg-black/60">
        <div className="flex flex-col items-center justify-between h-full w-full p-6">
          <div>
            <h2 className="card-title mb-4 font-bold"><Plus className="size-4"/> Crear partida</h2>
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
    <div className="custom-card h-[250px] group border-2 border-orange-500/50">
      <img src={joinImg} alt="Crear partida" className="custom-card-img" />
      <div className="transition duration-500 bg-black/50 h-full w-full backdrop-blur-[.6px] group-hover:backdrop-blur-[2px] group-hover:bg-black/60">
        <div className="flex flex-col items-center justify-between h-full w-full p-6">
          <div>
            <h2 className="card-title mb-4 font-bold"><ArrowRight className="size-4" /> Unirse a una partida</h2>
            <span>Dile a ese/a niñ@ rata 🐀 que te mande el código de la partida para que le partas su madre 👡</span>
          </div>
          <button className="btn bg-orange-400 w-2/3">Unirse</button>
        </div>
      </div>
    </div>
  );
}
