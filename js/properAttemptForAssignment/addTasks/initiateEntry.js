import { startOfToday, format, endOfDay } from "date-fns";
import { showPriorities, showSelectDDElem, getPrioritySelectedValue } from "./prioritiyLevels.js";
import {createTask} from "./createTaskUsingFactory.js";
import {displayTasks, todos, displayAllTodoTasks} from "../showTasks/displayTodos.js";
let taskDate, taskDue, taskPriority, taskNote, taskTitle;
taskDate =  document.querySelector(".dump-calVal");
taskDue = document.querySelector(".dump-ddVal");

function readyTodoTaskEntry() {
    let addTask = document.querySelector("#show-panel");
    let entryTask = document.querySelector(".task-entry");
    let addTodo = document.querySelector(".todo-task");
    addTask.addEventListener("click", () => {
        if (entryTask.style.display === "none") {
            entryTask.style.display = "block";
            addTodo.addEventListener("click", (evt) => {
                taskPriority =  document.querySelector("#levels").value;
                taskNote = document.querySelector("#about-task").value;
                taskTitle =  getUserTaskEntry();
                // console.log(taskDate, taskDue, taskPriority, taskNote, taskTitle);
                let todoElem = createTask(taskTitle,taskDate.textContent, taskDue.textContent, taskPriority, taskNote);
                // console.log(todoElem);
                todos.push(todoElem);
                displayTasks(todoElem.domElem);
            });
        } else {
            entryTask.style.display = "none";
        }
    });
}

// getUserTaskEntry();
getValuesFromIcons();

function getUserTaskEntry() {
    let taskInput = document.querySelector("#create-task");
    let taskTitle = taskInput.value;
    console.log(taskTitle);
    // getValuesFromIcons();
    return taskTitle;
}

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

function showDatePickerElement(htmlElement) {
    htmlElement.addEventListener("click", () => {
        let datePicker = document.querySelector("#date-picker");
        datePicker.value = format(startOfToday(), "yyyy-MM-dd");
        if (datePicker.style.display === "none") {
            datePicker.style.display = "block";
            if(htmlElement.id==="calendar") {
                // datePicker.addEventListener("change", () => {
                //     taskDate.textContent =  datePicker.value;
                // });
                taskDate.textContent =  datePicker.value;
            } else if(htmlElement.id === "due-date") {
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

export { readyTodoTaskEntry }


/**
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