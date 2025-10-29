function piratesLoot(arr){
let chest = arr.shift().split("|");
let i = 0;
while(arr[i] != "Yohoho!" ){
let tokens = arr[i].split(" ");
let command = tokens.shift();

switch (command) {
    case "Loot":
    for(j = 0; j < tokens.length; j++){
        if(!chest.includes(tokens[j])){
            chest.unshift(tokens[j]);
        }
    }    

        break;

   case "Drop":
    let index = Number(tokens[0]);
    if(chest[index] != undefined){
        let itemToMove = chest.splice(index, 1);
        chest.push(itemToMove[0]);
    }
   

   break;

   case "Steal":
    let stealCount = tokens[0];
    let startStealingIndex =Math.max(0,chest.length  - stealCount); 
    
    let stolenItems = chest.splice(startStealingIndex, stealCount);
    console.log(stolenItems.join(", "));
    

   break;

}

 i++;   
}

let itemCount = chest.length;

if(chest.length == 0   ){
console.log("Failed treasure hunt.");


}else{
    let sum = chest.map(x => x.length).reduce((sum, el) => sum  + el);

    console.log(`Average treasure gain: ${(sum/itemCount).toFixed(2)} pirate credits.`);
    //console.log(chest);
}






}
piratesLoot(["Gold|Silver|Bronze|Medallion|Cup",

    "Loot Wood Gold Coins",
    
    "Loot Silver Pistol",
    
    "Drop 3",
    
    "Steal 3",
    
    "Yohoho!"]);