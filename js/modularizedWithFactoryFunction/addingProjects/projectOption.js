// import {projNames} from "../addingItems/addItem.js";
import {todos, projNames} from "../addingItems/addItem.js";
import {repaintTasks} from "../addingItems/generateListings.js";
import {removeAllChildNodes} from "../editingItems/todoListEditing.js";
// adding new project name into existing selection element when clicked "Add New"
function addNewProjectName(evt) {
    // when clicked on "Add New"
    if (evt.target.value === "Add New") {
        let newOption = prompt("Enter New Project Name");
        let optionDiv = document.createElement("option");

        // targeting selection tag for Project Names and adding newly added option into that list and selecting it
        // let selectElem = evt.target.parentNode.querySelector("#p-name");
        let dataAttr = evt.target.parentNode.parentNode.getAttribute("data-item");
        let selectElem = todos[dataAttr].querySelector("#p-name");
        optionDiv.value = newOption;
        // console.log(dataAttr, selectElem);
        
        selectElem.add(new Option(newOption, optionDiv.value, false, true), null);
        console.log(dataAttr, selectElem, todos, todos[dataAttr]);
        // including into projNames array from addItem file
        projNames.insert(1, newOption);
        let listsNode = evt.target.parentNode.parentNode.parentNode;
        removeAllChildNodes(listsNode);
        repaintTasks(listsNode, todos);
        // selectElem.add(new Option(newOption, optionDiv.value, false, true), null);
        // selectElem.add(new Option(newOption, optionDiv.value, true));
        
        let replacingSelect = replaceSelect();
        selectElem.parentNode.replaceChild(replacingSelect, selectElem);
        // console.log("::", selectElem.parentNode, replacingSelect)
        // selectElem.parentNode.replaceChild(selectElem, replacingSelect);
        // replaceSelectWithOptions(selectElem);
        console.log(todos[dataAttr]);
        selectElem.selectedIndex = "1";
    }
}

// function replaceSelectWithOptions(selectElem) {
//     selectElem.innerHTML = "";
//     for(let i=0;i<projNames.length; i++) {
//         let option = document.createElement("div");
//         option.textContent = projNames[i];
//         option.value = projNames[i];
//         selectElem.append(option);
//     }
// }

function replaceSelect() {
    let select = document.createElement("select");
    for(let i=0;i<projNames.length; i++) {
        let option = document.createElement("div");
        option.textContent = projNames[i];
        option.value = projNames[i];
        select.append(option);
    }
    console.log(select);
    select.id = "p-name";
    return select;
}

// utility functionality for inserting newly added Project Name into ProjNames array imported from AddItem
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
}

export {addNewProjectName}


/**
 * 
 * 
 * without using projNames array
 function addNewProjectName(evt) {
    // when clicked on "Add New"
    if (evt.target.value === "Add New") {
        let newOption = prompt("Enter New Project Name");
        let optionDiv = document.createElement("option");

        // targeting selection tag for Project Names and adding newly added option into that list and selecting it
        // let selectElem = evt.target.parentNode.querySelector("#p-name");
        let dataAttr = evt.target.parentNode.parentNode.getAttribute("data-item");
        let selectElem = todos[dataAttr].querySelector("#p-name");
        optionDiv.value = newOption;
        // console.log(dataAttr, selectElem);
        
        // selectElem.add(new Option(newOption, optionDiv));
        // selectElem.value = selectElem.options[selectElem.options.length - 1];
        // selectElem.add(new Option(newOption, optionDiv),newOption, false, true);
        // selectElem.add(new Option(newOption, optionDiv, false, true));
        selectElem.add(new Option(newOption, optionDiv.value, false, true), null);
        console.log(dataAttr, selectElem, todos, todos[dataAttr]);
        // including into projNames array from addItem file
        // projNames.insert(1, newOption);
    }
}
 */