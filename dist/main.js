/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/properAttemptForAssignment/addTasks/createTaskUsingFactory.js":
/*!**************************************************************************!*\
  !*** ./js/properAttemptForAssignment/addTasks/createTaskUsingFactory.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _projectNames_showNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectNames/showNames.js */ "./js/properAttemptForAssignment/projectNames/showNames.js");
/* harmony import */ var _addTasks_prioritiyLevels_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addTasks/prioritiyLevels.js */ "./js/properAttemptForAssignment/addTasks/prioritiyLevels.js");
/* harmony import */ var _priorityColors_colorCoating_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../priorityColors/colorCoating.js */ "./js/properAttemptForAssignment/priorityColors/colorCoating.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
// import {showProjectNamesDD, ddForFactoryFunction, justDropdowns} from "../projectNames/showDropdowns.js";




let count = 0;
let createTask = (title, createdDate, dueDate, priorityLevel, taskNote) => {
    let obj = new Object();
    let increaseCount = () => count++;
    obj.title = title || "Default Title";
    obj.createdDate = createdDate || (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(new Date(), "MM-dd-yyyy");
    obj.dueDate = dueDate || (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(new Date(), 1), "MM-dd-yyyy");
    obj.priorityLevel = priorityLevel;
    obj.taskNote = taskNote;
    obj.id = increaseCount();
    obj.prjDD = _projectNames_showNames_js__WEBPACK_IMPORTED_MODULE_0__.existingProjects;
    obj.getDOM = `<div class="tasks-container">
    <div class="todo-elem" id="todo-elem-${obj.id}">
        <div class="delete-div" style="display:none;">Delete Task <span id="del-icon">X</span></div>
        <div class="task-info">
        <div class="checklist-div">
            <input type="checkbox" id="task-check-${obj.id}">
            <label for="task-check-${obj.id}"></label>
        </div>
        <div class="task-name">
            <div class="task-text">${obj.title || "Default Title"}</div>
        </div>
        <div class="due-date">
            <input type="date" id="task-panel-dd">
            <sub class="time-stamp" id="task-dd-${obj.id}">${(0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(new Date().setDate(new Date().getDate() + 1), "MM-dd-yyyy': Due at'") || obj.dueDate + ":" || (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(new Date().setDate(new Date().getDate() + 1), "'due date:'eeee") || "[due date]"}</sub>
        </div>
        <div class=-"task-added" id="task-added-${obj.id}">${obj.createdDate || (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(new Date(), "'created at:'eeee") || "[created at]"}</div>
        <div class="task-project">
            <div class="priority-dd">
                <select class="levels" id="levels-dd-${obj.id}">${
        // priorities.map(item=>`<option value="${item}" class="${item.toLocaleLowerCase()}">${item}</option>`)
        _addTasks_prioritiyLevels_js__WEBPACK_IMPORTED_MODULE_1__.priorities.map(item => {
            return `<option ${item === obj.priorityLevel ? "selected" : ""} value="${item}" class="${item.toLocaleLowerCase()}">${item}</option>`;
        })
        }</select>
            </div>
            <div class="priority-level">
                <!-- <div class="priority-tooltip">Priority Level</div> -->
            </div>
            <!-- <div class="project-name">Dummy Entry</div> -->
            <div class="project-name">
                <select class="choose-project" id="choose-project-${obj.id}"></select>
                <!-- <select class="choose-project" id="choose-project-${obj.id}" selected></select> -->
            </div>
        </div>
    </div>
    <div class="task-note">${obj.taskNote}</div>
    </div>
    </div>`;
    // obj.domElem = document.createRange().createContextualFragment(obj.getDOM);
    // obj.domElem = document.createRange().createContextualFragment(obj.getDOM).querySelector(".task-info");
    // obj.domElem = document.createRange().createContextualFragment(obj.getDOM).querySelector(".todo-elem");
    // return obj.domElem;
    // return obj.getDOM;
    // obj.domElem.id = obj.id;
    obj.domElem = document.createRange()
        .createContextualFragment(obj.getDOM)
        .querySelector(".todo-elem");
    return obj;
}




/**
 *
 *
 <select class="levels" id="levels-dd-${obj.id}">${
        // priorities.map(item=>`<option value="${item}" class="${item.toLocaleLowerCase()}">${item}</option>`)
        priorities.map(item => {
            return `<option ${item === obj.priorityLevel ? "selected" : ""} value="${item}" class="${item.toLocaleLowerCase()}">${item}</option>`

            // return `<option ${item === obj.priorityLevel ? "selected" : false} value="${item}" class="${item.toLocaleLowerCase()}">${item}</option>`
            // return `<option value="${item}" class="${item.toLocaleLowerCase()}">${item}</option>`
            // console.log(item===obj.priorityLevel);
            // return `<option selected="${item === obj.priorityLevel ? true : false}" value="${item}" class="${item.toLocaleLowerCase()}">${item}</option>`

            // if (item === obj.priorityLevel) {
            //     `<option selected=${true} value="${item}" class="${item.toLocaleLowerCase()}">${item}</option>`
            // } else {
            //     `<option value="${item}" class="${item.toLocaleLowerCase()}">${item}</option>`
            // }
        }
        )
        }</select>
 *
 *
 obj.getDOM = `<div class="tasks-container">
    <div class="todo-elem" id=${obj.id}>
        <div class="task-info">
        <div class="checklist-div">
            <input type="checkbox" id="task-check-${obj.id}">
            <label for="task-check-${obj.id}"></label>
        </div>
        <div class="task-name">
            <div class="task-text">${obj.title}</div>
        </div>
        <div class="due-date">
            <sub class="time-stamp" id="task-dd">${obj.dueDate}</sub>
        </div>
        <div class=-"task-added">${obj.createdDate}</div>
        <div class="task-project">
            <div class="priority-level">
                <div class="priority-tooltip">Priority Level</div>
            </div>
            <!-- <div class="project-name">Dummy Entry</div> -->
            <div class="project-name">
                <!-- <select class="choose-project">${
                    obj.prjDD.map(option=>{
                        return `<option value="${option}">${option}</option>`;
                    })
                    // existingProjects.forEach(item=> {
                    // let option = document.createElement("option");
                    // option.value = item;
                    // option.textContent = item;
                    // console.log(option);
                    // option.closest("select").append(option);
                    // option.closest("select").append(option);
                    // return document.querySelector("select").append(option);
                })}</select> -->
            <!-- ${`ddForFactoryFunction()`} -->
            <!-- <select class="choose-project">${`showProjectNamesDD()`}</select> -->
            <!-- <select class="choose-project"></select>
                <select class="choose-project">${`ddForFactoryFunction()`}</select> -->
            </div>
        </div>
    </div>
    <div class="task-note">${obj.taskNote}</div>
    </div>
    </div>`;
 */

/***/ }),

/***/ "./js/properAttemptForAssignment/addTasks/initiateEntry.js":
/*!*****************************************************************!*\
  !*** ./js/properAttemptForAssignment/addTasks/initiateEntry.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "readyTodoTaskEntry": () => (/* binding */ readyTodoTaskEntry)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfToday/index.js");
/* harmony import */ var _prioritiyLevels_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prioritiyLevels.js */ "./js/properAttemptForAssignment/addTasks/prioritiyLevels.js");
/* harmony import */ var _createTaskUsingFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTaskUsingFactory.js */ "./js/properAttemptForAssignment/addTasks/createTaskUsingFactory.js");
/* harmony import */ var _showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../showTasks/displayTodos.js */ "./js/properAttemptForAssignment/showTasks/displayTodos.js");




// import {showProjectNamesDD, justDropdowns} from "../projectNames/showDropdowns.js";
let taskDate, taskDue, taskPriority, taskNote, taskTitle;
taskDate = document.querySelector(".dump-calVal");
taskDue = document.querySelector(".dump-ddVal");
let addTask = document.querySelector("#show-panel");
let entryTask = document.querySelector(".task-entry");
let addTodo = document.querySelector(".todo-task");
let cancel =  document.querySelector(".cancel");

function readyTodoTaskEntry() {
    addTask.addEventListener("click", evt=>showPanel(evt));
    // addTask.removeEventListener("click", showPanel);
    cancel.addEventListener("click", evt => handleCancel(evt));
}

function handleCancel(evt) {
    // entryTask.classList.add("slideout");
    entryTask.classList.add("sliding-out");
    entryTask.style.display = "none";
}

function showPanel() {
    if (entryTask.style.display !== "block") {
        entryTask.style.display = "block";
        // entryTask.classList.remove("sliding-out");
        addTodo.addEventListener("click", addingTodo);
    } else {
        addTask.removeEventListener("click", showPanel);
        addTodo.removeEventListener("click", addingTodo);
        // entryTask.classList.add("sliding-out");
        entryTask.style.display = "none";
        // entryTask.classList.add("slideout");
    }
}

function addingTodo(evt) {
    // getValuesFromIcons() will mediate this user entries values for this function
    taskPriority = document.querySelector("#levels").value;
    taskNote = document.querySelector("#about-task").value;
    taskTitle = getUserTaskEntry();
    // console.log(taskDate, taskDue, taskPriority, taskNote, taskTitle);
    let todoElem = (0,_createTaskUsingFactory_js__WEBPACK_IMPORTED_MODULE_1__.createTask)(taskTitle, taskDate.textContent, taskDue.textContent, taskPriority, taskNote);
    _showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_2__.todos.push(todoElem);
    (0,_showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(todoElem.domElem);
    // showProjectNamesDD();
    // justDropdowns();
}

// getUserTaskEntry();
getValuesFromIcons();

function getUserTaskEntry() {
    let taskInput = document.querySelector("#create-task");
    let taskTitle = taskInput.value;
    // console.log(taskTitle);
    return taskTitle;
}

function getValuesFromIcons() {
    let calendar = document.querySelector("#calendar");
    showDatePickerElement(calendar);
    let dueDate = document.querySelector("#due-date");
    showDatePickerElement(dueDate);
    (0,_prioritiyLevels_js__WEBPACK_IMPORTED_MODULE_0__.showPriorities)();
    (0,_prioritiyLevels_js__WEBPACK_IMPORTED_MODULE_0__.showSelectDDElem)();
    showAndGetNotes();
}

function showDatePickerElement(htmlElement) {
    htmlElement.addEventListener("click", () => {
        let datePicker = document.querySelector("#date-picker");
        datePicker.value = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(), "yyyy-MM-dd");
        if (datePicker.style.display === "none") {
            datePicker.style.display = "block";
            if (htmlElement.id === "calendar") {
                taskDate.textContent = datePicker.value;
            } else if (htmlElement.id === "due-date") {
                datePicker.addEventListener("change", () => {
                    taskDue.textContent = datePicker.value;
                });
            }
        } else {
            datePicker.value = "";
            datePicker.style.display = "none";
        }
    });
}

function showAndGetNotes() {
    let notesIcon = document.querySelector("#notes");
    let noteInput = document.querySelector("#about-task");

    notesIcon.addEventListener("click", () => {
        if (noteInput.style.display === "none") {
            noteInput.style.display = "block";
            // taskNote = noteInput.value;
        } else {
            noteInput.style.display = "none";
        }
    });
}




