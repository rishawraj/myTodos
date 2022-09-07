import { createProject } from "./modules/create";
import { getProjects, saveProject } from "./modules/saveLocal";

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
  saveProject(projectInput.value);
  projectInput.value = "";
  renderProjects();
});

function renderProjects() {
  let projects = getProjects();
  console.log(projects);
  projects.forEach((element) => {
    projectList.appendChild(createProject(element));
  });
}
