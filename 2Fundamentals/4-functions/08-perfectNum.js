function perfectNum(num){
let array = [];
let sumDeliteli = 0;

for(let delitel = 1; delitel < num; delitel++){
    if(num%delitel == 0){
        array.push(delitel);
        sumDeliteli += delitel;
    }
}

if(num == sumDeliteli){
    console.log("We have a perfect number!");
    
}else{
    console.log("It's not so perfect.");
    
}
}
perfectNum(1236498);