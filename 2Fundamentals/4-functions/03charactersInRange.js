function charactersInRange(char1, char2){

    let char1AsciiNum = char1.charCodeAt();
    //console.log(char1AsciiNum);
    let char2AsciiNum = char2.charCodeAt();
   // console.log(char2AsciiNum);
let result = "";
    if(char1AsciiNum < char2AsciiNum){
        for(i = char1AsciiNum+1; i< char2AsciiNum; i++){
  result += String.fromCharCode(i) + " ";
        }
    } else {
        for(i = char2AsciiNum+1; i< char1AsciiNum; i++){
            result += String.fromCharCode(i) + " ";
                  }
    }

    console.log(result);
    
    
     

}
charactersInRange('#',

':');
