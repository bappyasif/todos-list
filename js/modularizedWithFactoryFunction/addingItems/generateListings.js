import { addItem, todos } from "../addingItems/addItem.js";
import { removeAllChildNodes } from "../editingItems/todoListEditing.js";
function getListings() {
    let todoLists = document.querySelector(".todo-lists");
    let inputElem = document.querySelector("#inpEl");
    let inputValue = inputElem.value;
    removeAllChildNodes(todoLists, todos);
    addItem(inputValue);
    // displayTasks(todoLists);
    // removeAllChildNodes(todoLists, todos);
    repaintTasks(todoLists, todos);
    inputElem.value = "";
    console.log(todos.length);
}

function displayTasks(listDiv) {
    // Array.from(listDiv.childNodes).forEach(item=>item.innerHTML="");
    todos.forEach(item => {
        // console.log("<{}>",item);
        listDiv.append(item);
    });
}

function repaintTasks(listDiv, tasks) {
    // Array.from(listDiv).forEach(item => item.textContent = "");
    console.log("??", listDiv, tasks);
    tasks.forEach(item => listDiv.append(item));
    // tasks.forEach(item => console.log("##",item));
}

export { getListings, displayTasks, repaintTasks }

/**
 * 
 // function displayTasks(listDiv) {
//     todos.forEach(item => {
//         console.log("<{}>",item);
//         // for(let key in item) console.log(key, item[key]);
//         for(let key in item) {
//             // listDiv.append(item[key]);
//             if(key !== "listCount" && key !== "id") listDiv.append(item[key]);
//         }
//         // listDiv.append(item);
//     });
// }



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
 * 
 * 
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