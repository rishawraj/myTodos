import {
  getTasks,
  getTasks2,
  localSaveTasks,
  localSaveTasks2,
} from "./saveLocal";

function checkBox(name) {
  let tasks = getTasks();
  for (let i = 0; i < tasks.length; i += 2) {
    if (tasks[i] == name) {
      tasks[i + 1] = !tasks[i + 1];
    }
  }
  localSaveTasks(tasks);
}

function checkBox2(localName, name) {
  let tasks = getTasks2(localName);
  for (let i = 0; i < tasks.length; i += 2) {
    if (tasks[i] == name) {
      tasks[i + 1] = !tasks[i + 1];
    }
  }
  localSaveTasks2(localName, tasks);
}

export { checkBox, checkBox2 };
