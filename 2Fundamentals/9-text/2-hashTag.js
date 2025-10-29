function hashTag(text){
let arr = text.split(" ");
//console.log(arr);
for(let word of arr){
    if(word[0] == "#"){
       let isSpesial = true;
       for(let i=1; i < word.length; i++){
        let code = word[i].charCodeAt(0);
        if(  (code <65 )||(code > 90 && code < 97)||(code > 122)  ){
            isSpesial = false; break;
        }
       }

       if(isSpesial){
        console.log(word.substring(1));
        
       }
        
    }
}


}
hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');