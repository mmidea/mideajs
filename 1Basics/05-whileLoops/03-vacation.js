function vacation(input){
let vacationCost = Number(input[0]);
let balance = Number(input[1]);
let curOperation = input[2];
let curAmount = input[3];
let i = 3;
let counterSpend = 0;
let days = 0;

while (i < input.length) {
   days++;
   if(curOperation == "spend"){
    counterSpend++;
    if(counterSpend >=5){
        console.log(`You can't save the money.`);
        console.log(days);
        break;
       }
    balance -= Number(curAmount);
    if(balance < 0 ){balance = 0;}
   } else if (curOperation == "save"){
    balance += Number(curAmount);
   }
   

   if(balance >= vacationCost){
    console.log(`You saved the money for ${days} days.`); 
    break;  
   }
   i++;
   curOperation = input[i];
   i++;
   curAmount = Number(input[i]);
  
}



}
vacation(["110",

    "60",
    
    "spend",
    
    "10",
    
    "spend",
    
    "10",
    
    "spend",
    
    "10",
    
    "spend",
    
    "10",
    "spend", 
    "10"]);