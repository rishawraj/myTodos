function createNewProject(projectName) {
  // clear main
  const main = document.querySelector("main");
  main.innerHTML = "";

  //* todo create h2
  const h2 = document.createElement("h2");
  h2.classList.add("project-title");
  h2.textContent = projectName;

  //* todo create task list
  const taskList = document.createElement("div");
  taskList.classList.add("task-list");

  //* todo create toggle-btn
  const toggleBtn = document.createElement("button");
  toggleBtn.classList.add("add-task-button-new-project");
  toggleBtn.textContent = "+ add task";

  //* todo create inpurForm
  const inputForm = document.createElement("div");
  inputForm.classList.add("input-task-new-project");
  let form = `
        <form action="#">
          <input id="task-input-text" type="text" required autocomplete="off">
          <div class="task-btns">
            <button class="add-task" type="submit">add</button>
            <button class="cancel-task">cancel</button>
          </div>
        </form>
  `;
  inputForm.innerHTML = form;

  // append
  main.appendChild(h2);
  main.appendChild(taskList);
  main.appendChild(toggleBtn);
  main.appendChild(inputForm);
}

function generalCreate() {
  let html = `
      <h2 class="project-title">general</h2>
      <div class="task-list"></div>

      <button class="add-task-button">+ add task</button>
      <div class="input-task">
        <form action="#">
          <input id="task-input-text" type="text" required autocomplete="off" />
          <div class="task-btns">
            <button class="add-task" type="submit">add</button>
            <button class="cancel-task">cancel</button>
          </div>
        </form>
      </div>
  `;

  return html;
}
export { createNewProject, generalCreate };
