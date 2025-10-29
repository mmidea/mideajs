function encodeAndDecodeMessages() {
   const [encodeBtnRef, decodeBtnRef] = Array.from(document.querySelectorAll("button"));
   const [inputArea, outputArea] = Array.from(document.querySelectorAll("textarea"))
encodeBtnRef.addEventListener("click", encodeFunc);
decodeBtnRef.addEventListener("click", decodeFunc);

function encodeFunc(ev){
let message = inputArea.value;
let result = "";
for(let letter of message){
   let code =  letter.charCodeAt() +1
   result += String.fromCharCode(code);
}

outputArea.value = result;
inputArea.value = "";
}

function decodeFunc(ev){
    let encodedMsg = outputArea.value;
   // debugger
    let result = "";
for(let letter of encodedMsg){
   let code =  letter.charCodeAt() -1
   result += String.fromCharCode(code);
}

outputArea.value = result;


}


}