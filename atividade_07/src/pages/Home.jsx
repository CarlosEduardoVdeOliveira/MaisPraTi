import { Link } from "react-router-dom";
import { actives } from "../data";
export function Home() {
  return (
    <div className="grid gap-4 grid-cols-3 grid-rows-3 p-8">
      {actives.map((active) => {
        return (
          <Link
            className="text-gray-600 self-center bg-gray-50 border-purple-500 cursor-pointer p-3 border rounded-lg hover:text-purple-500 hover:decoration-solid "
            to={`/${active.route}`}
            key={active.id}
          >
            {active.name}
          </Link>
        );
      })}
    </div>
  );
}