/**
 * 
 * 
 function showPanel() {
    // if (entryTask.classList.contains("slideout")) {
    //     // entryTask.classList.remove("slideout");
    //     entryTask.style.display = "block";
    //     addTodo.addEventListener("click", addingTodo);
    //     entryTask.classList.remove("slideout");
    // } else {
    //     addTask.removeEventListener("click", showPanel);
    //     addTodo.removeEventListener("click", addingTodo);
    //     entryTask.classList.add("slideout");
    //     entryTask.style.display = "none";
    //     // entryTask.classList.add("slideout");
    // }
    if (entryTask.style.display === "none") {
        entryTask.style.display = "block";
        // entryTask.classList.remove("slidin");
        entryTask.classList.remove("sliding-out");
        addTodo.addEventListener("click", addingTodo);
    } else {
        addTask.removeEventListener("click", showPanel);
        addTodo.removeEventListener("click", addingTodo);
        // entryTask.classList.add("slidin");
        entryTask.classList.add("sliding-out");
        entryTask.style.display = "none";
        // entryTask.classList.add("slideout");
    }
}
 * 
 * 
 function getValuesFromIcons() {
    let calendar = document.querySelector("#calendar");
    showDatePickerElement(calendar);
    let dueDate = document.querySelector("#due-date");
    showDatePickerElement(dueDate);
    showPriorities();
    showSelectDDElem();
    // taskPriority =  getPrioritySelectedValue();
    showAndGetNotes();
}
 * 
 * 
 function showDatePickerElement(htmlElement) {
    htmlElement.addEventListener("click", () => {
        let datePicker = document.querySelector("#date-picker");
        datePicker.value = format(startOfToday(), "yyyy-MM-dd");
        if (datePicker.style.display === "none") {
            datePicker.style.display = "block";
            if (htmlElement.id === "calendar") {
                // datePicker.addEventListener("change", () => {
                //     taskDate.textContent =  datePicker.value;
                // });
                taskDate.textContent = datePicker.value;
            } else if (htmlElement.id === "due-date") {
                datePicker.addEventListener("change", () => {
                    taskDue.textContent = datePicker.value;
                });
                // taskDue.textContent = datePicker.value;
            }
            // datePicker.value = format(startOfToday(), "yyyy-MM-dd");

        } else {
            datePicker.value = "";
            datePicker.style.display = "none";
        }
    });
}
 * 
 * 
 function readyTodoTaskEntry() {
    // let addTask = document.querySelector("#show-panel");
    // let entryTask = document.querySelector(".task-entry");
    // let addTodo = document.querySelector(".todo-task");
    addTask.addEventListener("click", evt=>showPanel(evt));
    addTask.removeEventListener("click", showPanel);
}

function showPanel() {
    if (entryTask.style.display === "none") {
        entryTask.style.display = "block";
        addTodo.addEventListener("click", addingTodo);
        // addTodo.addEventListener("click", evt => addingTodo);
        // addTodo.removeEventListener("click", addingTodo);
        // addTask.removeEventListener("click", showPanel);
    } else {
        entryTask.style.display = "none";
        // addTask.removeEventListener("click", showPanel);
        addTodo.removeEventListener("click", addingTodo);
    }
}

function addingTodo(evt) {
    taskPriority = document.querySelector("#levels").value;
    taskNote = document.querySelector("#about-task").value;
    taskTitle = getUserTaskEntry();
    console.log(taskDate, taskDue, taskPriority, taskNote, taskTitle);
    let todoElem = createTask(taskTitle, taskDate.textContent, taskDue.textContent, taskPriority, taskNote);
    todos.push(todoElem);
    displayTasks(todoElem.domElem);
}
 *
 *
 function readyTodoTaskEntry() {
    let addTask = document.querySelector("#show-panel");
    let entryTask = document.querySelector(".task-entry");
    let addTodo = document.querySelector(".todo-task");
    addTask.addEventListener("click", addingTask);
    addTask.addEventListener("click", () => {
        if (entryTask.style.display === "none") {
            entryTask.style.display = "block";
            addTodo.addEventListener("click", (evt) => {
                // getValuesFromIcons();
                taskPriority =  document.querySelector("#levels").value;
                taskNote = document.querySelector("#about-task").value;
                taskTitle =  getUserTaskEntry();
                // console.log(taskDate, taskDue, taskPriority, taskNote, taskTitle);
                let todoElem = createTask(taskTitle,taskDate.textContent, taskDue.textContent, taskPriority, taskNote);
                // console.log(todoElem);
                todos.push(todoElem);
                displayTasks(todoElem.domElem);
                addTodo.removeEventListener("click");
            });
        } else {
            entryTask.style.display = "none";
            addTask.removeEventListener("click");
        }
    });
}
 *
 *
 function readyTodoTaskEntry() {
    let addTask = document.querySelector("#show-panel");
    let entryTask = document.querySelector(".task-entry");
    let addTodo = document.querySelector(".todo-task");
    addTask.addEventListener("click", () => {
        if (entryTask.style.display === "none") {
            entryTask.style.display = "block";
            addTodo.addEventListener("click", (evt) => {
                // getUserTaskEntry();
                // if (evt.target.id === "calendar") taskDate = datePicker.value;
                // else if (evt.target.id === "due-date") taskDue = datePicker.value;
                taskPriority =  document.querySelector("#levels").value;
                taskNote = document.querySelector("#about-task").value;
                taskTitle =  getUserTaskEntry();
                // console.log(taskDate, taskDue, taskPriority, taskNote, taskTitle);
                // console.log(document.querySelector("#levels").value);
                let todoElem = createTask(taskTitle,taskDate.textContent, taskDue.textContent, taskPriority, taskNote);
                // console.log(todoElem);
                todos.push(todoElem);
                // todoElem.id = todoElem.id;
                displayTasks(todoElem.domElem);
                // displayTasks();
                // displayTasks(todoElem);
                // displayAllTodoTasks();
            });
        } else {
            entryTask.style.display = "none";
        }
        // displayAllTodoTasks();
    });
}
 *
 *
 function showDatePickerElement(htmlElement) {
    htmlElement.addEventListener("click", () => {
        let datePicker = document.querySelector("#date-picker");
        datePicker.value = format(startOfToday(), "yyyy-MM-dd");
        if (datePicker.style.display === "none") {
            datePicker.style.display = "block";
            if(htmlElement.id==="calendar") {
                // datePicker.value = format(startOfToday(), "yyyy-MM-dd");
                taskDate.textContent =  datePicker.value;
            } else if(htmlElement.id === "due-date") {
                // datePicker.value = format(endOfDay(), "yyyy-MM-dd");
                // datePicker.value = endOfDay(datePicker.value);
                datePicker.value = format(startOfToday(), "yyyy-MM-dd");
                // datePicker.value = endOfDay(new Date(2021,2,20));
                // datePicker.value = endOfDay(new Date());
                taskDue.textContent = datePicker.value;
            }
            // datePicker.value = format(startOfToday(), "yyyy-MM-dd");

        } else {
            datePicker.value = "";
            datePicker.style.display = "none";
        }
    });
}
 *
 *
 function getValuesFromIcons() {
    let calendar =  document.querySelector("#calendar");
    // console.log(calendar);
    calendar.addEventListener("click", () => {
        // console.log("?!");
        let datePicker = document.querySelector("#date-picker");
        if(datePicker.style.display === "none") {
            datePicker.style.display = "block";
            // datePicker.innerHTML = ""
            // console.log(startOfToday());
            // datePicker.value = startOfToday();
            // datePicker.value = "2021-02-20";
            datePicker.value = format(startOfToday(), "yyyy-MM-dd");
        } else {
            datePicker.style.display = "none";
        }

    })
}
 *
 *
 function readyTodoTaskEntry() {
    let addTask = document.querySelector("#show-panel");
    let entryTask = document.querySelector(".task-entry");
    console.log(entryTask, entryTask.style.display ,entryTask.getAttribute("display"));
    addTask.addEventListener("click", () => {
        if(entryTask.style.display === "none") {
            console.log("!!");
            entryTask.style.display = "block";
        } else {
            entryTask.style.display = "none";
            console.log("!?");
        }
        // console.log("??");
        // console.log(entryTask.visibility, window.getComputedStyle(entryTask).visibility)
        // if(window.getComputedStyle(entryTask).visibility === "hidden") {
        //     console.log("!!");
        //     window.getComputedStyle(entryTask).visibility = "visible"
        // } else {
        //     window.getComputedStyle(entryTask).visibility = "hidden";
        //     console.log("!?");
        // }
        // if(entryTask.visibility === "hidden") {
        //     console.log("!!");
        //     entryTask.visibility === "visible"
        // } else {
        //     entryTask.visibility === "hidden"
        //     console.log("!?");
        // }
    });
}
 */

/***/ }),

/***/ "./js/properAttemptForAssignment/addTasks/prioritiyLevels.js":
/*!*******************************************************************!*\
  !*** ./js/properAttemptForAssignment/addTasks/prioritiyLevels.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showPriorities": () => (/* binding */ showPriorities),
/* harmony export */   "showSelectDDElem": () => (/* binding */ showSelectDDElem),
/* harmony export */   "getPrioritySelectedValue": () => (/* binding */ getPrioritySelectedValue),
/* harmony export */   "priorities": () => (/* binding */ priorities)
/* harmony export */ });
let priorities = ["Normal", "Low", "Medium", "High"];
let priorityLevels = document.querySelector("#levels");

function showPriorities() {
    for (let i = 0; i < priorities.length; i++) {
        let option = document.createElement("option");
        option.value = priorities[i];
        option.textContent = priorities[i];
        option.classList.add(priorities[i].toLocaleLowerCase());
        priorityLevels.append(option);
    }
}

function showSelectDDElem() {
    let priority = document.querySelector("#priority");
    priority.addEventListener("click", () => {
        if (priorityLevels.style.display === "none") {
            priorityLevels.style.display = "block";
            // let prLevel = priorityLevels.value;
            // return prLevel;
        } else {
            priorityLevels.style.display = "none";
        }
    });
}

function getPrioritySelectedValue() {
    let prLevel;
    priorityLevels.addEventListener("change", () => {
        prLevel = priorityLevels.value;
    });
    return prLevel;
}




/**
 *
 *
 function showPriorities() {
    // let priorityLevels =  document.querySelector("#levels");
    for(let i=0; i<priorities.length; i++) {
        let option =  document.createElement("option");
        option.value = priorities[i];
        option.textContent = priorities[i];
        // let colorHint = document.createElement("div");
        // colorHint.classList.add("option-elem");
        // option.append(colorHint);
        option.classList.add(priorities[i].toLocaleLowerCase());
        priorityLevels.append(option);
    }
}
 *
 *
 function showSelectDDElem() {
    let priority =  document.querySelector("#priority");
    priority.addEventListener("click", () => {
        // console.log(priorityLevels.style.display, "<>", window.getComputedStyle(priorityLevels).display);
        if(priorityLevels.style.display === "none") {
            // console.log("::")
            priorityLevels.style.display = "block";
            // priorityLevels.style.display = "auto";
        } else {
            // console.log(";;")
            priorityLevels.style.display = "none";
        }
        // if(priorityLevels.style.display === "none") {
        //     // console.log("::")
        //     priorityLevels.style.display === "block";
        // } else {
        //     // console.log(";;")
        //     priorityLevels.style.display === "none";
        // }
        // if(window.getComputedStyle(priorityLevels).display === "none") {
        //     console.log("::", priorityLevels);
        //     window.getComputedStyle(priorityLevels).display === "block";
        // } else {
        //     // console.log(";;")
        //     window.getComputedStyle(priorityLevels).display === "none";
        // }
    });
}
 */

/***/ }),

/***/ "./js/properAttemptForAssignment/groupTasks/byDates.js":
/*!*************************************************************!*\
  !*** ./js/properAttemptForAssignment/groupTasks/byDates.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleDateWiseGrouping": () => (/* binding */ handleDateWiseGrouping),
/* harmony export */   "slipinDateAndText": () => (/* binding */ slipinDateAndText)
/* harmony export */ });
/* harmony import */ var _showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../showTasks/displayTodos.js */ "./js/properAttemptForAssignment/showTasks/displayTodos.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/sub/index.js");



let tasks = [], filteredTasks = [], dateString;
let panelTask = document.querySelector(".panel-text");
let dateStamp = document.querySelector(".date-stamp");

function handleDateWiseGrouping() {
    filteredTasks = [];
    tasks = [];
    let dateTodays = document.querySelector(".today");
    let dateTomorrow = document.querySelector(".tomorrow");
    let dateNextWeek = document.querySelector(".next-week");
    dateTodays.addEventListener("click", showTasks);
    dateTomorrow.addEventListener("click", showTasks);
    dateNextWeek.addEventListener("click", showTasks);
    // displayAllTodoTasks();
    // filteredTasks = [];
}

function showTasks(evt) {
    console.log("here!!", evt.target);
    let parentElement = evt.target.parentNode;
    // filteredTasks = [];
    // keeping an empty array so that each time it refreshes before loading with data from [todos]
    tasks = [];
    if (parentElement.classList.contains("today")) showTodaysTodoTask(evt);
    if (parentElement.classList.contains("tomorrow")) showTomorrowsTodoTask(evt);
    if (parentElement.classList.contains("next-week")) showNextWeeksTasks(evt);
    // displayAllTodoTasks();
}

function slipinDateAndText(dateString, dateText) {
    panelTask.textContent = dateText;
    dateStamp.textContent = dateString;
}

function showTodaysTodoTask(evt) {
    // filteredTasks = [];
    dateString = new Date();
    // adding in tasks panel header for text and date for Days interval from side panel
    let formatedString = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(dateString, "MMM-dd-yyyy' On:'-EEEE");
    slipinDateAndText(formatedString, "Today");
    // console.log(dateString);
    filterTasks(dateString, evt);
    filteringUtility("today");
    // console.log(tasks,filteredTasks);
    (0,_showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__.displayingFiltered)(filteredTasks);
    // just making sure after showing current filtered tasks array gets cleaned up so that when delete functionality kicks in, it doesn't keep older elements in it even though they were deleted
    filteredTasks = [];
}

function showTomorrowsTodoTask(evt) {
    dateString = new Date().setDate(new Date().getDate() + 1);
    // adding in tasks panel header for text and date for Days interval from side panel
    let formatedString = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(dateString, "MMM-dd-yyyy' On:'-EEEE");
    slipinDateAndText(formatedString, "Tomorrow");
    // console.log(dateString);
    filterTasks(dateString, evt);
    filteringUtility("tomorrow");
    // console.log(tasks,filteredTasks);
    (0,_showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__.displayingFiltered)(filteredTasks);
    // just making sure after showing current filtered tasks array gets cleaned up so that when delete functionality kicks in, it doesn't keep older elements in it even though they were deleted
    filteredTasks = [];
}

function showNextWeeksTasks(evt) {
    dateString = new Date();
    // adding in tasks panel header for text and date for Days interval from side panel
    let formatedString = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(dateString, 7), "MMM-dd-yyyy' On:'-EEEE");
    slipinDateAndText(formatedString, "Next Week");
    // console.log(dateString);
    filterTasks(dateString, evt);
    // filteredTasks = [];
    filteringUtility("next_week");
    // console.log(tasks,filteredTasks);
    (0,_showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__.displayingFiltered)(filteredTasks);
    // just making sure after showing current filtered tasks array gets cleaned up so that when delete functionality kicks in, it doesn't keep older elements in it even though they were deleted
    filteredTasks = [];
}

function filteringUtility(filterString) {
    tasks.forEach(item => {
        for (let key in item) {
            if (key === filterString) {
                filteredTasks.push(item[filterString]);
                console.log("Filtered::", filteredTasks);
            }
        }
    });
}

