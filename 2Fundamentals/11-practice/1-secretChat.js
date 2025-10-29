function solve(arr){
let msg = arr.shift();
let line = arr.shift();

while(line != "Reveal"){
    
    let tockens = line.split(":|:");
//console.log(tockens);
if(tockens.includes("InsertSpace")){
    let index = Number(tockens[1]);
    msg = msg.substring(0, index) + " " + msg.substring(index);
console.log(msg);
}
if(tockens.includes("Reverse")){
    if(msg.includes(tockens[1])){
        msg = msg.replace(tockens[1], "");
        let reversed = (tockens[1]).split("").reverse().join("");
        msg += reversed;
        console.log(msg);
          


    }else{console.log("error");}
    
}
if(tockens.includes("ChangeAll")){

while(msg.includes(tockens[1])){
    msg = msg.replace(tockens[1], tockens[2]);
}
console.log(msg);

}

    line = arr.shift();
}
console.log(`You have a new text message: ${msg}`);

}
solve([

    'Hiware?uiy',
    
    'ChangeAll:|:i:|:o',
    
    'Reverse:|:?uoy',
    
    'Reverse:|:jd',
    
    'InsertSpace:|:3',
    
    'InsertSpace:|:7',
    
    'Reveal'
    
    ] );
