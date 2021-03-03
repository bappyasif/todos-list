import { existingProjects } from "../projectNames/showNames.js";
// import displayingProjects from "../init.js";
// import {displayingProjects, displayingProjectsWithEvent, addToProjectsDiv} from "../init.js";
import {displayingProjects} from "../init.js";
import {displayAllTodoTasks} from "../showTasks/displayTodos.js";
let inputElem = document.querySelector("#add-project");
let addBtn = document.querySelector(".project-input button");

function addingNewProjectName() {
    let addNew = document.querySelector(".add-new");
    addNew.addEventListener("click", evt => handleDisplayAddedProjects(evt));
    // displayingProjects();
}

let handleAddNewProject = evt => {
    let newProject = inputElem.value;
    if (newProject !== "") {
        existingProjects.insert(4, newProject);
        console.log(existingProjects, newProject);
        inputElem.value = "";
        // this call will repaint all previously existed Todos
        displayAllTodoTasks();
        // this call insures each time a new Project Names gets added
        displayingProjects();
    }
    inputElem.style.display = "none";
    addBtn.style.display = "none";
}

let handleDisplayAddedProjects = evt => {
    if (inputElem.style.display !== "block") {
        inputElem.style.display = "block";
        addBtn.style.display = "block";

        addBtn.addEventListener("click", evt => {
            handleAddNewProject(evt);
        });
    } else {
        inputElem.style.display = "none";
        addBtn.style.display = "none";
        addBtn.removeEventListener("click", handleAddNewProject);
    }
}

Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
}

export { addingNewProjectName }


/**
 * 
 * 
 function addingNewProjectName() {
    let addNew = document.querySelector(".add-new");
    addNew.addEventListener("click", evt => handleDisplayAddedProjects(evt));
    // displayingProjects();
}

let handleAddNewProject = evt => {
    let newProject = inputElem.value;
    if (newProject !== "") {
        existingProjects.insert(4, newProject);
        console.log(existingProjects, newProject);
        inputElem.value = "";
        // this call will repaint all previously existed Todos
        displayAllTodoTasks();
        // this call insures each time a new Project Names gets added
        displayingProjects();
        // addToProjectsDiv(newProject);
    }
    // displayingProjects();
    inputElem.style.display = "none";
    addBtn.style.display = "none";
}

let handleDisplayAddedProjects = evt => {
    if (inputElem.style.display !== "block") {
        inputElem.style.display = "block";
        addBtn.style.display = "block";
        // addBtn.addEventListener("click", evt => handleAddNewProject(evt));
        addBtn.addEventListener("click", evt => {
            handleAddNewProject(evt);
            // displayingProjects();
            // displayingProjectsWithEvent(handleAddNewProject(evt));
            // displayingProjectsWithEvent(handleAddNewProject(evt), evt);
        });
    } else {
        inputElem.style.display = "none";
        addBtn.style.display = "none";
        addBtn.removeEventListener("click", handleAddNewProject);
    }
    // displayingProjects();
}
 * 
 * 
 let handleAddNewProject = evt => {
    let newProject = inputElem.value;
    if (newProject !== "") {
        existingProjects.insert(4, newProject);
        console.log(existingProjects, newProject);
        inputElem.value = "";
        // displayingProjects();
        // displayingProjectsWithEvent(evt);
        // this call will repaint all previously existed Todos
        displayAllTodoTasks();
    }
    inputElem.style.display = "none";
    addBtn.style.display = "none";
}

let handleDisplayAddedProjects = evt => {
    if (inputElem.style.display !== "block") {
        inputElem.style.display = "block";
        addBtn.style.display = "block";
        // addBtn.addEventListener("click", evt => handleAddNewProject(evt));
        addBtn.addEventListener("click", evt => {
            handleAddNewProject(evt);
            // displayingProjectsWithEvent(handleAddNewProject(evt));
            displayingProjectsWithEvent(handleAddNewProject(evt), evt);
        });
        // displayingProjects();
        // displayAllTodoTasks();
        // displayingProjectsWithEvent(evt);
    } else {
        inputElem.style.display = "none";
        addBtn.style.display = "none";
        addBtn.removeEventListener("click", handleAddNewProject);
    }
}
 * 
 * 
 function addingNewProjectName() {
    let addNew = document.querySelector(".add-new");
    // let inputElem = document.querySelector("#add-project");
    // let addBtn = document.querySelector(".project-input button");
    addNew.addEventListener("click", evt => handleDisplayAddedProjects(evt));
}
 *
 *
 function addingNewProjectName() {
    let addNew = document.querySelector(".add-new");
    let inputElem = document.querySelector("#add-project");
    let addBtn = document.querySelector(".project-input button");
    addNew.addEventListener("click", () => {
        if (inputElem.style.display === "none") {
            inputElem.style.display = "block";
            // let newProject = inputElem.value;
            // console.log(newProject, inputElem.value);
            addBtn.style.display = "block";
            addBtn.addEventListener("click", () => {
                let newProject = inputElem.value;
                if (newProject !== "") {
                    existingProjects.insert(4, newProject);
                    console.log(existingProjects, newProject);
                    inputElem.value = "";
                    displayingProjects();
                }
                // else {
                //     alert("Project Name Is Required!!")
                // }
                inputElem.style.display = "none";
                addBtn.style.display = "none";
            });
        } else {
            inputElem.style.display = "none";
            addBtn.style.display = "none";
        }
    });
}
 */