import { todos, priorities } from "../addingItems/addItem.js";
import { repaintTasks } from "../addingItems/generateListings.js";
import { removeAllChildNodes } from "../editingItems/todoListEditing.js";
import { colorChange } from "../colorCoating/priorityColors.js";
// import {getListings} from "../addingItems/generateListings.js";

// adding newly added priority level into priorities array from addItem file
function addNewPrioritiyLevel(evt) {
    // when clicked on "Add New"
    if (evt.target.value === "Add New") {
        // targeting select tag for priority level and it as an option to choose from
        let dataAttr = evt.target.parentNode.parentNode.getAttribute("data-item");
        let selectElem = todos[dataAttr].querySelector("#level");
        let listsNode = selectElem.parentNode.parentNode.parentNode;
        removeAllChildNodes(listsNode);
        repaintTasks(listsNode, todos);

        let newOption = prompt("Enter New Priority Name");
        let optionDiv = document.createElement("option");
        optionDiv.value = newOption;
        // selectElem.add(new Option(newOption, optionDiv.value, false, true), null);

        // adding into priorities array and changing color as intended 
        priorities.insert(1, newOption);
        colorChange(newOption, selectElem);

        // let listsNode = evt.target.parentNode.parentNode.parentNode;
        // removeAllChildNodes(listsNode);
        // repaintTasks(listsNode, todos);

        // let listsNode = selectElem.parentNode.parentNode.parentNode;
        // removeAllChildNodes(listsNode);
        // repaintTasks(listsNode, todos);

        let replacingSelect = replaceSelect(newOption);
        selectElem.parentNode.replaceChild(replacingSelect, selectElem);

        // let listsNode = selectElem.parentNode.parentNode.parentNode;
        // removeAllChildNodes(listsNode);
        // repaintTasks(listsNode, todos);
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

    // let listsNode = evt.target.parentNode.parentNode.parentNode;
    // removeAllChildNodes(listsNode);
    // repaintTasks(listsNode, todos);

    // else {
    //     let dataAttr = evt.target.parentNode.parentNode.getAttribute("data-item");
    //     let selectElem = todos[dataAttr].querySelector("#level");
    //     priorities.forEach(item => {
    //         if(item === "low") selectElem.parentNode.parentNode.style.backgroundColor = "lightBlue";
    //         else if(item === "lower") selectElem.parentNode.parentNode.style.backgroundColor = "blue";
    //         else if(item === "lowest") selectElem.parentNode.parentNode.style.backgroundColor = "darkBlue";
    //     });
    // }
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

export { addNewPrioritiyLevel }


/**
 *
 *
 // adding newly added priority level into priorities array from addItem file
function addNewPrioritiyLevel(evt) {
    // when clicked on "Add New"
    if (evt.target.value === "Add New") {
        let newOption = prompt("Enter New Priority Name");
        let optionDiv = document.createElement("option");

        // targeting select tag for priority level and it as an option to choose from
        // let selectElem = evt.target.parentNode.querySelector("#level");
        // optionDiv.value = newOption;
        let dataAttr = evt.target.parentNode.parentNode.getAttribute("data-item");
        let selectElem = todos[dataAttr].querySelector("#level");
        optionDiv.value = newOption;

        // selectElem.add(new Option(newOption, optionDiv));
        // selectElem.value = selectElem.options[selectElem.options.length - 1];
        selectElem.add(new Option(newOption, optionDiv.value, false, true), null);

        // selectElem.options[selectElem.selectedIndex];


        // adding into priorities array and changing color as intended
        priorities.insert(1, newOption);
        colorChange(newOption, selectElem);

        let listsNode = evt.target.parentNode.parentNode.parentNode;
        removeAllChildNodes(listsNode);
        repaintTasks(listsNode, todos);

        let replacingSelect = replaceSelect(newOption);
        selectElem.parentNode.replaceChild(replacingSelect, selectElem);
        // let selectedIndex = 1;
        // selectElem.value =  selectedIndex;
        // selectElem.value =  newOption;
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
        let dataAttr = evt.target.parentNode.parentNode.getAttribute("data-item");
        let selectElem = todos[dataAttr].querySelector("#level");
        priorities.forEach(item => {
            if(item === "low") selectElem.parentNode.parentNode.style.backgroundColor = "lightBlue";
            else if(item === "lower") selectElem.parentNode.parentNode.style.backgroundColor = "blue";
            else if(item === "lowest") selectElem.parentNode.parentNode.style.backgroundColor = "darkBlue";
        });
    }
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
 *
 *
 priorities.forEach(item => {
            switch (item) {
                case "lowest":
                    selectElem.parentNode.parentNode.style.backgroundColor = "darkBlue";
                    console.log("lowest");
                    break;
                case "lower":
                    // evt.target.parentNode.parentNode.style.backgroundColor = "blue";
                    selectElem.parentNode.parentNode.style.backgroundColor = "blue";
                    console.log("lower");
                    break;
                case "low":
                    // evt.target.parentNode.parentNode.style.backgroundColor = "lightBlue";
                    console.log("low");
                    selectElem.parentNode.parentNode.style.backgroundColor = "lightBlue";
                    break;
            }
        });
 */