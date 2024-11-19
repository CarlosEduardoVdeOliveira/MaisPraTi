import { toastMessage } from "./toast.js";
const btnAdd = document.getElementById("btn-register-task");
const inputTask = document.querySelector("input#task");
const todoList = document.getElementById("todo");
const tasks = [];

const clearInput = () => (inputTask.value = "");

const getNewTaskId = () => {
  const lastId = parseInt(localStorage.getItem("lastId") || "0", 10);
  localStorage.setItem("lastId", lastId + 1);
  return lastId + 1;
};

const createNewTask = () => {
  let status = "progress";
  let id = getNewTaskId();
  if (inputTask.value === "") {
    toastMessage("Preencha o campo de tarefa.", "#d93025");
    return;
  }
  tasks.push(
    localStorage.setItem("id", id.toString()),
    localStorage.setItem(
      id,
      JSON.stringify({ task: inputTask.value, id, status })
    )
  );
  toastMessage("Tarefa salva com sucesso!", "#20bd42");
  listTasks(loadTasks());
  clearInput();
};
btnAdd.addEventListener("click", createNewTask);

const loadTasks = () => {
  const tasks = [];
  const id = localStorage.getItem("id");
  for (let i = 0; i <= id; i++) {
    try {
      let task = JSON.parse(localStorage.getItem(i));
      if (task !== null) {
        tasks.push(task);
      }
    } catch (error) {
      toastMessage(
        `Erro ao carregar a tarefa ${id} error: ${error}`,
        "#d93025"
      );
    }
  }
  return tasks;
};

const listTasks = (tasks) => {
  todoList.innerHTML = "";
  if (tasks.length === 0) {
    todoList.innerHTML = "<p>Não há tarefas no momento.</p>";
    return;
  }
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.classList.add("card-item");
    li.setAttribute("draggable", true);

    if (task.status === "completed") {
      li.classList.add("completed");
    }

    li.innerHTML = `
      <span>${task.task}</span>
      <div class="settings">
        <button class="edit" data-id="${task.id}"><i class="fa-solid fa-pen"></i></button>
        <button class="delete" data-id="${task.id}">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
    const span = li.querySelector("span");
    span.addEventListener("click", () => toggleTaskStatus(task.id));
    todoList.appendChild(li);
  });

  document.querySelectorAll(".edit").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const id = event.target.closest(".edit").dataset.id;
      const taskData = JSON.parse(localStorage.getItem(id));

      if (taskData) {
        inputEdit.value = taskData.task;
        containerModalEdit.dataset.taskId = id;
        openCloseModal(containerModalEdit, "flex", "hidden");
      } else {
        toastMessage("Tarefa não encontrada.", "#d93025");
      }
    });
  });

  document.querySelectorAll(".delete").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const id = event.target.closest(".delete").dataset.id;
      localStorage.removeItem(id);

      listTasks(loadTasks());
    });
  });
};

const toggleTaskStatus = (id) => {
  const taskData = JSON.parse(localStorage.getItem(id));

  if (taskData) {
    taskData.status = taskData.status === "progress" ? "completed" : "progress";
    localStorage.setItem(id, JSON.stringify(taskData));
    listTasks(loadTasks());
  }
};

const style = document.createElement("style");
style.innerHTML = `
  .completed {
    color: #20bd42;
    text-decoration: line-through;
  }
`;
document.head.appendChild(style);

const tasksLocalStorage = loadTasks();
listTasks(tasksLocalStorage);

const containerModalEdit = document.querySelector(".container-modal-edit");
const btnModalCloseEdit = document.querySelector(".btn-modal-close");
const btnModalCancel = document.querySelector(".btn-modal-cancel");

const openCloseModal = (modal, display, overflow) => {
  modal.style.display = display; /* "flex" || none */
  document.body.style.overflow = overflow; /* "hidden" || "visible" */
};

btnModalCloseEdit.addEventListener("click", () =>
  openCloseModal(containerModalEdit, "none", "hidden")
);
btnModalCancel.addEventListener("click", () =>
  openCloseModal(containerModalEdit, "none", "hidden")
);

const inputEdit = document.getElementById("input-edit");
const btnSaveEdit = document.getElementById("btn-save-edit");

btnSaveEdit.addEventListener("click", () => {
  const idToEdit = containerModalEdit.dataset.taskId;
  const updatedTask = inputEdit.value.trim();

  if (updatedTask === "") {
    toastMessage("O campo não pode estar vazio.", "#d93025");
    return;
  }

  const taskData = JSON.parse(localStorage.getItem(idToEdit));
  taskData.task = updatedTask;
  localStorage.setItem(idToEdit, JSON.stringify(taskData));

  toastMessage("Tarefa atualizada com sucesso!", "#20bd42");
  listTasks(loadTasks());
  openCloseModal(containerModalEdit, "none", "hidden");
});
