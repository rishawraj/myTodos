import { createProject, createTask } from "./modules/create";
import {
  getProjects,
  saveProject,
  clearLocal,
  removeProject,
  saveTask,
  getTasks,
  removeTask,
  saveTask2,
  getTasks2,
  removeTask2,
} from "./modules/saveLocal";
import { checkBox, checkBox2 } from "./modules/checkBox";
import { createNewProject, generalCreate } from "./modules/newProject";

//* ============= add project button toggle ===================

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

//* ======================== add projects =====================

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

// ===================== delete-project=========================
projectList.addEventListener("click", (e) => {
  if (e.target.classList[0] == "delete-project") {
    let textValue = e.target.parentElement.textContent.replace(/delete/g, "");
    removeProject(textValue);
    renderProjects();
    localStorage.removeItem(textValue);
    const genBtn = document.querySelector(".general-project");
    genBtn.click();
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

// ========================== add task ==========================
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
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i += 2) {
    taskList.append(createTask(tasks[i], tasks[i + 1]));
  }
}

// ===================== delete task ===========================
taskList.addEventListener("click", (e) => {
  if (e.target.classList[0] == "delete-task") {
    let rmTask = e.target.parentElement.textContent.replace(/x$/, "");
    removeTask(rmTask);
    renderTasks();
  }
});

// =================== checkbox[] task ==========================
taskList.addEventListener("click", (e) => {
  if (e.target.id == "check") {
    let checkdedTask = e.target.parentElement.textContent.replace(/x$/, "");
    checkBox(checkdedTask);
    renderTasks();
  }
});

//* ===================== gloabal ================================
document.addEventListener("DOMContentLoaded", renderProjects());
document.addEventListener("DOMContentLoaded", renderTasks());

// ? delete-all-projects
const deleteAllBtn = document.querySelector(".delete-all-projects");

deleteAllBtn.addEventListener("click", () => {
  clearLocal();
  renderProjects();
  renderTasks();
});

// !=================== general project ============================
const generalProject = document.querySelector(".general-project");
generalProject.addEventListener("click", () => {
  // location.reload();

  const main = document.querySelector("main");
  main.innerHTML = "";
  main.innerHTML = generalCreate();
  renderTasks2("general-tasks");

  //? =================== add buton toggle ======================
  const toggleNewProject = document.querySelector(".add-task-button");
  const inputForm = document.querySelector(".input-task");
  const cancelButton = document.querySelector(".cancel-task");

  toggleNewProject.addEventListener("click", () => {
    toggleNewProject.style.display = "none";
    inputForm.style.display = "block";
  });

  cancelButton.addEventListener("click", () => {
    toggleNewProject.style.display = "block";
    inputForm.style.display = "none";
  });

  // ?============= add new project tasks =================
  const addTask = document.querySelector(".add-task");
  const inputTaskText = document.querySelector("#task-input-text");

  addTask.addEventListener("click", () => {
    if (inputTaskText.value == "") return;
    saveTask(inputTaskText.value);
    inputTaskText.value = "";
    renderTasks2("general-tasks");
  });

  //?===============  delete new project tasks =====================
  const taskListNew = document.querySelector(".task-list");
  taskListNew.addEventListener("click", (e) => {
    if (e.target.classList[0] == "delete-task") {
      let rmTask = e.target.parentElement.textContent.replace(/x$/, "");
      removeTask2("general-tasks", rmTask);
      renderTasks2("general-tasks");
    }
  });

  //?==================== check box tick ==================================
  taskListNew.addEventListener("click", (e) => {
    if (e.target.id == "check") {
      let checkdedTask = e.target.parentElement.textContent.replace(/x$/, "");
      checkBox2("general-tasks", checkdedTask);
      renderTasks2("general-tasks");
    }
  });
});

//* =================== new projects =============================
projectList.addEventListener("click", (e) => {
  if (
    (e.target.classList.contains("project") ||
      e.target.parentElement.classList.contains("project")) &&
    !e.target.classList.contains("delete-project")
  ) {
    let projectName = e.target.textContent.replace("delete", "");
    createNewProject(projectName);
    renderTasks2(projectName); //does work!

    //? =================== add buton toggle ======================
    const toggleNewProject = document.querySelector(
      ".add-task-button-new-project"
    );
    const inputForm = document.querySelector(".input-task-new-project");
    const cancelButton = document.querySelector(".cancel-task");

    toggleNewProject.addEventListener("click", () => {
      toggleNewProject.style.display = "none";
      inputForm.style.display = "block";
    });

    cancelButton.addEventListener("click", () => {
      toggleNewProject.style.display = "block";
      inputForm.style.display = "none";
    });

    // ?============= add new project tasks =================
    const addTask = document.querySelector(".add-task");
    const inputTaskText = document.querySelector("#task-input-text");

    addTask.addEventListener("click", () => {
      console.log(`${projectName}`);
      if (inputTaskText.value == "") return;
      saveTask2(`${projectName}`, inputTaskText.value);
      inputTaskText.value = "";
      renderTasks2(`${projectName}`);
    });

    //?===============  delete new project tasks =====================
    const taskListNew = document.querySelector(".task-list");
    taskListNew.addEventListener("click", (e) => {
      if (e.target.classList[0] == "delete-task") {
        let rmTask = e.target.parentElement.textContent.replace(/x$/, "");
        removeTask2(projectName, rmTask);
        renderTasks2(projectName);
      }
    });

    //?==================== check box tick ==================================
    taskListNew.addEventListener("click", (e) => {
      if (e.target.id == "check") {
        let checkdedTask = e.target.parentElement.textContent.replace(/x$/, "");
        checkBox2(projectName, checkdedTask);
        renderTasks2(projectName);
      }
    });
  }
});

//  new render function to re-select the new task list

function renderTasks2(localName) {
  const taskListNew = document.querySelector(".task-list");
  taskListNew.innerHTML = "";
  let tasks = getTasks2(localName);

  for (let i = 0; i < tasks.length; i += 2) {
    taskListNew.append(createTask(tasks[i], tasks[i + 1]));
  }
}
// todo: add query selector in methods to make sure
// todo: that they don't loose thier binding.
