import { Home,CirclePlus,ChartColumn,User} from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react";
export default function Footer({setshow}){
  function Set(){
    setshow(true);
  }
    return<div className="fixed bottom-0 left-0 w-full text-gray-500 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] p-3 flex items-center justify-evenly">
      <Link to="/home" className="flex flex-col items-center"><Home/> <p>Home</p></Link>
      <Link to="/statistics" className="flex flex-col items-center"><ChartColumn/><p>Statistique</p></Link>
      <button onClick={Set} className="flex flex-col items-center"><CirclePlus/><p>Add</p></button>

    </div>
}