import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "../components/Button";
import { List } from "../components/List";
import { Check, Trash } from "lucide-react";
import { Input } from "../components/Input";
import { Container } from "../components/Container";

export function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const showErrorToast = (msg) => {
    toast.error(msg);
  };

  const showSuccessToast = (msg) => {
    toast.success(msg);
  };

  const createTask = () => {
    if (newTask.trim() === "") {
      showErrorToast("Preencha a tarefa!");
      return;
    }
    setTasks((prevTasks) => [
      ...prevTasks,
      { description: newTask.trim(), id: Date.now(), completed: false },
    ]);
    showSuccessToast("Tarefa criada com sucesso!");
    setNewTask("");
  };

  const changeTask = (event) => {
    setNewTask(event.target.value);
  };

  const changeCompleted = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    showErrorToast("Tarefa excluída!");
  };

  return (
    <Container>
      <h2 className="text-2xl font-bold text-center mb-6">TO-DO | List</h2>
      <div className="flex flex-col">
        <div className="flex w-full">
          <Input
            value={newTask}
            className="text-gray-50 py-2 px-3 rounded-md outline-none border border-blue-200 mr-3 bg-gray-500"
            onChange={(event) => changeTask(event)}
            placeholder="Digite sua tarefa."
            type="text"
          />
          <Button onClick={createTask}>Adicionar</Button>
        </div>
        <ul className="mt-6">
          {tasks.map((task) => (
            <List key={task.id}>
              {task.completed ? (
                <span className="text-[18px] text-green-600 line-through">
                  {task.description}
                </span>
              ) : (
                <span className="text-[18px]">{task.description}</span>
              )}
              <div className="flex gap-3">
                <button
                  className="text-red-500 "
                  onClick={() => deleteTask(task.id)}
                >
                  <Trash size={"18px"} />
                </button>
                <button
                  className="text-green-600"
                  onClick={() => changeCompleted(task.id)}
                >
                  <Check size={"18px"} />
                </button>
              </div>
            </List>
          ))}
        </ul>
        <ToastContainer />
      </div>
    </Container>
  );
}
