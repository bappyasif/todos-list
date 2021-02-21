import {priorityLevelsColorCoating} from "../priorityColors/colorCoating.js";
let todos = [];

function displayTasks(htmlFragment) {
    let tasksContainer = document.querySelector(".tasks-container");
    // removeAllChildNodes(tasksContainer);
    tasksContainer.append(htmlFragment);
    // console.log("added node: ", htmlFragment, htmlFragment.firstChild, htmlFragment.lastChild);
    displayAllTodoTasks();
    priorityLevelsColorCoating();
}

function displayAllTodoTasks() {
    let tasksContainer = document.querySelector(".tasks-container");
    removeAllChildNodes(tasksContainer);
    console.log(todos.length, todos[todos.length-1]);
    todos.forEach(item=>{
        // console.log(item, tasksContainer, item.firstChild);
        tasksContainer.appendChild(item.domElem);
    });
}

function removeAllChildNodes(container) {
    while(container.firstChild) container.removeChild(container.firstChild);
}

export {displayTasks, todos, displayAllTodoTasks};


/**
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