function readyTodoTaskEntry() {
    let addTask = document.querySelector("#show-panel");
    let entryTask = document.querySelector(".task-entry");
    let addTodo = document.querySelector(".todo-task");
    addTask.addEventListener("click", () => {
        if(entryTask.style.display === "none") {
            entryTask.style.display = "block";
            addTodo.addEventListener("click", () => {
                getUserTaskEntry();
            })
        } else {
            entryTask.style.display = "none";
        }
    });
}

function getUserTaskEntry() {
    let taskInput = document.querySelector("#create-task");
    let taskTitle = taskInput.value;
    console.log(taskTitle);
    getValuesFromIcons();
}

function getValuesFromIcons() {
    let calendar =  document.querySelector("#calendar");
    // console.log(calendar);
    calendar.addEventListener("click", () => {
        console.log("?!");
        let datePicker = document.querySelector("#date-picker");
        if(datePicker.style.display === "none") {
            datePicker.style.display = "block";
            // datePicker.innerHTML = ""
        } else {
            datePicker.style.display = "none";
        }
        
    })
}

export {readyTodoTaskEntry}


/**
 * 
 * 
 function readyTodoTaskEntry() {
    let addTask = document.querySelector("#show-panel");
    let entryTask = document.querySelector(".task-entry");
    console.log(entryTask, entryTask.style.display ,entryTask.getAttribute("display"));
    addTask.addEventListener("click", () => {
        if(entryTask.style.display === "none") {
            console.log("!!");
            entryTask.style.display = "block";
        } else {
            entryTask.style.display = "none";
            console.log("!?");
        }
        // console.log("??");
        // console.log(entryTask.visibility, window.getComputedStyle(entryTask).visibility)
        // if(window.getComputedStyle(entryTask).visibility === "hidden") {
        //     console.log("!!");
        //     window.getComputedStyle(entryTask).visibility = "visible"
        // } else {
        //     window.getComputedStyle(entryTask).visibility = "hidden";
        //     console.log("!?");
        // }
        // if(entryTask.visibility === "hidden") {
        //     console.log("!!");
        //     entryTask.visibility === "visible"
        // } else {
        //     entryTask.visibility === "hidden"
        //     console.log("!?");
        // }
    });
}
 */