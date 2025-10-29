function password(input){
let user = input[0];
let password = input[1];
let i = 2;
let proverkaPass = input[i];

while (proverkaPass !== password) {
    proverkaPass = input[i];
    i++
}
console.log(`Welcome ${user}!`);


}
password(["Nakov",

    "1234",
    
    "Pass",
    
    "1324",
    
    "1234"]);
