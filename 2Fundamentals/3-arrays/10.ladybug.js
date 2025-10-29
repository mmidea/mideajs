/*
function solve(arr){

 let fieldSize = Number(arr[0]);
 let bugsPositions = arr[1];
 let bugs = bugsPositions.split(" ");

let positionsREalTime = [];
for(let el of bugs){
    positionsREalTime[el]=1;
}
//console.log(positionsREalTime);

 //console.log(bugs);

 for(let i = 2; i < arr.length; i++){
let cur = arr[i];
let instruction = cur.split(" ");
//console.log(instruction);
let oldPosition = Number(instruction[0]);
let newDirection = Number(instruction[2]);
let action = instruction[1];
positionsREalTime[oldPosition] = 0;
if(action == 'right'){
    if(positionsREalTime[newDirection+oldPosition] == 1){
        let n = 1;
        while(positionsREalTime[n*newDirection+oldPosition]==1){
            n++;
        }
        if((n*newDirection+oldPosition) <= fieldSize){
            positionsREalTime[n*newDirection+oldPosition] = 1;
        }
        


    }else{
        positionsREalTime[newDirection+oldPosition] = 1;

    }
        
}
//wlqvo
else{
    //positionsREalTime[oldPosition-newDirection] = 1;
    if(positionsREalTime[oldPosition-newDirection] == 1){
        let n = 1;
        while(positionsREalTime[oldPosition - n*newDirection]==1){
            n++;
        }
        if((oldPosition - n*newDirection) >= 0 ){
            positionsREalTime[oldPosition - n*newDirection]=1;
        }
        


    }else{
        positionsREalTime[oldPosition-newDirection] = 1;

    }
     
}

 }

 positionsREalTime = positionsREalTime.slice(0, fieldSize);
 for(let i = 0; i < fieldSize; i++){
    if (positionsREalTime[i] == undefined){
        positionsREalTime[i]=0;
    }
 }
 console.log(positionsREalTime.join(" "));
 

}
 */


//solve([ 0, '3', '3 left 2', '1 left -2']);
//solve([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
//solve([ 3, '0 1','0 right 1','2 right 1' ])

function solve(arr){

    let fieldSize = Number(arr[0]);
    let bugsPositions = arr[1];
    let bugs = bugsPositions.split(" ");
   
   let positionsREalTime = [];
   for(let el of bugs){
       positionsREalTime[el]=1;
   }
   
   //console.log(positionsREalTime);
   
    //console.log(bugs);
    for(let i = 2; i < arr.length; i++){
   let cur = arr[i];
   let instruction = cur.split(" ");
   //console.log(instruction);
   let oldPosition = Number(instruction[0]);
   let newDirection = Number(instruction[2]);
   let action = instruction[1];
   
if(positionsREalTime[oldPosition] == 0){
    continue;
}
if((oldPosition<0)||(oldPosition> fieldSize)){
    continue;
}

   positionsREalTime[oldPosition] = 0;

   if(action == 'right'){
       if(positionsREalTime[newDirection+oldPosition] == 1){
           let n = 1;
           while(positionsREalTime[n*newDirection+oldPosition]==1){
               n++;
           }
           if(((n*newDirection+oldPosition) <= fieldSize)&&((n*newDirection+oldPosition) >=0 )){
            positionsREalTime[n*newDirection+oldPosition] = 1;
        }
   
   
       }else{
           positionsREalTime[newDirection+oldPosition] = 1;
   
       }
           
   }
   //wlqvo
   else{
       //positionsREalTime[oldPosition-newDirection] = 1;
       if(positionsREalTime[oldPosition-newDirection] == 1){
           let n = 1;
           while(positionsREalTime[oldPosition - n*newDirection]==1){
               n++;
           }
           if(((oldPosition - n*newDirection) >= 0 )&&((oldPosition - n*newDirection)<= fieldSize)){
            positionsREalTime[oldPosition - n*newDirection]=1;
        }
   
   
       }else{
           positionsREalTime[oldPosition-newDirection] = 1;
   
       }
       
       
   }
   
   
   
    }
   
    positionsREalTime = positionsREalTime.slice(0, fieldSize);
    for(let i = 0; i < fieldSize; i++){
       if (positionsREalTime[i] == undefined){
           positionsREalTime[i]=0;
       }
    }
    console.log(positionsREalTime.join(" "));
    
   
   }
   solve([ 5, '3', '3 left 2', '1 left -2']);
   //solve([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
   //solve([ 3, '0 1','0 right 1','2 right 1' ])
