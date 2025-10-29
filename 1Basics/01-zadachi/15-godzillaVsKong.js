// нужни определен брой статисти, облекло за всеки един статист и деко
// Декорът за филма е на стойност 10% от бюджета.

// · При повече от 150 статиста, има отстъпка за облеклото на стойност 10%

// 1. Бюджет за филма – реално число в интервала [1.00 … 1000000.00]

// 2. Брой на статистите – цяло число в интервала [1 … 500]

// 3. Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00] 

function godzillaVsKong(input){
 let budget = Number(input[0]);
 let actorsCount = Number(input[1]);
 let clothesPriceForActor = Number(input[2]);

 if (actorsCount > 150){
    clothesPriceForActor = clothesPriceForActor * 0.90;}

 let totalSum = actorsCount * clothesPriceForActor + budget * 0.10;

 if (totalSum > budget)
 { console.log(`Not enough money!`);
   console.log(`Wingard needs ${(totalSum - budget).toFixed(2)} leva more. `);
   
 }
 else 
 {
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${( budget - totalSum).toFixed(2)} leva left.`);
    
 }
 





}
godzillaVsKong(["9587.88",

    "222",
    
    "55.68"]);