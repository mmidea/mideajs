function solve() {
  let textRef = document.getElementById("text").value;
  let caseTypeRef = document.getElementById("naming-convention").value;
  let result = ""; 
  switch (caseTypeRef) {
    case "Camel Case":
       let textArr1 = textRef.split(" ");
      let  first = true;
         for(let word of textArr1){
          if(first){
            result += (word[0]).toLowerCase()
            first = false;
          }else{
            result += (word[0]).toUpperCase()

          }
          result +=  (word.slice(1)).toLowerCase()
           
      }
         
      break;

      case "Pascal Case":
         let textArr = textRef.split(" ");
         for(let word of textArr){
          result += (word[0]).toUpperCase() + (word.slice(1)).toLowerCase()
           
      }
      
      break;
  
    default: result = "Error!"
      break;
  }
  document.getElementById("result").textContent = result;
}

