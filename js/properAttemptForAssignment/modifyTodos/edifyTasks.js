import { startOfSecond } from "date-fns/fp";
import { todos } from "../showTasks/displayTodos.js";
import {coloringPrioritiesFromDD} from "../priorityColors/colorCoating.js";
import {groupTodosByProjects, groupify} from "../groupTasks/byName.js";
function editTodos() {
    let tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.addEventListener("click", evt => handleModification(evt));
}

function handleModification(evt) {
    handleHighlightingCheckboxDiv(evt);
    if(evt.target.id.startsWith("levels-dd")) handleColorCoatingPriority(evt);
    if(evt.target.id.startsWith("choose-project")) handleProjectTodoTask(evt);
}

function handleProjectTodoTask(evt) {
    let idCurated = evt.target.id.split("-")[2];
    // groupify = [];
    todos.forEach(item => {
        let projectSelect = item.domElem.querySelector("#choose-project-"+item.id);
        let getProjectName =  projectSelect.value;
        
        // projectSelect.value = projectSelect.options[projectSelect.selectedIndex];
        // projectSelect.value = getProjectName;

        let taskNode = projectSelect.parentNode.parentNode.parentNode;
        let taskTitle = taskNode.querySelector(".task-text").textContent;
        let isTrue = checkGroupify(idCurated);
        console.log("true::",isTrue);
        if(isTrue) groupify.push({projectName:getProjectName, taskTitle:taskTitle, taskID: idCurated});
        groupTodosByProjects(getProjectName, taskTitle, idCurated);
    });
}

function checkGroupify(id) {
    groupify.forEach(item => {
        if(item.taskID === id) {
            return false;
        } 
        // else {
        //     return true;
        // }
        // return true;
    });
    return true;
}

function handleColorCoatingPriority(evt)  {
    let ddValue = evt.target.value;
    let divID = evt.target.id;
    // console.log(ddValue, divID);
    // coloringPrioritiesFromDD(ddValue);
    coloringPrioritiesFromDD(ddValue, divID);
}

function handleHighlightingCheckboxDiv(evt) {
    // previously it wasn't pointing to seelected element because all id's were same and it used to matchees with first found match
    // and now after modifying our htmlFragment for each task for checklist-div id with id number appended after making it unique for DOM
    if (evt.target.id.startsWith("task-check")) {
        if (evt.target.parentNode.className === "checklist-div") {
            evt.target.parentNode.classList.add("highlight-check");
            // targeting .todo-elem
            evt.target.parentNode.parentNode.parentNode.classList.add("strike-through");
        } else {
            evt.target.parentNode.classList.remove("highlight-check");
            // targeting .todo-elem
            evt.target.parentNode.parentNode.parentNode.classList.remove("strike-through");
        }
    }
}

export { editTodos }

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
/**
 * 
 * 
 function handleProjectTodoTask(evt) {
    let idCurated = evt.target.id.split("-")[2];
    // groupify = [];
    todos.forEach(item => {
        let itemProjectName = item.domElem.querySelector("#choose-project-"+item.id);
        let getProjectName =  itemProjectName.value;
        
        let taskNode = itemProjectName.parentNode.parentNode.parentNode;
        let taskTitle = taskNode.querySelector(".task-text").textContent;
        groupify.push({projectName:getProjectName, taskTitle:taskTitle, taskID: idCurated})
        groupTodosByProjects(getProjectName, taskTitle, taskID);
    });
}
 * 
 * 
 function handleProjectTodoTask(evt) {
    // console.log("changed!!");
    let idCurated = evt.target.id.split("-")[2];
    // console.log(idCurated);
    todos.forEach(item => {
        // console.log(item.id);
        let itemProjectName = item.domElem.querySelector("#choose-project-"+item.id);
        console.log(itemProjectName);
        let getProjectName =  itemProjectName.value;
        // console.log(getProjectName);
        // itemProjectName.value = getProjectName;
        // console.log(itemProjectName);
        // let taskNode = item.domElem.querySelector("#todo-elem-"+item.id);
        
        let taskNode = itemProjectName.parentNode.parentNode.parentNode;
        // console.log(taskNode);
        let taskTitle = taskNode.querySelector(".task-text").textContent;
        // console.log(taskTitle, getProjectName);
        groupTodosByProjects(getProjectName, taskTitle);

    });
}
 * 
 * 
 function handleProjectTodoTask(evt) {
    // console.log("changed!!");
    let idCurated = evt.target.id.split("-")[2];
    // console.log(idCurated);
    todos.forEach(item => {
        console.log(item.id);
        if(item.id === idCurated) {
            console.log(item.id, idCurated);
        }
    });
}
 * 
 * 
 function handleHighlightCheckboxDiv(evt) {
    // previously it wasn't pointing to seelected element because all id's were same and it used to matchees with first found match
    // and now after modifying our htmlFragment for each task for checklist-div id with id number appended after making it unique for DOM
    if (evt.target.id.startsWith("task-check")) {
        if (evt.target.parentNode.className === "checklist-div") {
            // evt.target.parentNode.parentNode.classList.add("highlight-check");
            evt.target.parentNode.classList.add("highlight-check");
            // evt.target.parentNode.parentNode.classList.add("strike-through");
            evt.target.parentNode.parentNode.parentNode.classList.add("strike-through");
        } else {
            evt.target.parentNode.classList.remove("highlight-check");
            // evt.target.parentNode.parentNode.classList.remove("strike-through");
            evt.target.parentNode.parentNode.parentNode.classList.remove("strike-through");
        }
    }
}
 *
 *
 function editTodos() {
    let tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.addEventListener("click", evt => {
        // previously it wasn't pointing to seelected element because all id's were same and it used to matchees with first found match
        // and now after modifying our htmlFragment for each task for checklist-div id with id number appended after making it unique for DOM
        if (evt.target.id.startsWith("task-check")) {
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
 *
 *
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