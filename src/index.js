// import {showInputter, collectInputs, readyInput} from "../js/modularized/userInput/getInput.js";
// import {showInputter, readyInput} from "../js/modularized/userInput/getInput.js";
// import {editDelete} from "../js/modularized/editingItems/todoListEditing.js";

// import {showInputter, readyInput} from "../js/modularizedWithArrayStructure/userInput/getInput.js";
// import {editDelete} from "../js/modularizedWithArrayStructure/editingItems/todoListEditing.js";

import {showInputter, readyInput} from "../js/modularizedWithFactoryFunction/userInput/getInput.js";
import {editDelete} from "../js/modularizedWithFactoryFunction/editingItems/todoListEditing.js";

readyInput.addEventListener("click", showInputter);
editDelete();