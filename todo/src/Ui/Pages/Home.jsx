import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Task from "../Component/Task";
import Daily from "../Component/DailyProgress";
import { TaskContext } from "../../Context/TaskContext";
import { useContext, useState } from "react";
import Add from "../Component/Add";

export default function Home() {
  const [showadd, setshow] = useState(false);

  const { task } = useContext(TaskContext);
  
  return (
    <div className="flex flex-col bg-gray-50">
      <div className="flex justify-center">
        <Header title="My Tasks" description="Mar 5, 2026 - 5 tasks" />
      </div>

      <div className="flex-1 flex flex-col gap-4 p-4 pb-40">
        <Daily />
        {task.map((t) => (
          <Task
            key={t.key}
            id={t.key}
            check={t.check}
            title={t.title}
            description={t.desc}
            time={t.time}
            categorie={t.categorie}
          />
        ))}
      </div>

      <Footer setshow={setshow} />
      {showadd && <Add setshow={setshow} />}
    </div>

  );
}
