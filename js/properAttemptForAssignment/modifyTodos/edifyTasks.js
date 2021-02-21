import {todos} from "../showTasks/displayTodos.js";
function editTodos() {
    let tasksContainer = document.querySelector(".tasks-container");
    // let tasksContainer = document.querySelector(".todo-elem");
    // console.log("tasks container");
    tasksContainer.addEventListener("click", evt => {
        // console.log("tasks container");
        console.log(evt.target.id)
        // if(evt.target.id === "task-check") checkDiv(evt);
        if(evt.target.id === "task-check") {
            checkDiv(evt);
            evt.stopPropagation();
            // checkDiv(evt);
        }
    });
}

function checkDiv(evt) {
    // evt.stopPropagation();
    todos.forEach(item => {
        console.log("checkDiv", item.id, evt.target.parentNode.id);
        if(item.id === evt.target.parentNode.id) {
            console.log("checkDiv");
            // evt.stopPropagation();
            item.querySelector("#task-check").style.backgroundColor = "black";
        }
    });
}

export {editTodos}