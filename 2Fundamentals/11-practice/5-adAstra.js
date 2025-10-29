function solve(arr){
let line = arr.shift();
let allProducts = [];
let counterCalories = 0;
//let pattern = /(?<tag>#|\|)[A-Za-z ]+\k<tag>[0-3]\d\/[01]\d\/\d{2}\k<tag>\d+\k<tag>/gm
let pattern = /(?<tag>#|\|)(?<product>[A-Za-z ]+)\k<tag>(?<date>[0-3]\d\/[01]\d\/\d{2})\k<tag>(?<calories>\d+)\k<tag>/gm;
let matches = line.match(pattern);
if(matches){
    
    let match = pattern.exec(line);
    while(match){

        counterCalories += Number(match.groups.calories);
        
        let myOcj ={}
        myOcj.product = match.groups.product;
        myOcj.date = match.groups.date;
        myOcj.calories = match.groups.calories;

       allProducts.push(myOcj);

        match = pattern.exec(line);

    }
   
}
let days = Math.trunc(counterCalories/2000);
console.log(`You have food to last you for: ${days} days!`);
for( let el of allProducts){
    console.log(`Item: ${el.product}, Best before: ${el.date}, Nutrition: ${el.calories}`);
    
}


}
solve(['Hello|#Invalid food#19/03/20#450|$5*(@' ]  );