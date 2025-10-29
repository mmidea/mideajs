function solve(arr){
    let num = 1;
    let command = arr.shift();
    let result = [];
while(command){
   switch (command) {
    case "add":
        result.push(num);
        break;
   
   case "remove":
    result.pop();
    break;
   } 
   num++;
    command = arr.shift();
}
if(result.length){
    for(let el of result){
        console.log(el);
        
    }
    
}else{
    console.log("Empty");
    
}

}
solve(['remove', 'remove', 'remove'])