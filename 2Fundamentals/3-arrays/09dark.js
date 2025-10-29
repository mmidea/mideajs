function solve(arr){
let health = 100;
let coins = 0;
let game = arr[0];
let roomCounter = 0;
let isDead = false;

for(let i = 0; i < game.length; i++){
    let action = '';
    let curLetter = game[i];
    let m = i;
    while(curLetter != " "){
        
        action += curLetter;
        m++;
        curLetter = game[m];

    }
    //console.log(action);
    m++;
    
    let points = 0;
    let pointsAsString = '';
    while((curLetter != "|")&&(curLetter != undefined)){
     pointsAsString += game[m];
     m++;
     curLetter = game[m];
    }
     points = Number(pointsAsString);
     
     i = m;
     
     roomCounter++;

     if(action == "potion"){

       if((health + points) <= 100){
        health += points;
        console.log( `You healed for ${points} hp.`);
       }else{
        console.log( `You healed for ${100 - health} hp.`);
        health = 100;
       }

       console.log(`Current health: ${health} hp.`);
       
    }
    
    else if(action == "chest"){
        coins += points;
        console.log(`You found ${points} coins.`);
        }
    
    else{
        health -= points;
        if(health > 0){console.log( `You slayed ${action}.`);
    }else{
        console.log( `You died! Killed by ${action}.`);
            console.log(`Best room: ${roomCounter}`);
            isDead = true;
            break; 
    }
        
     }

}

if(isDead == false){
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);   
}

}
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]); 