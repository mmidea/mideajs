function solve() {
let num = document.getElementById("input").value;
num = Number(num);
let selectRef = document.getElementById("selectMenuTo");
let resultRef = document.getElementById("result");
// Get the select element
//const select = document.getElementById("mySelect");

// Create a new option element
const option = document.createElement("option");
option.value = "binary";
option.text = "Binary";

// Add the option to the select box
selectRef.appendChild(option);

const option2 = document.createElement("option");
option2.value = "hexadecimal";
option2.text = "Hexadecimal";

// Add the option to the select box
selectRef.appendChild(option2);
//debugger
let result;
if(document.getElementById("selectMenuTo").options[1].selected){
    //Binary
    result = toBinary(num);
    resultRef.textContent = result;
    console.log(result);
    
//debugger

}else if(document.getElementById("selectMenuTo").options[2].selected){
    //hexadecimal
}
   
function toBinary(numToConv){
    
    let result = '';
while(numToConv >1){
  let digitToAdd = numToConv%2
  result += String(digitToAdd);
  numToConv = Math.trunc(numToConv/2);
     
}
return result;
}

}

