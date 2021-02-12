import {getListings} from "../addingItems/generateListings.js";
let readyInput = document.querySelector(".get-input");

function showInputter() {
    let showDiv = document.querySelector(".todo-input");
    showDiv.style.visibility = "visible";
    let toggleDiv = document.createElement("button");

    toggleDiv.textContent = "Done Adding!!";
    toggleDiv.classList.add("toggle-div");

    readyInput.parentNode.replaceChild(toggleDiv, readyInput);
    toggleDiv.addEventListener("click", toggleInputter);

    collectInputs();
}

function collectInputs() {
    let addButton = document.querySelector(".submit");
    addButton.addEventListener("click", getListings);
}

function toggleInputter(evt) {
    showDiv.style.visibility = "hidden";
    evt.target.parentNode.replaceChild(readyInput, evt.target);
}

export {showInputter, collectInputs, readyInput}