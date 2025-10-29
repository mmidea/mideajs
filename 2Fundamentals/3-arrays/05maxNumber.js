function solve(arr){

let buff ="";


for(let i = 0; i < arr.length; i++){
    let flag = true;
    let bigestEl = arr[i];

    for( m = i+1; m  < arr.length; m++){
        curEl = arr[m];
        if(curEl >= bigestEl){
                     flag = false;
                     break;
                    }
    }
    
  if(flag){
    buff += bigestEl + " ";
  }
}
console.log(buff);


}
solve([41, 41, 34, 20]);