function trip(input){
let budget = Number(input[0]);
let season = input[1];
let spendMoney = 0;
let destination = ''; 
let hotelOrCamp = '';

if (budget <= 100){
    destination = 'Bulgaria';
    switch (season){
        case 'summer': spendMoney = budget * 0.3;
        hotelOrCamp = 'Camp';
        break;
        case 'winter': spendMoney = budget * 0.7;
        hotelOrCamp = 'Hotel';
        break;
    }
} else if (budget <= 1000){
    destination = 'Balkans';
    switch (season){
        case 'summer': spendMoney = budget * 0.4;
        hotelOrCamp = 'Camp';
        break;
        case 'winter': spendMoney = budget * 0.8;
        hotelOrCamp = 'Hotel';
        break;
    }

} else {
    destination = 'Europe';
    spendMoney = budget * 0.9;
    hotelOrCamp = 'Hotel';
}

console.log(`Somewhere in ${destination}`);
console.log(`${hotelOrCamp} - ${spendMoney.toFixed(2)}`);


}
trip(["1500", "summer"]);