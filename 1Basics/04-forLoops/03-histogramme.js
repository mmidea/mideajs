function histogramme(input){
 let numbersCount = Number(input[0]);
 let p1 =0;
 let p2 =0;
 let p3 =0;
 let p4 =0;
 let p5 =0;

for (let i = 1; i <= numbersCount ; i++) {
   let currentNumber = Number(input[i]);

   if (currentNumber >= 800) {p5++}
   else if (currentNumber >= 600) {p4++}
   else if (currentNumber >= 400) {p3++}
   else if (currentNumber >= 200) {p2++}
   else if (currentNumber < 200) {p1++}
}


console.log(((p1 * 100)/numbersCount).toFixed(2));
console.log(((p2 * 100)/numbersCount).toFixed(2));
console.log(((p3 * 100)/numbersCount).toFixed(2));
console.log(((p4 * 100)/numbersCount).toFixed(2));
console.log(((p5 * 100)/numbersCount).toFixed(2));




}
histogramme(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);