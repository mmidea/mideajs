function solve(text){
let buffer = "";
buffer += text[0];
for(let i = 1 ; i< text.length; i++){
if(text[i] != text[i-1]){
  buffer += text[i];  
}  
    
}    
console.log(buffer);

}
solve('aaaaabbbbbcdddeeeedssaa');