import { Home,CirclePlus,ChartColumn,User} from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import { useState } from "react";
export default function Footer({setshow}){
  function Set(){
    setshow(true);
  }
    return<div className="fixed bottom-0 left-0 w-full text-gray-500 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] p-3 flex items-center justify-evenly">
      <NavLink to="/home"  className={({ isActive }) =>`flex flex-col items-center hover:text-green-600 ${ isActive ? "text-green-600" : "text-gray-400"}`}><Home/> <p>Home</p></NavLink>
      <NavLink to="/statistics" className={({ isActive }) =>`flex flex-col items-center hover:text-green-600 ${ isActive ? "text-green-600" : "text-gray-400"}`}><ChartColumn/><p>Statistique</p></NavLink>
      <button onClick={Set} className="flex flex-col items-center hover:text-green-600"><CirclePlus/><p>Add</p></button>

    </div>
}