function createProject(value) {
  const div = document.createElement("div");
  div.classList.add("project");

  const para = document.createElement("p");
  para.textContent = value;

  const button = document.createElement("button");
  button.textContent = "delete";

  div.appendChild(para);
  div.appendChild(button);

  return div;
}

export { createProject };
