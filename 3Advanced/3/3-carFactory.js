function solve(data){
let engines = [
{ power: 90, volume: 1800 },

{ power: 120, volume: 2400 },

{ power: 200, volume: 3500 }
]

let chosenCombo;
for(let engine of engines){
if(engine.power >= data.power){
   chosenCombo = engine;
    break;
}
}

let choosenWheels = data.wheelsize % 2 == 0 ? data.wheelsize -1 : data.wheelsize ; 

let result = {
    model: data.model,
    engine: chosenCombo,
    carriage: { type: data.carriage, color: data.color },
    wheels: [choosenWheels, choosenWheels, choosenWheels, choosenWheels]
}    
return result;

}
solve({ model: 'Opel Vectra',

power: 110,

color: 'grey',

carriage: 'coupe',

wheelsize: 17 });