function solve(arr, commands){
let i = 0;

while(commands[i] != "print"){
let curCommand = commands[i].split(" ");


let indexChanging;
let numberToAdd;

switch (curCommand[0]) {
    case "add":
        indexChanging = Number(curCommand[1]);
        numberToAdd = Number(curCommand[2]);
        arr.splice(indexChanging, 0, numberToAdd);
        break;

    case "addMany":

        indexChanging = Number(curCommand[1]);

        for( j = 2; j < curCommand.length; j++ ){
            numberToAdd = Number(curCommand[j]);
            arr.splice(indexChanging, 0, numberToAdd);
            indexChanging++; 
        }

        break;

    case "contains":
        
        console.log(arr.indexOf(Number(curCommand[1])));
        
        break;

    case "remove":
        indexChanging = Number(curCommand[1]);
        arr.splice(indexChanging, 1);
        break;

    case "shift":
        let positionsToShift = curCommand[1];
        while(positionsToShift > 0){
            let itemToMove = arr.shift();
            arr.push(itemToMove);
            positionsToShift--;
        }
    

        break;

    case "sumPairs":
        let newArr =[];
        for( let m = 0; m < arr.length; m++){
            if((m+1 )< arr.length){
                //console.log(arr[m+1]);
                
                let sumToPush = arr[m] + arr[m+1]
                newArr.push(sumToPush)
                m++;
            }else{
                newArr.push(arr[m])
            }
            
            
           
        }
        
        arr = newArr;
        break;
    

   
} 


 i++;


}
console.log("[ " + arr.join(", ") + " ]");


}
solve([1, 2, 3, 4, 5],

    ['sumPairs', "print"] );

     