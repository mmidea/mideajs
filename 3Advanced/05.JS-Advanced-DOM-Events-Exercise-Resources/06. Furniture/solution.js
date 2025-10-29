function solve() {
const generateBtnRef = document.querySelector("div[id='exercise'] button");
const inputFieldRef = document.querySelector("textarea"); 
const buyBtnRef = document.querySelectorAll("button")[1];

generateBtnRef.addEventListener("click", myFunc);
buyBtnRef.addEventListener("click", buyFunc);


function myFunc(event){
let inputArr =JSON.parse(inputFieldRef.value);
//console.log(inputArr);
for(let el of inputArr){

let newImage = el.img;
let newName = el.name;
let newPrice = el.price;
let newDF = el.decFactor;
let isFirst = true;
let myArr = [newName, newPrice, newDF]
let newRow = document.createElement("tr");
let tBodyRef = document.querySelector("tbody")
 //document.querySelector("tbody").appendChild(document.createElement("tr"));
tBodyRef.appendChild(newRow);
for(let i = -1; i <=3; i++){ 
let newTableData = document.createElement("td");
 if (isFirst){
    let newImg = document.createElement("img");
    newImg.src = newImage;
    newTableData.appendChild(newImg);

    isFirst = false;    
    }else if(i == 3){
    let newInputCheckbox = document.createElement("input");
    newInputCheckbox.type = "checkbox"
    newInputCheckbox.disabled = "";
newTableData.appendChild(newInputCheckbox);
    }
    else{
        let newP = document.createElement("p");
newP.textContent = myArr[i];
newTableData.appendChild(newP);
    }
newRow.appendChild(newTableData);

} 

//.appendChild(document.createElement("tr"))

//debugger

}

  
}

function buyFunc(event){
allCheckboxesRef = document.querySelectorAll("input[type='checkbox']");

let resultNames = "Bought furniture: ";
let namesArr = [];
let totalPrice = 0;
let totalDF = 0;
let counter = 0;
let tableRowsRef = document.querySelectorAll("tbody tr");
let weHaveOne = false;
for(let i = 0; i <allCheckboxesRef.length; i++){
//debugger
    if(allCheckboxesRef[i].checked){
        weHaveOne = true;
        counter++;
        namesArr.push(tableRowsRef[i].children[1].children[0].textContent);
        totalPrice += Number(tableRowsRef[i].children[2].children[0].textContent);
        totalDF += Number(tableRowsRef[i].children[3].children[0].textContent);
     
    }
}

if(weHaveOne){
resultNames += namesArr.join(", ");
const resultArea = document.querySelectorAll("textarea")[1];
resultArea.textContent = `${resultNames}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${totalDF/counter}`;


}




}



}