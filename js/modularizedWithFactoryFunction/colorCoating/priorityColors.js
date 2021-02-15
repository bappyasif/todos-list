// when added new priority level and triggering color changes based on them this function will mitigate that
function colorChange(value, selectDiv) {
    switch (value) {
        case "low":
            selectDiv.parentNode.parentNode.style.backgroundColor = "lightBlue";
            break;
        case "lower":
            selectDiv.parentNode.parentNode.style.backgroundColor = "blue";
            break;
        case "lowest":
            selectDiv.parentNode.parentNode.style.backgroundColor = "darkBlue";
            break;
        default:
            selectDiv.parentNode.parentNode.style.backgroundColor = "";
    }
}

export {colorChange}