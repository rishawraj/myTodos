import { createProject, createTask } from "./modules/create";
import {
  getProjects,
  saveProject,
  clearLocal,
  removeProject,
  saveTask,
  getTasks,
  removeTask,
} from "./modules/saveLocal";
import { checkBox } from "./modules/checkBox";

//* ====== add project button toggle ===========

const addProject = document.querySelector(".add-project");
const inputProject = document.querySelector(".input-project");
const cancelProject = document.querySelector(".cancel-proj");

addProject.addEventListener("click", () => {
  inputProject.style.display = "block";
  addProject.style.display = "none";
});

cancelProject.addEventListener("click", () => {
  inputProject.style.display = "none";
  addProject.style.display = "block";
});

//* =============== add projects ======================

const projectList = document.querySelector(".project-list");
const projectInput = document.querySelector("#project-input-text");
const addProj = document.querySelector(".add-proj");

addProj.addEventListener("click", () => {
  if (projectInput.value == "") return;
  saveProject(projectInput.value);
  projectInput.value = "";
  renderProjects();
});

function renderProjects() {
  let projects = getProjects();
  projectList.innerHTML = "";
  projects.forEach((element) => {
    projectList.appendChild(createProject(element));
  });
}

// ===================== delete-project===============================
projectList.addEventListener("click", (e) => {
  if (e.target.classList[0] == "delete-project") {
    let textValue = e.target.parentElement.textContent.replace(/delete/g, "");
    removeProject(textValue);
    renderProjects();
  }
});

//================= add task button toggle =====================
const addTaskButton = document.querySelector(".add-task-button");
const inputTask = document.querySelector(".input-task");
const cancelTask = document.querySelector(".cancel-task");

addTaskButton.addEventListener("click", () => {
  inputTask.style.display = "block";
  addTaskButton.style.display = "none";
});

cancelTask.addEventListener("click", () => {
  inputTask.style.display = "none";
  addTaskButton.style.display = "block";
});

// ========================== add task =============================
const addTask = document.querySelector(".add-task");
const taskList = document.querySelector(".task-list");
const inputTaskText = document.querySelector("#task-input-text");

addTask.addEventListener("click", () => {
  if (inputTaskText.value == "") return;
  saveTask(inputTaskText.value);
  inputTaskText.value = "";
  renderTasks();
});

function renderTasks() {
  let tasks = getTasks();
  console.log(tasks);
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i += 2) {
    // console.log(tasks[i]);
    console.log(i);
    taskList.append(createTask(tasks[i], tasks[i + 1]));
  }

  // tasks.forEach((element) => {
  //   taskList.appendChild(createTask(element));
  // });
}

// =================delete task==================
taskList.addEventListener("click", (e) => {
  if (e.target.classList[0] == "delete-task") {
    let rmTask = e.target.parentElement.textContent.replace(/x$/, "");
    removeTask(rmTask);
    renderTasks();
  }
});

// =================== checkbox[] task ===========================
taskList.addEventListener("click", (e) => {
  if (e.target.id == "check") {
    let checkdedTask = e.target.parentElement.textContent.replace(/x$/, "");
    checkBox(checkdedTask);
    renderTasks();
  }
});

//* ===================== gloabal ========================
document.addEventListener("DOMContentLoaded", renderProjects());
document.addEventListener("DOMContentLoaded", renderTasks());

// ? delete-all-projects
const deleteAllBtn = document.querySelector(".delete-all-projects");

deleteAllBtn.addEventListener("click", () => {
  clearLocal();
  renderProjects();
});
