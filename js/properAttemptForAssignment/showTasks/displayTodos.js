import { priorityLevelsColorCoating } from "../priorityColors/colorCoating.js";
import { showProjectNamesDD, justDropdowns } from "../projectNames/showDropdowns.js";
let todos = [];

function displayTasks(htmlFragment) {
    let tasksContainer = document.querySelector(".tasks-container");
    // priorityLevelsColorCoating();
    tasksContainer.append(htmlFragment);
    // console.log("added node: ", htmlFragment, htmlFragment.firstChild, htmlFragment.lastChild);
    // priorityLevelsColorCoating();
    displayAllTodoTasks();
    // this way of calling colorCoating causes dom to render after a new option is being selected
    // rather implemented this from colorCoating and edifyTasks instead, tageting each nodes for color coating
    priorityLevelsColorCoating();
    // showProjectNamesDD();
}

function displayAllTodoTasks() {
    let tasksContainer = document.querySelector(".tasks-container");
    removeAllChildNodes(tasksContainer);
    console.log(todos.length, todos[todos.length - 1]);
    todos.forEach(item => {
        // console.log(item, tasksContainer, item.firstChild);
        tasksContainer.appendChild(item.domElem);
        // priorityLevelsColorCoating();
        // what i want this to do is, what does for it's recent entries
        // but what it's doing is, accummulating recently added tasks option to it's previously help options for earlier tasks
        // justDropdowns(item.domElem.querySelector(".choose-project"));

        // it needed to have its previously curated task's project dropdowns to be cleaned so that it doesn't get accumulated
        // also found a workaround it using factory function domString for each task and using options within select tag from there using map()
        item.domElem.querySelector(".choose-project").innerHTML = "";
        justDropdowns(item.domElem.querySelector(".choose-project"));
        // priorityLevelsColorCoating();
    });
    // priorityLevelsColorCoating();
}

function removeAllChildNodes(container) {
    while (container.firstChild) container.removeChild(container.firstChild);
}

export { displayTasks, todos, displayAllTodoTasks };


/**
 * 
 * 
 function displayTasks(htmlFragment) {
    let tasksContainer = document.querySelector(".tasks-container");
    // removeAllChildNodes(tasksContainer);
    tasksContainer.append(htmlFragment);
    // console.log("added node: ", htmlFragment, htmlFragment.firstChild, htmlFragment.lastChild);
    
    let oldChild =  htmlFragment.querySelector(".choose-project");
    oldChild.parentNode.replaceChild(showProjectNamesDD(), oldChild);
    
    displayAllTodoTasks();
    priorityLevelsColorCoating();
}
 * 
 * 
 function displayAllTodoTasks() {
    let tasksContainer = document.querySelector(".tasks-container");
    removeAllChildNodes(tasksContainer);
    console.log(todos.length, todos[todos.length - 1]);
    todos.forEach(item => {
        // console.log(item, tasksContainer, item.firstChild);
        tasksContainer.appendChild(item.domElem);
        justDropdowns(item.domElem.querySelector(".choose-project"));
        // justDropdowns();
        // showProjectNamesDD();
        // item.domElem.querySelector(".choose-project").parentNode
        //     .replaceChild(
        //         showProjectNamesDD(),
        //         item.domElem.querySelector(".choose-project")
        //     )
    });
    // justDropdowns();
}
 *
 *
 function displayAllTodoTasks() {
    let tasksContainer = document.querySelector(".tasks-container");
    // tasksContainer.childNodes.forEach(node=> {
    //     // if(node.firstChild) node.remove();
    //     if(node.firstChild) node.remove();
    // });
    removeAllChildNodes(tasksContainer);
    console.log(todos.length, todos[todos.length-1]);
    todos.forEach(item=>{
        // console.log(item, tasksContainer, item.firstChild);
        tasksContainer.appendChild(item.domElem);
    });
}
 *
 *
 function displayTasks(htmlFragment) {
    let tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.childNodes.forEach(node=> {
        if(node.firstChild) node.remove();
    });
    tasksContainer.append(htmlFragment);
}
 */