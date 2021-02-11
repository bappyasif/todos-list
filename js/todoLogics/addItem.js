let projNames = ["Default", "Add New"];
let priorities = ["Choose","Normal", "High", "Higher", "Highest", "Add New"];
function addItem(taskName) {
    // let listDiv = document.querySelector(".list-item");
    let listDiv = document.createElement("div");
    let checkBox = document.createElement("input");
    let checkboxDivEl = document.createElement("div");
    checkboxDivEl.classList.add("checkbox-div");
    checkBox.type = "checkbox";
    checkboxDivEl.append(checkBox);

    let listDetails = document.createElement("div");
    listDetails.classList.add("list-details");
    
    let taskSpan = document.createElement("span");
    taskSpan.id = "t-name";
    taskSpan.textContent = taskName;
    taskSpan.classList.add("task");

    let projectNameDiv = document.createElement("div");
    projectNameDiv.classList.add("project");
    let projectNames = document.createElement("select");
    projectNames.id = "p-name";
    for (let i = 0; i < projNames.length; i++) {
        let optionElem = document.createElement("option");
        optionElem.textContent = projNames[i];
        optionElem.value = projNames[i];
        projectNames.append(optionElem);
    }
    projectNameDiv.append(projectNames);

    let prioritiesDiv = document.createElement("div");
    prioritiesDiv.classList.add("priorities");
    let prioritiesDropdown = document.createElement("select");
    prioritiesDropdown.id = "level";
    for(let i=0;i<priorities.length; i++) {
        let optionElem = document.createElement("option");
        optionElem.textContent = priorities[i];
        optionElem.value = priorities[i];
        prioritiesDropdown.append(optionElem);
    }
    prioritiesDiv.append(prioritiesDropdown);

    let itemEdify = document.createElement("div");
    itemEdify.classList.add("list-edify");
    
    let editSpan = document.createElement("span");
    editSpan.id = "edit";
    editSpan.textContent = "!";
    let editToolTip = document.createElement("span");
    editToolTip.classList.add("edit-text");
    editToolTip.textContent = "Edit";
    // editSpan.addEventListener("click", editItem(taskSpan));
    editSpan.append(editToolTip);

    let delBorder = document.createElement("span");
    delBorder.id = "del-border";

    let deleteSpan = document.createElement("span");
    deleteSpan.id = "delete";
    deleteSpan.textContent = "X";
    let deleteTooltip = document.createElement("span");
    deleteTooltip.id = "delete-text";
    deleteTooltip.textContent = "Delete";
    // deleteSpan.addEventListener("click", removeItem())
    deleteSpan.append(deleteTooltip);

    itemEdify.append(editSpan, delBorder, deleteSpan);
    listDetails.append(taskSpan, projectNameDiv, prioritiesDiv, itemEdify);
    listDiv.append(checkboxDivEl, listDetails, itemEdify);
    listDiv.classList.add("list-item");
    return listDiv;
}

export {addItem, projNames, priorities}

/**
 // function editItem(taskSpan) {
    // let prompt = prompt("change todolist task name");
    // taskSpan.textContent = prompt;
// }

// function removeItem(taskDiv) {
//     taskDiv.remove();
// }

    // deleteSpan.addEventListener("click", removeItem(listDiv));
    // editSpan.addEventListener("click", editItem(taskSpan));
    // deleteSpan.addEventListener("click", () => {
    //     listDiv.remove();
    // });
    // editSpan.addEventListener("click", () => {
    //     let prompt = prompt("change todolist task name");
    //     taskSpan.textContent = prompt;        
    // });
 */