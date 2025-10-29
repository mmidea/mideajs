function solve(losts, helmetPrice, swordPrice, shieldPrice, armorPrice){
// Every second lost game, his helmet is broken.
//· Every third lost game, his sword is broken.
//· When both his sword and helmet are broken in the same lost fight, his shield also breaks.
//· Every second time, when his shield brakes, his armor also needs to be repaired.

let totalCost = 0;
let counterShieldsBreaks = 0;
for(i=1; i <= losts; i++){
if( i%2 == 0){ totalCost += helmetPrice;
}
if (i%3 == 0) { totalCost += swordPrice;    
}
if((i%2 == 0)&&(i%3 == 0)){
    totalCost += shieldPrice;
    counterShieldsBreaks++;
    if (counterShieldsBreaks == 2) {
        totalCost += armorPrice;
        counterShieldsBreaks = 0;
        
    }
}
}

console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);


}
solve(7,

    2,
    
    3,
    
    4,
    
    5);