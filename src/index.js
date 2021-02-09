// import {addItem, projNames, priorities} from "../js/todoLogics/addItem.js";
import {addItem} from "../js/todoLogics/addItem.js";

console.log("from index.js");
let showDiv = document.querySelector(".todo-input");
let readyInput = document.querySelector(".get-input");
readyInput.addEventListener("click", showInputter);

function showInputter() {
    // let showDiv = document.querySelector(".todo-input");
    showDiv.style.visibility = "visible";
    let toggleDiv = document.createElement("button");

    toggleDiv.textContent = "Done Adding!!";
    toggleDiv.classList.add("toggle-div");
    
    readyInput.parentNode.replaceChild(toggleDiv, readyInput);
    toggleDiv.addEventListener("click", toggleInputter);

    collectInputs();
}

function toggleInputter(evt) {
    showDiv.style.visibility = "hidden";
    evt.target.parentNode.replaceChild(readyInput, evt.target);
}

function collectInputs() {
    // let inputElem = document.querySelector("#inpEl");
    let addButton = document.querySelector(".submit");
    addButton.addEventListener("click", getListings);
}

function getListings() {
    let todoLists = document.querySelector(".todo-lists");
    let inputElem = document.querySelector("#inpEl");
    let inputValue = inputElem.value;
    console.log(inputValue);
    let listItem = addItem(inputValue);
    todoLists.append(listItem);
    console.log(listItem);
    editDelete(listItem);
    inputElem.value = "";
}

function editDelete(taskDiv) {
    let edit = document.querySelector("#edit");
    let del = document.querySelector("#delete");
    // if(edit)edit.addEventListener("click", editItem);
    // if(del)del.addEventListener("click", () => removeItem(taskDiv));
    // edit.addEventListener("click", editItem);
    edit.addEventListener("click", () => editItem);
    del.addEventListener("click", () => removeItem(taskDiv));
    // del.addEventListener("click", removeItem(taskDiv));
}

function editItem(evt) {
    let prompt = prompt("change todolist task name");
    let taskSpan = document.querySelector("#"+evt.target.id);
    taskSpan.textContent = prompt;
}

function removeItem(taskDiv) {
    console.log(taskDiv, taskDiv.parentNode)
    taskDiv.parentNode.removeChild(taskDiv);
}

// function addItem(taskName) {
//     let listsDiv = document.querySelector(".list-details");
//     let todoTask = document.createElement("div");
//     todoTask.id = "t-name";
//     todoTask.classList.add("task");
//     todoTask.textContent = taskName;
//     listsDiv.append(todoTask);
// }