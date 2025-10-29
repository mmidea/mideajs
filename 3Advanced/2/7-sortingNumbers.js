function solve(arr){
    let result= [];
arr.sort((a, b) => a - b);

//console.log(arr);
let midlle = Math.floor(arr.length/2);


for(let i = 0; i <midlle; i++){
    result.push(arr[i]);
    result.push(arr[arr.length-1-i]);
        }

if(midlle != arr.length/2){
    result.push(arr[midlle])
}

    
//console.log(result);
return result;
  
    
}





solve([22, 9, 63, 3, 2, 19, 54, 11, 21, 18, 0]);

//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]