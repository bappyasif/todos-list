import {showNames} from "../properAttemptForAssignment/projectNames/showNames.js";
function displayingProjects() {
    let projectsDiv = document.querySelector(".projects");
    projectsDiv.childNodes.forEach(node=>node.remove());
    projectsDiv.append(showNames());
    console.log(showNames());
}

export default displayingProjects;

/**
 * 
 * 
 function displayingProjects() {
    let projectsDiv = document.querySelector(".projects");
    projectsDiv.childNodes.forEach(node=>node.remove());
    projectsDiv.append(showNames());
    console.log(showNames());
}
 */