function filterTasks(dateString, evt) {
    _showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.forEach(item => {
        let dueDate = item.domElem.querySelector("#task-dd-" + item.id);
        let dateCheck = dueDate.textContent.split(":")[0];
        let formatCheck = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(dateString, "MM-dd-yyyy");
        // console.log(dateCheck, formatCheck, dateCheck === formatCheck);
        let checkWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(new Date(dateCheck), { days: 7 }), "MM-dd-yyyy");
        // console.log(checkWeek, checkWeek >= formatCheck);

        // previously it wasn't updating for [todos] element rather only for [tasks], which was resulting in not updating correct Todo List per Date Group wise
        // now as it's been also recorde after each change, its getting recorded in [todos] as well, so filtering happens effeciently as expected
        item.dueDate = formatCheck;
        // also clearing out [filteredTasks] so that each event gets a fresh array to begin with and render tasks in it
        filteredTasks = [];
        // tasks = [];
        if (checkWeek >= formatCheck) {
            if (evt.target.parentNode.classList.contains("next-week")) {
                tasks.push({ next_week: item });
            };
        } else if (dateCheck === formatCheck) {
            //     // console.log(evt.target.parentNode);
            if (evt.target.parentNode.classList.contains("today")) {
                tasks.push({ today: item });
            } else if (evt.target.parentNode.classList.contains("tomorrow")) {
                tasks.push({ tomorrow: item });
            }
        }
    });
}

// export { handleDateWiseGrouping }


/**
 * 
 * 
 function filteringUtility(filterString) {
    // tasks.filter(item=> item)
    tasks.forEach(item => {
        for (let key in item) {
            // console.log(key, item[key]);
            if (key === filterString) {
                // filteredTasks = [];
                filteredTasks.push(item[filterString]);
                console.log("Filtered::", filteredTasks);
            }
        }
    });
}
 * 
 * 
 function filterTasks(dateString, evt) {
    todos.forEach(item => {
        let dueDate = item.domElem.querySelector("#task-dd-" + item.id);
        let dateCheck = dueDate.textContent.split(":")[0];
        let formatCheck = format(dateString, "MM-dd-yyyy");
        // console.log(dateCheck, formatCheck, dateCheck === formatCheck);
        let checkWeek = format(sub(new Date(dateCheck), { days: 7 }), "MM-dd-yyyy");
        // console.log(checkWeek, checkWeek >= formatCheck);

        // previously it wasn't updating for [todos] element rather only for [tasks], which was resulting in not updating correct Todo List per Date Group wise
        // now as it's been also recorde after each change, its getting recorded in [todos] as well, so filtering happens effeciently as expected
        item.dueDate = formatCheck;
        // also clearing out [filteredTasks] so that each event gets a fresh array to begin with and render tasks in it
        filteredTasks = [];
        // tasks = [];
        if (checkWeek >= formatCheck) {
            if (evt.target.parentNode.classList.contains("next-week")) {
                // filteredTasks = [];
                // tasks = [];
                // item.dueDate = formatCheck;
                tasks.push({ next_week: item });
            };
        } else if (dateCheck === formatCheck) {
            //     // console.log(evt.target.parentNode);
            if (evt.target.parentNode.classList.contains("today")) {
                // item.dueDate = formatCheck;
                // tasks = [];
                tasks.push({ today: item });
            }
            else if (evt.target.parentNode.classList.contains("tomorrow")) {
                // item.dueDate = formatCheck;
                // tasks = [];
                tasks.push({ tomorrow: item });
            }
        }

        // if (checkWeek >= formatCheck) {
        //     if (evt.target.parentNode.classList.contains("next-week")) tasks.push({ next_week: item });
        // } else if (dateCheck === formatCheck) {
        //     //     // console.log(evt.target.parentNode);
        //     if (evt.target.parentNode.classList.contains("today")) tasks.push({ today: item });
        //     else if (evt.target.parentNode.classList.contains("tomorrow")) tasks.push({ tomorrow: item });
        // }
    });
}
 *
 *
 function filterTasks(dateString, evt) {
    todos.forEach(item => {
        let dueDate = item.domElem.querySelector("#task-dd-"+item.id);
        let dateCheck = dueDate.textContent.split(":")[0];
        let formatCheck = format(dateString, "MM-dd-yyyy");
        // console.log(dateCheck, formatCheck, dateCheck === formatCheck);
        let checkWeek = format(sub(new Date(dateCheck), {days:7}), "MM-dd-yyyy");

        console.log(checkWeek, checkWeek >= formatCheck);
        if(dateCheck === formatCheck) {
        //     // console.log(evt.target.parentNode);
            if(evt.target.parentNode.classList.contains("today")) tasks.push({today:item});
            else if(evt.target.parentNode.classList.contains("tomorrow")) tasks.push({tomorrow:item});
        //     else if(evt.target.parentNode.classList.contains("next-week")) tasks.push({next_week:item});
        }
        else if(checkWeek >= formatCheck) {
            if(evt.target.parentNode.classList.contains("next-week")) tasks.push({next_week:item});
        }
    });
}
 *
 *
 function filterTasks(dateString, evt) {
    todos.forEach(item => {
        let dueDate = item.domElem.querySelector("#task-dd-"+item.id);
        // console.log(dueDate.textContent.split(":")[0]);
        let dateCheck = dueDate.textContent.split(":")[0];
        // dateCheck = format(dateCheck, "MM-dd-yyyy");
        // dateCheck = format(parseISO(dateCheck), "MM-dd-yyyy");
        // let formatCheck = format(parseISO(dateCheck), "MM-dd-yyyy");
        // let formatCheck = format(dateString, "yyyy-MM-dd");
        let formatCheck = format(dateString, "MM-dd-yyyy");
        console.log(dateCheck, formatCheck, dateCheck === formatCheck);
        if(dateCheck === formatCheck) {
            console.log(evt.target.parentNode);
            if(evt.target.parentNode.classList.contains("today")) tasks.push({today:item});
            else if(evt.target.parentNode.classList.contains("tomorrow")) tasks.push({tomorrow:item});
            else if(evt.target.parentNode.classList.contains("next-week")) tasks.push({next_week:item});
        }
    });
}
 *
 *
 function showTodaysTodoTask(evt) {
    // dateString =  format(new Date(), "MM-dd-yyyy");
    dateString = new Date();
    // filterTasks(dateString);
    filterTasks(dateString, evt);
    // console.log(tasks);
    displayingFiltered(tasks);
    filteringUtility("today");
    // console.log(tasks,filteredTasks);
    displayingFiltered(filteredTasks);
}

function showTomorrowsTodoTask(evt) {
    dateString = new Date().setDate(new Date().getDate()+1);
    // console.log(dateString);
    filterTasks(dateString, evt);
    filteringUtility("tomorrow");
    // console.log(tasks,filteredTasks);
    displayingFiltered(filteredTasks);
}
 *
 *
 function filterTasks(evt) {
    todos.forEach(item => {
        let dueDate = item.domElem.querySelector("#task-dd-"+item.id);
        // console.log(dueDate.textContent.split(":")[0]);
        let dateCheck = dueDate.textContent.split(":")[0];
        // let formatCheck = format(parseISO(dateCheck), "MM-dd-yyyy");
        let formatCheck = format(new Date(), "yyyy-MM-dd");
        // console.log(dateCheck, formatCheck, dateCheck === formatCheck);
        if(dateCheck === formatCheck) tasks.push(item);
    });
}
 */

/***/ }),

/***/ "./js/properAttemptForAssignment/groupTasks/byName.js":
/*!************************************************************!*\
  !*** ./js/properAttemptForAssignment/groupTasks/byName.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupTodosByProjects": () => (/* binding */ groupTodosByProjects),
/* harmony export */   "groupifyTasks": () => (/* binding */ groupifyTasks),
/* harmony export */   "showGroupifiedProjectTodos": () => (/* binding */ showGroupifiedProjectTodos),
/* harmony export */   "uniqueArray": () => (/* binding */ uniqueArray),
/* harmony export */   "filteredTasks": () => (/* binding */ filteredTasks),
/* harmony export */   "afterDeleteFromProjects": () => (/* binding */ afterDeleteFromProjects)
/* harmony export */ });
/* harmony import */ var _showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../showTasks/displayTodos.js */ "./js/properAttemptForAssignment/showTasks/displayTodos.js");

let groupifyTasks = [];
let filteredTasks, uniqueArray = [];
function groupTodosByProjects() {
    // displayAllTodoTasks();
    _showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.forEach(item => {
        console.log("[]",item.projectName);
        if(item.projectName !== null ) {
            let check = sanityCheck(item.id);
            if(check) groupifyTasks.push(item);
            // console.log("gr:", groupifyTasks);
        }
    });
}

function sanityCheck(taskID) {
    // groupifyTasks.map(item => item.byName.id === taskID ? false : true);
    // return groupifyTasks.map(item => item.byName.id === taskID ? false : true);
    return groupifyTasks.map(item => item.id === taskID ? false : true);
}

function showGroupifiedProjectTodos(projectName) {
    uniqueArray = groupifyTasks.filter((obj, idx) => {
        let _obj = JSON.stringify(obj);
        return idx === groupifyTasks.findIndex(obj => {
            return JSON.stringify(obj) === _obj;
        });
    });
    // console.log("{}", uniqueArray);
    // filteredTasks = uniqueArray.filter(item => item.projectName === projectName);
    filteredTasks = uniqueArray.filter(item => {
        console.log(item.projectName, projectName, item.projectName === projectName)
        return item.projectName === projectName
    });
    // console.log(filteredTasks, uniqueArray);
    // console.log("!!",filteredTasks, projectName, groupifyTasks);
    return filteredTasks;
}

// it runs after a task is removed from list, it tries to repain all existing filtered items after deletion
function afterDeleteFromProjects(id, projectName) {
    console.log("b:",filteredTasks);
    // filteredTasks = filteredTasks.filter(item => item.id !== id);
    // runnig this function so that filters has values, as it throwed exception for it
    showGroupifiedProjectTodos(projectName);
    // let revisedFiltered = filteredTasks.filter(item => item.id !== id);
    filteredTasks = filteredTasks.filter(item => item.id !== id);
    console.log("a:",filteredTasks);
    // console.log("a:",filteredTasks, revisedFiltered);
    // displayAllTodoTasks();
    (0,_showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__.displayingFiltered)(filteredTasks);
    // displayingFiltered(revisedFiltered);
}



/**
 * 
 * 
 function groupTodosByProjects() {
    todos.forEach(item => {
        console.log("[]",item.projectName);
        if(item.projectName !== null ) {
            let check = sanityCheck(item.id);
            if(check) groupifyTasks.push(item);
            // groupifyTasks =  groupifyTasks[0];
            // let check = sanityCheck(item.id, item.projectName);
            // console.log("istrue:",check);
            // if(check) groupifyTasks.push({byName: item});
            // if(check) groupifyTasks.push({[item.projectName]: item});
        }
    });
}

// function sanityCheck(taskID, pName) {
//     // groupifyTasks.map(item => item.byName.id === taskID ? false : true);
//     // return groupifyTasks.map(item => item["pName"].id === taskID ? false : true);
//     return groupifyTasks.map(item => item[pName].id === taskID ? false : true);
// }

function sanityCheck(taskID) {
    // groupifyTasks.map(item => item.byName.id === taskID ? false : true);
    // return groupifyTasks.map(item => item.byName.id === taskID ? false : true);
    return groupifyTasks.map(item => item.id === taskID ? false : true);
}

// groupifyTasks.filter((obj, idx, self) => {
//     idx === self.findIndex(el => (
//         el.id === obj.id && el.projectName === obj.projectName
//     ))
// });

// console.log("{}", groupifyTasks);

function showGroupifiedProjectTodos(projectName) {
    // groupifyTasks.filter((obj, idx, self) => {
    //     idx === self.findIndex(el => (
    //         el.id === obj.id && el.projectName === obj.projectName
    //     ))
    // });

    let uniqueArray = groupifyTasks.filter((obj, idx) => {
        let _obj = JSON.stringify(obj);
        return idx === groupifyTasks.findIndex(obj => {
            return JSON.stringify(obj) === _obj;
        });
    });
    // console.log("{}", uniqueArray);

    // let filteredTasks = groupifyTasks.filter(item => item.projectName === projectName);
    let filteredTasks = uniqueArray.filter(item => item.projectName === projectName);
    console.log("!!",filteredTasks, projectName, groupifyTasks);
}
 * 
 * 
 function groupTodosByProjects() {
    todos.forEach(item => {
        console.log(item.projectName);
        if(item.projectName !== null ) {
            // sanityCheckForPushes(item.projectName);
            // let check = sanityCheckForPushes(item.projectName);
            // groupifyTasks.push({byName: item});
            let check = sanityCheck(item.id);
            console.log("istrue:",check)
            if(check) groupifyTasks.push({byName: item});
            // console.log(groupifyTasks);
        }
    });
}

function sanityCheck(taskID) {
    // groupifyTasks.map(item => item.byName.id === taskID ? false : true);
    return groupifyTasks.map(item => item.byName.id === taskID ? false : true);
}

function sanityCheckForPushes(pName) {
    groupifyTasks.map(item => {
        // console.log("is true: ", item.projectName === pName);
        // item.projectName === pName ? true : false;
        // return item.byName.projectName === pName ? true : false;
        // item.byName.projectName === pName ? true : false;
        // if(item.byName.projectName === pName) return true;
        // if(item.byName.projectName === pName) return false;
        console.log("::",item.byName.projectName.includes(pName));
        if(item.byName.projectName.includes(pName)) return false;
    });
    // return false;
    return true;
}

function showGroupifiedProjectTodos(projectName) {
    // let filteredTasks = groupifyTasks.filter(item => item["byName"] === projectName);
    // let filteredTasks = groupifyTasks.filter(item => item.projectName === projectName);
    // let filteredTasks = groupifyTasks.filter(item => {
    //     item.byName.projectName === projectName;
    //     // console.log("??",item.byName.projectName);
    // });
    // console.log(projectName, groupifyTasks);
    let filteredTasks = groupifyTasks.filter(item => item.byName.projectName === projectName);
    console.log("!!",filteredTasks, projectName, groupifyTasks);
}
 * 
 * 
 // let groupify = [{projectName: null, taskTitle: null, taskID: null}];
let groupify = [];
function groupTodosByProjects(projectName, taskTitle, taskID) {
    groupify.forEach(item => {
        for(let key in item) {
            console.log("<>",key, item[key]);
        }
    });
    // console.log(groupify[0]["projectName"], groupify[0]["taskTitle"]);
    // groupify.push({projectName: projectName, taskTitle: taskTitle});
    // console.log(groupify);
}
 * 
 * 
 function groupTodosByProjects(projectName, taskTitle) {
    groupify = [];
    groupify.push({projectName: projectName, taskTitle: taskTitle});
    console.log(groupify);
}
 */

