class Hex {
    constructor(value) {
       this.value = value; 
    }

    valueOf(){
        return this.value;
    }

    toString(){
        let buff ="";
        let numberDec = this.value;
        while(numberDec != 0){
         let rem = String(numberDec % 16);
         numberDec = Math.trunc(numberDec / 16);
         debugger
        switch (rem) {
            case "10": rem = "A"; break;
            case "11": rem = "B"; break;
            case "12": rem = "C"; break;
            case "13": rem = "D"; break;
            case "14": rem = "E"; break;
            case "15": rem = "F"; break;
        }
        //10=A, 11=B, 12=C, 13=D, 14=E, 15=F

         buff = String(rem) + buff;

        }

        buff = "0x" + buff;
        return buff;
        //console.log(buff);     
    }

    plus(number){
    if(typeof(number) == "number"){
       return new Hex(this.value + number); 
    }else{
       return new Hex(this.value + number.value); 
    }

    }

    minus(number){
        if(typeof(number) == "number"){
       return new Hex(this.value - number); 
    }else{
       return new Hex(this.value - number.value); 
    }

    }

    parse(string){
    let power = string.length - 1
    let output = 0;
    let i = 0;
    while(power >= 0){
    let curDigit = string[i];
    switch (curDigit) {
            case "A": curDigit = 10; break;
            case "B": curDigit = 11; break;
            case "C": curDigit = 12; break;
            case "D": curDigit = 13; break;
            case "E": curDigit = 14; break;
            case "F": curDigit = 15; break;
            
        }

     output += Number(curDigit)*Math.pow(16,power)
     power--;
    i++;
    }

    return output;

    }


}

let FF = new Hex(255);

console.log(FF.toString());
let a = new Hex(10);

let b = new Hex(5);

console.log(a.plus(b).toString());

console.log(a.plus(b).toString()==='0xF');

console.log(FF.parse('AAA')); 