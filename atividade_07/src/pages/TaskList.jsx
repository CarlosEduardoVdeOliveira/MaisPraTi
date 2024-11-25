import { useState } from "react";
import { Button } from "../components/Button";
import { List } from "../components/List";
import { Trash } from "lucide-react";

export function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const createTask = () => {
    setTasks([...tasks, { description: newTask, id: Date.now() }]);
  };
  const changeTask = (event) => {
    setNewTask(event.target.value);
  };
  console.log(tasks);
  const deleteTask = (id) => {
    /* tasks.splice(id, 1); */
    console.log(id.indexOf());
  };
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">TO-DO | List</h2>
      <div>
        <input
          value={newTask}
          className="text-gray-50 py-2 px-3 rounded-md outline-none border border-blue-200 mr-3 bg-gray-500"
          onChange={(event) => changeTask(event)}
          type="text"
        />
        <Button onClick={createTask}>Adicionar tarefa</Button>
        <ul className="mt-6">
          {tasks.map((task) => {
            return (
              <List key={task.id}>
                <span className="text-[18px]">{task.description}</span>
                <button
                  className="text-red-500 "
                  onClick={() => deleteTask(task.id)}
                >
                  <Trash size={"18px"} />
                </button>
              </List>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
