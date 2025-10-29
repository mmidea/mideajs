function solve(arr){
let text = arr[0];
let objectArr = [];
//let pattern = /(?<tag>[@#])[A-Za-z]{3}[A-Za-z]*\k<tag>\k<tag>[A-Za-z]{3}[A-Za-z]\k<tag>/gm;
let pattern = /(?<tag>[@#])(?<first>[A-Za-z]{3}[A-Za-z]*)\k<tag>\k<tag>(?<second>[A-Za-z]{3}[A-Za-z]*)\k<tag>/gm
let matches = text.match(pattern);
if(!matches){
    console.log("No word pairs found!");
    console.log("No mirror words!");
    return;
}

console.log(`${matches.length} word pairs found!`);

let match = pattern.exec(text);

while(match){
let {tag, first, second} = match.groups;
//console.log(tag, first, second);

let buffer = first.split("").reverse().join("");
if(buffer == second){
    let curObj = [];
    curObj.push(first);
    curObj.push(second);
    objectArr.push(curObj);
    
}


    match = pattern.exec(text);
}


if(objectArr.length == 0){
    console.log("No mirror words!");
    return;
}


let output = [];

for(let curArr of objectArr){
    let str = `${curArr[0]} <=> ${curArr[1]}`
output.push(str);

}
//console.log(output);
console.log("The mirror words are:");


console.log(output.join(", "));


}
solve([

    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    
    ]);