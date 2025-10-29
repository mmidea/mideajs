function sum(num){

    let numAsString = String(num);
    let sumDigits = 0;
    
    for(let i = 0; i < numAsString.length; i++){
        sumDigits += Number(numAsString[i]);
    }

    console.log(sumDigits);
    
    

}
sum(245678);