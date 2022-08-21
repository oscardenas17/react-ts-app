import { useState } from "react";

import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { Task } from "./interfaces/Task";

interface Props {
  title?: string;
}

function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React With TS",
      completed: false,
    },
  ]);

  const getCurrentTime=():number=> new Date().getTime();
  

  const newAddTask = (task: Task) => {  setTasks([...tasks, {...task, id:getCurrentTime(), completed: false}   ]);}

  const deleteTask = (id: number) => setTasks( tasks.filter(task => task.id !== id))

  return (
    <div style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary ">
        <div className="container">
          {title && <h1>{title}</h1>}
          <a href="/">
            <img
              src="https://avatars.githubusercontent.com/u/53705171?v=4"
              alt="logo"
              style={{ width: "4rem" }}
            />
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4"><TaskForm newAddTask={newAddTask}/></div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask} ></TaskList>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
