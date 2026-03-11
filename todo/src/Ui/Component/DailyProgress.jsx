import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";

export default function Daily(){
  const {task}=useContext(TaskContext);
    const checked = task.filter(t => t.check === true);
   const Percentchecked=task.length>0 ?  (checked.length/task.length)*100 : 0;

  return (
    <div className="flex justify-center">
      <div className="w-[80%] bg-white shadow-lg rounded-md border p-4 flex flex-col gap-3">
        <h1 className="font-semibold text-gray-700">
          Daily Progress
        </h1>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="bg-emerald-500 h-3 rounded-full " style={{ width: `${Percentchecked}%` }}></div>
        </div>
      </div>
    </div>
  )
}