function pirates(arr){
let piratesShip = ((arr.shift()).split(">")).map(Number);
let warShip = ((arr.shift()).split(">")).map(Number);
let maxHealth = Number(arr.shift());

while(arr.length > 0){
let command = arr.shift().split(" ");
let index;
let damage;

switch (command[0]) {
    case "Fire":
        index = Number(command[1]);
        damage = Number(command[2]);
        if(!(warShip[index]==undefined)){
            warShip[index] = warShip[index] - damage;
        }
        if(warShip[index] <= 0){
            console.log("You won! The enemy ship has sunken.");
            return;
            
        }
        
        break;

    case "Defend":
        let startIndex = Number(command[1]);
        let endIndex= Number(command[2]);
        damage = Number(command[3]);
        if(!(piratesShip[startIndex]==undefined)&&(!(piratesShip[endIndex]==undefined))){
       
            for(startIndex; startIndex <= endIndex; startIndex++){
                piratesShip[startIndex] = piratesShip[startIndex] - damage;
                if (piratesShip[startIndex]<=0) {
                    console.log("You lost! The pirate ship has sunken.");
            return;
                }
            }
            

        }
        
       break;

    case "Repair":
        index = Number(command[1]);
        let repairing = Number(command[2]);
        if(!(piratesShip[index]==undefined)){
            piratesShip[index] = Math.min(piratesShip[index] + repairing, maxHealth);
        }

        break;
    
    case "Status":
        let sectionsToRipair = piratesShip.filter(x => x < 0.2 * maxHealth);
        console.log(`${sectionsToRipair.length} sections need repair.`);
        
        break;
    case "Retire":
    
        break;
}

}

let piratesShipSum = piratesShip.reduce((sum, el) => sum  + el);
let warShipSum = warShip.reduce((sum, el) => sum  + el);
console.log(`Pirate ship status: ${piratesShipSum}`);
console.log(`Warship status: ${warShipSum}`);


//console.log(warShip);
//console.log(piratesShip);



}
pirates(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"]);