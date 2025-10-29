// Баскетболни кецове – цената им е 40% по-малка от таксата за една година

// • Баскетболен екип – цената му е 20% по-евтина от тази на кецовете

// • Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип

// • Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

function basketballEquipment(input){

    let tax = Number(input[0]);
    let shoes = tax - 0.4 * tax;
    let clothes = shoes - 0.2 * shoes;
    let ball = clothes/4;
    let accessories = ball/ 5;
    let sum = tax + shoes + clothes + ball + accessories;
    console.log(sum);
    

}
basketballEquipment(["550"]);