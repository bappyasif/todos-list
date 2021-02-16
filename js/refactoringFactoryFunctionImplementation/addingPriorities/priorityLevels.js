import { todos, priorities } from "../addingTasks/addTask.js";
import { colorChange } from "../colorCoating/priorityColors.js";
// import {getListings} from "../addingItems/generateListings.js";

// adding newly added priority level into priorities array from addItem file
function addNewPrioritiyLevel(evt) {
    // when clicked on "Add New"
    if (evt.target.value === "Add New") {
        // targeting select tag for priority level and it as an option to choose from
        // let dataAttr = evt.target.parentNode.parentNode.getAttribute("data-item");
        let dataId = evt.target.parentNode.parentNode.id;
        let selectElem = todos[dataId].querySelector("#level");
        // let listsNode = selectElem.parentNode.parentNode.parentNode;

        let newOption = prompt("Enter New Priority Name");
        let optionDiv = document.createElement("option");
        optionDiv.value = newOption;
        // selectElem.add(new Option(newOption, optionDiv.value, false, true), null);

        // adding into priorities array and changing color as intended 
        priorities.insert(1, newOption);
        colorChange(newOption, selectElem);

        // adding newly added option to all previously existed tasks priority level option at position 2
        todos.forEach(item => {
            if(item.id !== dataId) {
                item.querySelector("#level")
                .add(new Option(optionDiv.value, newOption), 2);
            }
        });

        let replacingSelect = replaceSelect(newOption);
        selectElem.parentNode.replaceChild(replacingSelect, selectElem);
    }
    // checking and changing existing priority level color coding
    else if (evt.target.value === "Normal") {
        evt.target.parentNode.parentNode.style.backgroundColor = "silver";
    } else if (evt.target.value === "High") {
        evt.target.parentNode.parentNode.style.backgroundColor = "orange";
    } else if (evt.target.value === "Higher") {
        evt.target.parentNode.parentNode.style.backgroundColor = "yellow";
    } else if (evt.target.value === "Highest") {
        evt.target.parentNode.parentNode.style.backgroundColor = "red";
    } else if (evt.target.value === "Choose") {
        evt.target.parentNode.parentNode.style.backgroundColor = "";
    }
    else if (evt.target.value === "low") evt.target.parentNode.parentNode.style.backgroundColor = "lightBlue";
    else if (evt.target.value === "lower") evt.target.parentNode.parentNode.style.backgroundColor = "blue";
    else if (evt.target.value === "lowest") evt.target.parentNode.parentNode.style.backgroundColor = "darkBlue";
}

function replaceSelect(selected) {
    let select = document.createElement("select");
    for (let i = 0; i < priorities.length; i++) {
        let option = document.createElement("option");
        option.textContent = priorities[i];
        option.value = priorities[i];
        if (option.value === selected) option.selected = true;
        select.append(option);
    }
    console.log(select);
    select.id = "level";
    return select;
}

// utility functionality for inserting newly added Project Name into ProjNames array imported from AddItem
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
}

export { addNewPrioritiyLevel }