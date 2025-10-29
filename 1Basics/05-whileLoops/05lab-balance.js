function balance(input){

let sum = 0;
let i = 0;
let curInput = input[0]
while (i < input.length) {
    if(curInput === 'NoMoreMoney'){break;}
    if(Number(curInput) < 0){
        console.log('Invalid operation!');
        break;}
    sum += Number(curInput);
    console.log(`Increase: ${(Number(curInput)).toFixed(2)}`);
    
    i++;
    curInput = input[i];
}

console.log(`Total: ${sum}`);



}
balance(["120", "45.55", "-150"]);