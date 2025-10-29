function treking(input){
let groupsCount = Number(input[0]);
let musala = 0;
let monblan = 0;
let kilimandjaro = 0;
let k2 = 0;
let everest = 0;
let allCount = 0;

for (let i = 1; i < input.length; i++) {
   let curGroup = Number(input[i]);
   allCount += curGroup;
   if(curGroup <= 5){musala += curGroup}
   else if(curGroup <= 12){monblan += curGroup}
   else if(curGroup <= 25){kilimandjaro += curGroup}
   else if(curGroup <= 40){k2 += curGroup}
   else{everest += curGroup}
}

console.log(`${(musala*100/allCount).toFixed(2)}%`);
console.log(`${(monblan*100/allCount).toFixed(2)}%`);
console.log(`${(kilimandjaro*100/allCount).toFixed(2)}%`);
console.log(`${(k2*100/allCount).toFixed(2)}%`);
console.log(`${(everest*100/allCount).toFixed(2)}%`);


}
treking(["5",

    "25",
    
    "41",
    
    "31",
    
    "250",
    
    "6"]) ;