function solve(arr){
let count = Number(arr.shift());
let heroes = {};
while(count !== 0){
let [name, HP, MP] = arr.shift().split(" ");
HP = Number(HP);
MP = Number(MP);
heroes[name] = {};
heroes[name].HP = HP;
heroes[name].MP = MP;
//console.log(heroes[name]);
count--;    
}

let command = arr.shift();
while(command !== "End"){
command = command.split(" - ");

switch (command[0]) {

    case "CastSpell":
        let [action1, name1, MP1, spell1] = command;
        MP1 = Number(MP1);
          if(heroes[name1].MP >= MP1){
           console.log(`${name1} has successfully cast ${spell1} and now has ${heroes[name1].MP - MP1} MP!`);
           heroes[name1].MP -= MP1;
          }else{
            console.log(`${name1} does not have enough MP to cast ${spell1}!`); 
          }
        break;

    case "TakeDamage":
        let [action2, name2, damage, attacker] = command;
        heroes[name2].HP -= Number(damage);
        if(heroes[name2].HP > 0){
            console.log(`${name2} was hit for ${damage} HP by ${attacker} and now has ${heroes[name2].HP} HP left!`);           
        }else{
            console.log(`${name2} has been killed by ${attacker}!`);
            delete heroes[name2]; 
        }
        break;


        case "Recharge":
        let [action3, name3, amount] = command;
        amount = Number(amount);
        if(heroes[name3].MP + amount <= 200){
            heroes[name3].MP +=amount;
            console.log(`${name3} recharged for ${amount} MP!`);     
        }else{
            amount = 200- heroes[name3].MP;
            heroes[name3].MP = 200;
            console.log(`${name3} recharged for ${amount} MP!`);
        }
        break;

        case "Heal":
            let [action4, name4, amount1] = command;
            amount1 = Number(amount1);
        if(heroes[name4].HP + amount1 <= 100){
            heroes[name4].HP +=amount1;
            console.log(`${name4} healed for ${amount1} HP!`);    
        }else{
            amount1 = 100- heroes[name4].HP;
            heroes[name4].HP = 100;
            console.log(`${name4} healed for ${amount1} HP!`);
        } 
            break;  
}

command = arr.shift();
}

let names = Object.keys(heroes);
//console.log(names);
for(let heroName of names){
    console.log(heroName);
    console.log(`  HP: ${heroes[heroName].HP}`);
    console.log(`  MP: ${heroes[heroName].MP}`);  
}





}
solve(["2",

    "Solmyr 85 120",
    
    "Kyrre 99 50",
    
    "Heal - Solmyr - 10",
    
    "Recharge - Solmyr - 50",
    
    "TakeDamage - Kyrre - 66 - Orc",
    
    "CastSpell - Kyrre - 15 - ViewEarth",
    
    "End"]);