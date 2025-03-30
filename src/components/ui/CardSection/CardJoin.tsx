import { ArrowRight } from "../../icons/arrow-right";
import { Button } from "../Button";
import { Card } from "./Card";

export function CardJoin() {
  return (
    <Card
      icon={ArrowRight}
      title="Unirse a partida"
      subtitle="Utiliza el codigo de una partida generado por tu amigo para unirte y
            machacarlo como ajo"
    >
      <Button as="label" htmlFor="join-match-modal" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-none shadow-lg shadow-blue-700/30 group-hover:shadow-blue-700/50 transition-all duration-300 text-white font-semibold" >
        Unirse a la partida
      </Button>
    </Card>
  );
}
