import { todos } from "../showTasks/displayTodos.js";
import { format, parseISO, sub, addDays } from "date-fns";
import { displayingFiltered } from "../showTasks/displayTodos.js";
let tasks = [], filteredTasks = [], dateString;
let panelTask = document.querySelector(".panel-text");
let dateStamp = document.querySelector(".date-stamp");

function handleDateWiseGrouping() {
    let dateTodays = document.querySelector(".today");
    let dateTomorrow = document.querySelector(".tomorrow");
    let dateNextWeek = document.querySelector(".next-week");
    dateTodays.addEventListener("click", showTasks);
    dateTomorrow.addEventListener("click", showTasks);
    dateNextWeek.addEventListener("click", showTasks);
}

function showTasks(evt) {
    console.log("here!!", evt.target);
    let parentElement = evt.target.parentNode;
    if (parentElement.classList.contains("today")) showTodaysTodoTask(evt);
    if (parentElement.classList.contains("tomorrow")) showTomorrowsTodoTask(evt);
    if (parentElement.classList.contains("next-week")) showNextWeeksTasks(evt);
}

function slipinDateAndText(dateString, dateText) {
    panelTask.textContent = dateText;
    dateStamp.textContent = dateString;
}

function showTodaysTodoTask(evt) {
    dateString = new Date();
    // adding in tasks panel header for text and date for Days interval from side panel
    let formatedString = format(dateString, "MMM-dd-yyyy' On:'-EEEE");
    slipinDateAndText(formatedString, "Today");
    // console.log(dateString);
    filterTasks(dateString, evt);
    filteringUtility("today");
    // console.log(tasks,filteredTasks);
    displayingFiltered(filteredTasks);
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
}

function showNextWeeksTasks(evt) {
    dateString = new Date();
    // adding in tasks panel header for text and date for Days interval from side panel
    let formatedString = format(addDays(dateString, 7), "MMM-dd-yyyy' On:'-EEEE");
    slipinDateAndText(formatedString, "Next Week");
    // console.log(dateString);
    filterTasks(dateString, evt);
    filteringUtility("next_week");
    // console.log(tasks,filteredTasks);
    displayingFiltered(filteredTasks);
}

function filteringUtility(filterString) {
    // tasks.filter(item=> item)
    tasks.forEach(item => {
        for (let key in item) {
            console.log(key, item[key]);
            if (key === filterString) {
                filteredTasks = [];
                filteredTasks.push(item[filterString]);
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
        if (checkWeek >= formatCheck) {
            if (evt.target.parentNode.classList.contains("next-week")) tasks.push({ next_week: item });
        } else if (dateCheck === formatCheck) {
            //     // console.log(evt.target.parentNode);
            if (evt.target.parentNode.classList.contains("today")) tasks.push({ today: item });
            else if (evt.target.parentNode.classList.contains("tomorrow")) tasks.push({ tomorrow: item });
        }
    });
}

export { handleDateWiseGrouping }

/**
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