/***/ }),

/***/ "./js/properAttemptForAssignment/init.js":
/*!***********************************************!*\
  !*** ./js/properAttemptForAssignment/init.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayingProjects": () => (/* binding */ displayingProjects),
/* harmony export */   "readyGroupingsWiseDisplays": () => (/* binding */ readyGroupingsWiseDisplays),
/* harmony export */   "handleGroupedProjectsTask": () => (/* binding */ handleGroupedProjectsTask)
/* harmony export */ });
/* harmony import */ var _properAttemptForAssignment_projectNames_showNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../properAttemptForAssignment/projectNames/showNames.js */ "./js/properAttemptForAssignment/projectNames/showNames.js");
/* harmony import */ var _properAttemptForAssignment_groupTasks_byName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../properAttemptForAssignment/groupTasks/byName.js */ "./js/properAttemptForAssignment/groupTasks/byName.js");
/* harmony import */ var _properAttemptForAssignment_showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../properAttemptForAssignment/showTasks/displayTodos.js */ "./js/properAttemptForAssignment/showTasks/displayTodos.js");
/* harmony import */ var _properAttemptForAssignment_groupTasks_byDates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../properAttemptForAssignment/groupTasks/byDates.js */ "./js/properAttemptForAssignment/groupTasks/byDates.js");
/* harmony import */ var _properAttemptForAssignment_searchTasks_byName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../properAttemptForAssignment/searchTasks/byName.js */ "./js/properAttemptForAssignment/searchTasks/byName.js");





let projectsDiv = document.querySelector(".projects");

/**
 * this will repaint entire Project Names List into DOM each time a new Names get added
 */
function displayingProjects() {
    projectsDiv.childNodes.forEach(node => node.remove());
    // projectsDiv.childNodes.forEach(node => node.innerHTML = "");
    projectsDiv.append((0,_properAttemptForAssignment_projectNames_showNames_js__WEBPACK_IMPORTED_MODULE_0__.showNames)());
    // console.log(showNames());
}

/**
 * all grouped wise Displays callled here
 */
function readyGroupingsWiseDisplays() {
    (0,_properAttemptForAssignment_showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_2__.displayAllTodoTasks)();
    showTodosByProjects();
    (0,_properAttemptForAssignment_groupTasks_byDates_js__WEBPACK_IMPORTED_MODULE_3__.handleDateWiseGrouping)();
    (0,_properAttemptForAssignment_searchTasks_byName_js__WEBPACK_IMPORTED_MODULE_4__.findTasksByName)();
}

function showTodosByProjects() {
    projectsDiv.firstChild.childNodes.forEach(item => {
        // this was making it to call twice,, peerhaps for delegation maybe
        // item.addEventListener("click", evt => handleGroupedProjectsTask(evt));
        
        // this solved it that issue of getting called twice, just needed to pass on function name rather than delegate it for this event
        item.addEventListener("click", handleGroupedProjectsTask);
    });
}

function handleGroupedProjectsTask(evt) {
    let divText = evt.target.textContent;
    let filteredTasks = (0,_properAttemptForAssignment_groupTasks_byName_js__WEBPACK_IMPORTED_MODULE_1__.showGroupifiedProjectTodos)(divText);
    // console.log("length:", filteredTasks.length);
    if (_properAttemptForAssignment_showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_2__.todos.length !== 0 && filteredTasks.length !== 0) {
        // Tasks Panel Header Captioning
        (0,_properAttemptForAssignment_groupTasks_byDates_js__WEBPACK_IMPORTED_MODULE_3__.slipinDateAndText)("", divText);
        // displaying tasks after filtering by Project Names from List
        (0,_properAttemptForAssignment_showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_2__.displayingFiltered)(filteredTasks);
    } else {
        alert("no tasks added yet....");
        (0,_properAttemptForAssignment_showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_2__.displayAllTodoTasks)();
    }
}


// export {displayingProjects, readyGroupingsWiseDisplays, displayingProjectsWithEvent, addToProjectsDiv, handleGroupedProjectsTask};
// export default displayingProjects;

/**
 * 
 * 
// this will repaint entire Project Names List into DOM each time a new Names get added
 function displayingProjects() {
    projectsDiv.childNodes.forEach(node => node.remove());
    // projectsDiv.childNodes.forEach(node => node.innerHTML = "");
    projectsDiv.append(showNames());
    // console.log(showNames());
}

function addToProjectsDiv(itemDiv) {
    projectsDiv.append(itemDiv);
}
// this is a new alterntive function that I'm trying to use to attach an event Listener to Project Names after a new Names gets added into that list
// currently when a new name gets added, entire div loses it's EventListeners for some reason I can't yet comprehend why is that.
function displayingProjectsWithEvent(evtHandler,evt) {
    // projectsDiv.childNodes.forEach(node => node.remove());
    projectsDiv.childNodes.forEach(node => node.innerHTML = "");
    let allNames = showNames();
    // allNames.addEventListener("click",evtHandler(evt));
    // allNames.addEventListener("click",evt => evtHandler(evt));
    // allNames.addEventListener("click",evt => evtHandler);
    // allNames.childNodes.forEach(item => {
    //     item.addEventListener("click", evt => evtHandler);
    // });
    allNames.childNodes.forEach(item => {
        item.addEventListener("click", function() {evtHandler});
    });
    console.log("pr::", allNames);
    projectsDiv.append(allNames);
}
 * 
 * 
 function displayingProjects() {
    projectsDiv.childNodes.forEach(node => node.remove());
    // projectsDiv.childNodes.forEach(node => node.innerHTML = "");
    projectsDiv.append(showNames());
    console.log(showNames());
    // showTodosByProjects();
    // handleDateWiseGrouping();
    // findTasksByName();
}
 *
 *
 function displayingProjects() {
    // let projectsDiv = document.querySelector(".projects");
    projectsDiv.childNodes.forEach(node=>node.remove());
    projectsDiv.append(showNames());
    console.log(showNames());
    showTodosByProjects();
}

function showTodosByProjects() {
    // projectsDiv.addEventListener("click", evt => handleGroupedProjectsTask(evt));
    projectsDiv.firstChild.childNodes.forEach(item => {
        // item.addEventListener("click", handleGroupedProjectsTask)
        // console.log("<>",item);
        item.addEventListener("click", evt => handleGroupedProjectsTask(evt));
    });
}

function handleGroupedProjectsTask(evt) {
    // console.log(evt.target.id.startsWith("li-div"), evt.target.id, evt.target);
    let divText = evt.target.textContent;
    // showGroupifiedProjectTodos(divText);
    let filteredTasks = showGroupifiedProjectTodos(divText);
    // console.log("filtered::", filteredTasks);
    // displayingFiltered(filteredTasks);
    console.log("length:", filteredTasks.length);
    if(filteredTasks.length !== 0) {
        displayingFiltered(filteredTasks);
    } else {
        alert("no tasks added yet....");
        displayAllTodoTasks()
    }
}
 *
 *
 function displayingProjects() {
    let projectsDiv = document.querySelector(".projects");
    projectsDiv.childNodes.forEach(node=>node.remove());
    projectsDiv.append(showNames());
    console.log(showNames());
}
 */

/***/ }),

/***/ "./js/properAttemptForAssignment/modifyTodos/edifyTasks.js":
/*!*****************************************************************!*\
  !*** ./js/properAttemptForAssignment/modifyTodos/edifyTasks.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editTodos": () => (/* binding */ editTodos)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../showTasks/displayTodos.js */ "./js/properAttemptForAssignment/showTasks/displayTodos.js");
/* harmony import */ var _priorityColors_colorCoating_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../priorityColors/colorCoating.js */ "./js/properAttemptForAssignment/priorityColors/colorCoating.js");
/* harmony import */ var _groupTasks_byName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../groupTasks/byName.js */ "./js/properAttemptForAssignment/groupTasks/byName.js");
/* harmony import */ var _removeTasks_showDelete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../removeTasks/showDelete.js */ "./js/properAttemptForAssignment/removeTasks/showDelete.js");
// import { startOfSecond, format, parseISO, addDays, parse } from "date-fns/fp";



// import {groupTodosByProjects, groupify} from "../groupTasks/byName.js";


function editTodos() {
    let tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.addEventListener("click", evt => handleModification(evt));
}

// trying to target [domNodes] rather than DOM itself but this wouldn't budge!!
// function editTodos() {
//     displayAllTodoTasks();
//     todos.forEach(item => {
//         // let tasksContainer = item.domElem.querySelector(".tasks-container");
//         let tasksContainer = item.domElem.querySelector(".todo-elem");
//         console.log("??",tasksContainer)
//         tasksContainer.addEventListener("click", evt => handleModification(evt));
//     });
// }

function handleModification(evt) {
    // displayAllTodoTasks();
    handleHighlightingCheckboxDiv(evt);
    if (evt.target.id.startsWith("levels-dd")) handleColorCoatingPriority(evt);
    if (evt.target.id.startsWith("choose-project")) handleProjectTodoTask(evt);
    if (evt.target.id.startsWith("task-dd")) handleTaskDueDate(evt);
    // if (evt.target.id.startsWith("task-dd")) handleTaskDueDate;
    // displayAllTodoTasks();
}

function handleTaskDueDate(evt) {
    // displayAllTodoTasks();
    _showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.forEach(item => {
        // let taskDD = item.domElem.querySelector(".time-stamp");
        let taskDD = item.domElem.querySelector(".due-date");
        taskDD.addEventListener("click", evt => showDatepicker(evt));
    });
}

function showDatepicker(evt) {
    let datePicker = evt.target.parentNode.querySelector("input");
    // console.log(evt.target, datePicker);
    if (datePicker.style.display === "none") {
        datePicker.style.display = "inline-block";
        // datePicker.style.display = "block";
        datePicker.addEventListener("input", evt => {
            let dateValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(datePicker.value), "MM-dd-yyyy");
            evt.target.parentNode.querySelector(".time-stamp").textContent = dateValue + ":" + (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(datePicker.value), "'Due_at:'eeee");
            datePicker.style.display = "none";
            datePicker.removeEventListener("click", showDatepicker);
        });
    } else {
        datePicker.style.display = "none";
        datePicker.removeEventListener("click", showDatepicker);
    }
}

// function handleProjectTodoTask() {
//     todos.forEach(item => {
//         let projectSelect = item.domElem.querySelector("#choose-project-" + item.id);
//         let getProjectName = projectSelect.value;
//         item.projectName = getProjectName;
//         // item.projectName = getProjectName || "Daily Chore";
//         // console.log("pN:", item.projectName);
//         groupTodosByProjects();
//     });
// }

function handleProjectTodoTask(evt) {
    _showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.forEach(item => {
        let projectSelect = item.domElem.querySelector("#choose-project-" + item.id);
        let getProjectName = projectSelect.value;
        item.projectName = getProjectName;
        // item.projectName = getProjectName || "Daily Chore";
        // console.log("pN:", item.projectName);
        (0,_groupTasks_byName_js__WEBPACK_IMPORTED_MODULE_2__.groupTodosByProjects)();
    });
}

function handleColorCoatingPriority(evt) {
    let ddValue = evt.target.value;
    let divID = evt.target.id;
    let taskID = divID.split("-")[2];
    // console.log(ddValue, divID);
    _showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.forEach(item => {
        // console.log(item.id, taskID, Number(taskID), item.id === taskID, item.id === Number(taskID));
        if(item.id === Number(taskID)) {
            item.priorityLevel = ddValue;
        }
    });
    // coloringPrioritiesFromDD(ddValue);
    (0,_priorityColors_colorCoating_js__WEBPACK_IMPORTED_MODULE_1__.coloringPrioritiesFromDD)(ddValue, divID);
}

function handleHighlightingCheckboxDiv(evt) {
    // previously it wasn't pointing to seelected element because all id's were same and it used to matchees with first found match
    // and now after modifying our htmlFragment for each task for checklist-div id with id number appended after making it unique for DOM
    if (evt.target.id.startsWith("task-check")) {
        if (evt.target.parentNode.className === "checklist-div") {
            evt.target.parentNode.classList.add("highlight-check");
            // targeting .todo-elem
            evt.target.parentNode.parentNode.parentNode.classList.add("strike-through");
            // showing Delete After Strikethrough
            (0,_removeTasks_showDelete_js__WEBPACK_IMPORTED_MODULE_3__.showDelete)(evt);
        } else {
            evt.target.parentNode.classList.remove("highlight-check");
            // targeting .todo-elem
            evt.target.parentNode.parentNode.parentNode.classList.remove("strike-through");
            (0,_removeTasks_showDelete_js__WEBPACK_IMPORTED_MODULE_3__.hideDelete)();
        }
    }
}



