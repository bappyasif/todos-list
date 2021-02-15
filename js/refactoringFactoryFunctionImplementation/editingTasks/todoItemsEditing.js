import {addNewProjectName} from "../addingProjects/projectOption.js";
import {addNewPrioritiyLevel} from "../addingPriorities/priorityLevels.js";
import {todos} from "../addingTasks/addTask.js";
import {repaintTasks} from "../addingTasks/showTasks.js";

function editDelete() {
    let todoLists = document.querySelector(".todo-lists");
    // console.log(todoLists);
    todoLists.addEventListener("click", evt => {
        // console.log(evt.target);
        if (evt.target.id === "edit") editItem(evt);
        else if (evt.target.id === "delete") deleteItem(evt);
        else if (evt.target.id === "p-name") addNewProjectName(evt);
        else if (evt.target.id === "level") addNewPrioritiyLevel(evt);
        removeAllChildNodes(todoLists);
        repaintTasks(todoLists, todos);
    });
}

function editItem(evt) {
    let changeTodoTaskName = prompt("change todolist task name");
    editTodoTaskName(evt, changeTodoTaskName);
}

function editTodoTaskName(evt, tnUpdated) {
    let dataId = evt.target.parentNode.parentNode.id;
    let todoLists = evt.target.parentNode.parentNode.parentNode;
    console.log("<>",todos, dataId, todoLists, todos[dataId]);
    // todos[dataId].querySelector("#t-name").textContent = tnUpdated;
    todos.forEach(item => {
        if(item.id === dataId) {
            item.querySelector("#t-name").textContent = tnUpdated;
        }
    });
}

function removeAllChildNodes(container) {
    while(container.firstChild) container.removeChild(container.firstChild);
}

function deleteItem(evt) {
    removeTask(evt);
}

function removeTask(evt) {
    let dataAttr = evt.target.parentNode.parentNode.id;
    console.log("taskItem:",dataAttr);
    todos = filteredTask(dataAttr);
    // console.log(todos);
}

function filteredTask(todoId) {
    return todos.filter(item => item.id !== todoId);
}

// export {editDelete}
export {editDelete, removeAllChildNodes}

/**
 * 
 * 
 function editTodoTaskName(evt) {
    let dataAttr = evt.target.parentNode.parentNode.getAttribute("data-item");
    let listCN = evt.target.parentNode.parentNode.className;
    // let dataAttr = evt.target.parentNode.parentNode.parentNode.getAttribute("data-item");
    // let dataAttr = evt.target.parentNode.getAttribute("data-item");
    // let dataAttr = evt.target.getAttribute("data-item");
    // console.log(dataAttr, listCN);
    // todos[dataAttr].querySelector("#t-name").textContent = "Updated task";
    // console.log(todos[dataAttr]);
    // removeAllChildNodes(evt.target.parentNode.parentNode.parentNode);
    // repaintTasks(evt.target.parentNode.parentNode.parentNode, todos);
    // removeAllChildNodes(evt.target.parentNode.parentNode);
    // removeAllChildNodes(evt.target.parentNode.parentNode.parentNode);
    // repaintTasks(evt.target.parentNode.parentNode.parentNode, todos);
    // repaintTasks(evt.target.parentNode.parentNode, todos);
    let listItem = evt.target.parentNode.parentNode;
    let todoLists = evt.target.parentNode.parentNode.parentNode;
    todos[dataAttr].querySelector("#t-name").textContent = "Updated task";
    // console.log(evt.target.parentNode.parentNode, evt.target.parentNode.parentNode.parentNode);
    removeAllChildNodes(todoLists);
    repaintTasks(todoLists, todos);
}

function removeTodoTaskItem(evt) {
    let listsNode = evt.target.parentNode.parentNode.parentNode;
    // let dataAttr = evt.target.parentNode.parentNode.getAttribute("data-item");
    let dataAttr = evt.target.parentNode.getAttribute("data-item");
    
    // todos = todos.splice(dataAttr, 1);
    // console.log("container", Array.from(itemNode.parentNode).length, todos, itemNode);
    todos.splice(dataAttr, 1);
    console.log("array",todos, dataAttr);
    
    // removeAllChildNodes(itemNode.parentNode);
    // repaintTasks(itemNode.parentNode, todos);
    removeAllChildNodes(listsNode);
    repaintTasks(listsNode, todos);
}
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