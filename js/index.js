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
    let inputElem = document.querySelector("#inpEl");
    let inputValue = inputElem.value;
    console.log(inputValue);
    inputElem.value = "";
}