function triangle(n){

for( let i = 1; i <= n; i++){
    let buf = "";
    for( let m = 1; m <= i; m++){
    buf += i + " ";
    }
    console.log(buf);
    
}

}
triangle(5);