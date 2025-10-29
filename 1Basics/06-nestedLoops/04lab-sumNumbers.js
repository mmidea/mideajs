function sum(input){
let firstBorder = Number(input[0]);
let secondBorder = Number(input[1]);
let magicNumber = Number(input[2]);
let counterLoops = 0;
let isAvailableCombination = false;

for (let f = firstBorder; f <= secondBorder; f++) {


    for (let s = firstBorder; s <= secondBorder; s++) {
        counterLoops++;

        if((f + s) == magicNumber){
            console.log(`Combination N:${counterLoops} (${f} + ${s} = ${magicNumber})`);
            isAvailableCombination = true;
            break;}

        if((f + s) == magicNumber){break;}
    }

}

if (isAvailableCombination == false) {
    console.log(`${counterLoops} combinations - neither equals ${magicNumber}`);
    
}

}
sum(["1",

    "10",
    
    "5"]);