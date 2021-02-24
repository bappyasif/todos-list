import { existingProjects } from "../projectNames/showNames.js";
function showProjectNamesDD() {
    let projectDD = document.querySelector(".choose-project");
    for (let i = 0; i < existingProjects.length; i++) {
        let option = document.createElement("option");
        option.value = existingProjects[i];
        option.textContent = existingProjects[i];
        projectDD.append(option);
    }
    // return projectDD;
}

function justDropdowns(projectDD) {
    // let projectDD = document.querySelector(".choose-project");
    for (let i = 0; i < existingProjects.length; i++) {
        let option = document.createElement("option");
        // option.value =  existingProjects[i];
        // option.textContent = existingProjects[i];
        if (existingProjects.findIndex(item=>option.value.includes(item)) === -1) {
            option.value = existingProjects[i];
            option.textContent = existingProjects[i];
        }
        // console.log("??");
        projectDD.append(option);
    }
}

function ddForFactoryFunction() {
    let fillerOp = document.createElement("select");
    for (let i = 0; i < existingProjects.length; i++) {
        let option = document.createElement("option");
        option.value = existingProjects[i];
        option.textContent = existingProjects[i];
        // console.log("??");
        fillerOp.append(option);
    }
    return fillerOp;
}

export { showProjectNamesDD, justDropdowns, ddForFactoryFunction }

/**
 *
 *
 function showProjectNamesDD() {
    let projectDD = document.querySelector("#choose-project");
    for(let i=0; i<existingProjects.length; i++) {
        let optionFragment =  document.createRange();
        let htmlMarkup =  `<option>${existingProjects[i]}</option>`;
        optionFragment.createContextualFragment(htmlMarkup);
        projectDD.append(optionFragment);
    }
}
 */