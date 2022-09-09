import { getTasks, localSaveTasks } from "./saveLocal";

function checkBox(name) {
  let tasks = getTasks();
  for (let i = 0; i < tasks.length; i += 2) {
    if (tasks[i] == name) {
      tasks[i + 1] = !tasks[i + 1];
    }
  }
  localSaveTasks(tasks);
}

export { checkBox };
