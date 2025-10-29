function cleverLilly(input){
// let age = Number(input[0]);
// let priceWM = Number(input[1]);
// let toyPrice = Number(input[2]);
// let toysCount = 0;
// let moneyForOneBD = 0;
// let moneySum = 0;
// let takenFromBroCount = 0;

// for (let curBirthday = 1; curBirthday <= age; curBirthday++) {
//    if(curBirthday % 2 == 1){
//    toysCount++
//    } else {
//     takenFromBroCount++;
//     moneyForOneBD += 10;
//   moneySum = moneySum + moneyForOneBD;
//    }
    
// }
// let totalSum = moneySum + toysCount * toyPrice - takenFromBroCount;
//  if (totalSum > priceWM){
//     console.log( `Yes! ${(totalSum - priceWM).toFixed(2)}`);
//  } else {
//     console.log( `No! ${(priceWM - totalSum).toFixed(2)}`);
//  }
 let age = Number(input[0]);
let washerPrice = Number(input[1]);
let pricePerToy = Number(input[2]);

let moneySaved = 0;
let moneyGiven = 10;

for (let curBirthday = 1; curBirthday < age; curBirthday++) {
    if(curBirthday % 2 !== 0){
        moneySaved += pricePerToy;
    } else {
        moneySaved += (moneyGiven - 1);
        moneyGiven += 10;
    }
    
}
}
cleverLilly(["21",

    "1570.98",
    
    "3"]);
