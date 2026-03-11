import { Clock } from "lucide-react";
import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";

export default function Task({ id, title, description, time, categorie, check }) {
  const { settask } = useContext(TaskContext);

  function Handlecheck(e) {
    const checked = e.target.checked;
    settask((prev) =>
      prev.map((t) => (t.key === id ? { ...t, check: checked } : t))
    );
    console.log(checked)
  }

  return (
    <div className="flex justify-center">
      <div className="bg-white p-5 rounded-xl shadow-md flex gap-4 w-[80%] justify-between">
        <div>
          <input
            type="checkbox"
            className="w-4 h-4 rounded-full mt-2"
            checked={check}
            onChange={Handlecheck}
          />
          <div className="flex flex-col items-start">
            <p className="font-semibold text-lg">{title}</p>
            <p className="text-gray-500 text-sm">{description}</p>
            <div className="flex items-center gap-3 mt-3">
              <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
                {categorie}
              </span>
              <span className="flex items-center gap-1 text-gray-500 text-sm">
                <Clock size={16} />
                {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
