import {Briefcase, User, Heart, ShoppingCart, MoreHorizontal } from "lucide-react"
import { useContext, useRef,useState } from "react"
import { TaskContext } from "../../Context/TaskContext";

export default function Add({setshow}){
  const {task,settask}=useContext(TaskContext);
  const tasktitle=useRef("");
  const taskdescription=useRef("");
  const tasktime=useRef("");
  const [categorie,setcategorie]=useState("");
 
  function HandleAdd(){
   const add={
    key:Date.now(),
    title:tasktitle.current.value,
    desc:taskdescription.current.value,
    time:tasktime.current.value,
    categorie: categorie,
    check:false
   };
    settask((prev) => [...prev, add]);
    tasktime.current.value="";
    tasktitle.current.value="";
    taskdescription.current.value="";
    setcategorie("");
    setshow(false);
  }

  function Set(){
    setshow(false);
  }
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-[500px] rounded-2xl shadow-xl p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Add New Task</h1>
        </div>
        <p className="text-gray-500 text-sm mt-1">
          Create a new task for Mar 5, 2026
        </p>
        <div className="mt-5">
          <label className="font-medium">Task Title</label>
          <input
            type="text"
            placeholder="e.g., Finish project report..."
            className="w-full mt-2 p-3 bg-gray-100 rounded-lg outline-none"
            ref={tasktitle}
          />
        </div>
        <div className="mt-4">
          <label className="font-medium">Description (Optional)</label>
          <input
            type="text"
            placeholder="Add more details..."
            className="w-full mt-2 p-3 bg-gray-100 rounded-lg outline-none"
            ref={taskdescription}
          />
        </div>
        <div className="mt-4">
          <label className="font-medium">Time (Optional)</label>
          <input
            type="time"
            className="w-full mt-2 p-3 bg-gray-100 rounded-lg outline-none"
            ref={tasktime}
          />
        </div>
        <div className="mt-5">
          <p className="font-medium mb-3">Category</p>
          <div className="grid grid-cols-5 gap-3">
            <button 
              onClick={()=>setcategorie("Work")}
            className={`border rounded-xl p-3 flex flex-col items-center
             ${categorie === "Work" ? " border-green-500" : "bg-white"}`}>
              <Briefcase size={20}/>
              Work
            </button>
            <button
            onClick={()=>setcategorie("Personal")}
            className={`border rounded-xl p-3 flex flex-col items-center
             ${categorie === "Personal" ? " border-green-500" : "bg-white"}`}>
              <User size={20}/>
              Personal
            </button>
            <button 
              onClick={()=>setcategorie("Health")}
            className={`border rounded-xl p-3 flex flex-col items-center
             ${categorie === "Health" ? " border-green-500" : "bg-white"}`}>
              <Heart size={20}/>
              Health
            </button>
            <button
             onClick={()=>setcategorie("Shopping")}
            className={`border rounded-xl p-3 flex flex-col items-center
             ${categorie === "Shopping" ? " border-green-500" : "bg-white"}`}>
              <ShoppingCart size={20}/>
              Shopping
            </button>
            <button
              onClick={()=>setcategorie("Other")}
            className={`border rounded-xl p-3 flex flex-col items-center
             ${categorie === "Other" ? " border-green-500" : "bg-white"}`}>
              <MoreHorizontal size={20}/>
              Other
            </button>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button onClick={Set} className="px-4 py-2 rounded-lg border">
            Cancel
          </button>
          <button className="px-4 py-2 rounded-lg bg-green-500 text-white" onClick={HandleAdd}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  )
}