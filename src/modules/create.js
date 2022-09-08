function createProject(value) {
  const div = document.createElement("div");
  div.classList.add("project");

  const para = document.createElement("p");
  para.textContent = value;

  const button = document.createElement("button");
  button.classList.add("delete-project");
  button.textContent = "delete";

  div.appendChild(para);
  div.appendChild(button);

  return div;
}

function createTask(value, checkValue = false) {
  const div = document.createElement("div");
  if (checkValue == true) {
    div.classList.add("task-checked");
  }
  div.classList.add("task");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.name = "check";
  input.id = "check";
  input.checked = checkValue;

  const para = document.createElement("p");
  para.textContent = value;

  const button = document.createElement("button");
  button.classList.add("delete-task");
  button.textContent = "x";
  button.style.backgroundColor = "lightcoral";

  div.appendChild(input);
  div.appendChild(para);
  div.appendChild(button);

  return div;
}

export { createProject, createTask };
