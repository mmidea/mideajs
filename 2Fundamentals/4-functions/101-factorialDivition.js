function factorialDivition(num1, num2){
    function factorialFind(number){
        let sum = 1;
        for(let i = number; i > 0; i--){
        sum *= i;
        }
        return sum;
    }
let answear = factorialFind(num1)/factorialFind(num2);
console.log(answear.toFixed(2));

}



factorialDivition(6, 2);