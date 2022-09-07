function saveProject(value) {
  let projects = getProjects();
  projects.push(value);
  localsave(projects);
}

function getProjects() {
  return localStorage.getItem("projects") == null
    ? []
    : JSON.parse(localStorage.getItem("projects"));
}

function localsave(value) {
  localstorage.setItem("projects", JSON.stringify(value));
}

export { saveProject, getProjects };
