function solve(arr){
    let towns = {};
let line = arr.shift();
while(line != "Sail"){
let [town, population, gold] = line.split("||")
population = Number(population);
gold = Number(gold);
if(!towns.hasOwnProperty(town)){

    towns[town] = {town, population, gold};
}else{ 
    
    towns[town]["population"] += population;
    towns[town]["gold"] += gold;
}
line = arr.shift();
}


line = arr.shift();

while(line != "End"){

    //console.log(line);
    
    let tockens = line.split("=>");
    let command = tockens[0];
let town = tockens[1];
//console.log(tockens);

if(command=="Plunder"){
    let people = Number(tockens[2]);
    let goldToPlunder = Number(tockens[3]);
    let curTown = towns[town];
    curTown.population -= people;
    curTown.gold -= goldToPlunder;
    console.log(`${curTown.town} plundered! ${goldToPlunder} gold stolen, ${people} citizens killed.`);
    if(curTown.population<=0 || curTown.gold <=0){
        console.log(`${curTown.town} has been wiped off the map!`);
        delete towns[town];
        
    }
    }else{
        let town = tockens[1];
        let goldToAdd = Number(tockens[2]);
        if(goldToAdd < 0){
            console.log("Gold added cannot be a negative number!");
            line = arr.shift(); 
            continue;
            
        }else{
            let curTown2 = towns[town];
            curTown2.gold += goldToAdd;
            console.log(`${goldToAdd} gold added to the city treasury. ${curTown2.town} now has ${curTown2.gold} gold.`);
            
        }

    }

line = arr.shift(); 
}

let count = Object.keys(towns).length;
if(count > 0){
    console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
    for(let key of Object.keys(towns)){
console.log(`${towns[key]["town"]} -> Population: ${towns[key]["population"]} citizens, Gold: ${towns[key]["gold"]} kg`);

    }
}else{

    console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    
}


}
solve(["Nassau||95000||1000",

    "San Juan||930000||1250",
    
    "Campeche||270000||690",
    
    "Port Royal||320000||1000",
    
    "Port Royal||100000||2000",
    
    "Sail",
    
    "Prosper=>Port Royal=>-200",
    
    "Plunder=>Nassau=>94000=>750",
    
    "Plunder=>Nassau=>1000=>150",
    
    "Plunder=>Campeche=>150000=>690",
    
    "End"]);