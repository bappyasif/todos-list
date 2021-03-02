import { showNames } from "../properAttemptForAssignment/projectNames/showNames.js";
import { showGroupifiedProjectTodos } from "../properAttemptForAssignment/groupTasks/byName.js";
import { displayingFiltered, displayAllTodoTasks } from "../properAttemptForAssignment/showTasks/displayTodos.js";
import { handleDateWiseGrouping } from "../properAttemptForAssignment/groupTasks/byDates.js";
import { findTasksByName } from "../properAttemptForAssignment/searchTasks/byName.js";
let projectsDiv = document.querySelector(".projects");

function displayingProjects() {
    projectsDiv.childNodes.forEach(node => node.remove());
    // projectsDiv.childNodes.forEach(node => node.innerHTML = "");
    projectsDiv.append(showNames());
    console.log(showNames());
    // showTodosByProjects();
    // handleDateWiseGrouping();
    // findTasksByName();
}

function displayingProjectsWithEvent(evtHandler,evt) {
    // projectsDiv.childNodes.forEach(node => node.remove());
    projectsDiv.childNodes.forEach(node => node.innerHTML = "");
    let allNames = showNames();
    // allNames.addEventListener("click",evtHandler(evt));
    // allNames.addEventListener("click",evt => evtHandler(evt));
    // allNames.addEventListener("click",evt => evtHandler);
    allNames.childNodes.forEach(item => {
        item.addEventListener("click", evt => evtHandler);
    });
    console.log("pr::", allNames);
    projectsDiv.append(allNames);
}

function readyGroupingsWiseDisplays() {
    displayAllTodoTasks();
    showTodosByProjects();
    handleDateWiseGrouping();
    findTasksByName();
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
    if (filteredTasks.length !== 0) {
        displayingFiltered(filteredTasks);
    } else {
        alert("no tasks added yet....");
        displayAllTodoTasks()
    }
}

export {displayingProjects, readyGroupingsWiseDisplays, displayingProjectsWithEvent};
// export default displayingProjects;

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