/**
 * this highlight both first and any other element which is clciked from list of tasks!!
 * except for first element, in that case it needs be clicked outside of checklist-div
 */
// function editTodos() {
//     document.querySelector(".tasks-container")
//     .addEventListener("click", evt => {
//         if(evt.target.closest("div")) {
//             evt.stopPropagation();
//             if(evt.target.parentNode.classList.contains("highlight-check","label")) {
//                 evt.target.parentNode.classList.remove("highlight-check", "label");
//             } else {
//                 evt.target.parentNode.classList.add("highlight-check", "label");
//             }
//         }
//     });
// }
/**
 * 
 * 
 // function handleColorCoatingPriority(evt) {
//     let ddValue = evt.target.value;
//     let divID = evt.target.id;
//     // console.log(ddValue, divID);
//     // coloringPrioritiesFromDD(ddValue);
//     coloringPrioritiesFromDD(ddValue, divID);
// }
 *
 *
 function showDatepicker(evt) {
    let datePicker = evt.target.parentNode.querySelector("input");
    // console.log(evt.target, datePicker);
    if (datePicker.style.display === "none") {
        datePicker.style.display = "inline-block";
        // datePicker.style.display = "block";
        datePicker.addEventListener("input", evt => {
            // console.log(datePicker.value, typeof datePicker.value, new Date(datePicker.value));
            // let result = parse(datePicker.value, "MM/dd/yyyy", new Date());
            // console.log("result:",result);

            let dateValue = format(parseISO(datePicker.value), "MM-dd-yyyy");
            // console.log("Date:", dateValue);

            // evt.target.parentNode.querySelector(".time-stamp").textContent = datePicker.value +":\t"+ format(parseISO(datePicker.value), "'Due_at:'eeee");
            evt.target.parentNode.querySelector(".time-stamp").textContent = dateValue +":"+ format(parseISO(datePicker.value), "'Due_at:'eeee");
            datePicker.style.display = "none";
            datePicker.removeEventListener("click", showDatepicker);
        });
    } else {
        datePicker.style.display = "none";
        datePicker.removeEventListener("click", showDatepicker);
    }
}
 *
 *
 function showDatepicker(evt) {
    let datePicker = evt.target.parentNode.querySelector("input");
    // console.log(evt.target, datePicker);
    if (datePicker.style.display === "none") {
        datePicker.style.display = "inline-block";
        // datePicker.style.display = "block";
        datePicker.addEventListener("input", evt => {
            // evt.target.parentNode.querySelector(".time-stamp").textContent = datePicker.value;
            // evt.target.parentNode.querySelector(".time-stamp").textContent = format(new Date(datePicker.value), "Due Date:'eeee'");
            // evt.target.parentNode.querySelector(".time-stamp").textContent = format(Date.parse(datePicker.value), "Due Date:'eeee'");
            // evt.target.parentNode.querySelector(".time-stamp").textContent = format(new Date().setDate(new Date(Date.parseISO(datePicker.value))), "Due Date:'eeee'");
            // evt.target.parentNode.querySelector(".time-stamp").textContent = new Date(datePicker.value);
            // evt.target.parentNode.querySelector(".time-stamp").textContent = format(new Date(datePicker.value).toString(), "'created at:'eeee");
            // evt.target.parentNode.querySelector(".time-stamp").textContent = format(new Date(parseISO(datePicker.value)), "'created at:'eeee");
            // evt.target.parentNode.querySelector(".time-stamp").textContent = format(new Date(datePicker.value), "yyyy-MM-dd");
            // evt.target.parentNode.querySelector(".time-stamp").textContent = format((parseISO(datePicker.value), "yyyy-MM-dd"), "eeee");
            // evt.target.parentNode.querySelector(".time-stamp").textContent = addDays(parseISO('2016-01-01'), 0);
            // evt.target.parentNode.querySelector(".time-stamp").textContent = addDays(new Date(parseISO(2016,01,01)), 0);
            // evt.target.parentNode.querySelector(".time-stamp").textContent = addDays(new Date(2016,01,01), 0);
            // evt.target.parentNode.querySelector(".time-stamp").textContent = format(new Date(Date.parse("01/01/2021")), "MMMM-d-yy");
            evt.target.parentNode.querySelector(".time-stamp").textContent = "Due Date:"+datePicker.value;
            // evt.target.parentNode.querySelector(".time-stamp").textContent = "Due Date:"+format(new Date(datePicker.value), "eeee");
            datePicker.style.display = "none";
            datePicker.removeEventListener("click", showDatepicker);
        });
    } else {
        datePicker.style.display = "none";
        datePicker.removeEventListener("click", showDatepicker);
    }
}
 *
 *
 function handleProjectTodoTask(evt) {
    let idCurated = evt.target.id.split("-")[2];
    // groupify = [];
    todos.forEach(item => {
        let projectSelect = item.domElem.querySelector("#choose-project-"+item.id);
        let getProjectName =  projectSelect.value;
        item.projectName = getProjectName;
        // projectSelect.value = projectSelect.options[projectSelect.selectedIndex];
        // projectSelect.value = getProjectName;

        let taskNode = projectSelect.parentNode.parentNode.parentNode;
        let taskTitle = taskNode.querySelector(".task-text").textContent;
        let isTrue = checkGroupify(idCurated);
        console.log("true::",isTrue);
        if(isTrue) groupify.push({projectName:getProjectName, taskTitle:taskTitle, taskID: idCurated});
        groupTodosByProjects(getProjectName, taskTitle, idCurated);
    });
}

function checkGroupify(id) {
    groupify.forEach(item => {
        if(item.taskID === id) {
            return false;
        }
        // else {
        //     return true;
        // }
        // return true;
    });
    return true;
}
 *
 *
 function handleProjectTodoTask(evt) {
    let idCurated = evt.target.id.split("-")[2];
    // groupify = [];
    todos.forEach(item => {
        let itemProjectName = item.domElem.querySelector("#choose-project-"+item.id);
        let getProjectName =  itemProjectName.value;

        let taskNode = itemProjectName.parentNode.parentNode.parentNode;
        let taskTitle = taskNode.querySelector(".task-text").textContent;
        groupify.push({projectName:getProjectName, taskTitle:taskTitle, taskID: idCurated})
        groupTodosByProjects(getProjectName, taskTitle, taskID);
    });
}
 *
 *
 function handleProjectTodoTask(evt) {
    // console.log("changed!!");
    let idCurated = evt.target.id.split("-")[2];
    // console.log(idCurated);
    todos.forEach(item => {
        // console.log(item.id);
        let itemProjectName = item.domElem.querySelector("#choose-project-"+item.id);
        console.log(itemProjectName);
        let getProjectName =  itemProjectName.value;
        // console.log(getProjectName);
        // itemProjectName.value = getProjectName;
        // console.log(itemProjectName);
        // let taskNode = item.domElem.querySelector("#todo-elem-"+item.id);

        let taskNode = itemProjectName.parentNode.parentNode.parentNode;
        // console.log(taskNode);
        let taskTitle = taskNode.querySelector(".task-text").textContent;
        // console.log(taskTitle, getProjectName);
        groupTodosByProjects(getProjectName, taskTitle);

    });
}
 *
 *
 function handleProjectTodoTask(evt) {
    // console.log("changed!!");
    let idCurated = evt.target.id.split("-")[2];
    // console.log(idCurated);
    todos.forEach(item => {
        console.log(item.id);
        if(item.id === idCurated) {
            console.log(item.id, idCurated);
        }
    });
}
 *
 *
 function handleHighlightCheckboxDiv(evt) {
    // previously it wasn't pointing to seelected element because all id's were same and it used to matchees with first found match
    // and now after modifying our htmlFragment for each task for checklist-div id with id number appended after making it unique for DOM
    if (evt.target.id.startsWith("task-check")) {
        if (evt.target.parentNode.className === "checklist-div") {
            // evt.target.parentNode.parentNode.classList.add("highlight-check");
            evt.target.parentNode.classList.add("highlight-check");
            // evt.target.parentNode.parentNode.classList.add("strike-through");
            evt.target.parentNode.parentNode.parentNode.classList.add("strike-through");
        } else {
            evt.target.parentNode.classList.remove("highlight-check");
            // evt.target.parentNode.parentNode.classList.remove("strike-through");
            evt.target.parentNode.parentNode.parentNode.classList.remove("strike-through");
        }
    }
}
 *
 *
 function editTodos() {
    let tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.addEventListener("click", evt => {
        // previously it wasn't pointing to seelected element because all id's were same and it used to matchees with first found match
        // and now after modifying our htmlFragment for each task for checklist-div id with id number appended after making it unique for DOM
        if (evt.target.id.startsWith("task-check")) {
            evt.stopPropagation();
            console.log("it's here!!");
            evt.stopImmediatePropagation();
            if(evt.target.parentNode.className === "checklist-div") {
                evt.target.parentNode.classList.add("highlight-check");
            } else {
                evt.target.parentNode.classList.remove("highlight-check");
            }
        }
    });
}
 *
 *
 function editTodos() {
    let tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.addEventListener("click", evt => {
        if (evt.target.id === "task-check") {
            evt.stopPropagation();
            console.log("it's here!!");
            evt.stopImmediatePropagation();
            if(evt.target.parentNode.className === "checklist-div") {
                evt.target.parentNode.classList.add("highlight-check");
            } else {
                evt.target.parentNode.classList.remove("highlight-check");
            }
        }
    });
}
 *
 *
 function editTodos() {
    document.querySelector(".tasks-container")
    .addEventListener("click", evt => {
        if(evt.target.closest("div")) {
            evt.stopPropagation();
            if(evt.target.parentNode.classList.contains("highlight-check","label")) {
                evt.target.parentNode.classList.remove("highlight-check", "label");
            } else {
                evt.target.parentNode.classList.add("highlight-check", "label");
            }
        }
    });
}
 *
 *
 function editTodos() {
    let tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.addEventListener("click", evt => {
        if (evt.target.id === "task-check") {
            evt.stopPropagation();
            console.log(evt.target.id, evt.target.parentNode.className);
            if(evt.target.parentNode.className === "checklist-div") {
                console.log("::::");
                // evt.target.classList.add("highlight-check", "label");
                // evt.target.parentNode.classList.add("highlight-check", "label");
                evt.target.parentNode.classList.add("highlight-check");
            } else {
                // evt.target.classList.remove("highlight-check", "label")
                // evt.target.parentNode.classList.remove("highlight-check", "label")
                evt.target.parentNode.classList.remove("highlight-check");
            }
        }
    })
}
 *
 *
 function editTodos() {
    let container = document.querySelector(".tasks-container");
    container.addEventListener("click", evt => {
        todos.forEach(item => {
            // console.log(item.domElem, item.domElem.id, item.domElem.querySelector("#task-check"));
            let check = item.domElem.querySelector("#task-check");
            check.addEventListener("click", ev => {
                if(evt.target.id === "task-check" && ev.target.id === "task-check") {
                    console.log("??", evt.target.id, ev.target.id)
                }
            });
            // item.domElem.querySelector("#check-task")
            // .addEventListener("click", evt => {
            //     console.log(evt.target);
            // })
        })
    })
}
 *
 *
 function editTodos() {
    let tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.addEventListener("click", evt => {
        // evt.stopPropagation();
        todos.forEach(item => {
            // let elems = item.target.querySelector(".todo-elem");
            console.log("elem::", item.domElem);
            // evt.stopPropagation();
            // console.log(evt.target.parentNode.parentNode.parentNode.id, item.id);
            if(evt.target.parentNode.parentNode.parentNode.id === item.id) {
                evt.stopPropagation();
                console.log("elem::", item);
            }
        });
    });
}
 *
 *
 function editTodos() {
    document.querySelector(".tasks-panel")
    .addEventListener("click", evt => {
        // evt.stopImmediatePropagation();
        // evt.stopPropagation();
        if(evt.target.parentNode.classList.contains("checklist-div")) {
            evt.stopPropagation();
            console.log(evt.target.id);
            if(evt.target.parentNode.classList.contains("highlight-check","label")) {
                // evt.target.style.backgroundColor = "yellowgreen";
                evt.target.parentNode.classList.remove("highlight-check", "label");
            } else {
                evt.target.parentNode.classList.add("highlight-check", "label");
            }
        }
    });
}
 *
 *
 function editTodos() {
    document.querySelector(".tasks-panel")
    .addEventListener("click", evt => {
        // evt.stopImmediatePropagation();
        // evt.stopPropagation();
        if(evt.target.closest("div")) {
            evt.stopPropagation();
            console.log(evt.target.id);
            if(evt.target.parentNode.classList.contains("highlight-check","label")) {
                // evt.target.style.backgroundColor = "yellowgreen";
                evt.target.parentNode.classList.remove("highlight-check", "label");
            } else {
                evt.target.parentNode.classList.add("highlight-check", "label");
            }
        }
    });
}
 *
 *
 function editTodos() {
    document.querySelector(".tasks-panel")
    .addEventListener("click", evt => {
        // evt.stopImmediatePropagation();
        // evt.stopPropagation();
        if(evt.target.closest("div")) {
            evt.stopPropagation();
            console.log(evt.target.id);
            if(evt.target.parentNode.classList.contains("highlight-check","label")) {
                evt.target.style.backgroundColor = "#fff";
                evt.target.parentNode.classList.remove("highlight-check", "label");
            } else {
                // evt.target.style.backgroundColor = "black";
                // evt.target.closest("div").classList.add("highlight-check");
                evt.target.parentNode.classList.add("highlight-check", "label");
            }
        }
    });
}
 *
 *
 function editTodos() {
    document.querySelector(".tasks-panel")
    // window.document
    .addEventListener("click", evt => {
        // evt.stopPropagation();
        // console.log(evt.target.id, evt.target.parentNode)
        if(evt.target.closest("div")) {
            // evt.stopPropagation();
            // console.log(evt.target.id, evt.target.patrentNode.parentNode.id);
            console.log(evt.target.id);
            evt.target.style.backgroundColor = "black"
        }
    });
}
 *
 *
 function editTodos() {
    let tasksContainer = document.querySelector(".tasks-container");
    // let tasksContainer = document.querySelector(".todo-elem");
    // console.log("tasks container");
    tasksContainer.addEventListener("click", evt => {
        // console.log("tasks container");
        evt.stopPropagation();
        console.log(evt.target.id)
        // if(evt.target.id === "task-check") checkDiv(evt);
        if(evt.target.id === "task-check") {
            // checkDiv(evt);
            // evt.stopPropagation();
            checkDiv(evt);
        }
    });
}

function checkDiv(evt) {
    // evt.stopPropagation();
    todos.forEach(item => {
        console.log("checkDiv", item.id, evt.target.parentNode.id);
        if(item.id === evt.target.parentNode.id) {
            console.log("checkDiv");
            // evt.stopPropagation();
            item.querySelector("#task-check").style.backgroundColor = "black";
        }
    });
}
 */

