function solve(word, sentence){
  let searchedWord = word.toLowerCase();
  let searchedSentance = sentence.toLowerCase();
    if(searchedSentance.includes(searchedWord)){
        console.log(word);
        
    }else{
        console.log(`${word} not found!`);
        
    }

}
solve('javascript',

'JavaScript is the best programming language');