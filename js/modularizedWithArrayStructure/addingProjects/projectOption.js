import {projNames} from "../addingItems/addItem.js";

// adding new project name into existing selection element when clicked "Add New"
function addNewProjectName(evt) {
    // when clicked on "Add New"
    if (evt.target.value === "Add New") {
        let newOption = prompt("Enter New Project Name");
        let optionDiv = document.createElement("option");

        // targeting selection tag for Project Names and adding newly added option into that list and selecting it
        let selectElem = evt.target.parentNode.querySelector("#p-name");
        optionDiv.value = newOption;
        
        selectElem.add(new Option(newOption, optionDiv));
        selectElem.value = selectElem.options[selectElem.options.length - 1];
        
        // including into projNames array from addItem file
        projNames.insert(1, newOption);
    }
}

// utility functionality for inserting newly added Project Name into ProjNames array imported from AddItem
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
}

export {addNewProjectName}