/***/ }),

/***/ "./js/properAttemptForAssignment/priorityColors/colorCoating.js":
/*!**********************************************************************!*\
  !*** ./js/properAttemptForAssignment/priorityColors/colorCoating.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "priorityLevelsColorCoating": () => (/* binding */ priorityLevelsColorCoating),
/* harmony export */   "coloringPrioritiesFromDD": () => (/* binding */ coloringPrioritiesFromDD)
/* harmony export */ });
/* harmony import */ var _showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../showTasks/displayTodos.js */ "./js/properAttemptForAssignment/showTasks/displayTodos.js");

function priorityLevelsColorCoating() {
    _showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.forEach(item => {
        // console.log("<>",item.domElem, item.domElem.querySelector(".task-project"));
        let prLvl = item.domElem.querySelector(".priority-level");
        // prLvl.style.backgroundColor = "aqua";
        colorCodes(item.priorityLevel, prLvl);
    });
}

function coloringPrioritiesFromDD(selectedDD, ID) {
    _showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.forEach(item => {
        let prColoringDiv = item.domElem.querySelector(".priority-level");
        let taskID = ID.split("-")[2];
        console.log("ID:", taskID, item.id, typeof taskID, typeof item.id);
        if(Number(taskID) === item.id) {
            colorCodes(selectedDD, prColoringDiv);
        } 
        else {
            let ddValue = item.domElem.querySelector(".priority-dd select").value;
            colorCodes(ddValue, prColoringDiv);
        }
    });
}

function colorCodes(taskPriority, priorityDiv) {
    switch(taskPriority) {
        case "Normal":
            priorityDiv.style.backgroundColor = "silver";
            break;
        case "Low":
            priorityDiv.style.backgroundColor = "orange";
            break;
        case "Medium":
            priorityDiv.style.backgroundColor = "yellow";
            break;
        case "High":
            priorityDiv.style.backgroundColor = "red";
            break;
        default:
            priorityDiv.style.backgroundColor = "aqua";
    }
}



/**
 * 
 * 
 // function coloringPrioritiesFromDD(selectedDD) {
//     todos.forEach(item => {
//         let prColoringDiv = item.domElem.querySelector(".priority-level")
//         colorCodes(selectedDD, prColoringDiv);
//     });
// }

// function userSelectedPriotiyFromEntryTask() {
//     todos.forEach(item => {
//         let prColoringDiv = item.domElem.querySelector(".priority-level");

//     })
// }
 */

/***/ }),

/***/ "./js/properAttemptForAssignment/projectNames/addProject.js":
/*!******************************************************************!*\
  !*** ./js/properAttemptForAssignment/projectNames/addProject.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addingNewProjectName": () => (/* binding */ addingNewProjectName)
/* harmony export */ });
/* harmony import */ var _projectNames_showNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectNames/showNames.js */ "./js/properAttemptForAssignment/projectNames/showNames.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../init.js */ "./js/properAttemptForAssignment/init.js");
/* harmony import */ var _showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../showTasks/displayTodos.js */ "./js/properAttemptForAssignment/showTasks/displayTodos.js");

// import displayingProjects from "../init.js";
// import {displayingProjects, displayingProjectsWithEvent, addToProjectsDiv} from "../init.js";


let inputElem = document.querySelector("#add-project");
let addBtn = document.querySelector(".project-input button");

function addingNewProjectName() {
    let addNew = document.querySelector(".add-new");
    addNew.addEventListener("click", evt => handleDisplayAddedProjects(evt));
    // displayingProjects();
}

let handleAddNewProject = evt => {
    let newProject = inputElem.value;
    if (newProject !== "") {
        _projectNames_showNames_js__WEBPACK_IMPORTED_MODULE_0__.existingProjects.insert(4, newProject);
        console.log(_projectNames_showNames_js__WEBPACK_IMPORTED_MODULE_0__.existingProjects, newProject);
        inputElem.value = "";
        // this call will repaint all previously existed Todos
        (0,_showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_2__.displayAllTodoTasks)();
        // this call insures each time a new Project Names gets added
        (0,_init_js__WEBPACK_IMPORTED_MODULE_1__.displayingProjects)();
    }
    inputElem.style.display = "none";
    addBtn.style.display = "none";
}

let handleDisplayAddedProjects = evt => {
    if (inputElem.style.display !== "block") {
        inputElem.style.display = "block";
        addBtn.style.display = "block";

        addBtn.addEventListener("click", evt => {
            handleAddNewProject(evt);
        });
    } else {
        inputElem.style.display = "none";
        addBtn.style.display = "none";
        addBtn.removeEventListener("click", handleAddNewProject);
    }
}

Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
}




/**
 * 
 * 
 function addingNewProjectName() {
    let addNew = document.querySelector(".add-new");
    addNew.addEventListener("click", evt => handleDisplayAddedProjects(evt));
    // displayingProjects();
}

let handleAddNewProject = evt => {
    let newProject = inputElem.value;
    if (newProject !== "") {
        existingProjects.insert(4, newProject);
        console.log(existingProjects, newProject);
        inputElem.value = "";
        // this call will repaint all previously existed Todos
        displayAllTodoTasks();
        // this call insures each time a new Project Names gets added
        displayingProjects();
        // addToProjectsDiv(newProject);
    }
    // displayingProjects();
    inputElem.style.display = "none";
    addBtn.style.display = "none";
}

let handleDisplayAddedProjects = evt => {
    if (inputElem.style.display !== "block") {
        inputElem.style.display = "block";
        addBtn.style.display = "block";
        // addBtn.addEventListener("click", evt => handleAddNewProject(evt));
        addBtn.addEventListener("click", evt => {
            handleAddNewProject(evt);
            // displayingProjects();
            // displayingProjectsWithEvent(handleAddNewProject(evt));
            // displayingProjectsWithEvent(handleAddNewProject(evt), evt);
        });
    } else {
        inputElem.style.display = "none";
        addBtn.style.display = "none";
        addBtn.removeEventListener("click", handleAddNewProject);
    }
    // displayingProjects();
}
 * 
 * 
 let handleAddNewProject = evt => {
    let newProject = inputElem.value;
    if (newProject !== "") {
        existingProjects.insert(4, newProject);
        console.log(existingProjects, newProject);
        inputElem.value = "";
        // displayingProjects();
        // displayingProjectsWithEvent(evt);
        // this call will repaint all previously existed Todos
        displayAllTodoTasks();
    }
    inputElem.style.display = "none";
    addBtn.style.display = "none";
}

let handleDisplayAddedProjects = evt => {
    if (inputElem.style.display !== "block") {
        inputElem.style.display = "block";
        addBtn.style.display = "block";
        // addBtn.addEventListener("click", evt => handleAddNewProject(evt));
        addBtn.addEventListener("click", evt => {
            handleAddNewProject(evt);
            // displayingProjectsWithEvent(handleAddNewProject(evt));
            displayingProjectsWithEvent(handleAddNewProject(evt), evt);
        });
        // displayingProjects();
        // displayAllTodoTasks();
        // displayingProjectsWithEvent(evt);
    } else {
        inputElem.style.display = "none";
        addBtn.style.display = "none";
        addBtn.removeEventListener("click", handleAddNewProject);
    }
}
 * 
 * 
 function addingNewProjectName() {
    let addNew = document.querySelector(".add-new");
    // let inputElem = document.querySelector("#add-project");
    // let addBtn = document.querySelector(".project-input button");
    addNew.addEventListener("click", evt => handleDisplayAddedProjects(evt));
}
 *
 *
 function addingNewProjectName() {
    let addNew = document.querySelector(".add-new");
    let inputElem = document.querySelector("#add-project");
    let addBtn = document.querySelector(".project-input button");
    addNew.addEventListener("click", () => {
        if (inputElem.style.display === "none") {
            inputElem.style.display = "block";
            // let newProject = inputElem.value;
            // console.log(newProject, inputElem.value);
            addBtn.style.display = "block";
            addBtn.addEventListener("click", () => {
                let newProject = inputElem.value;
                if (newProject !== "") {
                    existingProjects.insert(4, newProject);
                    console.log(existingProjects, newProject);
                    inputElem.value = "";
                    displayingProjects();
                }
                // else {
                //     alert("Project Name Is Required!!")
                // }
                inputElem.style.display = "none";
                addBtn.style.display = "none";
            });
        } else {
            inputElem.style.display = "none";
            addBtn.style.display = "none";
        }
    });
}
 */

/***/ }),

/***/ "./js/properAttemptForAssignment/projectNames/showDropdowns.js":
/*!*********************************************************************!*\
  !*** ./js/properAttemptForAssignment/projectNames/showDropdowns.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showProjectNamesDD": () => (/* binding */ showProjectNamesDD),
/* harmony export */   "justDropdowns": () => (/* binding */ justDropdowns),
/* harmony export */   "ddForFactoryFunction": () => (/* binding */ ddForFactoryFunction),
/* harmony export */   "justDropdownsWithSelected": () => (/* binding */ justDropdownsWithSelected)
/* harmony export */ });
/* harmony import */ var _projectNames_showNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectNames/showNames.js */ "./js/properAttemptForAssignment/projectNames/showNames.js");

function showProjectNamesDD() {
    let projectDD = document.querySelector(".choose-project");
    for (let i = 0; i < _projectNames_showNames_js__WEBPACK_IMPORTED_MODULE_0__.existingProjects.length; i++) {
        let option = document.createElement("option");
        option.value = _projectNames_showNames_js__WEBPACK_IMPORTED_MODULE_0__.existingProjects[i];
        option.textContent = _projectNames_showNames_js__WEBPACK_IMPORTED_MODULE_0__.existingProjects[i];
        projectDD.append(option);
    }
    // return projectDD;
}

function justDropdowns(projectDD) {
    // let projectDD = document.querySelector(".choose-project");
    for (let i = 0; i < _projectNames_showNames_js__WEBPACK_IMPORTED_MODULE_0__.existingProjects.length; i++) {
        let option = document.createElement("option");
        // option.value =  existingProjects[i];
        // option.textContent = existingProjects[i];
        if (_projectNames_showNames_js__WEBPACK_IMPORTED_MODULE_0__.existingProjects.findIndex(item=>option.value.includes(item)) === -1) {
            option.value = _projectNames_showNames_js__WEBPACK_IMPORTED_MODULE_0__.existingProjects[i];
            option.textContent = _projectNames_showNames_js__WEBPACK_IMPORTED_MODULE_0__.existingProjects[i];
        }
        // console.log("??");
        projectDD.append(option);
    }
}

function justDropdownsWithSelected(projectDropdown, selectedValue) {
    // projectDropdown.options[projectDropdown.selectedIndex].value = selectedValue;
    // projectDropdown.value = selectedValue;
    // projectDropdown = selectedValue;
    // projectDropdown.options[projectDropdown.selectedIndex] = selectedValue;
    // projectDropdown.options[projectDropdown.selectedIndex].text = selectedValue;
    // projectDropdown = projectDropdown.selectedOptions[0].value;
    projectDropdown.selectedOptions[0].value = selectedValue;
}

function ddForFactoryFunction() {
    let fillerOp = document.createElement("select");
    for (let i = 0; i < _projectNames_showNames_js__WEBPACK_IMPORTED_MODULE_0__.existingProjects.length; i++) {
        let option = document.createElement("option");
        option.value = _projectNames_showNames_js__WEBPACK_IMPORTED_MODULE_0__.existingProjects[i];
        option.textContent = _projectNames_showNames_js__WEBPACK_IMPORTED_MODULE_0__.existingProjects[i];
        // console.log("??");
        fillerOp.append(option);
    }
    return fillerOp;
}



/**
 *
 *
 function showProjectNamesDD() {
    let projectDD = document.querySelector("#choose-project");
    for(let i=0; i<existingProjects.length; i++) {
        let optionFragment =  document.createRange();
        let htmlMarkup =  `<option>${existingProjects[i]}</option>`;
        optionFragment.createContextualFragment(htmlMarkup);
        projectDD.append(optionFragment);
    }
}
 */

/***/ }),

/***/ "./js/properAttemptForAssignment/projectNames/showNames.js":
/*!*****************************************************************!*\
  !*** ./js/properAttemptForAssignment/projectNames/showNames.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showNames": () => (/* binding */ showNames),
