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

export {groupTodosByProjects, groupify}

/**
 * 
 * 
 function groupTodosByProjects(projectName, taskTitle) {
    groupify = [];
    groupify.push({projectName: projectName, taskTitle: taskTitle});
    console.log(groupify);
}
 */