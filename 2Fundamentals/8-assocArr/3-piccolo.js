function solve(arr){
    let currentCars ={};
for(let el of arr){
   let [command, car] = el.split(", ");
   if(command == "IN"){
    currentCars[car] = 1;
   }else{
    delete currentCars[car];
   }
   
}

let keys = Object.keys(currentCars).sort((a, b) => a.localeCompare(b) );
if(keys.length !=0){
    for(let key of keys){
        console.log(key);
        
}
}else{
    console.log("Parking Lot is Empty");
    
}

}
solve(['IN, CA2844AA',

    'IN, CA1234TA',
    
    'OUT, CA2844AA',
    
    'IN, CA9999TT',
    
    'IN, CA2866HI',
    
    'OUT, CA1234TA',
    
    'IN, CA2844AA',
    
    'OUT, CA2866HI',
    
    'IN, CA9876HH',
    
    'IN, CA2822UU'] );