/* harmony export */   "existingProjects": () => (/* binding */ existingProjects)
/* harmony export */ });
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../init.js */ "./js/properAttemptForAssignment/init.js");

let existingProjects = ["Daily Chores", "Home", "Health", "Work"];

function showNames() {
    let dummyDiv = document.createElement("div");
    for(let i=0; i<existingProjects.length; i++) {
        let liDiv = document.createElement("div");
        // liDiv.id = "li-div-"+i;
        liDiv.classList.add("li-div");
        let firstIcon = document.createElement("img");
        firstIcon.src = "../icons/menu-01.svg";
        firstIcon.classList.add("first-icon", "icons");
        let nameDiv = document.createElement("div");
        nameDiv.textContent = existingProjects[i];
        nameDiv.id = "li-div-"+i;
        nameDiv.classList.add("li-text");
        let secondIcon = document.createElement("img");
        secondIcon.src = "../icons/menu-01.svg";
        secondIcon.classList.add("ending-icon", "icons");
        liDiv.append(firstIcon,nameDiv,secondIcon);
        liDiv.addEventListener("click", _init_js__WEBPACK_IMPORTED_MODULE_0__.handleGroupedProjectsTask);
        dummyDiv.append(liDiv);
    }
    return dummyDiv;
}



// export default showNames;

/**
 * 
 * 
 function showNames() {
    // let projectsDiv = document.querySelector(".projects");
    let divEl = document.createRange();
    for(let i=0; i<existingProjects.length; i++) {
        let liDiv = document.createElement("div");
        liDiv.classList.add("li-div");
        let firstIcon = document.createElement("img");
        firstIcon.src = "../icons/menu-01.svg";
        firstIcon.classList.add("first-icon", "icons");
        let nameDiv = document.createElement("div");
        nameDiv.textContent = existingProjects[i];
        nameDiv.classList.add("li-text");
        let secondIcon = document.createElement("img");
        secondIcon.src = "../icons/menu-01.svg";
        secondIcon.classList.add("ending-icon", "icons");
        liDiv.append(firstIcon,nameDiv,secondIcon);
        divEl.createContextualFragment(liDiv);
    }
    // projectsDiv.append(divEl);
    // return projectsDiv;
    return divEl;
}
 */

/***/ }),

/***/ "./js/properAttemptForAssignment/removeTasks/deleteTask.js":
/*!*****************************************************************!*\
  !*** ./js/properAttemptForAssignment/removeTasks/deleteTask.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deletingTask": () => (/* binding */ deletingTask)
/* harmony export */ });
/* harmony import */ var _showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../showTasks/displayTodos.js */ "./js/properAttemptForAssignment/showTasks/displayTodos.js");
/* harmony import */ var _groupTasks_byName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../groupTasks/byName.js */ "./js/properAttemptForAssignment/groupTasks/byName.js");



function deletingTask(evt) {
    let todoElem = evt.target.parentNode.id;
    // console.log(todoElem);
    let getID = todoElem.split("-")[2];
    // console.log(getID);
    _showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.forEach(item => {
        if(item.id === Number(getID)) {
            removeItem(Number(getID), item.projectName);
            (0,_showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__.displayAllTodoTasks)();
        }
    });
}

function removeItem(id, projectName) {
    for(let i=0; i<_showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.length; i++) {
        if(_showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__.todos[i].id === id) {
            _showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_0__.todos.splice(i,1);
            (0,_groupTasks_byName_js__WEBPACK_IMPORTED_MODULE_1__.afterDeleteFromProjects)(id, projectName);
        }
    }
}

// function afterDeleteFromProjects(id) {
//     console.log("b:",filteredTasks);
//     // filteredTasks = filteredTasks.filter(item => item.id !== id);
//     let revisedFiltered = filteredTasks.filter(item => item.id !== id);
//     console.log("a:",filteredTasks, revisedFiltered);
//     // displayingFiltered(filteredTasks);
//     displayingFiltered(revisedFiltered);
// }



/**
 *
 * 
 function deletingTask(evt) {
    let todoElem = evt.target.parentNode.parentNode.parentNode.querySelector(".todo-elem");
    let getID = todoElem.id.split("-")[2];
    console.log(getID);
    todos.forEach(item => {
        // console.log(item.id === getID, item.id, getID);
        if(item.id === Number(getID)) {
            console.log(item.id === getID);
            // removeItem(item.id);
            removeItem(Number(getID));
            displayAllTodoTasks();
        }
    });
}

function removeItem(id) {
    for(let i=0; i<todos.length; i++) {
        if(todos[i].id === id) {
            console.log(todos[i].id, id);
            // todos.splice(i,1);
        }
    }
}
 */

/***/ }),

/***/ "./js/properAttemptForAssignment/removeTasks/showDelete.js":
/*!*****************************************************************!*\
  !*** ./js/properAttemptForAssignment/removeTasks/showDelete.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showDelete": () => (/* binding */ showDelete),
/* harmony export */   "hideDelete": () => (/* binding */ hideDelete)
/* harmony export */ });
/* harmony import */ var _removeTasks_deleteTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../removeTasks/deleteTask.js */ "./js/properAttemptForAssignment/removeTasks/deleteTask.js");
// let deleteDiv = document.querySelector(".delete-div");

let deleteDiv, delIcon, delTask;

function showDelete(evt) {
    deleteDiv = evt.target.parentNode.parentNode.parentNode.querySelector(".delete-div");
    if (deleteDiv.style.display !== "block") {
        deleteDiv.style.display = "block";
        deleteDiv.classList.remove("strike-through");
    }
    // if(evt.target.id.startsWith("del-")) {
    //     evt.target.addEventListener("click", removeX);
    // }
    delIcon = deleteDiv.querySelector("#del-icon");
    delIcon.addEventListener("click", removeX);

    deleteDiv.addEventListener("click", _removeTasks_deleteTask_js__WEBPACK_IMPORTED_MODULE_0__.deletingTask);
}

// if(deleteDiv) deleteDiv.addEventListener("click", deletingTask);

function removeX(evt) {
    if(evt.target.style.display !== "none") {
        console.log("here::");
        // evt.target.style.display = "none";
        evt.target.parentNode.style.display = "none";
    }
    else evt.target.style.display = "block";
}

function hideDelete() {
    if(deleteDiv.style.display !== "none") {
        deleteDiv.style.display = "none";
    }
}



/***/ }),

/***/ "./js/properAttemptForAssignment/searchTasks/byName.js":
/*!*************************************************************!*\
  !*** ./js/properAttemptForAssignment/searchTasks/byName.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findTasksByName": () => (/* binding */ findTasksByName)
/* harmony export */ });
/* harmony import */ var _groupTasks_byName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../groupTasks/byName.js */ "./js/properAttemptForAssignment/groupTasks/byName.js");
/* harmony import */ var _showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../showTasks/displayTodos.js */ "./js/properAttemptForAssignment/showTasks/displayTodos.js");


// import { displayingFiltered } from "../showTasks/displayTodos.js";
let tasks = [], uniqueTasks = [];

function findTasksByName() {
    let searchElem = document.querySelector("#search-tasks");
    searchElem.addEventListener("input", showAnyMatchedTasks);
}

function showAnyMatchedTasks(evt) {
    let searchString = evt.target.value.toLowerCase();
    // making sure searchString be ateaslt length of 4 characters
    let minStr = searchString.length === 4 ? evt.target.value : -1;
    // clearing tasks for empty string search
    searchString.length === 0 ? tasks = [] : tasks;
    _showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_1__.todos.forEach(item => {
        if (
            item.title.toLowerCase().includes(searchString)
            &&
            item.title.toLowerCase().indexOf(minStr) !== -1) {
            tasks.push(item);
            // console.log(tasks);
        }
    });
    removingDuplicates(tasks, evt);
}

function removingDuplicates(tasks, evt) {
    // using filter and findIndex
    uniqueTasks = tasks.filter((val, idx, arr) => arr.findIndex(
        elem => (JSON.stringify(elem) === JSON.stringify(val))) === idx);

    // clearing out unique array for previously held entry when search string is empty
    evt.target.value.length < 1 ? uniqueTasks = [] : uniqueTasks;
    // displaying searched string Todos else showing exisiting Todos
    if(uniqueTasks.length) (0,_showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_1__.displayingFiltered)(uniqueTasks);
    else (0,_showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_1__.displayingFiltered)(_showTasks_displayTodos_js__WEBPACK_IMPORTED_MODULE_1__.todos);
    // console.log("<>", uniqueTasks);
}




/**
 * 
 * 
 function removingDuplicates(tasks, evt) {
    // using filter and findIndex
    uniqueTasks = tasks.filter((val, idx, arr) => arr.findIndex(
        elem => (JSON.stringify(elem) === JSON.stringify(val))) === idx);

    // using reduce
    uniqueTasks = tasks.reduce((accm, curr) => {
        let x = accm.find(item => item.id === curr.id);

        if(!x) {
            // if that ID is non-existent then add it to array
            return accm.concat([curr]);
        } else {
            // otherwise return accm array
            return accm;
        }
    }, []);

    // using Set data structure
    // set will only allow unique valus in it, so when duplicates found it ignores automatically
    // second map() runs on Set() curated array and returns id so that can be cross checked with Set() curated array
    uniqueArray = Array.from(new Set(tasks.map(item => item.id)))
    .map(id => tasks.find(el => el.id === id));

    // clearing out unique array for previously held entry when search string is empty
    evt.target.value.length < 1 ? uniqueTasks = [] : uniqueTasks;
    // displaying searched string Todos else showing exisiting Todos
    if(uniqueTasks.length) displayingFiltered(uniqueTasks);
    else displayingFiltered(todos);
    console.log("<>", uniqueTasks);
}
 * 
 * 
 function findTasksByName() {
    let searchElem = document.querySelector("#search-tasks");
    searchElem.addEventListener("input", showAnyMatchedTasks);
    // if(tasks.length > 0) displayingFiltered(tasks);
    // if (uniqueTasks.length > 0) displayingFiltered(uniqueTasks);
    // removingDuplicates(tasks);   
    // displayingFiltered(uniqueTasks);
}
 * 
 * 
 function showAnyMatchedTasks(evt) {
    // console.log("Input:",evt.target.value);
    // let searchString = evt.target.value;
    // if(evt.target.value.length === 0) filteredTasks = [];
    // if(evt.target.length === 0) filteredTasks = [];
    let searchString = evt.target.value.toLowerCase();
    let minStr = searchString.length === 4 ? evt.target.value : -1;
    // clearing tasks for empty string search
    searchString.length === 0 ? tasks = [] : tasks;
    todos.forEach(item => {
        if (
            item.title.toLowerCase().includes(searchString)
            &&
            item.title.toLowerCase().indexOf(minStr) !== -1) {
            // console.log(item.title);
            tasks.push(item);
            console.log(tasks);
        }
    });
    removingDuplicates(tasks, evt);
    // removingDuplicates(tasks);
    // displayingFiltered(filteredTasks);
}

function removingDuplicates(tasks, evt) {
    // evt.target.value.length < 1 ? uniqueTasks = [] : uniqueTasks;
    uniqueTasks = tasks.filter((val, idx, arr) => arr.findIndex(
        elem => (JSON.stringify(elem) === JSON.stringify(val))) === idx);
    
    // clearing out unique array for previously held entry when search string is empty
    evt.target.value.length < 1 ? uniqueTasks = [] : uniqueTasks;
    console.log("<>", uniqueTasks);
}
 *
 *
 function removingDuplicates(tasks) {
    uniqueTasks = tasks.filter((val, idx, arr) => arr.findIndex(
        elem => (JSON.stringify(elem) === JSON.stringify(val))) === idx);
    console.log("<>",uniqueTasks);
}
 *
 *
 function showAnyMatchedTasks(evt) {
    // console.log("Input:",evt.target.value);
    let searchString = evt.target.value;
    let minStr = searchString.length === 4 ? evt.target.value : -1;
    todos.forEach(item => {
        // console.log(item, item.title);
        // if(item.title.includes(searchString)) console.log(item.title);
        // if(item.title.includes(searchString)) {
        //     // console.log(item.title);
        //     tasks.push(item);
        //     console.log(tasks);
        // }
        if(
        item.title.includes(searchString)
            &&
        item.title.indexOf(minStr) !== -1) {
            // console.log(item.title);
            tasks.push(item);
            console.log(tasks);
        }
    });
}
 */

/***/ }),

/***/ "./js/properAttemptForAssignment/showTasks/displayTodos.js":
/*!*****************************************************************!*\
  !*** ./js/properAttemptForAssignment/showTasks/displayTodos.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "todos": () => (/* binding */ todos),
/* harmony export */   "displayAllTodoTasks": () => (/* binding */ displayAllTodoTasks),
/* harmony export */   "displayingFiltered": () => (/* binding */ displayingFiltered)
/* harmony export */ });
/* harmony import */ var _priorityColors_colorCoating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../priorityColors/colorCoating.js */ "./js/properAttemptForAssignment/priorityColors/colorCoating.js");
/* harmony import */ var _projectNames_showDropdowns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projectNames/showDropdowns.js */ "./js/properAttemptForAssignment/projectNames/showDropdowns.js");



let todos = [];
let tasksContainer = document.querySelector(".tasks-container");

function displayTasks(htmlFragment) {
    tasksContainer.append(htmlFragment);
    displayAllTodoTasks();
    // this way of calling colorCoating causes dom to render after a new option is being selected
    // rather implemented this from colorCoating and edifyTasks instead, tageting each nodes for color coating
    (0,_priorityColors_colorCoating_js__WEBPACK_IMPORTED_MODULE_0__.priorityLevelsColorCoating)();
    // showProjectNamesDD();
}

