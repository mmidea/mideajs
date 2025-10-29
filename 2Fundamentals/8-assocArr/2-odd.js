function solve(line){
let words = line.split(" ");
let objWords ={};

for( let word of words){
    word = word.toLowerCase();
if(!objWords.hasOwnProperty(word)){
    objWords[word] = 1;
}else{
    objWords[word] += 1;
}
}
//console.log(objWords);
let output =""
let kvps = Object.entries(objWords);
kvps.forEach(arr => {if(arr[1]%2!=0)output += arr[0] +" "});
console.log(output);

}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');