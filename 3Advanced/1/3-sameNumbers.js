function solve(num){
let sum = 0;
let numAsString = String(num);
let counter = numAsString.length;
let isSame = true;
//console.log(counter);

let curDigit = numAsString[0];
sum += Number(numAsString[0]);

for(let i = 1; i < counter; i++){
if(curDigit != numAsString[i]){
    isSame = false;
}
sum += Number(numAsString[i]);

}
console.log(isSame);
console.log(sum);



}
solve(1234);