/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/create */ \"./src/modules/create.js\");\n/* harmony import */ var _modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/saveLocal */ \"./src/modules/saveLocal.js\");\n/* harmony import */ var _modules_checkBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/checkBox */ \"./src/modules/checkBox.js\");\n/* harmony import */ var _modules_newProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/newProject */ \"./src/modules/newProject.js\");\n\n\n\n\n\n//* ============= add project button toggle ===================\n\nconst addProject = document.querySelector(\".add-project\");\nconst inputProject = document.querySelector(\".input-project\");\nconst cancelProject = document.querySelector(\".cancel-proj\");\n\naddProject.addEventListener(\"click\", () => {\n  inputProject.style.display = \"block\";\n  addProject.style.display = \"none\";\n});\n\ncancelProject.addEventListener(\"click\", () => {\n  inputProject.style.display = \"none\";\n  addProject.style.display = \"block\";\n});\n\n//* ======================== add projects =====================\n\nconst projectList = document.querySelector(\".project-list\");\nconst projectInput = document.querySelector(\"#project-input-text\");\nconst addProj = document.querySelector(\".add-proj\");\n\naddProj.addEventListener(\"click\", () => {\n  if (projectInput.value == \"\") return;\n  (0,_modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__.saveProject)(projectInput.value);\n  projectInput.value = \"\";\n  renderProjects();\n});\n\nfunction renderProjects() {\n  let projects = (0,_modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__.getProjects)();\n  projectList.innerHTML = \"\";\n  projects.forEach((element) => {\n    projectList.appendChild((0,_modules_create__WEBPACK_IMPORTED_MODULE_0__.createProject)(element));\n  });\n}\n\n// ===================== delete-project=========================\nprojectList.addEventListener(\"click\", (e) => {\n  if (e.target.classList[0] == \"delete-project\") {\n    let textValue = e.target.parentElement.textContent.replace(/delete/g, \"\");\n    (0,_modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__.removeProject)(textValue);\n    renderProjects();\n  }\n});\n\n//================= add task button toggle =====================\nconst addTaskButton = document.querySelector(\".add-task-button\");\nconst inputTask = document.querySelector(\".input-task\");\nconst cancelTask = document.querySelector(\".cancel-task\");\n\naddTaskButton.addEventListener(\"click\", () => {\n  inputTask.style.display = \"block\";\n  addTaskButton.style.display = \"none\";\n});\n\ncancelTask.addEventListener(\"click\", () => {\n  inputTask.style.display = \"none\";\n  addTaskButton.style.display = \"block\";\n});\n\n// ========================== add task ==========================\nconst addTask = document.querySelector(\".add-task\");\nconst taskList = document.querySelector(\".task-list\");\nconst inputTaskText = document.querySelector(\"#task-input-text\");\n\naddTask.addEventListener(\"click\", () => {\n  if (inputTaskText.value == \"\") return;\n  (0,_modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__.saveTask)(inputTaskText.value);\n  inputTaskText.value = \"\";\n  renderTasks();\n});\n\nfunction renderTasks() {\n  let tasks = (0,_modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__.getTasks)();\n  taskList.innerHTML = \"\";\n\n  for (let i = 0; i < tasks.length; i += 2) {\n    taskList.append((0,_modules_create__WEBPACK_IMPORTED_MODULE_0__.createTask)(tasks[i], tasks[i + 1]));\n  }\n}\n\n// ===================== delete task ===========================\ntaskList.addEventListener(\"click\", (e) => {\n  if (e.target.classList[0] == \"delete-task\") {\n    let rmTask = e.target.parentElement.textContent.replace(/x$/, \"\");\n    (0,_modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__.removeTask)(rmTask);\n    renderTasks();\n  }\n});\n\n// =================== checkbox[] task ==========================\ntaskList.addEventListener(\"click\", (e) => {\n  if (e.target.id == \"check\") {\n    let checkdedTask = e.target.parentElement.textContent.replace(/x$/, \"\");\n    (0,_modules_checkBox__WEBPACK_IMPORTED_MODULE_2__.checkBox)(checkdedTask);\n    renderTasks();\n  }\n});\n\n//* ===================== gloabal ================================\ndocument.addEventListener(\"DOMContentLoaded\", renderProjects());\ndocument.addEventListener(\"DOMContentLoaded\", renderTasks());\n\n// ? delete-all-projects\nconst deleteAllBtn = document.querySelector(\".delete-all-projects\");\n\ndeleteAllBtn.addEventListener(\"click\", () => {\n  (0,_modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__.clearLocal)();\n  renderProjects();\n  renderTasks();\n});\n\n// !=================== general project ============================\nconst generalProject = document.querySelector(\".general-project\");\ngeneralProject.addEventListener(\"click\", () => {\n  location.reload();\n});\n\n// !=================== new projects =============================\nprojectList.addEventListener(\"click\", (e) => {\n  // console.log(e.target.parentElement);\n  if (\n    (e.target.classList.contains(\"project\") ||\n      e.target.parentElement.classList.contains(\"project\")) &&\n    !e.target.classList.contains(\"delete-project\")\n  ) {\n    let projectName = e.target.textContent.replace(\"delete\", \"\");\n    (0,_modules_newProject__WEBPACK_IMPORTED_MODULE_3__.createNewProject)(projectName);\n    // todo clear <main>\n    // todo rename h2\n    // todo add: add task button (input)\n  }\n});\n\n\n//# sourceURL=webpack://mytodos/./src/index.js?");

/***/ }),

