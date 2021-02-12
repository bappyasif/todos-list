let count = 0;

let todoItem = (chkBox,tName, pName, pLevel, edify) => {
    this.checkBox = chkBox;
    this.taskName = tName;
    this.projectName = pName;
    this.projectLevel = pLevel;
    this.editify = edify;
    this.listCount = increaseCount;
    this.id = listCount;
    let increaseCount = () => count++;
}

export {todoItem}