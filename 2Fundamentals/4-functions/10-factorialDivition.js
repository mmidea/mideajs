function factorialsDivision(num1, num2){

   let ouput = factorialFind(num1)/factorialFind(num2);
   return console.log(ouput.toFixed(2));
   

}

function factorialFind(number){
    let sum = factorialFind(number - 1)*number;
    return sum;
 }



factorialsDivision(5, 2)