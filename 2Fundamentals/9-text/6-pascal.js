function pascal(str){
let arr = [];
let buffer = "";
let isFirstLetter = true;
for(let letter of str){
    if(isFirstLetter){
        buffer += letter;
        isFirstLetter = false;
        continue;
    }
    if(letter == letter.toUpperCase() ){
        arr.push(buffer);
       buffer = letter;
    }else{
        buffer += letter;
    }

}
arr.push(buffer);
console.log(arr.join(", "));


}
pascal('SplitMeIfYouCanHaHaYouCantOrYouCan');