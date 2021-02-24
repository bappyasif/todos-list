let priorities = ["Normal", "Low", "Medium", "High"];
let priorityLevels = document.querySelector("#levels");

function showPriorities() {
    for (let i = 0; i < priorities.length; i++) {
        let option = document.createElement("option");
        option.value = priorities[i];
        option.textContent = priorities[i];
        option.classList.add(priorities[i].toLocaleLowerCase());
        priorityLevels.append(option);
    }
}

function showSelectDDElem() {
    let priority = document.querySelector("#priority");
    priority.addEventListener("click", () => {
        if (priorityLevels.style.display === "none") {
            priorityLevels.style.display = "block";
            // let prLevel = priorityLevels.value;
            // return prLevel;
        } else {
            priorityLevels.style.display = "none";
        }
    });
}

function getPrioritySelectedValue() {
    let prLevel;
    priorityLevels.addEventListener("change", () => {
        prLevel = priorityLevels.value;
    });
    return prLevel;
}

export { showPriorities, showSelectDDElem, getPrioritySelectedValue, priorities }


/**
 *
 *
 function showPriorities() {
    // let priorityLevels =  document.querySelector("#levels");
    for(let i=0; i<priorities.length; i++) {
        let option =  document.createElement("option");
        option.value = priorities[i];
        option.textContent = priorities[i];
        // let colorHint = document.createElement("div");
        // colorHint.classList.add("option-elem");
        // option.append(colorHint);
        option.classList.add(priorities[i].toLocaleLowerCase());
        priorityLevels.append(option);
    }
}
 *
 *
 function showSelectDDElem() {
    let priority =  document.querySelector("#priority");
    priority.addEventListener("click", () => {
        // console.log(priorityLevels.style.display, "<>", window.getComputedStyle(priorityLevels).display);
        if(priorityLevels.style.display === "none") {
            // console.log("::")
            priorityLevels.style.display = "block";
            // priorityLevels.style.display = "auto";
        } else {
            // console.log(";;")
            priorityLevels.style.display = "none";
        }
        // if(priorityLevels.style.display === "none") {
        //     // console.log("::")
        //     priorityLevels.style.display === "block";
        // } else {
        //     // console.log(";;")
        //     priorityLevels.style.display === "none";
        // }
        // if(window.getComputedStyle(priorityLevels).display === "none") {
        //     console.log("::", priorityLevels);
        //     window.getComputedStyle(priorityLevels).display === "block";
        // } else {
        //     // console.log(";;")
        //     window.getComputedStyle(priorityLevels).display === "none";
        // }
    });
}
 */