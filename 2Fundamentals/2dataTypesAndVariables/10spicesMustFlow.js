function spicesMustFlow(yield) {
let daysCounter = 0;
let totalSpice = 0;

while(yield >= 100){
     daysCounter++;
    totalSpice += yield;
    if(totalSpice >= 26){
        totalSpice -= 26;
    } else{totalSpice = 0;}
    yield -= 10;

}
if(totalSpice >= 26){
    totalSpice -= 26;
} else{totalSpice = 0;}

console.log(daysCounter);
console.log(totalSpice);



}
spicesMustFlow(450)