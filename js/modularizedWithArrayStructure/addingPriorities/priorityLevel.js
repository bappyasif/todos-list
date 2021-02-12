import {priorities} from "../addingItems/addItem.js";
import {colorChange} from "../colorCoating/priorityColors.js";
// import {getListings} from "../addingItems/generateListings.js";

// adding newly added priority level into priorities array from addItem file
function addNewPrioritiyLevel(evt) {
    // when clicked on "Add New"
    if (evt.target.value === "Add New") {
        let newOption = prompt("Enter New Priority Name");
        let optionDiv = document.createElement("option");

        // targeting select tag for priority level and it as an option to choose from
        let selectElem = evt.target.parentNode.querySelector("#level");
        optionDiv.value = newOption;
        
        selectElem.add(new Option(newOption, optionDiv));
        selectElem.value = selectElem.options[selectElem.options.length - 1];
        
        selectElem.options[selectElem.selectedIndex];

        // adding into priorities array and changing color as intended 
        priorities.insert(1, newOption);
        colorChange(newOption, selectElem);
        // getListings();
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
    } else {
        priorities.forEach(item => {
            switch(item) {
                case "low":
                    evt.target.parentNode.parentNode.style.backgroundColor = "lightBlue";
                    break;
                case "lower":
                    evt.target.parentNode.parentNode.style.backgroundColor = "blue";
                    break;
                case "lowest":
                    evt.target.parentNode.parentNode.style.backgroundColor = "darkBlue";
                    break;
            }
        });
    }
}

export {addNewPrioritiyLevel}