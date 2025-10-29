function newhome (input){
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    let totalPrice = 0;
    switch (flowerType){
    case 'Roses': price = 5;
    if(flowerCount> 80) price *= 0.9;
    totalPrice = price * flowerCount;
        break;
    case 'Dahlias': price = 3.80;
    if(flowerCount> 90) price *= 0.85;
    totalPrice = price * flowerCount;
        break;
    case 'Tulips': price =2.80;
    if(flowerCount> 80) price *= 0.85;
    totalPrice = price * flowerCount;
        break;
    case 'Narcissus': price = 3;
    if(flowerCount< 120) price *=1.15;
    totalPrice = price * flowerCount;
        break;
    case 'Gladiolus': price = 2.50;
    if(flowerCount< 80) price *= 1.20;
    totalPrice = price * flowerCount;
    }
    
    
    if(totalPrice<=budget){
        let moneyLeft =0;
         moneyLeft = (budget - totalPrice).toFixed(2);
    console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft} leva left.`);
    } else {
       let  moneyNeeded = (totalPrice-budget).toFixed(2);
    console.log(`Not enough money, you need ${moneyNeeded} leva more.`);
    }
    }
    newhome(["Narcissus", "119", "360"]) ;