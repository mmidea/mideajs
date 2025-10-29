function solution(){
// protein={qty} carbohydrate={qty} fat={qty} flavour={qty} 
let store ={ protein:0,
  carbohydrate:0,
  fat:0,
 flavour:0,

}

return function robot(input){
let[command, item, qty ] = input.split(" ");
let res = "";
if(command == "restock"){
   store[item] += Number(qty);
    /*switch (item) {
        case "protein": protein += Number(qty);
            
            break;
    
         case "carbohydrate": carbohydrate += Number(qty);
            
            break;

         case "fat": fat += Number(qty);
            
            break;

         case "flavour": flavour += Number(qty);
            
            break;
    }*/
   //res = "Success"
    return "Success";
 
}else if(command == "prepare"){
qty = Number(qty);
   switch (item) {
      case "apple":
        // carbohydrate >= 1*qty ? carbohydrate -= 1*qty : return res = `Error: not enough carbohydrate in stock`;
         if(carbohydrate >= 1*qty){
         carbohydrate -= 1*qty; 
         }else{
            res = `Error: not enough carbohydrate in stock`;
            return res;
         }
         if(flavour >= 2*qty){
         flavour -= 2*qty;
         }else{
            res = `Error: not enough flavour in stock`;
            return res;
         }
         res = `Success`;
            return res;

         break;
   
      case "lemonade":
         if(carbohydrate >= 10*qty){
         carbohydrate -= 10*qty; 
         }else{
            res = `Error: not enough carbohydrate in stock`;
            return res;
         }
         if(flavour >= 20*qty){
         flavour -= 20*qty;
         }else{
            res = `Error: not enough flavour in stock`;
            return res;
         }
         res = `Success`;
         return res;
         
         break;
      case "burger":
            if(carbohydrate >= 5*qty){
         carbohydrate -= 5*qty; 
         }else{
            res = `Error: not enough carbohydrate in stock`;
            return res;
         }
         if(fat >= 7*qty){
         fat -= 7*qty;
         }else{
            res = `Error: not enough fat in stock`;
            return res;
         }
         if(flavour >= 3*qty){
         flavour -= 3*qty;
         }else{
            res = `Error: not enough flavour in stock`;
            return res;
         }
         res = `Success`;
         return res;
         
         break;
          case "eggs":
              if(protein >= 5*qty){
         protein -= 5*qty; 
         }else{
            res = `Error: not enough protein in stock`;
            return res;
         }
         if(fat >= 1*qty){
         fat -= 1*qty;
         }else{
            res = `Error: not enough fat in stock`;
            return res;
         }
         if(flavour >= 1*qty){
         flavour -= 1*qty;
         }else{
            res = `Error: not enough flavour in stock`;
            return res;
         }
         res = `Success`;
         return res;
         
         break;
          case "turkey":
                 if(protein >= 10*qty){
         protein -= 10*qty; 
         }else{
            res = `Error: not enough protein in stock`;
            return res;
         }
          if(carbohydrate >= 10*qty){
         carbohydrate -= 10*qty; 
         }else{
            res = `Error: not enough carbohydrate in stock`;
            return res;
         }
         if(fat >= 10*qty){
         fat -= 10*qty;
         }else{
            res = `Error: not enough fat in stock`;
            return res;
         }
         if(flavour >= 10*qty){
         flavour -= 10*qty;
         }else{
            res = `Error: not enough flavour in stock`;
            return res;
         }
         res = `Success`;
         return res;
         
         break;
   }

}else if(command == "report"){
res = `protein=${protein} carbohydrate=${carbohydrate} fat=${fat} flavour=${flavour}`
return res;
}

}


}

let manager = solution ();

//console.log (manager ("restock flavour 50")); // Success

console.log (manager ("prepare turkey 1")); // Error: not enough carbohydrate in stock
console.log (manager ("report"));