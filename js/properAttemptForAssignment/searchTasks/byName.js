import { uniqueArray } from "../groupTasks/byName.js";
import { todos, displayingFiltered } from "../showTasks/displayTodos.js";
// import { displayingFiltered } from "../showTasks/displayTodos.js";
let tasks = [], uniqueTasks = [];

function findTasksByName() {
    let searchElem = document.querySelector("#search-tasks");
    searchElem.addEventListener("input", showAnyMatchedTasks);
}

function showAnyMatchedTasks(evt) {
    let searchString = evt.target.value.toLowerCase();
    // making sure searchString be ateaslt length of 4 characters
    let minStr = searchString.length === 4 ? evt.target.value : -1;
    // clearing tasks for empty string search
    searchString.length === 0 ? tasks = [] : tasks;
    todos.forEach(item => {
        if (
            item.title.toLowerCase().includes(searchString)
            &&
            item.title.toLowerCase().indexOf(minStr) !== -1) {
            tasks.push(item);
            // console.log(tasks);
        }
    });
    removingDuplicates(tasks, evt);
}

function removingDuplicates(tasks, evt) {
    // using filter and findIndex
    uniqueTasks = tasks.filter((val, idx, arr) => arr.findIndex(
        elem => (JSON.stringify(elem) === JSON.stringify(val))) === idx);

    // clearing out unique array for previously held entry when search string is empty
    evt.target.value.length < 1 ? uniqueTasks = [] : uniqueTasks;
    // displaying searched string Todos else showing exisiting Todos
    if(uniqueTasks.length) displayingFiltered(uniqueTasks);
    else displayingFiltered(todos);
    // console.log("<>", uniqueTasks);
}


export { findTasksByName }

/**
 * 
 * 
 function removingDuplicates(tasks, evt) {
    // using filter and findIndex
    uniqueTasks = tasks.filter((val, idx, arr) => arr.findIndex(
        elem => (JSON.stringify(elem) === JSON.stringify(val))) === idx);

    // using reduce
    uniqueTasks = tasks.reduce((accm, curr) => {
        let x = accm.find(item => item.id === curr.id);

        if(!x) {
            // if that ID is non-existent then add it to array
            return accm.concat([curr]);
        } else {
            // otherwise return accm array
            return accm;
        }
    }, []);

    // using Set data structure
    // set will only allow unique valus in it, so when duplicates found it ignores automatically
    // second map() runs on Set() curated array and returns id so that can be cross checked with Set() curated array
    uniqueArray = Array.from(new Set(tasks.map(item => item.id)))
    .map(id => tasks.find(el => el.id === id));

    // clearing out unique array for previously held entry when search string is empty
    evt.target.value.length < 1 ? uniqueTasks = [] : uniqueTasks;
    // displaying searched string Todos else showing exisiting Todos
    if(uniqueTasks.length) displayingFiltered(uniqueTasks);
    else displayingFiltered(todos);
    console.log("<>", uniqueTasks);
}
 * 
 * 
 function findTasksByName() {
    let searchElem = document.querySelector("#search-tasks");
    searchElem.addEventListener("input", showAnyMatchedTasks);
    // if(tasks.length > 0) displayingFiltered(tasks);
    // if (uniqueTasks.length > 0) displayingFiltered(uniqueTasks);
    // removingDuplicates(tasks);   
    // displayingFiltered(uniqueTasks);
}
 * 
 * 
 function showAnyMatchedTasks(evt) {
    // console.log("Input:",evt.target.value);
    // let searchString = evt.target.value;
    // if(evt.target.value.length === 0) filteredTasks = [];
    // if(evt.target.length === 0) filteredTasks = [];
    let searchString = evt.target.value.toLowerCase();
    let minStr = searchString.length === 4 ? evt.target.value : -1;
    // clearing tasks for empty string search
    searchString.length === 0 ? tasks = [] : tasks;
    todos.forEach(item => {
        if (
            item.title.toLowerCase().includes(searchString)
            &&
            item.title.toLowerCase().indexOf(minStr) !== -1) {
            // console.log(item.title);
            tasks.push(item);
            console.log(tasks);
        }
    });
    removingDuplicates(tasks, evt);
    // removingDuplicates(tasks);
    // displayingFiltered(filteredTasks);
}

function removingDuplicates(tasks, evt) {
    // evt.target.value.length < 1 ? uniqueTasks = [] : uniqueTasks;
    uniqueTasks = tasks.filter((val, idx, arr) => arr.findIndex(
        elem => (JSON.stringify(elem) === JSON.stringify(val))) === idx);
    
    // clearing out unique array for previously held entry when search string is empty
    evt.target.value.length < 1 ? uniqueTasks = [] : uniqueTasks;
    console.log("<>", uniqueTasks);
}
 *
 *
 function removingDuplicates(tasks) {
    uniqueTasks = tasks.filter((val, idx, arr) => arr.findIndex(
        elem => (JSON.stringify(elem) === JSON.stringify(val))) === idx);
    console.log("<>",uniqueTasks);
}
 *
 *
 function showAnyMatchedTasks(evt) {
    // console.log("Input:",evt.target.value);
    let searchString = evt.target.value;
    let minStr = searchString.length === 4 ? evt.target.value : -1;
    todos.forEach(item => {
        // console.log(item, item.title);
        // if(item.title.includes(searchString)) console.log(item.title);
        // if(item.title.includes(searchString)) {
        //     // console.log(item.title);
        //     tasks.push(item);
        //     console.log(tasks);
        // }
        if(
        item.title.includes(searchString)
            &&
        item.title.indexOf(minStr) !== -1) {
            // console.log(item.title);
            tasks.push(item);
            console.log(tasks);
        }
    });
}
 */