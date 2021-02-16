import { addItem, todos } from "../addingTasks/addTask.js";
import { removeAllChildNodes } from "../editingTasks/todoItemsEditing.js";
function getListings() {
    let todoLists = document.querySelector(".todo-lists");
    let inputElem = document.querySelector("#inpEl");
    let inputValue = inputElem.value;
    // console.log("before:", todos);
    // removeAllChildNodes(todoLists, todos);
    addItem(inputValue);
    removeAllChildNodes(todoLists, todos);
    // console.log("after:", todos);
    repaintTasks(todoLists, todos);
    inputElem.value = "";
    console.log(todos.length);
}

function repaintTasks(listDiv, tasks) {
    // console.log("??", listDiv, tasks);
    tasks.forEach(item => listDiv.append(item));
}

export { getListings, repaintTasks }