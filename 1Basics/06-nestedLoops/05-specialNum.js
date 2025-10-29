function specialNum(number){

//let number = Number(input[0]);
let result = "";

for (let upBorder = 1111; upBorder <= 9999; upBorder++) {
    let specialNumString = upBorder + "";
    let isMagicNumber = true;
    for( let i = 0; i < 4; i++){
        let delitel = Number(specialNumString[i]);
    if( number % delitel !== 0){
        isMagicNumber = false;
        break;
    }
    }
    if(isMagicNumber){
        result += specialNumString + " "; 
    }
    
}

console.log(result);

}
specialNum(3);