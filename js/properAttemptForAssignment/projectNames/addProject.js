import { existingProjects } from "../projectNames/showNames.js";
import displayingProjects from "../init.js";
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

Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
}

export { addingNewProjectName }
