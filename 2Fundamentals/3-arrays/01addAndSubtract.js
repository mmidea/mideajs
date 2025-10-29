function solve(arr){

    let arrNew = [];
    let sumArr = 0;
    let sumArrNew = 0;
for(i = 0; i < arr.length; i++){
sumArr += arr[i];
if(arr[i] % 2 == 0){
    arrNew[i] = arr[i] + i;
}else{
    arrNew[i] = arr[i] - i;
}
sumArrNew += arrNew[i];
}

console.log(arrNew);
console.log(sumArr);
console.log(sumArrNew);




}
solve([-5, 11, 3, 0, 2]);