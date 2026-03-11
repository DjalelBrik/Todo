import { CheckCircle } from "lucide-react"

export default function Boxes({icon,title,number,color}){
  return <>
    <div className={`${color} h-24 w-[25%]  text-white rounded-xl p-4 shadow-md flex justify-between items-center  `}>
      <div className="flex flex-col gap-1">
        {icon}
        <p className="text-sm">{title}</p>
      </div>
      <h1 className="text-2xl font-bold">{number}</h1>
    </div>
  </>
}