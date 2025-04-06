import { Plus } from "../../components/icons/plus";
import { useGame } from "../../providers/game";

export function MatchNotes() {
  const { matchNotes } = useGame();
  return (
    <div className="p-4 min-h-full max-w-full w-md bg-base-200">
      <div className="flex items-center justify-between">
        <h2>Consume ahí 📑</h2>
        <label htmlFor="game-drawer">
          <Plus className="size-5 transform rotate-45" />
        </label>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Ok</th>
            </tr>
          </thead>
          <tbody>
            {matchNotes.map(([value, asserts], ind) => (
              <tr key={`note-index-${ind}`}>
                <th>
                  <PaintNumber value={value} />
                </th>
                <th>{asserts}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PaintNumber(props: PaintNumberProps) {
  const values = props.value.split("");
  return (
    <div className="grid grid-cols-4 gap-1">
      {values.map((v, i) => (
        <div
          key={`ci-${i}`}
          className="aspect-square bg-base-100 text-lg flex items-center justify-center border border-white/5 rounded-2xl"
        >
          {v}
        </div>
      ))}
    </div>
  );
}

interface PaintNumberProps {
  value: string;
}
