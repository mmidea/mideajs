function solve(arr){
let biggest = [];
let biggestNum = Number.NEGATIVE_INFINITY;
//console.log(biggestNum);

arr = arr.filter((el,i)=>{if(el>=biggestNum){ biggestNum = el;return true;}else {return false;}

})
//console.log(arr);
//return biggest;
console.log(arr);



}
solve([1,3,8, 4, 10, 12, 3, 2, 24]);