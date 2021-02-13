// import {addNewProjectName} from "../addingProjects/projectOption.js";
// import {addNewPrioritiyLevel} from "../addingPriorities/priorityLevel.js";
import {todos} from "../addingItems/addItem.js";
import {getListings, displayTasks, repaintTasks} from "../addingItems/generateListings.js";
function editDelete() {
    let todoLists = document.querySelector(".todo-lists");
    todoLists.addEventListener("click", evt => {
        // console.log(evt.target);
        if (evt.target.id === "edit") editItem(evt);
        else if (evt.target.id === "delete") deleteItem(evt);
        // else if (evt.target.id === "p-name") addNewProjectName(evt);
        // else if (evt.target.id === "level") addNewPrioritiyLevel(evt);
    });
}

function editTodoTaskName(evt) {
    let dataAttr = evt.target.parentNode.parentNode.getAttribute("data-item");
    todos[dataAttr].querySelector("#t-name").textContent = "Updated task";
    // console.log(todos[dataAttr]);
}

function removeTodoTaskItem(evt) {
    let itemNode = evt.target.parentNode.parentNode;
    let dataAttr = evt.target.parentNode.parentNode.getAttribute("data-item");
    
    todos.splice(dataAttr, 1);
    console.log("container", Array.from(itemNode.parentNode).length, todos);
    
    removeAllChildNodes(itemNode.parentNode);
    repaintTasks(itemNode.parentNode, todos);
}

function removeAllChildNodes(container) {
    while(container.firstChild) container.removeChild(container.firstChild);
}

function editItem(evt) {
    // editTodoTaskName(evt);
    let nodeTraversed = evt.target.parentNode.parentNode;
    let taskSpan = nodeTraversed.querySelector("#t-name");
    let changeTodoTaskName = prompt("change todolist task name");
    taskSpan.textContent = changeTodoTaskName;
    editTodoTaskName(evt);
}

function deleteItem(evt) {
    console.log(evt.target.parentNode.parentNode);
    // evt.target.parentNode.parentNode.parentNode.removeChild(evt.target.parentNode.parentNode);
    // trying to remove it through todos also known as tasks Array for this calling function
    removeTodoTaskItem(evt);
}

export {editDelete}

/**
 * 
 function removeTodoTaskItem(evt) {
    let itemNode = evt.target.parentNode.parentNode;
    let dataAttr = evt.target.parentNode.parentNode.getAttribute("data-item");
    // console.log(todos);
    todos.splice(dataAttr, 1);
    // console.log(todos, itemNode.parentNode);
    
    // getListings();
    // Array.from(itemNode.parentNode.childNodes).forEach(item=>item.innerHTML = "");
    // displayTasks(itemNode.parentNode);
    console.log("container", Array.from(itemNode.parentNode).length, todos);
    removeAllChildNodes(itemNode.parentNode);
    repaintTasks(itemNode.parentNode, todos);
} 
 *
 * 
 function editTodoTaskName(evt) {
    let dataAttr = evt.target.parentNode.parentNode.getAttribute("data-item");
    todos[dataAttr].querySelector("#t-name").textContent = "Updated task";
    console.log(todos[dataAttr]);
    // todos[dataAttr];
    // console.log(todos[dataAttr], dataAttr);
    // console.log(Array.from(todos[dataAttr]));
    // Array.from(todos[dataAttr]).forEach((item, idx) => {
    //     // if(idx === 1) item.textContent = "Updated Task"
    //     console.llog(item, idx);
    // });
    // console.log(todos[dataAttr], 
    //     todos[dataAttr].querySelector("#t-name"));
    // todos[dataAttr].querySelector("#t-name").textContent = "Updated task";

    // todos[dataAttr].forEach(i=>console.log(i));
}
 */