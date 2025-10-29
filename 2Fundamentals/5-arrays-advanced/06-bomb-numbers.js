function solve(sequence, bombArr){
let bomb = bombArr[0];
let power = bombArr[1];

while(sequence.includes(bomb)){
   let bombIndex = sequence.indexOf(bomb);
   let startIndexSplice = 0;
   let determinatedItemsCount = 0;
   if(power <= bombIndex +1){
    startIndexSplice = bombIndex-power;
    determinatedItemsCount = 2* power + 1;
    sequence.splice(startIndexSplice, determinatedItemsCount);
   }else{
    startIndexSplice = 0;
    determinatedItemsCount = 2* power + 1;
    sequence.splice(startIndexSplice, determinatedItemsCount);
   }
    
}

//console.log(sequence);
let sum = 0;
for(el of sequence){
sum += el;
}

console.log(sum);



}
solve([1, 4, 4, 2, 8, 9, 1], [9, 3])