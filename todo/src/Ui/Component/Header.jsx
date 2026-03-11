export default function Header({title,description}){
    return<div className="bg-gradient-to-r from-emerald-500 to-emerald-600 w-[90%] top-0 left-[5%] p-6 md:px-8 pt-8 pb-6 md:rounded-b-3xl shadow-lg flex  justify-between items-center">
      <div className="text-white font-sans">
       <p className="font-bold text-3xl">{title}</p> 
       <p>{description}</p>
      </div>
    </div>
}