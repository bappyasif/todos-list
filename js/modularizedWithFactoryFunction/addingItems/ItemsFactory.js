let count = 0;

let todoItem = (chkBox,tName, pName, pLevel, edify) => {
    // console.log(chkBox,tName, pName, pLevel, edify);
    let obj = new Object();
    let increaseCount = () => count++;

    obj.checkBox = chkBox;
    obj.taskName = tName;
    obj.projectName = pName;
    obj.projectLevel = pLevel;
    obj.editify = edify;
    obj.listCount = increaseCount;
    obj.id = obj.listCount;

    // let item = convertObject(obj);
    let item = convertObject(obj, increaseCount());
    return item;
}

function convertObject( obj, listNum) {
    let divElForItem = document.createElement("div");
    for(let key in obj) {
        if(key !== "listCount" && key !== "id") {
            divElForItem.append(obj[key]);
        }
    }
    divElForItem.classList.add("list-item");
    divElForItem.setAttribute("data-item", listNum);
    return divElForItem;
}

export {todoItem}


/**
 * 
 let todoItem = (chkBox,tName, pName, pLevel, edify) => {
    console.log(chkBox,tName, pName, pLevel, edify);
    let obj = new Object();
    let increaseCount = () => count++;

    obj.checkBox = chkBox;
    obj.taskName = tName;
    obj.projectName = pName;
    obj.projectLevel = pLevel;
    obj.editify = edify;
    obj.listCount = increaseCount;
    obj.id = obj.listCount;
    // this.checkBox = chkBox;
    // this.taskName = tName;
    // this.projectName = pName;
    // this.projectLevel = pLevel;
    // this.editify = edify;
    // this.listCount = increaseCount;
    // this.id = listCount;
    // let increaseCount = () => count++;
    // return obj;

    let item = convertObject(obj);
    return item;
}
 */