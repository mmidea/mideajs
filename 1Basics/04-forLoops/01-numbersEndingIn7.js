function ending7(){
let lastNumber = 0;
for (let num = 1; num < 1000; num++) {
   
    lastNumber = num % 10;
    if (lastNumber === 7){ console.log(num);
    }
    
}

}
ending7();