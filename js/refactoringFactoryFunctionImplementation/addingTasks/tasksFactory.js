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
    // obj.listCount = increaseCount();
    obj.id = count;
    // obj.id = increaseCount();
    increaseCount();

    // let item = convertObject(obj);
    let item = convertObject(obj, count);
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
    divElForItem.id = obj.id;
    return divElForItem;
}

export {todoItem}