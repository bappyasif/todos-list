import {todoItem} from "../addingItems/ItemsFactory.js";
let todos = [];
let projNames = ["Default", "Add New"];
let priorities = ["Choose","Normal", "High", "Higher", "Highest", "Add New"];

function addItem(taskName) {
    let listDetails = document.createElement("div");
    listDetails.classList.add("list-details");

    // todo list item contents
    let checkboxElement = readyCheckBox();
    let todoTaskNameDiv = readyTodoTaskName(taskName);
    let taskProjectNameSelection = readyExistingProjectNames();
    let taskPriorityLevelSelection = readyExistingPriorityLevels();
    
    // part of todo list
    let itemEdify = document.createElement("div");
    itemEdify.classList.add("list-edify");
    
    // edit and delete markup
    let editDiv = readyEditSpan();
    let delBorder = document.createElement("span");
    delBorder.id = "del-border";
    let deleteDiv = readyDeleteSpan();

    // making listItem div ready for DOM by appending html elements
    itemEdify.append(editDiv, delBorder, deleteDiv);
    let listEntry = todoItem(
        checkboxElement,
        todoTaskNameDiv,
        taskProjectNameSelection,
        taskPriorityLevelSelection,
        itemEdify
    );
    // console.log(listEntry);
    todos.push(listEntry);
    // console.log("<>",todos);
}

function readyCheckBox() {
    let checkBox = document.createElement("input");
    let checkboxDivEl = document.createElement("div");
    checkboxDivEl.classList.add("checkbox-div");
    checkBox.type = "checkbox";
    checkboxDivEl.append(checkBox);
    return checkboxDivEl;
}

function readyTodoTaskName(taskName) {
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    let taskSpan = document.createElement("span");
    taskSpan.id = "t-name";
    taskSpan.textContent = taskName;
    // taskSpan.classList.add("task");
    taskDiv.append(taskSpan);
    return taskDiv;
    // return taskSpan;
}

function readyExistingProjectNames() {
    let projectNameDiv = document.createElement("div");
    projectNameDiv.classList.add("project");
    let projectNames = document.createElement("select");
    projectNames.id = "p-name";
    for (let i = 0; i < projNames.length; i++) {
        let optionElem = document.createElement("option");
        optionElem.textContent = projNames[i];
        optionElem.value = projNames[i];
        projectNames.append(optionElem);
    }
    projectNameDiv.append(projectNames);
    return projectNameDiv;
}

function readyExistingPriorityLevels() {
    let prioritiesDiv = document.createElement("div");
    prioritiesDiv.classList.add("priorities");
    let prioritiesDropdown = document.createElement("select");
    prioritiesDropdown.id = "level";
    for(let i=0;i<priorities.length; i++) {
        let optionElem = document.createElement("option");
        optionElem.textContent = priorities[i];
        optionElem.value = priorities[i];
        prioritiesDropdown.append(optionElem);
    }
    prioritiesDiv.append(prioritiesDropdown);
    return prioritiesDiv;
}

function readyEditSpan() {
    let editSpan = document.createElement("span");
    editSpan.id = "edit";
    editSpan.textContent = "!";
    let editToolTip = document.createElement("span");
    editToolTip.classList.add("edit-text");
    editToolTip.textContent = "Edit";
    // editSpan.addEventListener("click", editItem(taskSpan));
    editSpan.append(editToolTip);
    return editSpan;
}

function readyDeleteSpan() {
    let deleteSpan = document.createElement("span");
    deleteSpan.id = "delete";
    deleteSpan.textContent = "X";
    let deleteTooltip = document.createElement("span");
    deleteTooltip.id = "delete-text";
    deleteTooltip.textContent = "Delete";
    // deleteSpan.addEventListener("click", removeItem())
    deleteSpan.append(deleteTooltip);
    return deleteSpan;
}

export {addItem, todos, projNames, priorities}


/**
 * 
 function addItem(taskName) {
    let listDiv = document.createElement("div");
    let listDetails = document.createElement("div");
    listDetails.classList.add("list-details");

    // todo list item contents
    let checkboxElement = readyCheckBox();
    let todoTaskNameDiv = readyTodoTaskName(taskName);
    let taskProjectNameSelection = readyExistingProjectNames();
    let taskPriorityLevelSelection = readyExistingPriorityLevels();
    
    // part of todo list
    let itemEdify = document.createElement("div");
    itemEdify.classList.add("list-edify");
    
    // edit and delete markup
    let editDiv = readyEditSpan();
    let delBorder = document.createElement("span");
    delBorder.id = "del-border";
    let deleteDiv = readyDeleteSpan();

    // making listItem div ready for DOM by appending html elements
    itemEdify.append(editDiv, delBorder, deleteDiv);
    listDetails.append(
        todoTaskNameDiv, 
        taskProjectNameSelection, 
        taskPriorityLevelSelection, 
        itemEdify
    );
    listDiv.append(checkboxElement, listDetails, itemEdify);
    listDiv.classList.add("list-item");
    // console.log(checkboxElement,
    //     todoTaskNameDiv,
    //     taskProjectNameSelection,
    //     taskPriorityLevelSelection,
    //     itemEdify);
    let listEntry = todoItem(
        checkboxElement,
        todoTaskNameDiv,
        taskProjectNameSelection,
        taskPriorityLevelSelection,
        itemEdify
    );
    console.log(listEntry);
    todos.push(listEntry);
    // let convertedObj = converObject(listEntry, listDiv);
    // console.log(convertedObj);
    // todos.push(convertedObj);
    // listEntry.classList.add("list-item");
    // todos.push(listEntry);
    // tasks.push(listDiv);
    // return listDiv;
}

// converting factory function object into HTML Element div for todo tasks
function converObject(obj, listDiv) {
    for(let key in obj) {
        if(key !== "listCount" && key !== "id") listDiv.append(obj[key]);
    }
    return listDiv;
}
 */