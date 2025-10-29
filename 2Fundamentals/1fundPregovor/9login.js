function login(input){

let username = input[0];
let curLine = input[1];
let i = 1;
let counter = 0;

let correctPassword = "";
let passwordLength = (username).length - 1;

for( passwordLength; passwordLength >= 0; passwordLength--){
correctPassword += username[passwordLength];
}

while (curLine != correctPassword) {
    counter++;
    if (counter == 4) {
       console.log(`User ${username} blocked!`);
       return;  
    }

    console.log("Incorrect password. Try again.");
    i++;
    curLine = input[i];
    
}

if(curLine == correctPassword){
    console.log(`User ${username} logged in.`);
    
}

}
login(['Acer','login','go','let me in','recA']);
