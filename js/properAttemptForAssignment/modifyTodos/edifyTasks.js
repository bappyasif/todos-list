import { todos } from "../showTasks/displayTodos.js";
function editTodos() {
    let tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.addEventListener("click", evt => {
        if (evt.target.id === "task-check") {
            evt.stopPropagation();
            console.log("it's here!!");
            evt.stopImmediatePropagation();
            if(evt.target.parentNode.className === "checklist-div") {
                evt.target.parentNode.classList.add("highlight-check");
            } else {
                evt.target.parentNode.classList.remove("highlight-check");
            }
        }
    });
}

/**
 * this highlight both first and any other element which is clciked from list of tasks!!
 * except for first element, in that case it needs be clicked outside of checklist-div
 */
// function editTodos() {
//     document.querySelector(".tasks-container")
//     .addEventListener("click", evt => {
//         if(evt.target.closest("div")) {
//             evt.stopPropagation();
//             if(evt.target.parentNode.classList.contains("highlight-check","label")) {
//                 evt.target.parentNode.classList.remove("highlight-check", "label");
//             } else {
//                 evt.target.parentNode.classList.add("highlight-check", "label");
//             }
//         }
//     });
// }

export { editTodos }

/**
 * 
 * 
 function editTodos() {
    document.querySelector(".tasks-container")
    .addEventListener("click", evt => {
        if(evt.target.closest("div")) {
            evt.stopPropagation();
            if(evt.target.parentNode.classList.contains("highlight-check","label")) {
                evt.target.parentNode.classList.remove("highlight-check", "label");
            } else {
                evt.target.parentNode.classList.add("highlight-check", "label");
            }
        }
    });
}
 * 
 * 
 function editTodos() {
    let tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.addEventListener("click", evt => {
        if (evt.target.id === "task-check") {
            evt.stopPropagation();
            console.log(evt.target.id, evt.target.parentNode.className);
            if(evt.target.parentNode.className === "checklist-div") {
                console.log("::::");
                // evt.target.classList.add("highlight-check", "label");
                // evt.target.parentNode.classList.add("highlight-check", "label");
                evt.target.parentNode.classList.add("highlight-check");
            } else {
                // evt.target.classList.remove("highlight-check", "label")
                // evt.target.parentNode.classList.remove("highlight-check", "label")
                evt.target.parentNode.classList.remove("highlight-check");
            }
        }
    })
}
 *
 *
 function editTodos() {
    let container = document.querySelector(".tasks-container");
    container.addEventListener("click", evt => {
        todos.forEach(item => {
            // console.log(item.domElem, item.domElem.id, item.domElem.querySelector("#task-check"));
            let check = item.domElem.querySelector("#task-check");
            check.addEventListener("click", ev => {
                if(evt.target.id === "task-check" && ev.target.id === "task-check") {
                    console.log("??", evt.target.id, ev.target.id)
                }
            });
            // item.domElem.querySelector("#check-task")
            // .addEventListener("click", evt => {
            //     console.log(evt.target);
            // })
        })
    })
}
 *
 *
 function editTodos() {
    let tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.addEventListener("click", evt => {
        // evt.stopPropagation();
        todos.forEach(item => {
            // let elems = item.target.querySelector(".todo-elem");
            console.log("elem::", item.domElem);
            // evt.stopPropagation();
            // console.log(evt.target.parentNode.parentNode.parentNode.id, item.id);
            if(evt.target.parentNode.parentNode.parentNode.id === item.id) {
                evt.stopPropagation();
                console.log("elem::", item);
            }
        });
    });
}
 *
 *
 function editTodos() {
    document.querySelector(".tasks-panel")
    .addEventListener("click", evt => {
        // evt.stopImmediatePropagation();
        // evt.stopPropagation();
        if(evt.target.parentNode.classList.contains("checklist-div")) {
            evt.stopPropagation();
            console.log(evt.target.id);
            if(evt.target.parentNode.classList.contains("highlight-check","label")) {
                // evt.target.style.backgroundColor = "yellowgreen";
                evt.target.parentNode.classList.remove("highlight-check", "label");
            } else {
                evt.target.parentNode.classList.add("highlight-check", "label");
            }
        }
    });
}
 *
 *
 function editTodos() {
    document.querySelector(".tasks-panel")
    .addEventListener("click", evt => {
        // evt.stopImmediatePropagation();
        // evt.stopPropagation();
        if(evt.target.closest("div")) {
            evt.stopPropagation();
            console.log(evt.target.id);
            if(evt.target.parentNode.classList.contains("highlight-check","label")) {
                // evt.target.style.backgroundColor = "yellowgreen";
                evt.target.parentNode.classList.remove("highlight-check", "label");
            } else {
                evt.target.parentNode.classList.add("highlight-check", "label");
            }
        }
    });
}
 *
 *
 function editTodos() {
    document.querySelector(".tasks-panel")
    .addEventListener("click", evt => {
        // evt.stopImmediatePropagation();
        // evt.stopPropagation();
        if(evt.target.closest("div")) {
            evt.stopPropagation();
            console.log(evt.target.id);
            if(evt.target.parentNode.classList.contains("highlight-check","label")) {
                evt.target.style.backgroundColor = "#fff";
                evt.target.parentNode.classList.remove("highlight-check", "label");
            } else {
                // evt.target.style.backgroundColor = "black";
                // evt.target.closest("div").classList.add("highlight-check");
                evt.target.parentNode.classList.add("highlight-check", "label");
            }
        }
    });
}
 *
 *
 function editTodos() {
    document.querySelector(".tasks-panel")
    // window.document
    .addEventListener("click", evt => {
        // evt.stopPropagation();
        // console.log(evt.target.id, evt.target.parentNode)
        if(evt.target.closest("div")) {
            // evt.stopPropagation();
            // console.log(evt.target.id, evt.target.patrentNode.parentNode.id);
            console.log(evt.target.id);
            evt.target.style.backgroundColor = "black"
        }
    });
}
 *
 *
 function editTodos() {
    let tasksContainer = document.querySelector(".tasks-container");
    // let tasksContainer = document.querySelector(".todo-elem");
    // console.log("tasks container");
    tasksContainer.addEventListener("click", evt => {
        // console.log("tasks container");
        evt.stopPropagation();
        console.log(evt.target.id)
        // if(evt.target.id === "task-check") checkDiv(evt);
        if(evt.target.id === "task-check") {
            // checkDiv(evt);
            // evt.stopPropagation();
            checkDiv(evt);
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
 */