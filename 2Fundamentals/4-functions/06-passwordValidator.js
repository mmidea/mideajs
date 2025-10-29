function passwordValidator(pass){
let isValid = true;

 function charachterCountCheck(curPass){
 if((curPass.length >= 6)&&(curPass.length <= 10)){return true;}
 } 

 function onlyLettersDigitsCheck(curPass){
    
    for(char of curPass){
        if(char.charCodeAt(0)<48){return false;}
        else if( (char.charCodeAt(0)>57) && (char.charCodeAt(0)<65) ){return false;} 
        else if( (char.charCodeAt(0)>90) && (char.charCodeAt(0)<97) ){return false;} 
        else if(char.charCodeAt(0)>122){return false;} 
        
    }  
    return true;


    // 48-57        36
    //65-90
    //97-122

 } 

 function twoDigitsCheck(curPass){
     let counterDigits = 0;

    for(char of curPass){
        if((char.charCodeAt(0)>47)&&(char.charCodeAt(0)<58)){
            counterDigits++;
        }
        if(counterDigits == 2){
            return true;
        }
       
    }
    if(counterDigits < 2){
        return false;
    }


 }

 if(!charachterCountCheck(pass)){
    console.log("Password must be between 6 and 10 characters");
    isValid = false;
 }
 if (!onlyLettersDigitsCheck(pass)) {
    console.log("Password must consist only of letters and digits");  
    isValid = false;
 }
 if (!twoDigitsCheck(pass)) {
    console.log("Password must have at least 2 digits"); 
    isValid = false; 
 }

if(isValid){
    console.log("Password is valid");
    
}


}
passwordValidator(`Pa$s$s`);

//· "Password must be between 6 and 10 characters"

//· "Password must consist only of letters and digits"

//· "Password must have at least 2 digits" 