import {showNames} from "../properAttemptForAssignment/projectNames/showNames.js";
import {showGroupifiedProjectTodos} from "../properAttemptForAssignment/groupTasks/byName.js";
import {displayingFiltered, displayAllTodoTasks} from "../properAttemptForAssignment/showTasks/displayTodos.js";
import {handleDateWiseGrouping} from "../properAttemptForAssignment/groupTasks/byDates.js";
let projectsDiv = document.querySelector(".projects");

function displayingProjects() {
    projectsDiv.childNodes.forEach(node=>node.remove());
    projectsDiv.append(showNames());
    console.log(showNames());
    showTodosByProjects();
    handleDateWiseGrouping();
}

function showTodosByProjects() {
    projectsDiv.firstChild.childNodes.forEach(item => {
        item.addEventListener("click", evt => handleGroupedProjectsTask(evt));
    });
}

function handleGroupedProjectsTask(evt) {
    let divText = evt.target.textContent;
    let filteredTasks = showGroupifiedProjectTodos(divText);
    // console.log("length:", filteredTasks.length);
    if(filteredTasks.length !== 0) {
        displayingFiltered(filteredTasks);
    } else {
        alert("no tasks added yet....");
        displayAllTodoTasks()
    }
}

export default displayingProjects;

/**
 * 
 * 
 function displayingProjects() {
    // let projectsDiv = document.querySelector(".projects");
    projectsDiv.childNodes.forEach(node=>node.remove());
    projectsDiv.append(showNames());
    console.log(showNames());
    showTodosByProjects();
}

function showTodosByProjects() {
    // projectsDiv.addEventListener("click", evt => handleGroupedProjectsTask(evt));
    projectsDiv.firstChild.childNodes.forEach(item => {
        // item.addEventListener("click", handleGroupedProjectsTask)
        // console.log("<>",item);
        item.addEventListener("click", evt => handleGroupedProjectsTask(evt));
    });
}

function handleGroupedProjectsTask(evt) {
    // console.log(evt.target.id.startsWith("li-div"), evt.target.id, evt.target);
    let divText = evt.target.textContent;
    // showGroupifiedProjectTodos(divText);
    let filteredTasks = showGroupifiedProjectTodos(divText);
    // console.log("filtered::", filteredTasks);
    // displayingFiltered(filteredTasks);
    console.log("length:", filteredTasks.length);
    if(filteredTasks.length !== 0) {
        displayingFiltered(filteredTasks);
    } else {
        alert("no tasks added yet....");
        displayAllTodoTasks()
    }
}
 * 
 * 
 function displayingProjects() {
    let projectsDiv = document.querySelector(".projects");
    projectsDiv.childNodes.forEach(node=>node.remove());
    projectsDiv.append(showNames());
    console.log(showNames());
}
 */