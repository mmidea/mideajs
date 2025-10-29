function wall(arr){
arr.map(Number);
let sumConcrete =0;
let everyDaySums = [];

while(arr.length > 0){
    
        arr = arr.filter(x => x<30);
        let curSum = arr.length * 1 * 195;
        sumConcrete += curSum;
        if(curSum != 0){
            everyDaySums.push(curSum);
        }
        
        arr = arr.map(x => x +1);
        //console.log(arr);
    
    
    
}

let pesos = sumConcrete * 1900;
console.log(everyDaySums.join(", "));
console.log(`${pesos} pesos`);


//585, 585, 390, 390, 390, 195, 195, 195, 195 

}
wall([21, 25, 28]);