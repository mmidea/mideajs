function solve(arr, rotations){

    while (rotations > 0) {
        let firstEl = arr[0];
        let i = 0;
        for(i ; i < arr.length-1; i++){
        arr[i] = arr[i+1];
            
        }
        arr[i]=firstEl;
        rotations--;
    }
   console.log(arr.join(" "));
   
    
   
}
solve([32, 21, 61, 1], 4);