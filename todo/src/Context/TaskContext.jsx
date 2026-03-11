import { createContext,useState } from "react";

export const TaskContext=createContext([]);
export function TaskProvider({children}){
    const [task,settask]=useState([]);
    return(
        <TaskContext.Provider value={{task,settask}}>
            {children}
        </TaskContext.Provider>
    );
}


