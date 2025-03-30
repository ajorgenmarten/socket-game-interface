import { Plus } from "../../icons/plus";
import { Button } from "../Button";
import { Card } from "./Card";

export function CardCreate() {
  return (
    <Card
      icon={Plus}
      title="Crear partida"
      subtitle="Crea una nueva partida y comparte el código con un amigo para empezar a jugar, y que gane el más afortunado"
    >
      <Button
        as="label"
        htmlFor="create-match-modal"
        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border-none shadow-lg shadow-purple-700/30 group-hover:shadow-purple-700/50 transition-all duration-300 text-white font-semibold"
      >
        Crear la partida
      </Button>
    </Card>
  );
}
