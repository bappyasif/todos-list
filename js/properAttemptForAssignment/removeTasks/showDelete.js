// let deleteDiv = document.querySelector(".delete-div");
import {deletingTask} from "../removeTasks/deleteTask.js";
let deleteDiv, delIcon, delTask;

function showDelete(evt) {
    deleteDiv = evt.target.parentNode.parentNode.parentNode.querySelector(".delete-div");
    if (deleteDiv.style.display !== "block") {
        deleteDiv.style.display = "block";
        deleteDiv.classList.remove("strike-through");
    }
    // if(evt.target.id.startsWith("del-")) {
    //     evt.target.addEventListener("click", removeX);
    // }
    delIcon = deleteDiv.querySelector("#del-icon");
    delIcon.addEventListener("click", removeX);

    deleteDiv.addEventListener("click", deletingTask);
}

// if(deleteDiv) deleteDiv.addEventListener("click", deletingTask);

function removeX(evt) {
    if(evt.target.style.display !== "none") {
        console.log("here::");
        // evt.target.style.display = "none";
        evt.target.parentNode.style.display = "none";
    }
    else evt.target.style.display = "block";
}

function hideDelete() {
    if(deleteDiv.style.display !== "none") {
        deleteDiv.style.display = "none";
    }
}

export { showDelete, hideDelete }