import { useContext } from "react"
import { TaskContext } from "../../Context/TaskContext"

export default function Categorie(){
  const {task}=useContext(TaskContext);
  const Work=task.filter(t=> t.categorie.includes("Work"));
  const PercentWork=task.length>0 ?  (Work.length/task.length)*100 : 0;
  const Personal=task.filter(t=> t.categorie.includes("Personal"));
  const PercentPersonal=task.length>0 ?  (Personal.length/task.length)*100 : 0;  
  const Health=task.filter(t=> t.categorie.includes("Health"));
  const PercentHealth=task.length>0 ?  (Health.length/task.length)*100 : 0;
  const Shopping=task.filter(t=> t.categorie.includes("Shopping"));
  const PercentShopping=task.length>0 ?  (Shopping.length/task.length)*100 : 0;
  return (
    <div className="flex justify-center">
      <div className="w-[80%] bg-white shadow-lg rounded-md border p-4 flex flex-col gap-3">
        <h1 className="font-semibold text-gray-700">
          Task by Categorie 
        </h1>
         <h1 className="font-semibold text-gray-700">
          Work 
        </h1>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="bg-emerald-500 h-3 rounded-full"   style={{ width: `${PercentWork}%` }}></div>
        </div>
         <h1 className="font-semibold text-gray-700">
          Personal 
        </h1>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="bg-purple-500 h-3 rounded-full" style={{ width: `${PercentPersonal}%` }}></div>
        </div>
         <h1 className="font-semibold text-gray-700">
            Health
        </h1>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="bg-blue-200 h-3 rounded-full " style={{ width: `${PercentHealth}%` }}></div>
        </div>
         <h1 className="font-semibold text-gray-700">
          Shopping 
        </h1>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="bg-red-500 h-3 rounded-full" style={{ width: `${PercentShopping}%` }}></div>
        </div>
      </div>
    </div>
  )
}