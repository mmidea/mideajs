function hotelRoom(input){
let month = input[0];
let nights = input[1];
let incomeStudio = 0;
let incomeApartment = 0;

switch (month) {
    case 'May':
    case 'Octomber': 
    incomeStudio = nights * 50;
    incomeApartment = nights * 65;
    if ((nights > 7)&&(nights<=14)){incomeStudio *= 0.95;}
    else if (nights > 14) {incomeStudio *= 0.70;}
    break;

    case 'June': 
    case 'September':
    incomeStudio = nights * 75.20;
    incomeApartment = nights * 68.70;
    if (nights > 14) {incomeStudio *= 0.80;}
    break;
    break;

    case 'July': 
    case 'August':
    incomeStudio = nights * 76;
    incomeApartment = nights * 77;
    break;
 
}

if (nights > 14){incomeApartment *= 0.90;}

console.log(`Apartment: ${incomeApartment.toFixed(2)} lv.`);
console.log(`Studio: ${incomeStudio.toFixed(2)} lv.`);

}
hotelRoom(["August", "20"]);