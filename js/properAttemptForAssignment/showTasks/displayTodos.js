import { convertFirestoreDataIntoDomElements, includeTasksProjectNamesIntoDOM } from "../addTasks/saveTaskToFirebase.js";
import { priorityLevelsColorCoating } from "../priorityColors/colorCoating.js";
import { showProjectNamesDD, justDropdowns } from "../projectNames/showDropdowns.js";
import {justDropdownsWithSelected} from "../projectNames/showDropdowns.js";
let todos = [];
let tasksContainer = document.querySelector(".tasks-container");

function displayTasks(htmlFragment) {
    tasksContainer.append(htmlFragment);
    displayAllTodoTasks();
    // this way of calling colorCoating causes dom to render after a new option is being selected
    // rather implemented this from colorCoating and edifyTasks instead, tageting each nodes for color coating
    priorityLevelsColorCoating();
    // showProjectNamesDD();
    // displayAllTasksFromFirestoreDatabase();
}

export let displayAllTasksFromFirestoreDatabase = () => {
    // read data from firestore
    firebase.firestore().collection('allTodos').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            // console.log(doc.data(), 'data!!')
            // console.log("data read!!", doc.name, doc.id)
            convertFirestoreDataIntoDomElements(doc.data(), doc.id);
            displayAllTodoTasks();
            displayProjectNameIfItExists(doc.id, doc.data().project);
            // priorityLevelsColorCoating();
        })
    }).catch(err =>  console.log('error!!', err));
}

let displayProjectNameIfItExists = (TaskName, projectName) => {
    let allNodes = document.querySelectorAll('.choose-project');
    Array.from(allNodes).forEach(node => {
        console.log(node, "<<>>", node.parentNode.parentNode.parentNode);
        let taskTitle = node.parentNode.parentNode.parentNode.querySelector('.task-text').textContent;
        if(taskTitle == TaskName) node.value = projectName;
    })
}

function displayAllTodoTasks() {
    // displayAllTasksFromFirestoreDatabase();

    removeAllChildNodes(tasksContainer);
    console.log(todos.length, todos[todos.length - 1]);
    todos.forEach(item => {
        tasksContainer.appendChild(item.domElem);
        // justDropdowns(item.domElem.querySelector(".choose-project"))
        // it needed to have its previously curated task's project dropdowns to be cleaned so that it doesn't get accumulated
        // also found a workaround it using factory function domString for each task and using options within select tag from there using map()
        item.domElem.querySelector(".choose-project").innerHTML = "";
        justDropdowns(item.domElem.querySelector(".choose-project"));
        // priorityLevelsColorCoating();
        
        // updating dropdowns selected value
        item.domElem.querySelector(".choose-project").value = item.projectName;        
    });
}

function displayingFiltered(items) {
    // console.log("::",items);
    removeAllChildNodes(tasksContainer);
    if(items !== null) {
        items.forEach(item=>tasksContainer.append(item.domElem));
    }
}

function removeAllChildNodes(container) {
    while (container.firstChild) container.removeChild(container.firstChild);
}

export { displayTasks, todos, displayAllTodoTasks, displayingFiltered };


/**
 * 
 * 
 function displayTasks(htmlFragment) {
    // let tasksContainer = document.querySelector(".tasks-container");
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
    // let tasksContainer = document.querySelector(".tasks-container");
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
        
        // updating dropdowns selected value
        item.domElem.querySelector(".choose-project").value = item.projectName;
        // updating dropdowns selected value, at lleast trying to!!
        // if(item.domElem.querySelector(".choose-project").value === item.projectName) {
        //     item.domElem.querySelector(".choose-project").value = item.projectName
        // }
        // justDropdownsWithSelected(item.domElem.querySelector(".choose-project"), item.domElem.querySelector(".choose-project").value);
    });
    // priorityLevelsColorCoating();
}

function displayingFiltered(items) {
    removeAllChildNodes(tasksContainer);
    // items.forEach(item=>tasksContainer.append(item.domElem));
    if(items !== null) {
        items.forEach(item=>tasksContainer.append(item.domElem));
    } 
    // else {
    //     displayAllTodoTasks();
    // }
}
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