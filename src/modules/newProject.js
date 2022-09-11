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

  //todo add eventlistener to add
  //todo save local
  //todo render?

  // append
  main.appendChild(h2);
  main.appendChild(taskList);
  main.appendChild(toggleBtn);
  main.appendChild(inputForm);
}

function createInputTaskForm(className) {}

function generalCreate() {
  // todo remove everything
  // todo create title
  // todo create addtask toggle
  // todo create hidden form
}
export { createNewProject, generalCreate };
