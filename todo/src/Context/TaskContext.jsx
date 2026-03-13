import { createContext,useState,useEffect } from "react";

export const TaskContext=createContext([]);
export function TaskProvider({children}){
const [task, settask] = useState(() => {
    const savedtask = localStorage.getItem("task");
    if (!savedtask) return [];
    try {
      return JSON.parse(savedtask);
    } catch {
      return [];
    }
  });
    useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);
    return(
        <TaskContext.Provider value={{task,settask}}>
            {children}
        </TaskContext.Provider>
    );
}


