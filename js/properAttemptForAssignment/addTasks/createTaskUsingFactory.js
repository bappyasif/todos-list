// import {showProjectNamesDD, ddForFactoryFunction, justDropdowns} from "../projectNames/showDropdowns.js";
import { existingProjects } from "../projectNames/showNames.js";
import { priorities } from "../addTasks/prioritiyLevels.js";
import { priorityLevelsColorCoating } from "../priorityColors/colorCoating.js";
let count = 0;
let createTask = (title, createdDate, dueDate, priorityLevel, taskNote) => {
    let obj = new Object();
    let increaseCount = () => count++;
    obj.title = title;
    obj.createdDate = createdDate;
    obj.dueDate = dueDate;
    obj.priorityLevel = priorityLevel;
    obj.taskNote = taskNote;
    obj.id = increaseCount();
    obj.prjDD = existingProjects;
    obj.getDOM = `<div class="tasks-container">
    <div class="todo-elem" id="todo-elem-"${obj.id}>
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
            <div class="priority-dd">
                <select class="levels" id="levels-dd-${obj.id}">${
        // priorities.map(item=>`<option value="${item}" class="${item.toLocaleLowerCase()}">${item}</option>`)
        priorities.map(item => {
            return `<option ${item === obj.priorityLevel ? "selected" : ""} value="${item}" class="${item.toLocaleLowerCase()}">${item}</option>`;
        }
        )
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

export { createTask }


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