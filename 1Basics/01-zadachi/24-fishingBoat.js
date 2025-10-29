function fishing(input){
let budget = Number(input[0]);
let season = input[1];
let fishersCount = Number(input[2]);
let priceForBoat = 0;
let discount = 0;


switch (season){
    case 'Spring': priceForBoat = 3000;
        break;

        case 'Summer': priceForBoat = 4200;
        break;

        case 'Autumn': priceForBoat = 4200;
        break;

        case 'Winter': priceForBoat = 2600;
        break;
}
if (fishersCount <= 6) {priceForBoat *= 0.90;
} else if (fishersCount <= 11){ priceForBoat *= 0.85;
} else { priceForBoat *= 0.75;
}

if (fishersCount % 2 == 0 && season != 'Autumn') {
    priceForBoat *= 0.95;
}

if (priceForBoat <= budget)
{let moneyLeft = (budget - priceForBoat).toFixed(2);
    console.log(`Yes! You have ${moneyLeft} leva left.`);
} else {
let moneyNeeded = (priceForBoat - budget).toFixed(2);
console.log(`Not enough money! You need ${moneyNeeded} leva.`);
}
}
fishing(["3000",

    "Summer",
    
    "11"]);
fishing (["3600",

        "Autumn",
        
        "6"]);
fishing (["2000", "Winter", "13"]);