/***/ "./src/modules/checkBox.js":
/*!*********************************!*\
  !*** ./src/modules/checkBox.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkBox\": () => (/* binding */ checkBox)\n/* harmony export */ });\n/* harmony import */ var _saveLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveLocal */ \"./src/modules/saveLocal.js\");\n\n\nfunction checkBox(name) {\n  let tasks = (0,_saveLocal__WEBPACK_IMPORTED_MODULE_0__.getTasks)();\n  for (let i = 0; i < tasks.length; i += 2) {\n    if (tasks[i] == name) {\n      tasks[i + 1] = !tasks[i + 1];\n    }\n  }\n  (0,_saveLocal__WEBPACK_IMPORTED_MODULE_0__.localSaveTasks)(tasks);\n}\n\n\n\n\n//# sourceURL=webpack://mytodos/./src/modules/checkBox.js?");

/***/ }),

/***/ "./src/modules/create.js":
/*!*******************************!*\
  !*** ./src/modules/create.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"createTask\": () => (/* binding */ createTask)\n/* harmony export */ });\nfunction createProject(value) {\n  const div = document.createElement(\"div\");\n  div.classList.add(\"project\");\n\n  const para = document.createElement(\"p\");\n  para.textContent = value;\n\n  const button = document.createElement(\"button\");\n  button.classList.add(\"delete-project\");\n  button.textContent = \"delete\";\n\n  div.appendChild(para);\n  div.appendChild(button);\n\n  return div;\n}\n\nfunction createTask(value, checkValue = false) {\n  const div = document.createElement(\"div\");\n  if (checkValue == true) {\n    div.classList.add(\"task-checked\");\n  }\n  div.classList.add(\"task\");\n\n  const input = document.createElement(\"input\");\n  input.type = \"checkbox\";\n  input.name = \"check\";\n  input.id = \"check\";\n  input.checked = checkValue;\n\n  const para = document.createElement(\"p\");\n  para.textContent = value;\n\n  const button = document.createElement(\"button\");\n  button.classList.add(\"delete-task\");\n  button.textContent = \"x\";\n  button.style.backgroundColor = \"lightcoral\";\n\n  div.appendChild(input);\n  div.appendChild(para);\n  div.appendChild(button);\n\n  return div;\n}\n\n\n\n\n//# sourceURL=webpack://mytodos/./src/modules/create.js?");

/***/ }),

/***/ "./src/modules/newProject.js":
/*!***********************************!*\
  !*** ./src/modules/newProject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewProject\": () => (/* binding */ createNewProject),\n/* harmony export */   \"generalCreate\": () => (/* binding */ generalCreate)\n/* harmony export */ });\nfunction createNewProject(projectName) {}\n\nfunction createInputTaskForm(className) {}\n\nfunction generalCreate() {\n  // todo remove everything\n  // todo create title\n  // todo create addtask toggle\n  // todo create hidden form\n}\n\n\n\n//# sourceURL=webpack://mytodos/./src/modules/newProject.js?");

/***/ }),

/***/ "./src/modules/saveLocal.js":
/*!**********************************!*\
  !*** ./src/modules/saveLocal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearLocal\": () => (/* binding */ clearLocal),\n/* harmony export */   \"getProjects\": () => (/* binding */ getProjects),\n/* harmony export */   \"getTasks\": () => (/* binding */ getTasks),\n/* harmony export */   \"localSaveTasks\": () => (/* binding */ localSaveTasks),\n/* harmony export */   \"removeProject\": () => (/* binding */ removeProject),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask),\n/* harmony export */   \"saveProject\": () => (/* binding */ saveProject),\n/* harmony export */   \"saveTask\": () => (/* binding */ saveTask)\n/* harmony export */ });\n// ======================== projects ========================\nfunction saveProject(value) {\n  let projects = getProjects();\n  projects.push(value);\n  localSaveProjects(projects);\n}\n\nfunction getProjects() {\n  return localStorage.getItem(\"projects\") == null\n    ? []\n    : JSON.parse(localStorage.getItem(\"projects\"));\n}\n\nfunction removeProject(project) {\n  let projects = getProjects();\n  let newProjects = [];\n  for (let i = 0; i < projects.length; i++) {\n    if (projects[i] !== project) {\n      newProjects.push(projects[i]);\n    }\n  }\n  localSaveProjects(newProjects);\n}\n\n// =========================== tasks =======================\nfunction saveTask(value, checkValue = false) {\n  let tasks = getTasks();\n  tasks.push(value);\n  tasks.push(checkValue);\n  localSaveTasks(tasks);\n}\n\nfunction getTasks() {\n  return localStorage.getItem(\"general-tasks\") == null\n    ? []\n    : JSON.parse(localStorage.getItem(\"general-tasks\"));\n}\n\nfunction removeTask(value) {\n  let tasks = getTasks();\n  let newTasks = [];\n  for (let i = 0; i < tasks.length; i += 2) {\n    if (tasks[i] !== value) {\n      newTasks.push(tasks[i]);\n      newTasks.push(tasks[i + 1]);\n    }\n  }\n  localSaveTasks(newTasks);\n}\n\n//========================= global ============================\nfunction clearLocal() {\n  localStorage.clear();\n}\nfunction localSaveProjects(value) {\n  localStorage.setItem(\"projects\", JSON.stringify(value));\n}\n\nfunction localSaveTasks(value) {\n  localStorage.setItem(\"general-tasks\", JSON.stringify(value));\n  // localStorage.setItem(\"general-tasks\", JSON.stringify(value));\n}\n\n\n\n\n//# sourceURL=webpack://mytodos/./src/modules/saveLocal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;