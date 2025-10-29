function combinations(n){
//let n = Number(input[0]);
let x = 0;
let y = 0;
let z = 0;
let count = 0;

for (x = 0; x <= n; x++) {

    for (y = 0; y<= n; y++){
        for (z = 0; z<=n; z++) {
            if((x + y + z) === n){
                
                count++;

    
            }
            
        }
    }
    
}

console.log(count);
}
combinations(["25"]);