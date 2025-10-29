// Ако числото е до 100 включително, бонус точките са 5.

// · Ако числото е  е по-голямо от 100, бонус точките с, бонус точките са 20% от числото.

// · Ако числото е по-голямо от 1000, бонус точките са 10% от числото.

// · Допълнителни бонус точки (начисляват се отделно от предходните):

// o За четно число à + 1 т.

// o За число, което завършва на 5 à + 2 т.

function bonusPoints(input)
{
let initialPoints = Number(input[0]);
let bonus = 0;
if(initialPoints <= 100) {bonus = 5;}
else if (initialPoints <= 1000) {bonus = initialPoints * 0.2; }
  else {bonus = initialPoints * 0.1;}

if (initialPoints % 2 === 0) {bonus = bonus + 1;}
if (initialPoints % 10 === 5) {bonus = bonus + 2;}

console.log(bonus);
console.log(initialPoints + bonus);



}
bonusPoints(["2703"]);