import {todos, displayAllTodoTasks} from "../showTasks/displayTodos.js";
import {afterDeleteFromProjects} from "../groupTasks/byName.js";

function deletingTask(evt) {
    let todoElem = evt.target.parentNode.id;
    // console.log(todoElem);
    let getID = todoElem.split("-")[2];
    // console.log(getID);
    
    // let taskTitle =  evt.target.parentNode.querySelector('.task-text').textContent;
    // console.log(taskTitle, "!!",  evt.target.parentNode)

    todos.forEach(item => {
        if(item.id === Number(getID)) {
            removeItem(Number(getID), item.projectName);
            displayAllTodoTasks();

            let taskTitle =  evt.target.parentNode.querySelector('.task-text').textContent;
            firebase.firestore().collection('allTodos').doc(taskTitle).delete().then(()=>console.log('deleted!!')).catch(err=>console.log('error!!', err));
            // console.log("!!",  evt.target.parentNode.querySelector('.task-text').textContent)
        }
    });
}

function removeItem(id, projectName) {
    for(let i=0; i<todos.length; i++) {
        if(todos[i].id === id) {
            todos.splice(i,1);
            afterDeleteFromProjects(id, projectName);
        }
    }
}

// function afterDeleteFromProjects(id) {
//     console.log("b:",filteredTasks);
//     // filteredTasks = filteredTasks.filter(item => item.id !== id);
//     let revisedFiltered = filteredTasks.filter(item => item.id !== id);
//     console.log("a:",filteredTasks, revisedFiltered);
//     // displayingFiltered(filteredTasks);
//     displayingFiltered(revisedFiltered);
// }

export {deletingTask};

/**
 *
 * 
 function deletingTask(evt) {
    let todoElem = evt.target.parentNode.parentNode.parentNode.querySelector(".todo-elem");
    let getID = todoElem.id.split("-")[2];
    console.log(getID);
    todos.forEach(item => {
        // console.log(item.id === getID, item.id, getID);
        if(item.id === Number(getID)) {
            console.log(item.id === getID);
            // removeItem(item.id);
            removeItem(Number(getID));
            displayAllTodoTasks();
        }
    });
}

function removeItem(id) {
    for(let i=0; i<todos.length; i++) {
        if(todos[i].id === id) {
            console.log(todos[i].id, id);
            // todos.splice(i,1);
        }
    }
}
 */