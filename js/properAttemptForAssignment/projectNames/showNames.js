let existingProjects = ["Daily Chores", "Home", "Health", "Work"];

function showNames() {
    let dummyDiv = document.createElement("div");
    for(let i=0; i<existingProjects.length; i++) {
        let liDiv = document.createElement("div");
        liDiv.classList.add("li-div");
        let firstIcon = document.createElement("img");
        firstIcon.src = "../icons/menu-01.svg";
        firstIcon.classList.add("first-icon", "icons");
        let nameDiv = document.createElement("div");
        nameDiv.textContent = existingProjects[i];
        nameDiv.classList.add("li-text");
        let secondIcon = document.createElement("img");
        secondIcon.src = "../icons/menu-01.svg";
        secondIcon.classList.add("ending-icon", "icons");
        liDiv.append(firstIcon,nameDiv,secondIcon);
        dummyDiv.append(liDiv);
    }
    return dummyDiv;
}

export {showNames, existingProjects}

// export default showNames;

/**
 * 
 * 
 function showNames() {
    // let projectsDiv = document.querySelector(".projects");
    let divEl = document.createRange();
    for(let i=0; i<existingProjects.length; i++) {
        let liDiv = document.createElement("div");
        liDiv.classList.add("li-div");
        let firstIcon = document.createElement("img");
        firstIcon.src = "../icons/menu-01.svg";
        firstIcon.classList.add("first-icon", "icons");
        let nameDiv = document.createElement("div");
        nameDiv.textContent = existingProjects[i];
        nameDiv.classList.add("li-text");
        let secondIcon = document.createElement("img");
        secondIcon.src = "../icons/menu-01.svg";
        secondIcon.classList.add("ending-icon", "icons");
        liDiv.append(firstIcon,nameDiv,secondIcon);
        divEl.createContextualFragment(liDiv);
    }
    // projectsDiv.append(divEl);
    // return projectsDiv;
    return divEl;
}
 */