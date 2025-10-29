function solve(arr){
let code = arr.shift();

let line = arr.shift();

while(line != "Decode"){
let tockens = line.split("|");
let command = tockens[0];

switch (command) {
    case "Move":
    let countToMove = Number(tockens[1]);    
      let bufferArr = code.split("");
      //console.log(bufferArr);
      let u = bufferArr.splice(0,countToMove);
      code = bufferArr.join("") + u.join("");
     // console.log(u);
      //console.log(bufferArr);
      //console.log(code);
        break;

        case "Insert":

        let index = Number(tockens[1]);
        let stringToAdd = tockens[2];
     
     let endOfCode = code.slice(index);
     let startOfCode = code.slice(0,index);
     //console.log(endOfCode);
     //console.log(startOfCode);
     code = startOfCode + stringToAdd + endOfCode;
     //console.log(code);
        break;

        case "ChangeAll":
    let subst = tockens[1];
    let replacement = tockens[2];
while(code.includes(subst)){
   code =  code.replace(subst, replacement); 

}
        break;
}



    
   line = arr.shift(); 
}

console.log(`The decrypted message is: ${code}`);


}
solve([

    'zzHe',
    
    'ChangeAll|z|l',
    
    'Insert|2|o',
    
    'Move|3',
    
    'Decode'
    
    ])