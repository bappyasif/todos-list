import { addItem, projNames, priorities } from "../js/todoLogics/addItem.js";
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
    // todoLists.classList.add("todo-lists");
    let listItem = addItem(inputValue);
    // listItem.classList.add(".list-item");
    todoLists.append(listItem);
    console.log(listItem);
    // editDelete(listItem);
    inputElem.value = "";
    // colorCoatingForPriorities();
}

function editDelete() {
    let todoLists = document.querySelector(".todo-lists");
    todoLists.addEventListener("click", evt => {
        // console.log(evt.target);
        if (evt.target.id === "edit") editItem(evt);
        else if (evt.target.id === "delete") deleteItem(evt);
        else if (evt.target.id === "p-name") addNewProjectName(evt);
        else if (evt.target.id === "level") addNewPrioritiyLevel(evt);
        // else if(evt.target.class = "priorities") immediateCoating(evt);
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
    if (evt.target.value === "Add New") {
        let newOption = prompt("Enter New Project Name");
        let optionDiv = document.createElement("option");

        let selectElem = evt.target.parentNode.querySelector("#p-name");
        optionDiv.value = newOption;
        selectElem.add(new Option(newOption, optionDiv));
        selectElem.value = selectElem.options[selectElem.options.length - 1];
        projNames.insert(1, newOption);
    }
}

// adding new Priorities Level & Colors
function addNewPrioritiyLevel(evt) {
    if (evt.target.value === "Add New") {
        let newOption = prompt("Enter New Priority Name");
        let optionDiv = document.createElement("option");

        let selectElem = evt.target.parentNode.querySelector("#level");
        optionDiv.value = newOption;
        selectElem.add(new Option(newOption, optionDiv));
        selectElem.value = selectElem.options[selectElem.options.length - 1];
        priorities.insert(1, newOption);
        colorChange(newOption, selectElem);
    } else if (evt.target.value === "Normal") {
        evt.target.parentNode.parentNode.style.backgroundColor = "silver";
    } else if (evt.target.value === "High") {
        evt.target.parentNode.parentNode.style.backgroundColor = "orange";
    } else if (evt.target.value === "Higher") {
        evt.target.parentNode.parentNode.style.backgroundColor = "yellow";
    } else if (evt.target.value === "Highest") {
        evt.target.parentNode.parentNode.style.backgroundColor = "red";
    } else if (evt.target.value === "Choose") {
        evt.target.parentNode.parentNode.style.backgroundColor = "";
    }
}

Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
}

// Color Coating for Priorities
function colorChange(value, selectDiv) {
    switch (value) {
        case "low":
            selectDiv.parentNode.parentNode.style.backgroundColor = "lightBlue";
            break;
        case "lower":
            selectDiv.parentNode.parentNode.style.backgroundColor = "blue";
            break;
        case "lowest":
            selectDiv.parentNode.parentNode.style.backgroundColor = "cyan";
            break;
        default:
            selectDiv.parentNode.parentNode.style.backgroundColor = "";
    }
}

/**
 *
 *
 function addNewPrioritiyLevel(evt) {
    if (evt.target.value === "Add New") {
        let newOption = prompt("Enter New Priority Name");
        let optionDiv = document.createElement("option");

        let selectElem = evt.target.parentNode.querySelector("#level");
        optionDiv.value = newOption;
        selectElem.add(new Option(newOption, optionDiv));
        selectElem.value = selectElem.options[selectElem.options.length - 1];
        priorities.insert(1, newOption);
        // evt.target.parentNode.parentNode.classList.add(newOption);
    } else if (evt.target.value === "Normal") {
        // console.log("normal", evt.target.parentNode.parentNode);
        evt.target.parentNode.parentNode.style.backgroundColor = "silver";
    } else if (evt.target.value === "High") {
        // console.log("High", evt.target.parentNode.parentNode);
        evt.target.parentNode.parentNode.style.backgroundColor = "orange";
    } else if (evt.target.value === "Higher") {
        // console.log("Higher", evt.target.parentNode.parentNode);
        evt.target.parentNode.parentNode.style.backgroundColor = "yellow";
    } else if (evt.target.value === "Highest") {
        // console.log("normal", evt.target.parentNode.parentNode);
        evt.target.parentNode.parentNode.style.backgroundColor = "red";
    } else if (evt.target.value === "Choose") {
        // console.log("normal", evt.target.parentNode.parentNode);
        // console.log("choose");
        evt.target.parentNode.parentNode.style.backgroundColor = "";
    }
}
 *
 *
 function immediateCoating(value, item) {
    // let value, item;
    // value = evt.target.value;
    // item = evt.target.parentNode.parentNode;
    console.log(value, item);
    if (value === "Normal") {
        item.style.backgroundColor = "silver";
    } else if (value === "High") {
        item.style.backgroundColor = "orange";
    } else if (value === "Higher") {
        item.style.backgroundColor = "yellow";
    } else if (value === "Highest") {
        item.style.backgroundColor = "red";
    }
}
function colorCoatingForPriorities() {
    let taskItem = document.querySelectorAll(".list-item");
    // taskItem.querySelector("#level").addEventListener("click", evt => immediateCoating(evt));
    Array.from(taskItem).forEach(item => {
        let prLevel = item.querySelector("#level");
        immediateCoating(prLevel.value, item.querySelector(".list-details"));
    });
}
colorCoatingForPriorities();
 *
 *
 function addNewPrioritiyLevel(evt) {
    if (evt.target.value === "Add New") {
        let newOption = prompt("Enter New Priority Name");
        let optionDiv = document.createElement("option");

        let selectElem = evt.target.parentNode.querySelector("#level");
        optionDiv.value = newOption;
        selectElem.add(new Option(newOption, optionDiv));
        selectElem.value = selectElem.options[selectElem.options.length - 1];
        // colorCoatingForPriorities(selectElem.value, evt.target.parentNode.parentNode);
        priorities.insert(1, newOption);
        // colorCoatingForPriorities(selectElem.value, evt.target.parentNode.parentNode);
        // colorCoatingForPriorities(priorities[1], evt.target.parentNode.parentNode);
        // colorCoatingForPriorities(priorities[priorities.length-1], evt.target.parentNode.parentNode);
    } else {
        // colorCoatingForPriorities(evt.target.value, evt.target.parentNode.parentNode);
    }
    // colorCoatingForPriorities(evt.target.value, evt.target.parentNode.parentNode);
    // if (evt.target.value === "Higher") {
    //     // console.log("higher");
    //     immediateCoating(evt.target.value, evt.target.parentNode.parentNode);
    // }
}

Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
}

// color coating for priorities
function immediateCoating(value, item) {
    console.log(value, item);
    if (value === "Normal") {
        item.style.backgroundColor = "silver";
    } else if (value === "High") {
        item.style.backgroundColor = "orange";
    } else if (value === "Higher") {
        item.style.backgroundColor = "yellow";
    } else if (value === "Highest") {
        item.style.backgroundColor = "red";
    }
}
function colorCoatingForPriorities() {
    let taskItem = document.querySelectorAll(".list-item");
    Array.from(taskItem).forEach(item => {
        let priorityLevel = item.querySelector("#level");
        if (priorityLevel.value === "Normal") {
            item.style.backgroundColor = "silver";
        } else if (priorityLevel.value === "High") {
            item.style.backgroundColor = "orange";
        } else if (priorityLevel.value === "Higher") {
            item.style.backgroundColor = "yellow";
        } else if (priorityLevel.value === "Highest") {
            item.style.backgroundColor = "red";
        }
    });
}
// colorCoatingForPriorities();


// function colorCoatingForPriorities(prLevel, item) {
//     console.log(prLevel,prLevel.value, item);
//     if(prLevel === "Normal") {
//         item.style.backgroundColor = "silver";
//     } else if(prLevel === "High") {
//         item.style.backgroundColor = "orange";
//     } else if(prLevel === "Higher") {
//         item.style.backgroundColor = "yellow";
//     } else if(prLevel === "Highest") {
//         item.style.backgroundColor = "red";
//     }
    // let taskItem =  document.querySelectorAll(".list-item");
    // Array.from(taskItem).forEach(item => {
    //     let priorityLevel = item.querySelector("#level");
    //     if(priorityLevel.value === "Normal") {
    //         item.style.backgroundColor = "green";
    //     } else if(priorityLevel.value === "High") {
    //         item.style.backgroundColor = "yellow";
    //     } else if(priorityLevel.value === "Higher") {
    //         item.style.backgroundColor = "light red";
    //     } else if(priorityLevel.value === "Highest") {
    //         item.style.backgroundColor = "red";
    //     }
    // });
// }
// function colorCoatingForPriorities() {
//     let taskItem =  document.querySelectorAll(".list-item");
//     Array.from(taskItem).forEach(item => {
//         let priorityLevel = item.querySelector("#level");
//         if(priorityLevel.value === "Normal") {
//             item.style.backgroundColor = "green";
//         } else if(priorityLevel.value === "High") {
//             item.style.backgroundColor = "yellow";
//         } else if(priorityLevel.value === "Higher") {
//             item.style.backgroundColor = "light red";
//         } else if(priorityLevel.value === "Highest") {
//             item.style.backgroundColor = "red";
//         }
//     });
// }
// function colorCoatingForPriorities() {
//     let taskItem =  document.querySelector(".list-item");
//     if(taskItem) {
//         let priorityLevel = taskItem.querySelector("#level");
//         console.log("<>",taskItem, priorityLevel.value);
//         if(priorityLevel.value === "Normal") {
//             taskItem.style.backgroundColor = "green";
//         }
//     }
// }
// colorCoatingForPriorities();
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