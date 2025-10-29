// Петър иска да купи N видеокарти, M процесора и P на брой рам памет. Ако броя на видеокартите е по-голям 
// от този на процесорите получава 15% отстъпка от крайната сметка. Важат следните цени:
// · Видеокарта – 250 лв./бр.
// · Процесор – 35% от цената на закупените видеокарти/бр.
// · Рам памет – 10% от цената на закупените видеокарти/бр.
// Да се изчисли нужната сума за закупуване на материалите и да се пресметне дали бюджета ще му стигне.

// Входът се състои от четири реда:
// 1. Бюджетът на Петър - реално число в интервала [0.0…100000.0]
// 2. Броят видеокарти - цяло число в интервала [0…100]
// 3. Броят процесори - цяло число в интервала [0…100]
// 4. Броят рам памет - цяло число в интервала [0…100]

function shopping(input){
    let budget = Number(input[0]);
    let videocardCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramCount = Number(input[3]);
    let discount = 1;
    
    if (videocardCount > processorCount){
    discount = 0.85;
    }
    let sumVideocard = videocardCount * 250; 
    let sumProcessor = sumVideocard *0.35 * processorCount;
    let sumRam = sumVideocard *0.10 * ramCount;
    let sum = (sumVideocard + sumProcessor + sumRam)*discount;
    
    if (budget >= sum){
        console.log(`You have ${(budget - sum).toFixed(2)} leva left`);
    }
    else{
        console.log(`Not enough money! You need ${(sum-budget).toFixed(2)} leva more`);
    }
    
    }
    shopping(["920.45",
    
    "3",
    
    "1",
    
    "1"]);