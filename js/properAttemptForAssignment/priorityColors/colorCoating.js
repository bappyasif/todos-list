import {todos} from "../showTasks/displayTodos.js";
function priorityLevelsColorCoating() {
    todos.forEach(item => {
        console.log("<>",item.domElem, item.domElem.querySelector(".task-project"));
        let prLvl = item.domElem.querySelector(".priority-level");
        // prLvl.style.backgroundColor = "aqua";
        colorCodes(item.priorityLevel, prLvl);
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

export {priorityLevelsColorCoating}