// ======================== projects ========================
function saveProject(value) {
  let projects = getProjects();
  projects.push(value);
  localSaveProjects(projects);
}

function getProjects() {
  return localStorage.getItem("projects") == null
    ? []
    : JSON.parse(localStorage.getItem("projects"));
}

function removeProject(project) {
  let projects = getProjects();
  let newProjects = [];
  for (let i = 0; i < projects.length; i++) {
    if (projects[i] !== project) {
      newProjects.push(projects[i]);
    }
  }
  localSaveProjects(newProjects);
}

// =========================== tasks =======================
function saveTask(value, checkValue = false) {
  let tasks = getTasks();
  tasks.push(value);
  tasks.push(checkValue);
  localSaveTasks(tasks);
}

function getTasks() {
  return localStorage.getItem("general-tasks") == null
    ? []
    : JSON.parse(localStorage.getItem("general-tasks"));
}

function removeTask(value) {
  let tasks = getTasks();
  let newTasks = [];
  for (let i = 0; i < tasks.length; i += 2) {
    if (tasks[i] !== value) {
      newTasks.push(tasks[i]);
      newTasks.push(tasks[i + 1]);
    }
  }
  localSaveTasks(newTasks);
}

//========================= global ============================
function clearLocal() {
  localStorage.clear();
}
function localSaveProjects(value) {
  localStorage.setItem("projects", JSON.stringify(value));
}

function localSaveTasks(value) {
  localStorage.setItem("general-tasks", JSON.stringify(value));
  // localStorage.setItem("general-tasks", JSON.stringify(value));
}

export {
  saveProject,
  getProjects,
  clearLocal,
  removeProject,
  saveTask,
  getTasks,
  removeTask,
  localSaveTasks,
};
