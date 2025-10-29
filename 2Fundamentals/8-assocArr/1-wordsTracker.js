function solve(arr){
let searchedWords = arr.shift().split(" ");
//console.log(searchedWords);
//console.log(arr);
let obj ={};

for( word of searchedWords){
let counter = 0;

for(someWord of arr){
    if(word == someWord){
        counter++;
    }
}
obj[word] = counter;
}
//console.log(obj);

let kvps = Object.entries(obj).sort((a, b) => b[1] - a[1]);

for( let kvp of kvps){
    console.log(`${kvp[0]} - ${kvp[1]}`);
    
}


}
solve([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ]);