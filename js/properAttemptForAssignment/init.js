import { showNames } from "../properAttemptForAssignment/projectNames/showNames.js";
import { showGroupifiedProjectTodos } from "../properAttemptForAssignment/groupTasks/byName.js";
import { displayingFiltered, displayAllTodoTasks } from "../properAttemptForAssignment/showTasks/displayTodos.js";
import { handleDateWiseGrouping } from "../properAttemptForAssignment/groupTasks/byDates.js";
import { findTasksByName } from "../properAttemptForAssignment/searchTasks/byName.js";
let projectsDiv = document.querySelector(".projects");

/**
 * this will repaint entire Project Names List into DOM each time a new Names get added
 */
function displayingProjects() {
    projectsDiv.childNodes.forEach(node => node.remove());
    // projectsDiv.childNodes.forEach(node => node.innerHTML = "");
    projectsDiv.append(showNames());
    // console.log(showNames());
}

/**
 * all grouped wise Displays callled here
 */
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

export {displayingProjects, readyGroupingsWiseDisplays, handleGroupedProjectsTask};
// export {displayingProjects, readyGroupingsWiseDisplays, displayingProjectsWithEvent, addToProjectsDiv, handleGroupedProjectsTask};
// export default displayingProjects;

/**
 * 
 * 
// this will repaint entire Project Names List into DOM each time a new Names get added
 function displayingProjects() {
    projectsDiv.childNodes.forEach(node => node.remove());
    // projectsDiv.childNodes.forEach(node => node.innerHTML = "");
    projectsDiv.append(showNames());
    // console.log(showNames());
}

function addToProjectsDiv(itemDiv) {
    projectsDiv.append(itemDiv);
}
// this is a new alterntive function that I'm trying to use to attach an event Listener to Project Names after a new Names gets added into that list
// currently when a new name gets added, entire div loses it's EventListeners for some reason I can't yet comprehend why is that.
function displayingProjectsWithEvent(evtHandler,evt) {
    // projectsDiv.childNodes.forEach(node => node.remove());
    projectsDiv.childNodes.forEach(node => node.innerHTML = "");
    let allNames = showNames();
    // allNames.addEventListener("click",evtHandler(evt));
    // allNames.addEventListener("click",evt => evtHandler(evt));
    // allNames.addEventListener("click",evt => evtHandler);
    // allNames.childNodes.forEach(item => {
    //     item.addEventListener("click", evt => evtHandler);
    // });
    allNames.childNodes.forEach(item => {
        item.addEventListener("click", function() {evtHandler});
    });
    console.log("pr::", allNames);
    projectsDiv.append(allNames);
}
 * 
 * 
 function displayingProjects() {
    projectsDiv.childNodes.forEach(node => node.remove());
    // projectsDiv.childNodes.forEach(node => node.innerHTML = "");
    projectsDiv.append(showNames());
    console.log(showNames());
    // showTodosByProjects();
    // handleDateWiseGrouping();
    // findTasksByName();
}
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