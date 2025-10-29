function add(num){

    let sum = num;
    function newFunc(value){
    sum += value;
    return newFunc;

    }
   return newFunc;
    
}


add(5)
add(4)
add(1)

console.log(add(3).toString());

