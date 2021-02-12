import { addItem, tasks } from "../addingItems/addItem.js";
function getListings() {
    let todoLists = document.querySelector(".todo-lists");
    let inputElem = document.querySelector("#inpEl");
    let inputValue = inputElem.value;
    addItem(inputValue);
    displayTasks(todoLists);
    inputElem.value = "";
    // todoLists.childNodes.forEach(item => item.innerHTML = "");
    // console.log(tasks.length);
}

function displayTasks(listDiv) {
    tasks.forEach(item => {
        console.log("<{}>",item);
        listDiv.append(item);
    });
}


export { getListings }

// function displayTasks(listDiv, todoItem) {
//     tasks.forEach(item => {
//         console.log("<{}>",item);

//         // let listItem = addItem(inputValue);
//         // console.log(listItem, item);
//         // listDiv.append(listItem);
//         // console.log(listDiv, inputValue, item, item.addItem());
//         // listDiv.append(item.addItem(inputValue));
//     });
// }

/**
 function getListings() {
    let todoLists = document.querySelector(".todo-lists");
    let inputElem = document.querySelector("#inpEl");
    let inputValue = inputElem.value;
    // console.log(inputValue);
    // let listItem = addItem(inputValue);
    // todoLists.append(listItem);
    // displayTasks(todoLists, inputValue);
    // displayTasks(todoLists, listItem);
    displayTasks(todoLists);
    inputElem.value = "";
}
 */