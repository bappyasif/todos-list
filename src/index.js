import {addItem, projNames, priorities} from "../js/todoLogics/addItem.js";
// import {addItem} from "../js/todoLogics/addItem.js";

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
    // editDelete(listItem);
    inputElem.value = "";
}

function editDelete() {
    let todoLists = document.querySelector(".todo-lists");
    todoLists.addEventListener("click", evt => {
        // console.log(evt.target);
        if(evt.target.id === "edit") editItem(evt);
        else if(evt.target.id === "delete") deleteItem(evt);
        else if(evt.target.id === "p-name") addNewProjectName(evt);
        else if(evt.target.id === "level") addNewPrioritiyLevel(evt);
    });
}

editDelete();

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

// adding new project Names
function addNewProjectName(evt) {
    if(evt.target.value === "Add New") {
        let newOption = prompt("Enter New Project Name");
        let optionDiv = document.createElement("option");
        
        let selectElem = evt.target.parentNode.querySelector("#p-name");
        optionDiv.value = newOption;
        selectElem.add(new Option(newOption, optionDiv));
        selectElem.value = selectElem.options[selectElem.options.length-1];
        projNames.insert(1,newOption);
    }
}

// adding new Priorities Level
function addNewPrioritiyLevel(evt) {
    if(evt.target.value === "Add New") {
        let newOption = prompt("Enter New Priority Name");
        let optionDiv = document.createElement("option");
        
        let selectElem = evt.target.parentNode.querySelector("#level");
        optionDiv.value = newOption;
        selectElem.add(new Option(newOption, optionDiv));
        selectElem.value = selectElem.options[selectElem.options.length-1];
        projNames.insert(1,newOption);
    }
}

Array.prototype.insert = function(index, item) {
    this.splice(index, 0, item);
}
// addNewProjectName();

/**
 * 
 * 
 function addNewProjectName(evt) {
    if(evt.target.value === "Add New") {
        let newOption = prompt("Enter New Project Name");
        let optionDiv = document.createElement("option");

        let selectElem = evt.target.parentNode.querySelector("#p-name");
        optionDiv.value = newOption;

        // selectElem.innerHTML += `<option>${newOption}</option>`;
        // selectElem.options[selectElem.options.length] = new Option(newOption, optionDiv);
        selectElem.add(new Option(newOption, optionDiv));
        selectElem.value = selectElem.options[selectElem.options.length-1];
        projNames.insert(1,newOption);
    }
}

// adding new Priorities Level
function addNewPrioritiyLevel(evt) {
    if(evt.target.value === "Add New") {
        let newOption = prompt("Enter New Priority Name");
        let optionDiv = document.createElement("option");

        let selectElem = evt.target.parentNode.querySelector("#level");
        optionDiv.value = newOption;

        // selectElem.innerHTML += `<option>${newOption}</option>`;
        // selectElem.options[selectElem.options.length] = new Option(newOption, optionDiv);
        selectElem.add(new Option(newOption, optionDiv));
        // selectElem.value = newOption;
        selectElem.value = selectElem.options[selectElem.options.length-1];
        projNames.insert(1,newOption);
    }
}
 * 
 * 
 function addNewProjectName(evt) {
    if(evt.target.value === "Add New") {
        let newOption = prompt("Enter New Project Name");
        let optionDiv = document.createElement("option");

        let selectElem = evt.target.parentNode.querySelector("#p-name");
        optionDiv.value = newOption;

        // selectElem.append(optionDiv);
        selectElem.innerHTML += `<option>${newOption}</option>`;
        // console.log(evt.target, evt.target.parentNode);
        // let selectDiv = evt.target.parentNode.querySelector("#p-name");
        // console.log(selectDiv, selectElem);
        // evt.target.parentNode.replaceChild(selectDiv, selectElem);
        // selectDiv.replaceChild(evt.target, optionDiv);
        projNames.insert(1,newOption);
    }
}
 * 
 // adding new project Names
function addNewProjectName(evt) {
    let item = evt;
    console.log(item);
    if(evt.target.value === "Add New") {
        let newOption = prompt("Enter New Project Name");
        // projNames.push(newOption);
        let optionDiv = document.createElement("option");
        // evt.target.value = "newOption";
        // console.log(evt.target.parentNode);
        // console.log(evt.target.parentNode.querySelector("#p-name"));
        let selectDiv = evt.target.parentNode.querySelector("#p-name");
        optionDiv.value = newOption;
        // optionDiv.parentNode.append(optionDiv);
        selectDiv.append(optionDiv);
        projNames.insert(1,newOption);
    }
    // if(evt.target.value === "Add New") console.log(evt.target.value);
    // let todoItem = document.querySelector(".item-list");
    // todoItem.addEventListener("click", evt => {
    //     console.log(evt.target);
    // });
}
 * 
 * 
// editDelete();

// function editDelete(taskDiv) {
//     let edit = document.querySelector("#edit");
//     let del = document.querySelector("#delete");
//     // if(edit)edit.addEventListener("click", editItem);
//     // if(del)del.addEventListener("click", () => removeItem(taskDiv));
//     // edit.addEventListener("click", editItem);
//     edit.addEventListener("click", () => editItem);
//     del.addEventListener("click", () => removeItem(taskDiv));
//     // del.addEventListener("click", removeItem(taskDiv));
// }

// function editItem(evt) {
//     let prompt = prompt("change todolist task name");
//     let taskSpan = document.querySelector("#"+evt.target.id);
//     taskSpan.textContent = prompt;
// }

// function removeItem(taskDiv) {
//     console.log(taskDiv, taskDiv.parentNode)
//     taskDiv.parentNode.removeChild(taskDiv);
// }

// function addItem(taskName) {
//     let listsDiv = document.querySelector(".list-details");
//     let todoTask = document.createElement("div");
//     todoTask.id = "t-name";
//     todoTask.classList.add("task");
//     todoTask.textContent = taskName;
//     listsDiv.append(todoTask);
// } 


 * 
 * 
 function editDelete() {
    let todoLists = document.querySelector(".todo-lists");
    todoLists.addEventListener("click", evt => {
        // console.log(evt.target);
        if(evt.target.id === "edit") editItem(evt);
        else if(evt.target.id === "delete") deleteItem(evt);
    });
}

editDelete();

function editItem(evt) {
    // console.log(evt.target, evt.target.parentNode.parentNode);
    let nodeTraversed = evt.target.parentNode.parentNode;
    let taskSpan = nodeTraversed.querySelector("#t-name");
    let changeTodoTaskName = prompt("change todolist task name");
    taskSpan.textContent = changeTodoTaskName;
    // console.log(nodeTraversed, nodeTraversed.className);
    // console.log(nodeTraversed.querySelector("#t-name").textContent);
    // let taskSpan = nodeTraversed.querySelector("#t-name");
    // let taskSpan = nodeTraversed.querySelector(".task");
    // let prompt = prompt("change todolist task name");
    // let taskSpan = document.querySelector("#"+evt.target.id);
    // taskSpan.textContent = prompt;
    // console.log(taskSpan);
}

function deleteItem(evt) {
    console.log(evt.target.parentNode.parentNode);
    evt.target.parentNode.parentNode.parentNode.removeChild(evt.target.parentNode.parentNode);
}
 */