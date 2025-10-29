function solve(str){
let arr = str.split(" ");
arr = arr.filter(x => x != "");
let totalSum = 0;

for(let el of arr){
let endIndex = el.length -1
let number = Number(el.substring(1, endIndex));
let firstLetter = el[0];


if(firstLetter.toUpperCase() == firstLetter){
    //bukvata e golqma
    number /= firstLetter.charCodeAt(0) - 64;
    //console.log(firstLetter.charCodeAt(0) - 64);
    


}else{
number *= firstLetter.charCodeAt(0) -96;
//console.log(firstLetter.charCodeAt(0) -96);
}

let secondLetter = el[el.length -1];

if(secondLetter.toUpperCase() == secondLetter){
    //bukvata e golqma
    number -= secondLetter.charCodeAt(0) -64;


}else{
number += secondLetter.charCodeAt(0) -96;
//console.log(secondLetter.charCodeAt(0) -96);

}

totalSum += number;
}

console.log(totalSum.toFixed(2));

}
solve('A12b s17G');
//61-122  -96 za malkite bukvi
//       -64 za golemite