import {addItem} from "../addingItems/addItem.js";
function getListings() {
    let todoLists = document.querySelector(".todo-lists");
    let inputElem = document.querySelector("#inpEl");
    let inputValue = inputElem.value;
    // console.log(inputValue);
    let listItem = addItem(inputValue);
    todoLists.append(listItem);
    console.log(listItem);
    inputElem.value = "";
}

export {getListings}