// import {showInputter, collectInputs, readyInput} from "../js/modularized/userInput/getInput.js";
// import {showInputter, readyInput} from "../js/modularized/userInput/getInput.js";
// import {editDelete} from "../js/modularized/editingItems/todoListEditing.js";

// import {showInputter, readyInput} from "../js/modularizedWithArrayStructure/userInput/getInput.js";
// import {editDelete} from "../js/modularizedWithArrayStructure/editingItems/todoListEditing.js";

// import {showInputter, readyInput} from "../js/modularizedWithFactoryFunction/userInput/getInput.js";
// import {editDelete} from "../js/modularizedWithFactoryFunction/editingItems/todoListEditing.js";

// import {showInputter, readyInput} from "../js/refactoringFactoryFunctionImplementation/userInput/getInput.js";
// import {editDelete} from "../js/refactoringFactoryFunctionImplementation/editingTasks/todoItemsEditing.js";

// readyInput.addEventListener("click", showInputter);
// editDelete();

/** For Assignment */
// import displayingProjects from "../js/properAttemptForAssignment/init.js";
import {displayingProjects, readyGroupingsWiseDisplays} from "../js/properAttemptForAssignment/init.js";
import {addingNewProjectName} from "../js/properAttemptForAssignment/projectNames/addProject.js";
import {readyTodoTaskEntry} from "../js/properAttemptForAssignment/addTasks/initiateEntry.js";
// import {displayAllTodoTasks, todos} from "../js/properAttemptForAssignment/showTasks/displayTodos.js";
import {editTodos} from "../js/properAttemptForAssignment/modifyTodos/edifyTasks.js";
import { displayAllTasksFromFirestoreDatabase, displayAllTodoTasks } from "../js/properAttemptForAssignment/showTasks/displayTodos.js";
// import { deleteDocument, localChanges, readData, simpleQueries, testFirestore, updateDocument } from "../js/properAttemptForAssignment/addTasks/saveTaskToFirebase.js";
// import {showProjectNamesDD} from "../js/properAttemptForAssignment/projectNames/showDropdowns.js";
displayingProjects();
addingNewProjectName();
readyTodoTaskEntry();
// displayAllTodoTasks();
editTodos();
// showProjectNamesDD();
readyGroupingsWiseDisplays();
displayAllTasksFromFirestoreDatabase();

// testFirestore();
// readData();
// localChanges();
// simpleQueries();
// updateDocument();
// deleteDocument();