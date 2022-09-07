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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/create */ \"./src/modules/create.js\");\n/* harmony import */ var _modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/saveLocal */ \"./src/modules/saveLocal.js\");\n\n\n\n//* ====== add project button toggle ===========\n\nconst addProject = document.querySelector(\".add-project\");\nconst inputProject = document.querySelector(\".input-project\");\nconst cancelProject = document.querySelector(\".cancel-proj\");\n\naddProject.addEventListener(\"click\", () => {\n  inputProject.style.display = \"block\";\n  addProject.style.display = \"none\";\n});\n\ncancelProject.addEventListener(\"click\", () => {\n  inputProject.style.display = \"none\";\n  addProject.style.display = \"block\";\n});\n\n//* =============== add projects ======================\n\nconst projectList = document.querySelector(\".project-list\");\nconst projectInput = document.querySelector(\"#project-input-text\");\nconst addProj = document.querySelector(\".add-proj\");\n\naddProj.addEventListener(\"click\", () => {\n  (0,_modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__.saveProject)(projectInput.value);\n  projectInput.value = \"\";\n  renderProjects();\n});\n\nfunction renderProjects() {\n  let projects = (0,_modules_saveLocal__WEBPACK_IMPORTED_MODULE_1__.getProjects)();\n  console.log(projects);\n  projects.forEach((element) => {\n    projectList.appendChild((0,_modules_create__WEBPACK_IMPORTED_MODULE_0__.createProject)(element));\n  });\n}\n\n\n//# sourceURL=webpack://mytodos/./src/index.js?");

/***/ }),

/***/ "./src/modules/create.js":
/*!*******************************!*\
  !*** ./src/modules/create.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject)\n/* harmony export */ });\nfunction createProject(value) {\n  const div = document.createElement(\"div\");\n  div.classList.add(\"project\");\n\n  const para = document.createElement(\"p\");\n  para.textContent = value;\n\n  const button = document.createElement(\"button\");\n  button.textContent = \"delete\";\n\n  div.appendChild(para);\n  div.appendChild(button);\n\n  return div;\n}\n\n\n\n\n//# sourceURL=webpack://mytodos/./src/modules/create.js?");

/***/ }),

/***/ "./src/modules/saveLocal.js":
/*!**********************************!*\
  !*** ./src/modules/saveLocal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProjects\": () => (/* binding */ getProjects),\n/* harmony export */   \"saveProject\": () => (/* binding */ saveProject)\n/* harmony export */ });\nfunction saveProject(value) {\n  let projects = getProjects();\n  projects.push(value);\n  localsave(projects);\n}\n\nfunction getProjects() {\n  return localStorage.getItem(\"projects\") == null\n    ? []\n    : JSON.parse(localStorage.getItem(\"projects\"));\n}\n\nfunction localsave(value) {\n  localstorage.setItem(\"projects\", JSON.stringify(value));\n}\n\n\n\n\n//# sourceURL=webpack://mytodos/./src/modules/saveLocal.js?");

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