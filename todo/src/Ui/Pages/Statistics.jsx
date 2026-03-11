import Header from "../Component/Header"
import Boxes from "../Component/Boxes"
import Categorie from "../Component/TaskCategorie"
import Footer from "../Component/Footer"
import { CircleCheck,Circle, List } from "lucide-react"
import { useContext, useState } from "react"
import { TaskContext } from "../../Context/TaskContext"
import Add from "../Component/Add"
export default function Statistics(){
  const {task,settask}=useContext(TaskContext);
  const [showadd,setshow]=useState(false);
  const checked = task.filter(t => t.check === true);
    const notchecked = task.filter(t => t.check === false);
  const Percentchecked=task.length>0 ?  (checked.length/task.length)*100 : 0;
  return (
    <div className=" flex flex-col ">
      <div className="flex justify-center">
        <Header title="Statistic" description="Track your productivity" />
      </div>
      <div className="flex flex-col items-center p-4 ">
        <div className="w-[80%] shadow-sm p-4 flex flex-col gap-2">
          <div>
            <h1 className="text-2xl font-bold">Statistics</h1>
            <p className="text-gray-500 text-sm">
              Your productivity overview
            </p>
          </div>
         <div className="flex gap-5 justify-between">
            <Boxes title="Total of Tasks" number={task.length} icon={<List size={24}/>} color="bg-gradient-to-br from-orange-500 to-orange-700"/>
            <Boxes title="Completion rate" number={Percentchecked+"%"}  icon={<CircleCheck size={24} />} color="bg-gradient-to-br from-purple-500 to-purple-700" />
            <Boxes title="Completed Tasks" number={checked.length} icon={<CircleCheck size={24}/>} color="bg-gradient-to-br from-green-500 to-green-700" />
            <Boxes title="Pending Task" number={notchecked.length} icon={<Circle size={24}/>} color="bg-gradient-to-br from-blue-500 to-blue-700"/>
            </div>
         </div>
     </div>

         <div className="pb-32"><Categorie /></div>
      <Footer setshow={setshow} />
      {showadd && <Add setshow={setshow}/>}
    </div>
  )
}