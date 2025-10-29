function train(arr){
let allWagons = arr.shift().split(" ").map(Number);
//curWagons = curWagons.map(Number);
let capacity = Number(arr.shift());
//console.log(curWagons);
//console.log(arr);

for( let i = 0; i < arr.length; i++){
   let curAction =   arr[i].split(" ");
   //console.log(curAction);
   
   if(curAction.length > 1){
    allWagons.push(Number(curAction[1]))
   }else{
    
    for(let j = 0; j < allWagons.length; j++){
        let wagon = allWagons[j];
    if(wagon + Number(curAction[0]) <= capacity){
    allWagons[j] = wagon + Number(curAction[0]);
    break;
    }
    }

   }
}
console.log(allWagons.join(" "));


}
train(['32 54 21 12 4 0 23',

    '75',
    
    'Add 10',
    
    'Add 0',
    
    '30',
    
    '10',
    
    '75'] );