function solve(num1, operation, num2){
let sum = 0;
    switch (operation) {
        case "+": sum = num1 + num2;
            
            break;

            case "-": sum = num1 - num2;
                break;
                case "/": sum = num1 / num2;
                    break;
                    case "*": sum = num1 * num2;
                    break;
    
        
    }
    console.log(sum.toFixed(2));
    


}
solve(5,'+', 10);