function solve() {
const [checkBtnRef, clearBtnRef] = Array.from(document.querySelectorAll("button"));
checkBtnRef.addEventListener("click", checkFunc);
clearBtnRef.addEventListener("click", clearFunc);

function checkFunc(event){
let tableRows = document.querySelectorAll("tbody tr");
let hasNoSameDigids = true;

for(let row of tableRows){
let tableDates = Array.from(row.children);
//debugger

let first = Number(tableDates[0].children[0].value );
let second = Number(tableDates[1].children[0].value );
let third = Number(tableDates[2].children[0].value );
if((first == second)||(second == third)||(first == third)){
    hasNoSameDigids = false;
    break;
}
} 

if(hasNoSameDigids){
for(let i = 0; i < 3; i++){
let first = tableRows[0].children[i].children[0].value;
let second = tableRows[1].children[i].children[0].value;
let third = tableRows[2].children[i].children[0].value;

if((first == second)||(second == third)||(first == third)){
    hasNoSameDigids = false;
    break;}
    
}
}


if(hasNoSameDigids){

document.getElementById("check").children[0].textContent = "You solve it! Congratulations!"; 
document.getElementById("check").children[0].style.color = "green";
document.querySelector("table").style.border = "2px solid green"; 

}else{

document.getElementById("check").children[0].textContent = "NOP! You are not done yet...";
 document.getElementById("check").children[0].style.color = "red";   
 document.querySelector("table").style.border = "2px solid red"; 

}

}

function clearFunc(event){
   let tableRows = document.querySelectorAll("tbody tr"); 
   for(let row of tableRows){
let tableDates = Array.from(row.children);
for(let data of tableDates){
    data.children[0].value = "";
}

   }

   document.getElementById("check").children[0].textContent = "";
   document.querySelector("table").style.border = ""; 
   
}


}