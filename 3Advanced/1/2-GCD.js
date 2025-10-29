function solve(a, b){
let delitel = 1;
let GCD = 0;

for(delitel; delitel <= 2154; delitel++){
    if(a%delitel==0 && b%delitel==0){
        GCD=delitel;
    }
}
console.log(GCD);


}
solve(15, 5);