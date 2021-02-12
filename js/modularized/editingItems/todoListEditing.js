import {addNewProjectName} from "../addingProjects/projectOption.js";
import {addNewPrioritiyLevel} from "../addingPriorities/priorityLevel.js";

function editDelete() {
    let todoLists = document.querySelector(".todo-lists");
    todoLists.addEventListener("click", evt => {
        // console.log(evt.target);
        if (evt.target.id === "edit") editItem(evt);
        else if (evt.target.id === "delete") deleteItem(evt);
        else if (evt.target.id === "p-name") addNewProjectName(evt);
        else if (evt.target.id === "level") addNewPrioritiyLevel(evt);
    });
}

function editItem(evt) {
    let nodeTraversed = evt.target.parentNode.parentNode;
    let taskSpan = nodeTraversed.querySelector("#t-name");
    let changeTodoTaskName = prompt("change todolist task name");
    taskSpan.textContent = changeTodoTaskName;
}

function deleteItem(evt) {
    console.log(evt.target.parentNode.parentNode);
    evt.target.parentNode.parentNode.parentNode.removeChild(evt.target.parentNode.parentNode);
}

export {editDelete}