function displayAllTodoTasks() {
    removeAllChildNodes(tasksContainer);
    console.log(todos.length, todos[todos.length - 1]);
    todos.forEach(item => {
        tasksContainer.appendChild(item.domElem);
        // justDropdowns(item.domElem.querySelector(".choose-project"))
        // it needed to have its previously curated task's project dropdowns to be cleaned so that it doesn't get accumulated
        // also found a workaround it using factory function domString for each task and using options within select tag from there using map()
        item.domElem.querySelector(".choose-project").innerHTML = "";
        (0,_projectNames_showDropdowns_js__WEBPACK_IMPORTED_MODULE_1__.justDropdowns)(item.domElem.querySelector(".choose-project"));
        // priorityLevelsColorCoating();
        
        // updating dropdowns selected value
        item.domElem.querySelector(".choose-project").value = item.projectName;        
    });
}

function displayingFiltered(items) {
    // console.log("::",items);
    removeAllChildNodes(tasksContainer);
    if(items !== null) {
        items.forEach(item=>tasksContainer.append(item.domElem));
    }
}

function removeAllChildNodes(container) {
    while (container.firstChild) container.removeChild(container.firstChild);
}




/**
 * 
 * 
 function displayTasks(htmlFragment) {
    // let tasksContainer = document.querySelector(".tasks-container");
    // priorityLevelsColorCoating();
    tasksContainer.append(htmlFragment);
    // console.log("added node: ", htmlFragment, htmlFragment.firstChild, htmlFragment.lastChild);
    // priorityLevelsColorCoating();
    displayAllTodoTasks();
    // this way of calling colorCoating causes dom to render after a new option is being selected
    // rather implemented this from colorCoating and edifyTasks instead, tageting each nodes for color coating
    priorityLevelsColorCoating();
    // showProjectNamesDD();
}

function displayAllTodoTasks() {
    // let tasksContainer = document.querySelector(".tasks-container");
    removeAllChildNodes(tasksContainer);
    console.log(todos.length, todos[todos.length - 1]);
    todos.forEach(item => {
        // console.log(item, tasksContainer, item.firstChild);
        tasksContainer.appendChild(item.domElem);
        // priorityLevelsColorCoating();
        // what i want this to do is, what does for it's recent entries
        // but what it's doing is, accummulating recently added tasks option to it's previously help options for earlier tasks
        // justDropdowns(item.domElem.querySelector(".choose-project"));

        // it needed to have its previously curated task's project dropdowns to be cleaned so that it doesn't get accumulated
        // also found a workaround it using factory function domString for each task and using options within select tag from there using map()
        item.domElem.querySelector(".choose-project").innerHTML = "";
        justDropdowns(item.domElem.querySelector(".choose-project"));
        // priorityLevelsColorCoating();
        
        // updating dropdowns selected value
        item.domElem.querySelector(".choose-project").value = item.projectName;
        // updating dropdowns selected value, at lleast trying to!!
        // if(item.domElem.querySelector(".choose-project").value === item.projectName) {
        //     item.domElem.querySelector(".choose-project").value = item.projectName
        // }
        // justDropdownsWithSelected(item.domElem.querySelector(".choose-project"), item.domElem.querySelector(".choose-project").value);
    });
    // priorityLevelsColorCoating();
}

function displayingFiltered(items) {
    removeAllChildNodes(tasksContainer);
    // items.forEach(item=>tasksContainer.append(item.domElem));
    if(items !== null) {
        items.forEach(item=>tasksContainer.append(item.domElem));
    } 
    // else {
    //     displayAllTodoTasks();
    // }
}
 * 
 * 
 function displayTasks(htmlFragment) {
    let tasksContainer = document.querySelector(".tasks-container");
    // removeAllChildNodes(tasksContainer);
    tasksContainer.append(htmlFragment);
    // console.log("added node: ", htmlFragment, htmlFragment.firstChild, htmlFragment.lastChild);
    
    let oldChild =  htmlFragment.querySelector(".choose-project");
    oldChild.parentNode.replaceChild(showProjectNamesDD(), oldChild);
    
    displayAllTodoTasks();
    priorityLevelsColorCoating();
}
 * 
 * 
 function displayAllTodoTasks() {
    let tasksContainer = document.querySelector(".tasks-container");
    removeAllChildNodes(tasksContainer);
    console.log(todos.length, todos[todos.length - 1]);
    todos.forEach(item => {
        // console.log(item, tasksContainer, item.firstChild);
        tasksContainer.appendChild(item.domElem);
        justDropdowns(item.domElem.querySelector(".choose-project"));
        // justDropdowns();
        // showProjectNamesDD();
        // item.domElem.querySelector(".choose-project").parentNode
        //     .replaceChild(
        //         showProjectNamesDD(),
        //         item.domElem.querySelector(".choose-project")
        //     )
    });
    // justDropdowns();
}
 *
 *
 function displayAllTodoTasks() {
    let tasksContainer = document.querySelector(".tasks-container");
    // tasksContainer.childNodes.forEach(node=> {
    //     // if(node.firstChild) node.remove();
    //     if(node.firstChild) node.remove();
    // });
    removeAllChildNodes(tasksContainer);
    console.log(todos.length, todos[todos.length-1]);
    todos.forEach(item=>{
        // console.log(item, tasksContainer, item.firstChild);
        tasksContainer.appendChild(item.domElem);
    });
}
 *
 *
 function displayTasks(htmlFragment) {
    let tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.childNodes.forEach(node=> {
        if(node.firstChild) node.remove();
    });
    tasksContainer.append(htmlFragment);
}
 */

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* | Milliseconds in day            |
   * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
   * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
   * |  d  | Day of month                   |  D  | Day of year                    |
   * |  e  | Local day of week              |  E  | Day of week                    |
   * |  f  |                                |  F* | Day of week in month           |
   * |  g* | Modified Julian day            |  G  | Era                            |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  i! | ISO day of week                |  I! | ISO week of year               |
   * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
   * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
   * |  l* | (deprecated)                   |  L  | Stand-alone month              |
   * |  m  | Minute                         |  M  | Month                          |
   * |  n  |                                |  N  |                                |
   * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
   * |  p! | Long localized time            |  P! | Long localized date            |
   * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
   * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
   * |  u  | Extended year                  |  U* | Cyclic year                    |
   * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
   * |  w  | Local week of year             |  W* | Week of month                  |
   * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
   * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
   * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   *
   * Letters marked by ! are non-standard, but implemented by date-fns:
   * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
   * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
   *   i.e. 7 for Sunday, 1 for Monday, etc.
   * - `I` is ISO week of year, as opposed to `w` which is local week of year.
   * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
   *   `R` is supposed to be used in conjunction with `I` and `i`
   *   for universal ISO week-numbering date, whereas
   *   `Y` is supposed to be used in conjunction with `w` and `e`
   *   for week-numbering date specific to the locale.
   * - `P` is long localized date format
   * - `p` is long localized time format
   */

};
var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
var MILLISECONDS_IN_MINUTE = 60000;

function getDateMillisecondsPart(date) {
  return date.getTime() % MILLISECONDS_IN_MINUTE;
}
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */


function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = Math.ceil(date.getTimezoneOffset());
  date.setSeconds(0, 0);
  var hasNegativeUTCOffset = baseTimezoneOffset > 0;
  var millisecondsPartOfTimezoneOffset = hasNegativeUTCOffset ? (MILLISECONDS_IN_MINUTE + getDateMillisecondsPart(date)) % MILLISECONDS_IN_MINUTE : getDateMillisecondsPart(date);
  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMonths/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 1, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 0001, ..., 999               |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__.default;
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__.default[firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__.default[firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  return !isNaN(date);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = findIndex(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);

    if (!parseResult) {
      return null;
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatRelative)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.

};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__.default,
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__.default,
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__.default,
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__.default,
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__.default,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (isNaN(date) || !date) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time) || time === null) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate(), dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    result.setFullYear(dirtyDate.getUTCFullYear());
    return result;
  }

  return new Date(timestamp + time + offset);
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: null
  };
  var year = captures[1] && parseInt(captures[1]);
  var century = captures[2] && parseInt(captures[2]);
  return {
    year: century == null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return null;
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return null;
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return null; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfToday/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfToday/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfToday)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");

/**
 * @name startOfToday
 * @category Day Helpers
 * @summary Return the start of today.
 * @pure false
 *
 * @description
 * Return the start of today.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the start of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */

function startOfToday() {
  return (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/sub/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/sub/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sub)
/* harmony export */ });
/* harmony import */ var _subDays_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subDays/index.js */ "./node_modules/date-fns/esm/subDays/index.js");
/* harmony import */ var _subMonths_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subMonths/index.js */ "./node_modules/date-fns/esm/subMonths/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");





/**
 * @name sub
 * @category Common Helpers
 * @summary Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @description
 * Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be subtracted
 *
 * | Key     | Description                        |
 * |---------|------------------------------------|
 * | years   | Amount of years to be subtracted   |
 * | months  | Amount of months to be subtracted  |
 * | weeks   | Amount of weeks to be subtracted   |
 * | days    | Amount of days to be subtracted    |
 * | hours   | Amount of hours to be subtracted   |
 * | minutes | Amount of minutes to be subtracted |
 * | seconds | Amount of seconds to be subtracted |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract the following duration from 15 June 2017 15:29:20
 * const result = sub(new Date(2017, 5, 15, 15, 29, 20), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> Mon Sep 1 2014 10:19:50
 */

function sub(dirtyDate, duration) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  if (!duration || typeof duration !== 'object') return new Date(NaN);
  var years = 'years' in duration ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(duration.years) : 0;
  var months = 'months' in duration ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(duration.months) : 0;
  var weeks = 'weeks' in duration ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(duration.weeks) : 0;
  var days = 'days' in duration ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(duration.days) : 0;
  var hours = 'hours' in duration ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(duration.hours) : 0;
  var minutes = 'minutes' in duration ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(duration.minutes) : 0;
  var seconds = 'seconds' in duration ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(duration.seconds) : 0; // Subtract years and months

  var dateWithoutMonths = (0,_subMonths_index_js__WEBPACK_IMPORTED_MODULE_2__.default)((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dirtyDate), months + years * 12); // Subtract weeks and days

  var dateWithoutDays = (0,_subDays_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dateWithoutMonths, days + weeks * 7); // Subtract hours, minutes and seconds

  var minutestoSub = minutes + hours * 60;
  var secondstoSub = seconds + minutestoSub * 60;
  var mstoSub = secondstoSub * 1000;
  var finalDate = new Date(dateWithoutDays.getTime() - mstoSub);
  return finalDate;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/subDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */

function subDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMonths/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/subMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMonths/index.js */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */

function subMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_properAttemptForAssignment_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/properAttemptForAssignment/init.js */ "./js/properAttemptForAssignment/init.js");
/* harmony import */ var _js_properAttemptForAssignment_projectNames_addProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/properAttemptForAssignment/projectNames/addProject.js */ "./js/properAttemptForAssignment/projectNames/addProject.js");
/* harmony import */ var _js_properAttemptForAssignment_addTasks_initiateEntry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/properAttemptForAssignment/addTasks/initiateEntry.js */ "./js/properAttemptForAssignment/addTasks/initiateEntry.js");
/* harmony import */ var _js_properAttemptForAssignment_modifyTodos_edifyTasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/properAttemptForAssignment/modifyTodos/edifyTasks.js */ "./js/properAttemptForAssignment/modifyTodos/edifyTasks.js");
// import {showInputter, collectInputs, readyInput} from "../js/modularized/userInput/getInput.js";
// import {showInputter, readyInput} from "../js/modularized/userInput/getInput.js";
// import {editDelete} from "../js/modularized/editingItems/todoListEditing.js";

// import {showInputter, readyInput} from "../js/modularizedWithArrayStructure/userInput/getInput.js";
// import {editDelete} from "../js/modularizedWithArrayStructure/editingItems/todoListEditing.js";

// import {showInputter, readyInput} from "../js/modularizedWithFactoryFunction/userInput/getInput.js";
// import {editDelete} from "../js/modularizedWithFactoryFunction/editingItems/todoListEditing.js";

// import {showInputter, readyInput} from "../js/refactoringFactoryFunctionImplementation/userInput/getInput.js";
// import {editDelete} from "../js/refactoringFactoryFunctionImplementation/editingTasks/todoItemsEditing.js";

// readyInput.addEventListener("click", showInputter);
// editDelete();

/** For Assignment */
// import displayingProjects from "../js/properAttemptForAssignment/init.js";



// import {displayAllTodoTasks, todos} from "../js/properAttemptForAssignment/showTasks/displayTodos.js";

// import {showProjectNamesDD} from "../js/properAttemptForAssignment/projectNames/showDropdowns.js";
(0,_js_properAttemptForAssignment_init_js__WEBPACK_IMPORTED_MODULE_0__.displayingProjects)();
(0,_js_properAttemptForAssignment_projectNames_addProject_js__WEBPACK_IMPORTED_MODULE_1__.addingNewProjectName)();
(0,_js_properAttemptForAssignment_addTasks_initiateEntry_js__WEBPACK_IMPORTED_MODULE_2__.readyTodoTaskEntry)();
// displayAllTodoTasks();
(0,_js_properAttemptForAssignment_modifyTodos_edifyTasks_js__WEBPACK_IMPORTED_MODULE_3__.editTodos)();
// showProjectNamesDD();
(0,_js_properAttemptForAssignment_init_js__WEBPACK_IMPORTED_MODULE_0__.readyGroupingsWiseDisplays)();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map