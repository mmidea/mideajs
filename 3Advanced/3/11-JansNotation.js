function solve(arr){
let operands = [];

let command = arr.shift();
while(command){
if(typeof(command) == "number"){
   operands.push(command);
   command = arr.shift();
   continue;
}

if(operands.length < 2){
    console.log("Error: not enough operands!");
    return;
}

//+-*/

switch (command) {
    case "+": let newOperand = operands.pop() + operands.pop();
    operands.push(newOperand);
        break;
    case "-": let newOperand1 = operands[operands.length - 2] - operands[operands.length - 1];
    operands.pop();
    operands.pop();
    operands.push(newOperand1);
        break;
    case "*": let newOperand2 = operands.pop() * operands.pop();
    operands.push(newOperand2);
        break;
    case "/": let newOperand3 = operands[operands.length - 2] / operands[operands.length - 1];
    operands.pop();
    operands.pop();
    operands.push(newOperand3);
        break;

}

    command = arr.shift();
}

if(operands.length > 1){
    console.log( "Error: too many operands!");
    return;  
}

console.log(operands[0]);

}
solve([15, '/']);