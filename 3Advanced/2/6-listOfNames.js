function solve(arr){
    let n = 1;
arr.sort((a, b) =>  a.localeCompare(b))
    .forEach(el => {
        console.log(`${n}.${el}`);
        n++
    
});

//console.log(arr);


}
solve(["John",

"Bob",

"Christina",

"Ema"])