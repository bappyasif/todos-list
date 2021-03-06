import { todos } from "../showTasks/displayTodos.js";
import { format, parseISO, sub, addDays } from "date-fns";
import { displayingFiltered, displayAllTodoTasks } from "../showTasks/displayTodos.js";
let tasks = [], filteredTasks = [], dateString;
let panelTask = document.querySelector(".panel-text");
let dateStamp = document.querySelector(".date-stamp");

function handleDateWiseGrouping() {
    filteredTasks = [];
    tasks = [];
    let dateTodays = document.querySelector(".today");
    let dateTomorrow = document.querySelector(".tomorrow");
    let dateNextWeek = document.querySelector(".next-week");
    dateTodays.addEventListener("click", showTasks);
    dateTomorrow.addEventListener("click", showTasks);
    dateNextWeek.addEventListener("click", showTasks);
    // displayAllTodoTasks();
    // filteredTasks = [];
}

function showTasks(evt) {
    console.log("here!!", evt.target);
    let parentElement = evt.target.parentNode;
    // filteredTasks = [];
    // keeping an empty array so that each time it refreshes before loading with data from [todos]
    tasks = [];
    if (parentElement.classList.contains("today")) showTodaysTodoTask(evt);
    if (parentElement.classList.contains("tomorrow")) showTomorrowsTodoTask(evt);
    if (parentElement.classList.contains("next-week")) showNextWeeksTasks(evt);
    // displayAllTodoTasks();
}

function slipinDateAndText(dateString, dateText) {
    panelTask.textContent = dateText;
    dateStamp.textContent = dateString;
}

function showTodaysTodoTask(evt) {
    // filteredTasks = [];
    dateString = new Date();
    // adding in tasks panel header for text and date for Days interval from side panel
    let formatedString = format(dateString, "MMM-dd-yyyy' On:'-EEEE");
    slipinDateAndText(formatedString, "Today");
    // console.log(dateString);
    filterTasks(dateString, evt);
    filteringUtility("today");
    // console.log(tasks,filteredTasks);
    displayingFiltered(filteredTasks);
    // just making sure after showing current filtered tasks array gets cleaned up so that when delete functionality kicks in, it doesn't keep older elements in it even though they were deleted
    filteredTasks = [];
}

function showTomorrowsTodoTask(evt) {
    dateString = new Date().setDate(new Date().getDate() + 1);
    // adding in tasks panel header for text and date for Days interval from side panel
    let formatedString = format(dateString, "MMM-dd-yyyy' On:'-EEEE");
    slipinDateAndText(formatedString, "Tomorrow");
    // console.log(dateString);
    filterTasks(dateString, evt);
    filteringUtility("tomorrow");
    // console.log(tasks,filteredTasks);
    displayingFiltered(filteredTasks);
    // just making sure after showing current filtered tasks array gets cleaned up so that when delete functionality kicks in, it doesn't keep older elements in it even though they were deleted
    filteredTasks = [];
}

function showNextWeeksTasks(evt) {
    dateString = new Date();
    // adding in tasks panel header for text and date for Days interval from side panel
    let formatedString = format(addDays(dateString, 7), "MMM-dd-yyyy' On:'-EEEE");
    slipinDateAndText(formatedString, "Next Week");
    // console.log(dateString);
    filterTasks(dateString, evt);
    // filteredTasks = [];
    filteringUtility("next_week");
    // console.log(tasks,filteredTasks);
    displayingFiltered(filteredTasks);
    // just making sure after showing current filtered tasks array gets cleaned up so that when delete functionality kicks in, it doesn't keep older elements in it even though they were deleted
    filteredTasks = [];
}

function filteringUtility(filterString) {
    tasks.forEach(item => {
        for (let key in item) {
            if (key === filterString) {
                filteredTasks.push(item[filterString]);
                console.log("Filtered::", filteredTasks);
            }
        }
    });
}

function filterTasks(dateString, evt) {
    todos.forEach(item => {
        let dueDate = item.domElem.querySelector("#task-dd-" + item.id);
        let dateCheck = dueDate.textContent.split(":")[0];
        let formatCheck = format(dateString, "MM-dd-yyyy");
        // console.log(dateCheck, formatCheck, dateCheck === formatCheck);
        let checkWeek = format(sub(new Date(dateCheck), { days: 7 }), "MM-dd-yyyy");
        // console.log(checkWeek, checkWeek >= formatCheck);

        // previously it wasn't updating for [todos] element rather only for [tasks], which was resulting in not updating correct Todo List per Date Group wise
        // now as it's been also recorde after each change, its getting recorded in [todos] as well, so filtering happens effeciently as expected
        item.dueDate = formatCheck;
        // also clearing out [filteredTasks] so that each event gets a fresh array to begin with and render tasks in it
        filteredTasks = [];
        // tasks = [];
        if (checkWeek >= formatCheck) {
            if (evt.target.parentNode.classList.contains("next-week")) {
                tasks.push({ next_week: item });
            };
        } else if (dateCheck === formatCheck) {
            //     // console.log(evt.target.parentNode);
            if (evt.target.parentNode.classList.contains("today")) {
                tasks.push({ today: item });
            } else if (evt.target.parentNode.classList.contains("tomorrow")) {
                tasks.push({ tomorrow: item });
            }
        }
    });
}

// export { handleDateWiseGrouping }
export { handleDateWiseGrouping, slipinDateAndText }

