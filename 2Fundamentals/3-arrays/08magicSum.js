function solve(arr, magicN){

for(let i=0; i<arr.length; i++){
let firstN = arr[i];

for(let m = i +1; m<arr.length; m++){
   let secondN = arr[m];
   if(i == m){continue;}
   else{
    if(firstN + secondN == magicN){
        console.log(`${firstN} ${secondN}`);
        
    }

   }
    
}
}

}
solve([1, 2, 3, 4, 5, 6], 6 );
//solve([1, 7, 6, 2, 19, 23],8);