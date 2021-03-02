import {todos, displayAllTodoTasks} from "../showTasks/displayTodos.js";
let groupifyTasks = [];
let filteredTasks, uniqueArray = [];
function groupTodosByProjects() {
    // displayAllTodoTasks();
    todos.forEach(item => {
        console.log("[]",item.projectName);
        if(item.projectName !== null ) {
            let check = sanityCheck(item.id);
            if(check) groupifyTasks.push(item);
            // console.log("gr:", groupifyTasks);
        }
    });
}

function sanityCheck(taskID) {
    // groupifyTasks.map(item => item.byName.id === taskID ? false : true);
    // return groupifyTasks.map(item => item.byName.id === taskID ? false : true);
    return groupifyTasks.map(item => item.id === taskID ? false : true);
}

function showGroupifiedProjectTodos(projectName) {
    uniqueArray = groupifyTasks.filter((obj, idx) => {
        let _obj = JSON.stringify(obj);
        return idx === groupifyTasks.findIndex(obj => {
            return JSON.stringify(obj) === _obj;
        });
    });
    // console.log("{}", uniqueArray);
    // filteredTasks = uniqueArray.filter(item => item.projectName === projectName);
    filteredTasks = uniqueArray.filter(item => {
        console.log(item.projectName, projectName, item.projectName === projectName)
        return item.projectName === projectName
    });
    // console.log(filteredTasks, uniqueArray);
    // console.log("!!",filteredTasks, projectName, groupifyTasks);
    return filteredTasks;
}

export {groupTodosByProjects, groupifyTasks, showGroupifiedProjectTodos, uniqueArray, filteredTasks}

/**
 * 
 * 
 function groupTodosByProjects() {
    todos.forEach(item => {
        console.log("[]",item.projectName);
        if(item.projectName !== null ) {
            let check = sanityCheck(item.id);
            if(check) groupifyTasks.push(item);
            // groupifyTasks =  groupifyTasks[0];
            // let check = sanityCheck(item.id, item.projectName);
            // console.log("istrue:",check);
            // if(check) groupifyTasks.push({byName: item});
            // if(check) groupifyTasks.push({[item.projectName]: item});
        }
    });
}

// function sanityCheck(taskID, pName) {
//     // groupifyTasks.map(item => item.byName.id === taskID ? false : true);
//     // return groupifyTasks.map(item => item["pName"].id === taskID ? false : true);
//     return groupifyTasks.map(item => item[pName].id === taskID ? false : true);
// }

function sanityCheck(taskID) {
    // groupifyTasks.map(item => item.byName.id === taskID ? false : true);
    // return groupifyTasks.map(item => item.byName.id === taskID ? false : true);
    return groupifyTasks.map(item => item.id === taskID ? false : true);
}

// groupifyTasks.filter((obj, idx, self) => {
//     idx === self.findIndex(el => (
//         el.id === obj.id && el.projectName === obj.projectName
//     ))
// });

// console.log("{}", groupifyTasks);

function showGroupifiedProjectTodos(projectName) {
    // groupifyTasks.filter((obj, idx, self) => {
    //     idx === self.findIndex(el => (
    //         el.id === obj.id && el.projectName === obj.projectName
    //     ))
    // });

    let uniqueArray = groupifyTasks.filter((obj, idx) => {
        let _obj = JSON.stringify(obj);
        return idx === groupifyTasks.findIndex(obj => {
            return JSON.stringify(obj) === _obj;
        });
    });
    // console.log("{}", uniqueArray);

    // let filteredTasks = groupifyTasks.filter(item => item.projectName === projectName);
    let filteredTasks = uniqueArray.filter(item => item.projectName === projectName);
    console.log("!!",filteredTasks, projectName, groupifyTasks);
}
 * 
 * 
 function groupTodosByProjects() {
    todos.forEach(item => {
        console.log(item.projectName);
        if(item.projectName !== null ) {
            // sanityCheckForPushes(item.projectName);
            // let check = sanityCheckForPushes(item.projectName);
            // groupifyTasks.push({byName: item});
            let check = sanityCheck(item.id);
            console.log("istrue:",check)
            if(check) groupifyTasks.push({byName: item});
            // console.log(groupifyTasks);
        }
    });
}

function sanityCheck(taskID) {
    // groupifyTasks.map(item => item.byName.id === taskID ? false : true);
    return groupifyTasks.map(item => item.byName.id === taskID ? false : true);
}

function sanityCheckForPushes(pName) {
    groupifyTasks.map(item => {
        // console.log("is true: ", item.projectName === pName);
        // item.projectName === pName ? true : false;
        // return item.byName.projectName === pName ? true : false;
        // item.byName.projectName === pName ? true : false;
        // if(item.byName.projectName === pName) return true;
        // if(item.byName.projectName === pName) return false;
        console.log("::",item.byName.projectName.includes(pName));
        if(item.byName.projectName.includes(pName)) return false;
    });
    // return false;
    return true;
}

function showGroupifiedProjectTodos(projectName) {
    // let filteredTasks = groupifyTasks.filter(item => item["byName"] === projectName);
    // let filteredTasks = groupifyTasks.filter(item => item.projectName === projectName);
    // let filteredTasks = groupifyTasks.filter(item => {
    //     item.byName.projectName === projectName;
    //     // console.log("??",item.byName.projectName);
    // });
    // console.log(projectName, groupifyTasks);
    let filteredTasks = groupifyTasks.filter(item => item.byName.projectName === projectName);
    console.log("!!",filteredTasks, projectName, groupifyTasks);
}
 * 
 * 
 // let groupify = [{projectName: null, taskTitle: null, taskID: null}];
let groupify = [];
function groupTodosByProjects(projectName, taskTitle, taskID) {
    groupify.forEach(item => {
        for(let key in item) {
            console.log("<>",key, item[key]);
        }
    });
    // console.log(groupify[0]["projectName"], groupify[0]["taskTitle"]);
    // groupify.push({projectName: projectName, taskTitle: taskTitle});
    // console.log(groupify);
}
 * 
 * 
 function groupTodosByProjects(projectName, taskTitle) {
    groupify = [];
    groupify.push({projectName: projectName, taskTitle: taskTitle});
    console.log(groupify);
}
 */