/**
 * 
 * 
 function filteringUtility(filterString) {
    // tasks.filter(item=> item)
    tasks.forEach(item => {
        for (let key in item) {
            // console.log(key, item[key]);
            if (key === filterString) {
                // filteredTasks = [];
                filteredTasks.push(item[filterString]);
                console.log("Filtered::", filteredTasks);
            }
        }
    });
}
 * 
 * 
 function filterTasks(dateString, evt) {
    todos.forEach(item => {
        let dueDate = item.domElem.querySelector("#task-dd-" + item.id);
        let dateCheck = dueDate.textContent.split(":")[0];
        let formatCheck = format(dateString, "MM-dd-yyyy");
        // console.log(dateCheck, formatCheck, dateCheck === formatCheck);
        let checkWeek = format(sub(new Date(dateCheck), { days: 7 }), "MM-dd-yyyy");
        // console.log(checkWeek, checkWeek >= formatCheck);

        // previously it wasn't updating for [todos] element rather only for [tasks], which was resulting in not updating correct Todo List per Date Group wise
        // now as it's been also recorde after each change, its getting recorded in [todos] as well, so filtering happens effeciently as expected
        item.dueDate = formatCheck;
        // also clearing out [filteredTasks] so that each event gets a fresh array to begin with and render tasks in it
        filteredTasks = [];
        // tasks = [];
        if (checkWeek >= formatCheck) {
            if (evt.target.parentNode.classList.contains("next-week")) {
                // filteredTasks = [];
                // tasks = [];
                // item.dueDate = formatCheck;
                tasks.push({ next_week: item });
            };
        } else if (dateCheck === formatCheck) {
            //     // console.log(evt.target.parentNode);
            if (evt.target.parentNode.classList.contains("today")) {
                // item.dueDate = formatCheck;
                // tasks = [];
                tasks.push({ today: item });
            }
            else if (evt.target.parentNode.classList.contains("tomorrow")) {
                // item.dueDate = formatCheck;
                // tasks = [];
                tasks.push({ tomorrow: item });
            }
        }

        // if (checkWeek >= formatCheck) {
        //     if (evt.target.parentNode.classList.contains("next-week")) tasks.push({ next_week: item });
        // } else if (dateCheck === formatCheck) {
        //     //     // console.log(evt.target.parentNode);
        //     if (evt.target.parentNode.classList.contains("today")) tasks.push({ today: item });
        //     else if (evt.target.parentNode.classList.contains("tomorrow")) tasks.push({ tomorrow: item });
        // }
    });
}
 *
 *
 function filterTasks(dateString, evt) {
    todos.forEach(item => {
        let dueDate = item.domElem.querySelector("#task-dd-"+item.id);
        let dateCheck = dueDate.textContent.split(":")[0];
        let formatCheck = format(dateString, "MM-dd-yyyy");
        // console.log(dateCheck, formatCheck, dateCheck === formatCheck);
        let checkWeek = format(sub(new Date(dateCheck), {days:7}), "MM-dd-yyyy");

        console.log(checkWeek, checkWeek >= formatCheck);
        if(dateCheck === formatCheck) {
        //     // console.log(evt.target.parentNode);
            if(evt.target.parentNode.classList.contains("today")) tasks.push({today:item});
            else if(evt.target.parentNode.classList.contains("tomorrow")) tasks.push({tomorrow:item});
        //     else if(evt.target.parentNode.classList.contains("next-week")) tasks.push({next_week:item});
        }
        else if(checkWeek >= formatCheck) {
            if(evt.target.parentNode.classList.contains("next-week")) tasks.push({next_week:item});
        }
    });
}
 *
 *
 function filterTasks(dateString, evt) {
    todos.forEach(item => {
        let dueDate = item.domElem.querySelector("#task-dd-"+item.id);
        // console.log(dueDate.textContent.split(":")[0]);
        let dateCheck = dueDate.textContent.split(":")[0];
        // dateCheck = format(dateCheck, "MM-dd-yyyy");
        // dateCheck = format(parseISO(dateCheck), "MM-dd-yyyy");
        // let formatCheck = format(parseISO(dateCheck), "MM-dd-yyyy");
        // let formatCheck = format(dateString, "yyyy-MM-dd");
        let formatCheck = format(dateString, "MM-dd-yyyy");
        console.log(dateCheck, formatCheck, dateCheck === formatCheck);
        if(dateCheck === formatCheck) {
            console.log(evt.target.parentNode);
            if(evt.target.parentNode.classList.contains("today")) tasks.push({today:item});
            else if(evt.target.parentNode.classList.contains("tomorrow")) tasks.push({tomorrow:item});
            else if(evt.target.parentNode.classList.contains("next-week")) tasks.push({next_week:item});
        }
    });
}
 *
 *
 function showTodaysTodoTask(evt) {
    // dateString =  format(new Date(), "MM-dd-yyyy");
    dateString = new Date();
    // filterTasks(dateString);
    filterTasks(dateString, evt);
    // console.log(tasks);
    displayingFiltered(tasks);
    filteringUtility("today");
    // console.log(tasks,filteredTasks);
    displayingFiltered(filteredTasks);
}

function showTomorrowsTodoTask(evt) {
    dateString = new Date().setDate(new Date().getDate()+1);
    // console.log(dateString);
    filterTasks(dateString, evt);
    filteringUtility("tomorrow");
    // console.log(tasks,filteredTasks);
    displayingFiltered(filteredTasks);
}
 *
 *
 function filterTasks(evt) {
    todos.forEach(item => {
        let dueDate = item.domElem.querySelector("#task-dd-"+item.id);
        // console.log(dueDate.textContent.split(":")[0]);
        let dateCheck = dueDate.textContent.split(":")[0];
        // let formatCheck = format(parseISO(dateCheck), "MM-dd-yyyy");
        let formatCheck = format(new Date(), "yyyy-MM-dd");
        // console.log(dateCheck, formatCheck, dateCheck === formatCheck);
        if(dateCheck === formatCheck) tasks.push(item);
    });
}
 */