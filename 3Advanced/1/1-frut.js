function solve(fruit, grams, price){
let gramsToKg = grams/1000;
console.log(`I need $${(price*gramsToKg).toFixed(2)} to buy ${gramsToKg.toFixed(2)} kilograms ${fruit}.`);


}
solve('orange', 2500, 1.80);