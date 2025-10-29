function solve(arr){
let allHeros =[];

for( hero of arr){
    let [name, level, itemsJoined] = hero.split(" / ");
    let items = itemsJoined.split(", ");
    level = Number(level);
    
    let newObject = {
        name: name,
        level:level,
        items: items
    }
    allHeros.push(newObject);
    
}

allHeros.sort((a, b) => a.level - b.level);
//console.log(allHeros.join("\n"));
//console.log(allHeros[0]);
for( let hero of allHeros){
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items.join(", ")}`);
    
    
    
}

}
solve([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ]);