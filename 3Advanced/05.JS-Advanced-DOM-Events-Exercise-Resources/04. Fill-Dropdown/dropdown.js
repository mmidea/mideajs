function addItem() {
    let newItem = document.getElementById("newItemText").value;
    let newValue = document.getElementById("newItemValue").value;
    let newOption = document.createElement("option");
    newOption.textContent = newItem;
    newOption.value = newValue;
    document.getElementById("menu").appendChild(newOption);
    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
}