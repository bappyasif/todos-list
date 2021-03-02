import {todos} from "../showTasks/displayTodos.js";
function priorityLevelsColorCoating() {
    todos.forEach(item => {
        // console.log("<>",item.domElem, item.domElem.querySelector(".task-project"));
        let prLvl = item.domElem.querySelector(".priority-level");
        // prLvl.style.backgroundColor = "aqua";
        colorCodes(item.priorityLevel, prLvl);
    });
}

function coloringPrioritiesFromDD(selectedDD, ID) {
    todos.forEach(item => {
        let prColoringDiv = item.domElem.querySelector(".priority-level");
        let taskID = ID.split("-")[2];
        console.log("ID:", taskID, item.id, typeof taskID, typeof item.id);
        if(Number(taskID) === item.id) {
            colorCodes(selectedDD, prColoringDiv);
        } 
        else {
            let ddValue = item.domElem.querySelector(".priority-dd select").value;
            colorCodes(ddValue, prColoringDiv);
        }
    });
}

function colorCodes(taskPriority, priorityDiv) {
    switch(taskPriority) {
        case "Normal":
            priorityDiv.style.backgroundColor = "silver";
            break;
        case "Low":
            priorityDiv.style.backgroundColor = "orange";
            break;
        case "Medium":
            priorityDiv.style.backgroundColor = "yellow";
            break;
        case "High":
            priorityDiv.style.backgroundColor = "red";
            break;
        default:
            priorityDiv.style.backgroundColor = "aqua";
    }
}

export {priorityLevelsColorCoating, coloringPrioritiesFromDD}

/**
 * 
 * 
 // function coloringPrioritiesFromDD(selectedDD) {
//     todos.forEach(item => {
//         let prColoringDiv = item.domElem.querySelector(".priority-level")
//         colorCodes(selectedDD, prColoringDiv);
//     });
// }

// function userSelectedPriotiyFromEntryTask() {
//     todos.forEach(item => {
//         let prColoringDiv = item.domElem.querySelector(".priority-level");

//     })
// }
 */