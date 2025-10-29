function solve(words, text){
let arr = words.split(", ");

for(let el of arr){
    el.length
    let wordToReplace = "*".repeat(el.length);
    text = text.replace(wordToReplace, el);
    text.replace()
}

console.log(text);


}
solve('great, learning',

'softuni is ***** place for ******** new programming languages');