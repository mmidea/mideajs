function solve(str){
    let namePattern = /,[ ]*/gm;
let deamons = str.split(namePattern);
//console.log(deamons);
let damagePattern = /-?\d+\.?\d*/gm;
let damage2Pattern = /[*\/]/gm;
let arrObjects =[];

let healthPattern = /[^.+\-*\/0123456789]/gmi;
for(let deamon of deamons){
if(deamon == ""){continue;} 
if(deamon.includes(",")||deamon.includes(" ")){continue;}   
let healthArr =  deamon.match(healthPattern); 
let health = 0;
if(healthArr){
    
health = healthArr.reduce((sum, el) => sum  + el.charCodeAt(0), 0);

  
}

let curObject = {};
curObject.name = deamon;
curObject.health = health;

let damageArr = deamon.match(damagePattern);
//console.log(damageArr);
let damage = 0;
if(damageArr){
damage = damageArr.map(Number).reduce((sum, el) => sum  + el, 0);
}

let damage2Arr = deamon.match(damage2Pattern);

if(damage2Arr){
    for(let char of damage2Arr){
   if(char == "*"){
    damage = damage * 2;
   }else{if(damage != 0){damage = damage / 2;} }
    }

}

curObject.damage = damage;
arrObjects.push(curObject);
//console.log(curObject);

}

arrObjects.sort((a, b) =>  a.name.localeCompare(b.name));

for(let el of arrObjects){
    console.log(`${el.name} - ${(el.health).toFixed(0)} health, ${(el.damage).toFixed(2)} damage`);
    
}

}

solve("M3ph-0.5s-0.5t0.0**");
solve("M3ph1st0**, Azazel");
solve("Gos/ho");
/// \w+|\d+\.*-*\w+|\d+
// (\w+|\d+)\.*-*(\w+|\d+)@
//   /([A-Za-z]+|\d+)\.?-?_?([A-Za-z]+|\d+)@[A-Za-z]+-?[A-Za-z]+(\.[A-Za-z]+-?[A-Za-z]+)+/gm