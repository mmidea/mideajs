function sorting(arr){

arr.sort((a,b) => a - b);
let allElements = arr.length;

let result = [];

for(let elementsCount = 1; elementsCount <= allElements; elementsCount++){
    if(elementsCount%2 == 0 ){
        result.push(arr.shift());
    }else{
        result.push(arr.pop());
    }
    
}

console.log(result.join(" "));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);