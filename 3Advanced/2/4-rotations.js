function solve(arr, num){
for(let i =1; i<= num; i++){
   arr.unshift(arr.pop());
}
//console.log(arr);
return arr.join(" ");


}
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);