function solve(arr){
let allHeros = [];

for(let line of arr){
   let [name, level, items] =  line.split(" / ");
   
   level = Number(level);
   //console.log(name, level, inventar);
   let hero = {
    name,
    level,
    items: items ? items.split(", ") : []
   }
   allHeros.push(hero);
   
}


console.log(JSON.stringify(allHeros));

//return JSON.stringify(allHeros);

}


console.log(solve(['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara']));
