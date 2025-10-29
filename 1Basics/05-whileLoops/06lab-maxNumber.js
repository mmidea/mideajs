function minNumber(input){
let maxNumber = Number.MIN_SAFE_INTEGER;
let curNumber = input[0];
let i = 0;
while (curNumber !== 'Stop') {
    if(maxNumber < Number(curNumber)){
        maxNumber = Number(curNumber)   
    }
    i++;
    curNumber = input[i];
}
console.log(maxNumber);


}
minNumber(["-1", "-2", "Stop"]);