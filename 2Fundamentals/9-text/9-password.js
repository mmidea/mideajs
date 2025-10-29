function password(arr){
let [part1, part2, word] = arr;
word = word.toUpperCase();
let long = part1 + part2;
let vowers = ["a", "e", "u", "i", "o"];

 let wordArr = word.split("");



for(let i = 0; i < long.length; i++){
    let letter = long[i];
    if(vowers.includes(letter)){
        let newLetter = wordArr.shift();
        wordArr.push(newLetter);
        let longArr = long.split("");
        longArr[i]=newLetter;
        long = longArr.join("");     
        
    } 
    
}

let longArr = long.split("").reverse();
long = longArr.join("");
console.log(`Your generated password is ${long}`);

}
password([

    'easymoneyeazylife',
    
    'atleasttencharacters',
    
    'absolute'
    
    ]);

    //srTtcUrLhcnOttsSBltAEfTlyzULyOnSmysBA
    //                                 SsBA