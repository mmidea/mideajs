function solve(stringNums){
let arrNumbers = (stringNums.split(" "))
arrNumbers = arrNumbers.map(Number);

//console.log(arrNumbers);

let avrOfNums = arrNumbers.reduce((sum, el) => sum  + el, 0)/arrNumbers.length;

let greatestFive = arrNumbers.filter(x => x > avrOfNums)
                             .sort((a, b) => b - a)
                             .slice(0,5); 
//console.log(avrOfNums);

/*
if(greatestFive.length == 5){
    console.log(greatestFive.join(" "));   
}else if(greatestFive.length == 0){
    console.log("No");
    
}
*/
if(greatestFive.length == 0){
    console.log("No");
    
}else{
    console.log(greatestFive.join(" "));

}







}
solve('-1 -2 -3 -4 -5 -6');