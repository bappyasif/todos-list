// import {projNames} from "../addingItems/addItem.js";
import {todos, projNames} from "../addingTasks/addTask.js";
import {repaintTasks} from "../addingTasks/showTasks.js";
import {removeAllChildNodes} from "../editingTasks/todoItemsEditing.js";
// adding new project name into existing selection element when clicked "Add New"
function addNewProjectName(evt) {
    // when clicked on "Add New"
    if (evt.target.value === "Add New") {
        let newOption = prompt("Enter New Project Name");
        let optionDiv = document.createElement("option");

        // targeting selection tag for Project Names and adding newly added option into that list and selecting it
        let dataId = evt.target.parentNode.parentNode.id;
        let selectElem;
        
        todos.forEach(item => {
            if(item.id === dataId) {
                selectElem = item.querySelector("#p-name");
            }
        });

        optionDiv.value = newOption;
        selectElem.add(new Option(newOption, optionDiv.value, false, true), null);

        // including into projNames array from addItem file
        projNames.insert(1, newOption);
        let listsNode = evt.target.parentNode.parentNode.parentNode;
        removeAllChildNodes(listsNode);
        repaintTasks(listsNode, todos);
        
        let replacingSelect = replaceSelect(newOption);
        selectElem.parentNode.replaceChild(replacingSelect, selectElem);
        
    }
}

function replaceSelect(selected) {
    let select = document.createElement("select");
    for(let i=0;i<projNames.length; i++) {
        let option = document.createElement("option");
        option.textContent = projNames[i];
        option.value = projNames[i];
        select.append(option);
        if(option.value === selected) option.selected =  true;
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
