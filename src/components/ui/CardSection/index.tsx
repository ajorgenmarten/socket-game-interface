import { CardCreate } from "./CardCreate";
import { CardJoin } from "./CardJoin";
import { CreateModal } from "./CreateModal";
import { JoinModal } from "./JoinModal";

export function CardSection() {
  return (
    <div className="mx-auto max-w-5xl grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-4 items-center">
      <CardCreate />
      <CardJoin />
      <CreateModal />
      <JoinModal />
    </div>
  );
}
