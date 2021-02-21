let count = 0;
let createTask = (title, createdDate, dueDate, priorityLevel, taskNote) => {
    let obj = new Object();
    let increaseCount = () => count++;
    obj.title = title;
    obj.createdDate = createdDate;
    obj.dueDate = dueDate;
    obj.priorityLevel = priorityLevel;
    obj.taskNote = taskNote;
    obj.id = increaseCount();
    obj.getDOM = `<div class="tasks-container">
    <div class="todo-elem" id=${obj.id}>
        <div class="task-info">
        <div class="checklist-div">
            <input type="checkbox" id="task-check">
            <label for="task-check"></label>
        </div>
        <div class="task-name">
            <div class="task-text">${obj.title}</div>
        </div>
        <div class="due-date">
            <sub class="time-stamp" id="task-dd">${obj.dueDate}</sub>
        </div>
        <div class=-"task-added">${obj.createdDate}</div>
        <div class="task-project">
            <div class="priority-level">
                <div class="priority-tooltip">Priority Level</div>
            </div>
            <div class="project-name">Dummy Entry</div>
        </div>
    </div>
    <div class="task-note">${obj.taskNote}</div>
    </div>
    </div>`;
    // obj.domElem = document.createRange().createContextualFragment(obj.getDOM);
    // obj.domElem = document.createRange().createContextualFragment(obj.getDOM).querySelector(".task-info");
    // obj.domElem = document.createRange().createContextualFragment(obj.getDOM).querySelector(".todo-elem");
    // return obj.domElem;
    // return obj.getDOM;
    // obj.domElem.id = obj.id;
    obj.domElem = document.createRange()
    .createContextualFragment(obj.getDOM)
    .querySelector(".todo-elem");
    return obj;
}

export { createTask }