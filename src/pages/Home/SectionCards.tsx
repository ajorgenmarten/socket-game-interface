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
    <div className="card bg-base-100 image-full shadow-sm">
      <figure>
        <img src={createImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Crear partida</h2>
        <p>
          Crea una partida y comparte el código con ese amigo que quiere que le
          partas el culito 🍑 sin piedad
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary uppercase w-60 max-w-full">
            crear
          </button>
        </div>
      </div>
    </div>
  );
}

export function JoinGameCard() {
  return (
    <div className="card bg-base-100 image-full shadow-sm">
      <figure>
        <img src={joinImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-center">
          <button className="btn bg-orange-800 uppercase w-60 max-w-full">
            crear
          </button>
        </div>
      </div>
    </div>
  );
}
